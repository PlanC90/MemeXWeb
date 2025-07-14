import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Airdrop', value: 12000000000000 }, // 12T
  { name: 'Marketing', value: 15000000000000 }, // 15T
  { name: 'Development/Team', value: 10000000000000 }, // 10T - Updated label
  { name: 'Burn', value: 63000000000000 }, // 63T
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']; // Blue, Green, Yellow, Red

const Tokenomics = () => {
  // Set total supply to a fixed value of 30T
  const fixedTotalSupply = 30000000000000; // Represents 30 Trillion

  // Function to format large numbers
  const formatNumber = (num: number): string => {
    if (num >= 1e12) {
      return (num / 1e12).toFixed(0) + 'T';
    }
    if (num >= 1e9) {
      return (num / 1e9).toFixed(1) + 'B';
    }
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + 'M';
    }
    return num.toString();
  };

  return (
    <section id="tokenomics" className="relative z-10 py-20 bg-gradient-to-b from-transparent to-blue-900/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Tokenomics
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Total Supply Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors shadow-lg w-full max-w-sm lg:max-w-md">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Total Supply</h3>
            {/* Display the fixed total supply */}
            <p className="text-6xl font-extrabold text-white">{formatNumber(fixedTotalSupply)} MEMEX</p>
          </div>

          {/* Allocation Chart */}
          <div className="w-full max-w-md lg:max-w-lg h-96 bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Allocation</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatNumber(value as number) + ' MEMEX'} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
