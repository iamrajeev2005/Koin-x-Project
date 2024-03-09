import React from "react";
import TradingViewWidget from "./TradingViewWidget";
import Rightsidebar from "./Rightsidebar";

function Chart() {
  return (
    <div className="flex mt-10 gap-4">
      <div className="w-[70%] h-[80vh] bg-white rounded-xl overflow-hidden">
        <TradingViewWidget />
      </div>
      <div className="w-[30%] h-[40vh]">
        <Rightsidebar />
      </div>
    </div>
  );
}

export default Chart;
