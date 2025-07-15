import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Download, FileText, Flame } from 'lucide-react'; // Import necessary icons

const Hero = () => {
  return (
    <section id="hero" className="relative bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-blue-400">MemeX</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          The next generation meme token on the Solana blockchain. Fast, cheap, and community-driven.
        </p>

        {/* Buttons from the image */}
        <div className="flex justify-center space-x-4 mb-8 flex-wrap"> {/* Added flex-wrap for smaller screens */}
          <a
            href="#bridge" // Replace with actual bridge link
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center mb-2 md:mb-0" // Added margin for wrapping
          >
            Bridge <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#download-wallet" // Replace with actual download link
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center mb-2 md:mb-0" // Added margin for wrapping
          >
            Download Wallet <Download className="ml-2 w-5 h-5" />
          </a>
          {/* Changed text and added new button here */}
          <a
            href="#nft-collection" // Keep existing NFT link or replace
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center mb-2 md:mb-0" // Added margin for wrapping
          >
            MemeX NFT Series {/* Changed text */}
          </a>
           {/* New MemexSol Buy Button */}
            <a
              href="https://swap.pump.fun/?input=So11111111111111111111111111111111111111112&output=AsjP9VyKUSuLSeycoTb9AqGs3PH6BWAvqDoKmxrWpump"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center mb-2 md:mb-0" // Added margin for wrapping
            >
              MemexSol Buy <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          <a
            href="#contract" // Replace with actual contract link
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center mb-2 md:mb-0" // Added margin for wrapping
          >
            Contract <FileText className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#burn" // Replace with actual burn link
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center mb-2 md:mb-0" // Added margin for wrapping
          >
            BURN <Flame className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Existing NFT Section (kept separate as it seems distinct) */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">MemeX NFT Series</h2> {/* This was already updated */}
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Discover unique MemeX NFTs and become part of our exclusive community.
          </p>
          <div className="flex justify-center space-x-4">
             {/* Existing NFT Button */}
            <a
              href="#nft-collection" // Replace with actual NFT collection link if available
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center"
            >
              View Collection
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
