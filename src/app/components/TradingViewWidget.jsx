"use client";
import React, { useEffect, useState } from "react";
import Tradingchart from "./Tradingchart";

function TradingViewWidget() {
  const [data, setData] = useState(null);

  const getPrice = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true`
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getPrice();
  }, []);

  const formatUSD = (value) => {
    return value.toLocaleString("en-US", { minimumFractionDigits: 2 });
  };

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      {data && (
        <div>
          <div className="flex items-center gap-2 p-5">
            <div className="h-8 w-8">
              <img
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                alt=""
              />
            </div>
            <h2 className="text-2xl font-bold">Bitcoin</h2>
            <h3 className="text-zinc-500 font-bold">BTC</h3>
            <button className="bg-zinc-500 text-white py-2 px-3 rounded-lg ml-4">
              Rank #1
            </button>
          </div>
          <div className="flex items-start">
            <div className="px-5">
              <h1 className="text-3xl font-bold text-zinc-900 mb-1">
                ${formatUSD(data.bitcoin.usd)}
              </h1>
              <h3 className="font-bold text-slate-800">
                ₹ {numberWithCommas(data.bitcoin.inr)}
              </h3>
            </div>
            <div>
              <div
                className={` bg-green-100 text-green-900 flex items-center rounded-lg pr-1 ${
                  data.bitcoin.usd_24h_change < 0
                    ? "bg-red-100 text-red-500"
                    : "bg-green-100 text-green-900"
                }`}
              >
                <i className="ri-arrow-drop-up-fill text-3xl"></i>
                <h4
                  className={`text-sm`}
                >
                  {data.bitcoin.usd_24h_change.toFixed(2)}%
                </h4>
              </div>
            </div>
            <h4 className="text-zinc-700 font-medium ml-4">(24H)</h4>
          </div>
          <hr className="mx-5 my-3" />
          <div className="px-5 h-[52vh]">
            <Tradingchart />
          </div>
        </div>
      )}
    </div>
  );
}

export default TradingViewWidget;
