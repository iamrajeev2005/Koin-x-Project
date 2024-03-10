"use client";
import React, { useEffect } from "react";

function Trendingcoins() {
  return (
    <div className="bg-white w-full rounded-lg mt-4 py-4 px-5">
      <h1 className="font-bold text-black text-xl pb-3">
        Trending Coins (24H)
      </h1>
      <div className="flex items-center justify-between pb-3">
        <h3 className="font-bold text-zinc-900">Ethereum(ETH)</h3>
        <div className=" bg-green-100 text-green-900 flex items-center rounded-lg pr-1">
          <i className="ri-arrow-drop-up-fill text-3xl"></i>
          <h4 className="text-sm">8.21%</h4>
        </div>
      </div>
      <div className="flex items-center justify-between pb-3">
        <h3 className="font-bold text-zinc-900">Bitcoin(BTC)</h3>
        <div className=" bg-green-100 text-green-900 flex items-center rounded-lg pr-1">
          <i className="ri-arrow-drop-up-fill text-3xl"></i>
          <h4 className="text-sm">5.26%</h4>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-zinc-900">Polygon(MATIC)</h3>
        <div className=" bg-green-100 text-green-900 flex items-center rounded-lg pr-1">
          <i className="ri-arrow-drop-up-fill text-3xl"></i>
          <h4 className="text-sm">4.32%</h4>
        </div>
      </div>
    </div>
  );
}

export default Trendingcoins;
