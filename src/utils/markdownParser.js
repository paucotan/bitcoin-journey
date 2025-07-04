import matter from 'gray-matter';

// Cache for parsed markdown files
const markdownCache = new Map();

/**
 * Parse markdown file with frontmatter
 * @param {string} markdownText - Raw markdown content
 * @returns {Object} Parsed content with metadata and markdown
 */
export const parseMarkdown = (markdownText) => {
  try {
    const { data, content } = matter(markdownText);
    return {
      frontmatter: data,
      content: content.trim()
    };
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return {
      frontmatter: {},
      content: ''
    };
  }
};

/**
 * Load and parse markdown file
 * @param {string} fileName - Name of the markdown file (without extension)
 * @returns {Promise<Object>} Parsed markdown content
 */
export const loadMarkdownGuide = async (fileName) => {
  // Check cache first
  if (markdownCache.has(fileName)) {
    return markdownCache.get(fileName);
  }

  try {
    // Import markdown file
    const markdownModule = await import(`../../assets/guides/${fileName}.md?raw`);
    const markdownText = markdownModule.default;
    
    // Parse markdown
    const parsed = parseMarkdown(markdownText);
    
    // Cache the result
    markdownCache.set(fileName, parsed);
    
    return parsed;
  } catch (error) {
    console.error(`Error loading markdown guide ${fileName}:`, error);
    return {
      frontmatter: {
        title: 'Guide Not Found',
        description: 'This guide could not be loaded.',
        readTime: '0 min',
        difficulty: 'Unknown'
      },
      content: '# Guide Not Available\n\nThis guide could not be loaded. Please check back later.'
    };
  }
};

/**
 * Extract sections from markdown content
 * @param {string} content - Markdown content
 * @returns {Array} Array of sections with titles and content
 */
export const extractSections = (content) => {
  const sections = [];
  const lines = content.split('\n');
  let currentSection = null;
  
  for (const line of lines) {
    // Check for headers (## or ###)
    const headerMatch = line.match(/^(#{2,3})\s+(.+)$/);
    
    if (headerMatch) {
      // Save previous section
      if (currentSection) {
        sections.push(currentSection);
      }
      
      // Start new section
      currentSection = {
        level: headerMatch[1].length,
        title: headerMatch[2],
        content: []
      };
    } else if (currentSection) {
      // Add line to current section
      currentSection.content.push(line);
    }
  }
  
  // Add final section
  if (currentSection) {
    sections.push(currentSection);
  }
  
  // Join content lines for each section
  return sections.map(section => ({
    ...section,
    content: section.content.join('\n').trim()
  }));
};

/**
 * Clear markdown cache (useful for development)
 */
export const clearMarkdownCache = () => {
  markdownCache.clear();
};