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
} from 'lucide-react'; // Added PlusCircle and ImageIcon
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Community from './components/Community';
import Roadmap from './components/Roadmap';
import ExchangePartners from './components/ExchangePartners';
import LowFeesSection from './components/LowFeesSection'; // Import the new component

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
              src="https://cdn.glitch.global/cdada319-8cc1-41a7-ab15-329ec6fc30a0/memexlogo.jpg"
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
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <div className="animate-pulse inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
            🔥 Airdrop Live Now! 🔥
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
          <div className="text-6xl font-extrabold text-blue-400 mb-8">1,300,000+ Holders🔥</div>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://memex1.planc.space"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center justify-center"
            >
              Claim 2,000,000 Tokens <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://gas.memextoken.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center justify-center"
            >
              Claim 500,000 Tokens & Gas Token <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://bridge.memextoken.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center justify-center"
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
              className="w-40 h-40 rounded-full border-