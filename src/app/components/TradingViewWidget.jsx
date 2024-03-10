"use client";
import React, { useEffect } from "react";
import Tradingchart from "./Tradingchart";

function TradingViewWidget() {
  const getPrice = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true`
    );
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getPrice();
  }, []);
  return (
    <div>
      <div className="flex items-center gap-2 p-5">
        <div className="h-8 w-8">
          <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="" />
        </div>
        <h2 className="text-2xl font-bold">Bitcoin</h2>
        <h3 className="text-zinc-500 font-bold">BTC</h3>
        <button className="bg-zinc-500 text-white py-2 px-3 rounded-lg ml-4 ">
          Rank #1
        </button>
      </div>
      <div className="flex items-start">
        <div className="px-5">
          <h1 className="text-3xl font-bold text-zinc-900 mb-1">$46,953.04</h1>
          <h3 className="font-bold text-slate-800">₹ 39,42,343</h3>
        </div>
        <div>
          <div className=" bg-green-100 text-green-900 flex items-center rounded-lg pr-1">
            <i className="ri-arrow-drop-up-fill text-3xl"></i>
            <h4 className="text-sm">5.26%</h4>
          </div>
        </div>
        <h4 className="text-zinc-700 font-medium ml-4">(24H)</h4>
      </div>
      <hr className="mx-5 my-3" />
      <div className="px-5 h-[52vh]">
        <Tradingchart />
      </div>
    </div>
  );
}

export default TradingViewWidget;
