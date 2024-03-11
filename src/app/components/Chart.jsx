import React from "react";
import TradingViewWidget from "./TradingViewWidget";
import Rightsidebar from "./Rightsidebar";
import Tabs from "./Tabs";
import Sentiments from "./Sentiments";
import About from "./About";
import Tokenomics from "./Tokenomics";
import Team from "./Team";
import Footer from "./Footer";

function Chart() {
  return (
    <div className="flex mt-10 gap-4">
      <div className="w-[70%] max-md:w-[100%] relative">
        <div className="h-[90vh] max-md:h-[70vh] max-md:mt-16 bg-white rounded-xl">
          <TradingViewWidget />
        </div>
        <div>
          <Tabs />
        </div>
        <div className="overflow-hidden">
          <Sentiments />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Tokenomics />
        </div>
        <div>
          <Team />
        </div>
      </div>
      <div className="w-[30%] h-[40vh]">
        <Rightsidebar />
      </div>
    </div>
  );
}

export default Chart;
