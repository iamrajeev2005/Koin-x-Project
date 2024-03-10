"use client";
import { dividerClasses } from "@mui/material";
import React, { useEffect, useState } from "react";

function Footer() {
  const [Footer, setFooter] = useState(null);
  const getTrending = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/search/trending`
    );
    const data = await response.json();
    const topCoins = data?.coins;
    console.log(topCoins);
    setFooter(topCoins);
  };

  useEffect(() => {
    getTrending();
  }, []);
  return (
    <>
      {Footer && (
        <div className="w-screen  bg-white mt-10 flex flex-col items-start gap-6 p-4">
          <h1 className="text-xl px-4 font-bold">You May Also Like</h1>
          <div className=" flex items-start gap-6 px-4">
            {Footer.map((item, index) => {
              return (
                <div className="border-[1px] border-zinc-400 rounded-md w-fit p-3 pr-8">
                  <div className="flex items-center gap-2">
                    <img
                      className="h-5 w-5 rounded-full object-cover"
                      src={`${item?.item?.small}`}
                      alt="logo"
                    />
                    <h3>{item?.item?.symbol}</h3>
                    <div
                      className={` flex items-center rounded-lg pr-1 ${
                        item?.item?.data?.price_change_percentage_24h?.usd < 0
                          ? "bg-red-100 text-red-500"
                          : "bg-green-100 text-green-900"
                      }`}
                    >
                      <h4 className="text-sm">
                        {item?.item?.data?.price_change_percentage_24h?.usd.toFixed(
                          2
                        )}
                        %
                      </h4>
                    </div>
                  </div>
                  <h3 className="font-bold my-2">{item.item.data.price}</h3>
                  <div className="h-10 w-fit">
                    <img src={item.item.data.sparkline} alt="graph" />
                  </div>
                </div>
              );
            })}
          </div>
          <h1 className="text-xl px-4 font-bold">Trending Coins</h1>
          <div className=" flex items-start gap-6 px-4">
            {Footer.map((item, index) => {
              return (
                <div className="border-[1px] border-zinc-400 rounded-md w-fit p-3 pr-8">
                  <div className="flex items-center gap-2">
                    <img
                      className="h-5 w-5 rounded-full object-cover"
                      src={`${item?.item?.small}`}
                      alt="logo"
                    />
                    <h3>{item?.item?.symbol}</h3>
                    <div
                      className={` flex items-center rounded-lg pr-1 ${
                        item?.item?.data?.price_change_percentage_24h?.usd < 0
                          ? "bg-red-100 text-red-500"
                          : "bg-green-100 text-green-900"
                      }`}
                    >
                      <h4 className="text-sm">
                        {item?.item?.data?.price_change_percentage_24h?.usd.toFixed(
                          2
                        )}
                        %
                      </h4>
                    </div>
                  </div>
                  <h3 className="font-bold my-2">{item.item.data.price}</h3>
                  <div className="h-10 w-fit">
                    <img src={item.item.data.sparkline} alt="graph" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
