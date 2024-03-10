import React from "react";
import TradingViewWidget from "./TradingViewWidget";
import Rightsidebar from "./Rightsidebar";
import Tabs from "./Tabs";
import Sentiments from "./Sentiments";
import About from "./About";
import Tokenomics from "./Tokenomics";

function Chart() {
  return (
    <div className="flex mt-10 gap-4 overflow-hidden">
      <div className="w-[70%]">
        <div className="h-[80vh] bg-white rounded-xl overflow-hidden">
          <TradingViewWidget />
        </div>
        <div>
          <Tabs />
        </div>
        <div>
          <Sentiments/>
        </div>
        <div>
          <About/>
        </div>
        <div>
          <Tokenomics/>
        </div>
      </div>
      <div className="w-[30%] h-[40vh]">
        <Rightsidebar />
      </div>
    </div>
  );
}

export default Chart;
