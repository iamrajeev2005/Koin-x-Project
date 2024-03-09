"use client";
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    if (!container.current.querySelector("script")) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": true,
          "gridColor": "rgba(204, 0, 0, 0.06)",
          "hide_top_toolbar": true,
          "withdateranges": true,
          "range": "ALL",
          "allow_symbol_change": true,
          "save_image": false,
          "details": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container__widget"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
}

export default memo(TradingViewWidget);
