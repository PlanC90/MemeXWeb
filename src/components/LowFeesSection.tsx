import { DollarSign, Zap } from 'lucide-react';

const LowFeesSection = () => {
  return (
    <section className="relative z-10 py-20 mt-32 bg-gradient-to-b from-transparent to-blue-900/20"> {/* Increased mt-20 to mt-32 */}
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block p-4 bg-blue-500/20 rounded-full mb-6">
          <DollarSign className="w-10 h-10 text-blue-400" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Create Your Own Token <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">With The Lowest Transfer Fees!</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Creating your own token on the MemeX platform has never been this affordable. Empower your projects with incredibly low transfer fees, thanks to the power of Electra Protocol.
        </p>
        <a
          href="https://mint.memextoken.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-black font-bold px-10 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center justify-center mx-auto w-fit"
        >
          Start Creating Your Token <Zap className="ml-2 w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default LowFeesSection;
