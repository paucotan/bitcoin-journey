// Economic Data Service
// Integrates with FRED API (Federal Reserve) and BLS API (Bureau of Labor Statistics)
// to provide real-time M2 Money Supply and CPI data

class EconomicDataService {
  constructor() {
    // API endpoints and keys (will be moved to environment variables)
    this.FRED_API_KEY = process.env.REACT_APP_FRED_API_KEY || 'demo_key';
    this.BLS_API_KEY = process.env.REACT_APP_BLS_API_KEY || 'demo_key';
    
    this.FRED_BASE_URL = 'https://api.stlouisfed.org/fred';
    this.BLS_BASE_URL = 'https://api.bls.gov/publicAPI/v2/timeseries/data';
    
    // Series IDs for important economic indicators
    this.SERIES_IDS = {
      M2_MONEY_SUPPLY: 'M2SL',           // M2 Money Stock
      M2_REAL: 'M2REAL',                 // Real M2 Money Stock
      CPI_ALL_URBAN: 'CPIAUCSL',         // Consumer Price Index for All Urban Consumers
      CPI_CORE: 'CPILFESL',              // Core CPI (excludes food and energy)
      FEDERAL_FUNDS_RATE: 'FEDFUNDS',    // Federal Funds Rate
      GDP_DEFLATOR: 'GDPDEF'             // GDP Deflator
    };
    
    // Cache for API responses (reduces API calls)
    this.cache = new Map();
    this.cacheTimeout = 1000 * 60 * 60; // 1 hour
  }

