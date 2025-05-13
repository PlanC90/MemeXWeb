import React from 'react';

const ExchangePartners = () => {
  return (
    <section id="exchange-partners" className="relative z-10 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Exchange Partners</h2>
        <div className="flex justify-center gap-8">
          {/* BingX */}
          <a href="https://bingx.com/en/accounts/partner/Memex" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.glitch.global/c0240ef5-b1d3-409c-a790-588d18d5cf32/bingx.jpg"
              alt="BingX"
              className="w-32 h-auto"
            />
          </a>
          {/* Bybit */}
          <a href="https://www.bybit.com/en/sign-up?affiliate_id=122882&group_id=986951&group_type=1&ref_code=122882" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.glitch.global/c0240ef5-b1d3-409c-a790-588d18d5cf32/bybit.jpg"
              alt="Bybit"
              className="w-32 h-auto"
            />
          </a>
        </div>

        {/* CRYPTO and Marketing Partners */}
        <h2 className="text-4xl font-bold mt-12 mb-6 text-center">CRYPTO and Marketing Partners</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {/* babypoes */}
          <a href="https://babypoes.electraprotocol.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://pbs.twimg.com/profile_images/1859873069671563264/5iplL1aa_400x400.jpg"
              alt="babypoes"
              className="w-32 h-auto"
            />
          </a>
          {/* electraprotocol */}
          <a href="https://electraprotocol.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://pbs.twimg.com/profile_images/1331917259191808000/E1UyOz3m_400x400.png"
              alt="electraprotocol"
              className="w-32 h-auto"
            />
          </a>
          {/* PlanC Space */}
          <a href="https://planc.space/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://pbs.twimg.com/profile_images/1823343686027030528/UXpjwV31_400x400.jpg"
              alt="PlanC Space"
              className="w-32 h-auto"
            />
          </a>
          {/* BC Network */}
          <a href="https://x.com/BC_Network23" target="_blank" rel="noopener noreferrer">
            <img
              src="https://pbs.twimg.com/profile_images/1839763128466251777/T5xe1CuC_400x400.jpg"
              alt="BC Network"
              className="w-32 h-auto"
            />
          </a>
          {/* CMTitans */}
          <a href="https://cmtitans.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://pbs.twimg.com/profile_images/1715144782790483968/TOBZZHfS_400x400.jpg"
              alt="CMTitans"
              className="w-32 h-auto"
            />
          </a>
          {/* Pandai */}
          <a href="https://t.me/PandaiAirdropBot?start=ref_67fe8dabe8bbe466b20cffad" target="_blank" rel="noopener noreferrer">
            <img
              src="https://pbs.twimg.com/profile_images/1868247551880712192/VjrPFtaH_400x400.jpg"
              alt="Pandai"
              className="w-32 h-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExchangePartners;
