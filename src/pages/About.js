import React from 'react';
import Footer from '../components/Layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black pt-16">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About This <span className="text-orange-400">Project</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with passion for Bitcoin education and concern for our monetary future
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-8"></div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Why I Built This
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I created this educational journey because I believe <span className="text-orange-400 font-semibold">Bitcoin represents hope</span> for our generation's financial future.
            </p>
            
            <p>
              My passion for Bitcoin stems from understanding how the current fiat monetary system is putting the world's economy in jeopardy. When I learned about the systematic wealth transfer happening through inflation and monetary expansion, I felt compelled to help others understand what's really happening to their purchasing power.
            </p>
            
            <p>
              This isn't just about investment advice—it's about <span className="text-orange-400 font-semibold">education, awareness, and providing people with the knowledge</span> to make informed decisions about their financial future.
            </p>
            
            <p>
              Bitcoin offers a peaceful alternative to the broken system. Through mathematics and cryptography, not violence or politics, we can choose sound money and reclaim control over our wealth.
            </p>
          </div>

          <div className="mt-8 p-6 bg-orange-500/10 border border-orange-500/20 rounded-lg">
            <p className="text-orange-300 italic text-center text-lg">
              "This is your generation's fighting chance. Choose wisely."
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-black/50 border border-orange-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Get in Touch
          </h2>
          
          <p className="text-gray-300 text-center mb-8 text-lg">
            Questions? Feedback? I'd love to hear from you.
          </p>

          <div className="flex items-center justify-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              {/* Email */}
              <a
                href="mailto:droves.poetic.7k@icloud.com"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-orange-600 border border-gray-600 hover:border-orange-500 rounded-lg transition-all duration-300"
                aria-label="Send Email"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              {/* X/Twitter */}
              <a
                href="https://x.com/enjoypolosfu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-blue-600 border border-gray-600 hover:border-blue-500 rounded-lg transition-all duration-300 group"
                aria-label="Follow on X/Twitter"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/paucotan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-600 border border-gray-600 hover:border-white rounded-lg transition-all duration-300 group"
                aria-label="View GitHub Profile"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Open source project built for education and awareness
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;