  // FRED API Methods
  async fetchFREDData(seriesId, startDate = '1959-01-01', endDate = null) {
    const cacheKey = `fred_${seriesId}_${startDate}_${endDate}`;
    
    // Check cache first
    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.cacheTimeout) {
        return cached.data;
      }
    }

    try {
      const params = new URLSearchParams({
        series_id: seriesId,
        api_key: this.FRED_API_KEY,
        file_type: 'json',
        observation_start: startDate,
        observation_end: endDate || new Date().toISOString().split('T')[0]
      });

      const response = await fetch(`${this.FRED_BASE_URL}/series/observations?${params}`);
      
      if (!response.ok) {
        throw new Error(`FRED API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.error_code) {
        throw new Error(`FRED API error: ${data.error_message}`);
      }

      // Cache the result
      this.cache.set(cacheKey, {
        data: data.observations,
        timestamp: Date.now()
      });

      return data.observations;
    } catch (error) {
      console.error('Error fetching FRED data:', error);
      // Return fallback data if API fails
      return this.getFallbackM2Data();
    }
  }

  // BLS API Methods
  async fetchBLSData(seriesIds, startYear = '1913', endYear = null) {
    const cacheKey = `bls_${seriesIds.join('_')}_${startYear}_${endYear}`;
    
    // Check cache first
    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.cacheTimeout) {
        return cached.data;
      }
    }

    try {
      const requestBody = {
        seriesid: Array.isArray(seriesIds) ? seriesIds : [seriesIds],
        startyear: startYear,
        endyear: endYear || new Date().getFullYear().toString(),
        calculations: true,
        annualaverage: true
      };

      const response = await fetch(this.BLS_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': this.BLS_API_KEY
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`BLS API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.status !== 'REQUEST_SUCCEEDED') {
        throw new Error(`BLS API error: ${data.message}`);
      }

      // Cache the result
      this.cache.set(cacheKey, {
        data: data.Results.series,
        timestamp: Date.now()
      });

      return data.Results.series;
    } catch (error) {
      console.error('Error fetching BLS data:', error);
      // Return fallback data if API fails
      return this.getFallbackCPIData();
    }
  }

  // Main Methods for Chart Data
  async getM2MoneySupplyData() {
    try {
      const data = await this.fetchFREDData(this.SERIES_IDS.M2_MONEY_SUPPLY);
      
      return data
        .filter(obs => obs.value !== '.')
        .map(obs => ({
          date: obs.date,
          year: new Date(obs.date).getFullYear(),
          value: parseFloat(obs.value) / 1000, // Convert billions to trillions
          event: this.getHistoricalEvent(new Date(obs.date).getFullYear())
        }))
        .filter((obs, index, arr) => {
          // Keep only yearly data (January of each year) or last observation
          const date = new Date(obs.date);
          return date.getMonth() === 0 || index === arr.length - 1;
        });
    } catch (error) {
      console.error('Error processing M2 data:', error);
      return this.getFallbackM2Data();
    }
  }

  async getCPIData() {
    try {
      const data = await this.fetchBLSData([this.SERIES_IDS.CPI_ALL_URBAN], '1913');
      
      if (!data || !data[0] || !data[0].data) {
        throw new Error('Invalid BLS response format');
      }

      const cpiData = data[0].data
        .filter(obs => obs.period === 'M13') // Annual average
        .map(obs => ({
          year: parseInt(obs.year),
          cpi: parseFloat(obs.value),
          dollarValue: this.calculateDollarValue(parseFloat(obs.value), 310.3) // 2024 baseline
        }))
        .sort((a, b) => a.year - b.year);

      return cpiData;
    } catch (error) {
      console.error('Error processing CPI data:', error);
      return this.getFallbackCPIData();
    }
  }

  // Combined data for chart
  async getChartData() {
    try {
      const [m2Data, cpiData] = await Promise.all([
        this.getM2MoneySupplyData(),
        this.getCPIData()
      ]);

      // Combine the datasets by year
      const combinedData = [];
      const m2Map = new Map(m2Data.map(d => [d.year, d]));
      const cpiMap = new Map(cpiData.map(d => [d.year, d]));

      // Get all years from both datasets
      const allYears = new Set([
        ...m2Data.map(d => d.year),
        ...cpiData.map(d => d.year)
      ]);

      for (const year of Array.from(allYears).sort()) {
        const m2Entry = m2Map.get(year);
        const cpiEntry = cpiMap.get(year);

        if (m2Entry && cpiEntry) {
          combinedData.push({
            year,
            amount: m2Entry.value,
            dollarValue: cpiEntry.dollarValue,
            cpi: cpiEntry.cpi,
            event: m2Entry.event,
            period: this.getPeriod(year)
          });
        }
      }

      return combinedData;
    } catch (error) {
      console.error('Error combining chart data:', error);
      return this.getFallbackChartData();
    }
  }

  // Utility Methods
  calculateDollarValue(currentCPI, baseCPI) {
    // Calculate purchasing power relative to base year (2024)
    return (baseCPI / currentCPI) * 100;
  }

  calculateInflationAdjustedValue(amount, fromYear, toYear = 2024) {
    // This will use real CPI data once APIs are connected
    const cpiData = this.getFallbackCPIData();
    const fromCPI = cpiData.find(d => d.year === fromYear)?.cpi || 100;
    const toCPI = cpiData.find(d => d.year === toYear)?.cpi || 310.3;
    
    return (amount * toCPI) / fromCPI;
  }

  getPeriod(year) {
    if (year < 1971) return 'sound';
    if (year < 2008) return 'early-fiat';
    if (year < 2020) return 'qe-era';
    return 'brrr';
  }

  getHistoricalEvent(year) {
    const events = {
      1913: 'Federal Reserve Created',
      1929: 'Stock Market Crash',
      1933: 'Gold Confiscation',
      1944: 'Bretton Woods Agreement',
      1971: 'Nixon Shock - Gold Standard Ended',
      1974: 'Petrodollar System',
      1980: 'Volcker Shock',
      1987: 'Black Monday',
      2000: 'Dot-com Bubble',
      2008: 'Financial Crisis',
      2010: 'QE1 & QE2',
      2015: 'QE3 Ends',
      2020: 'COVID Money Printing',
      2021: 'Peak Money Printing',
      2024: 'Current Day'
    };
    
    return events[year] || `Year ${year}`;
  }

  // Fallback Data (used when APIs are unavailable)
  getFallbackM2Data() {
    return [
      { year: 1959, value: 0.3, event: "Pre-Nixon Era", period: "sound" },
      { year: 1971, value: 0.7, event: "Nixon Shock - Gold Standard Ended", period: "sound" },
      { year: 1980, value: 1.6, event: "Volcker Era", period: "early-fiat" },
      { year: 1990, value: 3.3, event: "S&L Crisis", period: "early-fiat" },
      { year: 2000, value: 4.9, event: "Dot-com Bubble", period: "early-fiat" },
      { year: 2008, value: 7.3, event: "Financial Crisis Begins", period: "qe-era" },
      { year: 2010, value: 8.7, event: "QE1 & QE2", period: "qe-era" },
      { year: 2015, value: 12.0, event: "QE3 Ends", period: "qe-era" },
      { year: 2020, value: 15.3, event: "COVID Begins", period: "brrr" },
      { year: 2021, value: 20.3, event: "Peak Money Printing", period: "brrr" },
      { year: 2024, value: 21.0, event: "Current Day", period: "brrr" }
    ];
  }

  getFallbackCPIData() {
    return [
      { year: 1913, cpi: 9.9, dollarValue: 100 },
      { year: 1920, cpi: 20.0, dollarValue: 49.5 },
      { year: 1930, cpi: 16.7, dollarValue: 59.3 },
      { year: 1940, cpi: 14.0, dollarValue: 70.7 },
      { year: 1950, cpi: 24.1, dollarValue: 41.1 },
      { year: 1960, cpi: 29.6, dollarValue: 33.4 },
      { year: 1971, cpi: 40.5, dollarValue: 24.4 },
      { year: 1980, cpi: 82.4, dollarValue: 12.0 },
      { year: 1990, cpi: 130.7, dollarValue: 7.6 },
      { year: 2000, cpi: 172.2, dollarValue: 5.7 },
      { year: 2008, cpi: 215.3, dollarValue: 4.6 },
      { year: 2010, cpi: 218.1, dollarValue: 4.5 },
      { year: 2020, cpi: 258.8, dollarValue: 3.8 },
      { year: 2024, cpi: 310.3, dollarValue: 3.2 }
    ];
  }

  getFallbackChartData() {
    const m2Data = this.getFallbackM2Data();
    const cpiData = this.getFallbackCPIData();
    
    return m2Data.map(m2 => {
      const cpi = cpiData.find(c => c.year === m2.year);
      return {
        ...m2,
        amount: m2.value,
        dollarValue: cpi?.dollarValue || 100,
        cpi: cpi?.cpi || 100
      };
    });
  }

  // Health check methods
  async checkAPIHealth() {
    const results = {
      fred: false,
      bls: false,
      timestamp: new Date().toISOString()
    };

    try {
      // Test FRED API
      const fredTest = await this.fetchFREDData(this.SERIES_IDS.M2_MONEY_SUPPLY, '2024-01-01', '2024-01-31');
      results.fred = fredTest && fredTest.length > 0;
    } catch (error) {
      console.warn('FRED API health check failed:', error);
    }

    try {
      // Test BLS API
      const blsTest = await this.fetchBLSData([this.SERIES_IDS.CPI_ALL_URBAN], '2024', '2024');
      results.bls = blsTest && blsTest.length > 0;
    } catch (error) {
      console.warn('BLS API health check failed:', error);
    }

    return results;
  }
}

// Export singleton instance
export default new EconomicDataService();