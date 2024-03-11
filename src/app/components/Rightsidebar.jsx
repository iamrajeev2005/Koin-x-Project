import React from "react";
import Advertisement from "./Advertisement";
import Trendingcoins from "./Trendingcoins";

function Rightsidebar() {
  return (
    <div className=" max-md:hidden">
      <Advertisement />
      <Trendingcoins />
    </div>
  );
}

export default Rightsidebar;
