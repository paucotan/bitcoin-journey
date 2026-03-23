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