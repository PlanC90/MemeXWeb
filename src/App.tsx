import { useState, useEffect } from 'react';
import {
  Twitter,
  MessageCircle,
  Download,
  ArrowRight,
  ArrowUp,
  Menu,
  Home,
  BarChart2,
  Users,
  Info,
  Zap,
  FileText,
  Flame,
  PlusCircle,
  ImageIcon,
} from 'lucide-react';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Community from './components/Community';
import Roadmap from './components/Roadmap';
import ExchangePartners from './components/ExchangePartners';
import LowFeesSection from './components/LowFeesSection';
// Removed OmemexStats import

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleDownloadClick = () => {
    const deviceType = navigator.userAgent.toLowerCase();
    let targetUrl =
      'https://play.google.com/store/apps/details?id=com.electraprotocol.omnixep.wallet';

    if (deviceType.includes('android')) {
      targetUrl =
        'https://play.google.com/store/apps/details?id=com.electraprotocol.omnixep.wallet';
    } else if (
      deviceType.includes('ios') ||
      deviceType.includes('iphone') ||
      deviceType.includes('ipad')
    ) {
      targetUrl = 'https://apps.apple.com/us/app/omnixep-wallet/id6739203200';
    } else if (deviceType.includes('windows')) {
      targetUrl =
        'https://github.com/ElectraProtocol/Electra-Protocol-data/releases/download/omnixep-launcher-1.0.0/OmniXEP-Pro-Windows-installer.exe';
    } else if (deviceType.includes('mac')) {
      targetUrl =
        'https://github.com/ElectraProtocol/Electra-Protocol-data/releases/download/omnixep-launcher-1.0.0/OmniXEP-Pro-macOS-installer.dmg';
    }

    window.location.href = targetUrl;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <header className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://apricot-rational-booby-281.mypinata.cloud/ipfs/bafkreiefc5b7xm4cua4w6vus4bcgre74dijhxezxov34de67dvxvqifxua"
              alt="MemeX Logo"
              className="w-14 h-14 object-cover rounded-full border-2 border-blue-500 shadow-lg shadow-blue-500/30"
              style={{ clipPath: 'circle(35%)' }}
            />
            <span className="font-bold text-2xl tracking-tight">MEMEX</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="hover:text-blue-400 transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-blue-400 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a
                  href="https://nft.memextoken.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  NFT
                </a>
              </li>
              {/* Added Mint Token Link */}
              <li>
                <a
                  href="https://mint.memextoken.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Mint Token
                </a>
              </li>
              <li>
                <a
                  href="https://coupon.memextoken.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Coupon Site
                </a>
              </li>
               {/* Added Poll Area Link */}
               <li>
                <a
                  href="https://pollarea.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Poll Area
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <div className="animate-pulse inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
            🔥 DEX Live Now! 🔥
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Super Fast, Super Cheap, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Super Fun! 🚀
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-4">
            A next-generation meme token with real-world utility: Experience ultra-fast transfers,
            near-zero fees, and a community-driven token powered by AI and NFTs.
          </p>
          <p className="text-xl text-blue-400 max-w-3xl mx-auto mb-10 font-bold">
            MemeX: A 100% Decentralized Community Project on the Electraprotocol Network!
          </p>

          {/* Holder Count */}
          <div className="text-6xl font-extrabold text-blue-400 mb-8">2,000,000+ Holders🔥</div>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            {/* Removed OMEMEX DEX Button */}
            <a
              href="https://bridge.memextoken.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-500/30 flex items-center justify-center"
            >
              Bridge <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <button
              onClick={handleDownloadClick}
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center"
            >
              <Download className="mr-2 w-5 h-5" /> Download Wallet
            </button>
            <a
              href="https://www.launchmynft.io/collections/6keJc3b3easAvEqVHWxsq54nHKEDAhhzFbh8kVP7cgqb/gUWJeLSnBzNA40hIEBcF"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center"
            >
              SOL NFT
            </a>
            <a
              href="https://electraprotocol.network/omni/property/199/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center"
            >
              Contract <FileText className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://electraprotocol.network/omni/address/xBURNomniXEPXXXXXXXXXXXXXXXXbWWsD9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center"
            >
              BURN <Flame className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Token Image */}
          <div className="relative mb-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
            <div
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/30 ml-4 relative z-10"
              style={{ clipPath: 'circle(35%)' }}
            >
              <img
                src="https://apricot-rational-booby-281.mypinata.cloud/ipfs/bafkreiefc5b7xm4cua4w6vus4bcgre74dijhxezxov34de67dvxvqifxua"
                alt="MemeX Logo"
                className="w-full h-full object-cover rounded-full"
                style={{ clipPath: 'circle(35%)' }}
              />
            </div>
            <img
              src="https://www.electraprotocol.com/wp-content/uploads/2021/12/electra-protocol-symbol-blue-color-normal.png"
              alt="MemeX Token"
              className="relative z-10 w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/50"
              style={{ clipPath: 'circle(35%)' }}
            />
          </div>
        </section>

        {/* DEX Section */}
        <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Explore Our DEX Partners</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Trade MemeX on these decentralized exchanges for the best rates and liquidity.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="https://swap.omax.app/swap"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                OMAX SWAP
              </a>
              <a
                href="https://app.uniswap.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                UNISWAP
              </a>
              <a
                href="https://hyperswap.pro/tr/swap?inputCurrency=ETH&outputCurrency=0x9437F9DCab77688221878b1a111Def408f43eC5a&chainId=463"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                HYPERSWAP
              </a>
              <a
                href="https://swap.pump.fun/?input=So11111111111111111111111111111111111111112&output=AsjP9VyKUSuLSeycoTb9AqGs3PH6BWAvqDoKmxrWpump"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                PUMPSWAP
              </a>
            </div>
          </div>
        </section>

        {/* Removed OMEMEX Stats Section */}

        {/* Features Section */}
        <Features />

        {/* New Low Fees Section */}
        <LowFeesSection />

        {/* Tokenomics Section */}
        <Tokenomics />

        {/* Roadmap Section */}
        <Roadmap />

        {/* Exchange Partners Section */}
        <ExchangePartners />

        {/* NFT Integration Section */}
        <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">NFT Integration</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Unique NFTs that add value to your MemeX holdings.
            </p>
            <a
              href="https://nft.memextoken.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-black font-bold px-10 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Explore NFTs
            </a>
          </div>
        </section>

        {/* Coupon Site Section */}
        <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Unlock Exclusive Savings with MemeX Coupons!</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Discover exclusive discounts and offers using MemeX on our dedicated coupon site. But it's not
              just about saving – it's about earning too! Share your affiliate links and let hundreds of
              thousands of users discover the benefits of MemeX while you earn passive income.
            </p>
            <p className="text-xl text-blue-400 max-w-3xl mx-auto mb-10 font-bold">
              Companies can also publish their discount codes here instead of paying for advertising, turning
              marketing costs into direct savings for their customers!
            </p>
            <a
              href="https://coupon.memextoken.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-black font-bold px-10 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Explore the Coupon Site
            </a>
          </div>
        </section>

        {/* Poll Area Section */}
        <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Poll AREA</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              MemeX polls allow you to earn MEMEX tokens if your predictions are correct. By creating a poll, you automatically earn 1% of the pool!
            </p>
            <a
              href="https://pollarea.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-black font-bold px-10 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Go to Poll Area
            </a>
          </div>
        </section>


        {/* CTA Section */}
        <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join the Revolution?</h2>


          </div>
        </section>

        {/* Contact Information */}
        <div className="relative z-10  mt-8 text-center flex items-center justify-center h-12">
          <p className="text-[1.45rem] text-gray-400 leading-tight">
            {/* Increased font size to 1.45rem and added leading-tight */}
            Need assistance? 🚀 DM us on{' '}
            <a
              href="https://x.com/memexairdrop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              X (Twitter)
            </a>{' '}
            for direct support! 🔒
          </p>
        </div>

        {/* Scroll to Top Button */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-[60px] right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center z-51"
            aria-label="Scroll to top"
            style={{ zIndex: 51 }}
          >
            <ArrowUp className="w-6 h-6"
            />
          </button>
        )}

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 md:hidden">
          <div className="container mx-auto px-4 py-3 flex justify-around items-center">
            <a
              href="#"
              className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Home className="w-5 h-5 mb-1" />
              <span className="text-xs">Home</span>
            </a>
            <a
              href="#features"
              className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Zap className="w-5 h-5 mb-1" />
              <span className="text-xs">Features</span>
            </a>
            <a
              href="https://coupon.memextoken.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors"
            >
              <BarChart2 className="w-5 h-5 mb-1" />
              <span className="text-xs">Coupon Site</span>
            </a>
            {/* Removed Community link from mobile nav */}
            <a
              href="https://nft.memextoken.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors"
            >
              <ImageIcon className="w-5 h-5 mb-1" /> {/* Changed icon to ImageIcon for NFT */}
              <span className="text-xs">NFT</span>
            </a>
            {/* Added Mint Token Link to Mobile Nav */}
            <a
              href="https://mint.memextoken.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors"
            >
              <PlusCircle className="w-5 h-5 mb-1" /> {/* Using PlusCircle icon */}
              <span className="text-xs">Mint Token</span>
            </a>
             {/* Added Poll Area Link to Mobile Nav */}
             <a
              href="https://pollarea.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors"
            >
              <BarChart2 className="w-5 h-5 mb-1" /> {/* Using BarChart2 icon */}
              <span className="text-xs">Poll Area</span>
            </a>
          </div>
        </nav>
      </div>{' '}
      {/* End of max-w-screen-xl mx-auto container */}

      {/* Footer - Moved outside the container */}
      <footer className="relative z-10 bg-gray-900/80 py-12">
        <div className="container mx-auto px-4 text-center">
          {' '}
          {/* Added container for content */}
          <p className="text-lg text-gray-400">Legal Disclaimer</p>
          <p className="text-sm text-gray-400 mt-2">
            None of the information on this website should be construed as providing legal or financial
            advice. Please note there are always risks associated with smart contracts. MemeX is not a
            registered broker, analyst or investment advisor. If you have purchased $MemeX, you agree that
            you are not purchasing a security or investment. The MemeX team can not be held liable for any
            losses or taxes you may incur. You also agree that the team is representing the token is
            community members, and cannot modify the contract due to it being renounced. Do conduct your own
            due diligence and consult your financial advisor before making any investment decision.
          </p>
          <p className="text-lg text-gray-400 mt-6">Follow us on social media</p>
          <div className="flex justify-center gap-8 mt-4">
            <a href="https://x.com/memexairdrop" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-500" />
            </a>
            <a href="https://t.me/MemeXGloball" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6 text-blue-400 hover:text-blue-500" />
            </a>
          </div>
          {/* Integration documents links */}
          <div className="mt-6 flex flex-col items-center gap-2">
            {' '}
            {/* Use flex-col and gap for vertical spacing */}
            <a
              href="https://apricot-rational-booby-281.mypinata.cloud/ipfs/bafkreidisyuhp6tv7iw4u44epttkuhqp7tnp2hik5z6x3wtiwcvhfqa3wq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-black font-bold px-4 py-2 rounded-full text-sm transition-colors shadow-lg shadow-blue-500/30"
            >
              White Paper
            </a>
            <a
              href="https://github.com/ElectraProtocol/OmniXEP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-black font-bold px-4 py-2 rounded-full text-sm transition-colors shadow-lg shadow-blue-500/30"
            >
              MemeX integration documents
            </a>
            <a
              href="https://github.com/ElectraProtocol/XEP-Core"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-black font-bold px-4 py-2 rounded-full text-sm transition-colors shadow-lg shadow-blue-500/30"
            >
              Main network integration documents
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">&copy; 2025 MemeX. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">
            🚀 Powered by Electra Protocol, ensuring the lowest fees, fastest transactions, and ultimate
            security!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
