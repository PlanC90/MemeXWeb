import {
  Zap,
  Clock,
  ShoppingCart,
  ImageIcon,
  Bot,
  PlusCircle,
  Percent,
  BarChart2, // Import BarChart2 icon
} from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    title: 'Ultra-Low Fees',
    description: 'Almost zero gas fees for transfers. Save money on every transaction.',
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-400" />,
    title: 'Instant Transfers',
    description: 'The fastest meme token on blockchain. Transfers complete in seconds.',
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
    title: 'Real-World Usability',
    description: 'Spend it in stores & online. Growing merchant adoption network.',
  },
  {
    icon: <ImageIcon className="w-8 h-8 text-blue-400" />,
    title: 'NFT Integration',
    description: 'Unique NFTs that add value to your MemeX holdings.',
  },
  {
    icon: <Bot className="w-8 h-8 text-blue-400" />,
    title: 'AI Telegram Bot',
    description: 'Get instant support and insights with our AI-powered Telegram bot.',
  },
  {
    icon: <PlusCircle className="w-8 h-8 text-blue-400" />,
    title: 'Create Your Own Token',
    description: 'Mint your own tokens easily on the MemeX platform.',
  },
  {
    icon: <Percent className="w-8 h-8 text-blue-400" />,
    title: 'Coupon Sites',
    description: 'MemeX can be used on various coupon sites for discounts.',
  },
  // Add the new Poll AREA feature card
  {
    icon: <BarChart2 className="w-8 h-8 text-blue-400" />, // Use BarChart2 icon
    title: 'Poll AREA',
    description: 'MemeX polls allow you to earn MEMEX tokens if your predictions are correct. By creating a poll, you automatically earn 1% of the pool!',
    link: 'https://pollarea.com/', // Add the link
  },
];

function Features() {
  return (
    <section id="features" className="relative z-10 py-20 bg-gradient-to-b from-transparent to-blue-900/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose <span className="text-blue-400">MemeX?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            // Wrap the card content in an anchor tag if a link exists
            <a
              key={index}
              href={feature.link || '#'} // Use '#' as a fallback if no link
              target={feature.link ? '_blank' : '_self'} // Open in new tab if link exists
              rel={feature.link ? 'noopener noreferrer' : undefined}
              className={`
                bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-left
                border border-gray-700 hover:border-blue-500 transition-all duration-300
                transform hover:scale-105 shadow-lg hover:shadow-blue-500/30
                flex flex-col items-start
                ${feature.link ? 'cursor-pointer' : ''}
              `}
            >
              <div className="mb-4 p-3 bg-gray-700/50 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
