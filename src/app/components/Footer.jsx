"use client";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";

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
        <div className="w-screen bg-white mt-10 flex flex-col items-start gap-6 p-4">
          <h1 className="text-xl px-4 font-bold -mb-12">You May Also Like</h1>
          <Slider />
          <h1 className="text-xl px-4 font-bold -mb-10">Trending Coins</h1>
          <Slider />
        </div>
      )}
    </>
  );
}

export default Footer;
