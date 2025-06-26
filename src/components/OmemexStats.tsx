import { useState, useEffect } from 'react';
import { DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface OmemexData {
  priceUsd: string;
  priceChangePercentage24h: string;
}

const OmemexStats = () => {
  const [data, setData] = useState<OmemexData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOmemexData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://api.geckoterminal.com/api/v2/networks/omax-chain/pools/0xc84edbf1e3fef5e4583aaa0f818cdfebfcae095b'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        const priceUsd = result.data.attributes.base_token_price_usd;
        const priceChangePercentage24h = result.data.attributes.price_change_percentage_24h;

        const isPriceUsdValid = priceUsd !== undefined && priceUsd !== null && !isNaN(parseFloat(priceUsd));
        const isPriceChangeValid = priceChangePercentage24h !== undefined && priceChangePercentage24h !== null && !isNaN(parseFloat(priceChangePercentage24h));

        if (isPriceUsdValid) {
            // Set data if price is valid. Price change validity will be checked during rendering.
            setData({
                priceUsd: priceUsd,
                // Store priceChangePercentage24h only if valid, otherwise store a value that formatPriceChange will treat as null
                priceChangePercentage24h: isPriceChangeValid ? priceChangePercentage24h : 'invalid' // Use a distinct invalid marker
            });
            setError(null); // Clear any previous error
        } else {
            // If price itself is invalid or missing, show error and clear data
            setData(null);
            setError('Failed to load OMEMEX price data.'); // More specific error message
        }

      } catch (err) {
        console.error('Failed to fetch OMEMEX data:', err);
        setError('Failed to load data.');
        setData(null); // Clear data on error
      } finally {
        setLoading(false);
      }
    };

    fetchOmemexData();
    // Fetch data every 60 seconds
    const intervalId = setInterval(fetchOmemexData, 60000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const formatPrice = (price: string): string | null => {
    const num = parseFloat(price);
    if (isNaN(num)) return null;
    // Format to 8 decimal places for small values, fewer for larger
    if (num < 0.0001) {
        return num.toFixed(8);
    } else if (num < 1) {
        return num.toFixed(6);
    } else if (num < 100) {
        return num.toFixed(4);
    } else {
        return num.toFixed(2);
    }
  };

  const formatPriceChange = (change: string) => {
    const num = parseFloat(change);
    // Check for NaN or our custom 'invalid' marker
    if (isNaN(num) || change === 'invalid') return null;
    const formatted = num.toFixed(2);
    const colorClass = num >= 0 ? 'text-green-500' : 'text-red-500';
    const ArrowIcon = num >= 0 ? ArrowUpRight : ArrowDownRight;

    return (
      <span className={`flex items-center gap-1 ${colorClass}`}>
        <ArrowIcon className="w-4 h-4" />
        {formatted}%
      </span>
    );
  };

  const formattedPrice = data ? formatPrice(data.priceUsd) : null;
  const formattedPriceChange = data ? formatPriceChange(data.priceChangePercentage24h) : null;


  return (
    <section className="relative z-10 py-10 bg-gradient-to-b from-transparent to-blue-900/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">OMEMEX Live Stats</h2>
        {loading && <p className="text-blue-400">Loading stats...</p>}
        {/* Show error only if there is an error and not loading */}
        {!loading && error && <p className="text-red-500">{error}</p>}
        {/* Only show the card if data is available and price is valid */}
        {data && formattedPrice !== null && (
          <div className="flex justify-center items-center"> {/* Centered single card */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 shadow-lg shadow-blue-500/20 flex items-center gap-4 w-full md:w-auto">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <DollarSign className="text-blue-400 w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm">Current Price (USD)</p>
                <div className="flex items-center gap-2"> {/* Flex container for price and change */}
                   <p className="text-2xl font-bold text-blue-300">${formattedPrice}</p>
                   {/* Only show price change if it's available and valid */}
                   {formattedPriceChange}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Optionally show a message if data is not available after loading and no error */}
        {!loading && !data && !error && <p className="text-gray-400">OMEMEX stats not available.</p>}
      </div>
    </section>
  );
};

export default OmemexStats;
