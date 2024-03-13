"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Trendingcoins() {
  const [trending, setTrending] = useState(null);
  const getTrending = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/search/trending`
    );
    const data = await response.json();
    const topCoins = data?.coins;
    const top3Coins = topCoins.slice(0, 3);
    setTrending(top3Coins);
  };

  useEffect(() => {
    getTrending();
  }, []);
  return (
    <div>
      {trending && (
        <div className="bg-white w-full rounded-lg mt-4 py-4 px-5">
          <h1 className="font-bold text-black text-xl pb-3">
            Trending Coins (24H)
          </h1>
          {trending.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between pb-3"
              >
                <div className="flex items-center justify-start pb-3 gap-2">
                  <Image
                    className="h-5 w-5 rounded-full object-cover"
                    src={`${item?.item?.small}`}
                    alt="logo"
                  />
                  <h3 className="font-bold text-sm text-zinc-900">
                    {item.item.name}({item?.item?.symbol})
                  </h3>
                </div>
                <div
                  className={` flex items-center rounded-lg pr-1 ${
                    item?.item?.data?.price_change_percentage_24h?.usd < 0
                      ? "bg-red-100 text-red-500"
                      : "bg-green-100 text-green-900"
                  }`}
                >
                  <i className="ri-arrow-drop-up-fill text-3xl"></i>
                  <h4 className="text-sm">
                    {item?.item?.data?.price_change_percentage_24h?.usd.toFixed(
                      2
                    )}
                    %
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Trendingcoins;
