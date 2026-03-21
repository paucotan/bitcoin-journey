import React, { useState } from 'react';

const BookCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const books = [
    {
      title: "The Bitcoin Standard",
      author: "Saifedean Ammous",
      image: "https://media.s-bol.com/7zrAyPpjNXor/k3gP6r/550x814.jpg",
      amazonUrl: "https://www.amazon.com/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861",
      description: "The decentralized alternative to central banking and essential guide to Bitcoin's history, properties, and future."
    },
    {
      title: "Bitcoin Miner's Almanac",
      author: "Robert Warren",
      image: "https://store.bitcoinmagazine.com/cdn/shop/files/2.8.24BCMA_V2_Revision.jpg?v=1707413613",
      amazonUrl: "https://www.amazon.com/Bitcoin-Miners-Almanac-Business-Everything/dp/B0D6QZ2QK2",
      description: "Where code meets business - the ultimate introduction to Bitcoin mining industry."
    },
    {
      title: "Scale",
      author: "Geoffrey West",
      image: "https://media.s-bol.com/gP1B6Y7zrQjY/KMqzAr/782x1200.jpg",
      amazonUrl: "https://www.amazon.com/Scale-Universal-Innovation-Sustainability-Organisms/dp/1594205582",
      description: "The universal laws of growth, innovation, and sustainability in organisms, cities, and companies."
    },
    {
      title: "The Big Print",
      author: "Lawrence Lepard",
      image: "https://m.media-amazon.com/images/I/71JzqmxemkL.jpg",
      amazonUrl: "https://www.amazon.com/Big-Print-Happened-America-Sound/dp/B0DVTCVX8J",
      description: "What happened to America and how sound money will fix it - a call to action for monetary reform."
    },
    {
      title: "Economic Policy",
      author: "Ludwig von Mises",
      image: "https://oll-resources.s3.us-east-2.amazonaws.com/oll3/store/titles/2395/MisesEconomicPolicy_9780865977365_800h_72.jpg",
      amazonUrl: "https://www.amazon.com/Economic-Policy-Thoughts-Tomorrow-Ludwig/dp/0865977364",
      description: "Thoughts for today and tomorrow - foundational lectures on capitalism, socialism, and interventionism."
    },
    {
      title: "Broken Money",
      author: "Lyn Alden",
      image: "https://m.media-amazon.com/images/I/710ji5I+EiL.jpg",
      amazonUrl: "https://www.amazon.com/Broken-Money-Financial-System-Failing/dp/B0CG83QBJ6",
      description: "Why our financial system is failing us and how we can make it better through technology."
    },
    {
      title: "Check Your Financial Privilege",
      author: "Alex Gladstein",
      image: "https://store.bitcoinmagazine.com/cdn/shop/files/IMG_0554Edited.jpg?v=1697732129",
      amazonUrl: "https://www.amazon.com/Check-Your-Financial-Privilege-Gladstein/dp/B09V2NM9VJ",
      description: "Bitcoin, human rights, and the reality of financial privilege across the globe."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  const getVisibleBooks = () => {
    const visibleBooks = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % books.length;
      visibleBooks.push(books[index]);
    }
    return visibleBooks;
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Further Reading
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Deepen your understanding with these essential books on Bitcoin, monetary history, and financial freedom.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
            aria-label="Previous books"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
            aria-label="Next books"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Books Grid */}
          <div className="mx-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getVisibleBooks().map((book, index) => (
                <div
                  key={`${book.title}-${currentIndex}-${index}`}
                  className="group relative bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105"
                >
                  {/* Book Cover */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={book.image}
                      alt={`${book.title} by ${book.author}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Book Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-orange-400 font-medium mb-3">
                      by {book.author}
                    </p>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {book.description}
                    </p>

                    {/* Amazon CTA */}
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                      <span>📚</span>
                      Get on Amazon
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {books.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-orange-500'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            These books provide deep insights into Bitcoin's significance, monetary history, and the future of money. 
            Each offers a unique perspective on why Bitcoin matters for individual freedom and global financial systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCarousel;