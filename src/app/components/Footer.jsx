import React from "react";
import Minichart from "./Minichart";

function Footer() {
  return (
    <>
      <div className="w-screen bg-white mt-10 flex flex-col px-12 pt-5 pb-5">
        <div>
          <div>
            <h3 className="capitalize font-bold text-xl py-5">
              You may also like
            </h3>
          </div>
          <div className="rounded-lg flex items-center gap-3">
            {[...Array(6)].map((_, i) => {
              return <Minichart key={i} />;
            })}
          </div>
        </div>
        <div>
          <div>
            <h3 className="capitalize font-bold text-xl py-5">
              Trending Coins
            </h3>
          </div>
          <div className="rounded-lg flex items-center gap-3">
            {[...Array(6)].map((_, i) => {
              return <Minichart key={i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
