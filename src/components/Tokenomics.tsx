import React, { useRef, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Tokenomics = () => {
  const totalSupplyRef = useRef(null);
  const tokenDistributionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const setEqualHeight = () => {
      if (totalSupplyRef.current && tokenDistributionRef.current && !isMobile) {
        const totalSupplyHeight = totalSupplyRef.current.offsetHeight;
        tokenDistributionRef.current.style.height = `${totalSupplyHeight}px`;
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    setEqualHeight();
    window.addEventListener('resize', setEqualHeight);
    return () => window.removeEventListener('resize', setEqualHeight);
  }, [isMobile]);

  const data = [
    { name: 'Airdrop', value: 11.67, color: '#2563EB' },
    { name: 'Marketing', value: 15, color: '#10B981' },
    { name: 'Development', value: 10, color: '#EAB308' },
    { name: 'Burn', value: 63.33, color: '#DC2626' },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize={14} fontWeight="bold">
        {`${data[index].name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const developmentUnlockData = Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    percentage: 8.33,
    cumulative: parseFloat((8.33 * (i + 1)).toFixed(2)),
  }));

  developmentUnlockData[11].cumulative = 100;

  return (
    <section id="tokenomics" className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Tokenomics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side: Total Supply */}
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-full">
              <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-xl opacity-20"></div>
              <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center">
                <h3 className="text-xl font-bold mb-4 text-blue-500 md:text-base">Total Supply</h3>
                <p className="text-4xl font-bold mb-6 break-words md:text-3xl">30T MEMEX</p>
              </div>
            </div>
          </div>

          {/* Right Side: Donut Chart */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-center md:text-base">Allocation</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={160}
                  innerRadius={50}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend align="center" verticalAlign="bottom" wrapperStyle={{ fontSize: '16px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Development Unlock Table */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-center">Development Share Monthly Unlock</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-transparent border border-gray-700 rounded-2xl">
              <thead className="text-white">
                <tr>
                  <th className="px-4 py-2 border-b border-gray-700">Month</th>
                  <th className="px-4 py-2 border-b border-gray-700">Monthly Unlock (%)</th>
                  <th className="px-4 py-2 border-b border-gray-700">Cumulative Unlock (%)</th>
                </tr>
              </thead>
              <tbody>
                {developmentUnlockData.map((item) => (
                  <tr key={item.month} className="text-center">
                    <td className="px-4 py-2 border-b border-gray-700">{item.month}</td>
                    <td className="px-4 py-2 border-b border-gray-700">{item.percentage}</td>
                    <td className="px-4 py-2 border-b border-gray-700">{item.cumulative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
