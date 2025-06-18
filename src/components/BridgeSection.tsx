import React from 'react';
import { ArrowRight } from 'lucide-react';

const BridgeSection = () => {
  return (
    <section className="relative z-10 py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Unlock Cross-Chain Potential with MemeX Bridging
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Seamlessly bridge your MemeX tokens to SHIBARIUM and OMAX networks. Experience the benefits of
              low gas fees, lightning-fast transactions, and access to a wide range of decentralized
              exchanges (DEXs).
            </p>
            <ul className="list-disc pl-5 text-gray-400 text-lg mb-8">
              <li>
                <span className="text-blue-500 font-bold">Low Gas Fees:</span> Enjoy significantly reduced
                transaction costs on SHIBARIUM and OMAX.
              </li>
              <li>
                <span className="text-blue-500 font-bold">Fast Transactions:</span> Experience near-instant
                transfer speeds across different blockchain networks.
              </li>
              <li>
                <span className="text-blue-500 font-bold">DEX Access:</span> Trade MemeX on popular
                decentralized exchanges within the SHIBARIUM and OMAX ecosystems.
              </li>
            </ul>
            <a
              href="https://bridge.memextoken.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-black font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Bridge to SHIBARIUM & OMAX <ArrowRight className="ml-2" />
            </a>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://apricot-rational-booby-281.mypinata.cloud/ipfs/bafkreiefc5b7xm4cua4w6vus4bcgre74dijhxezxov34de67dvxvqifxua"
              alt="MemeX Bridging"
              className="rounded-2xl shadow-lg"
              style={{ width: '400px', height: 'auto', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgeSection;
