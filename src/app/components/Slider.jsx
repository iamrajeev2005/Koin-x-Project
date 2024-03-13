import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";

import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [Footer, setFooter] = useState(null);
  const getTrending = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/search/trending`
    );
    const data = await response.json();
    const topCoins = data?.coins;
    setFooter(topCoins);
  };

  useEffect(() => {
    getTrending();
  }, []);
  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={
          window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 4 : 6
        }
        centeredSlides={false}
        spaceBetween={8}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Footer && (
          <div>
            {Footer.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className="border-[1px] border-zinc-400 rounded-md w-fit max-md:w-[45vw] p-3 pr-8">
                    <div key={index} className="flex items-center gap-2">
                      <Image
                        className="h-5 w-5 rounded-full object-cover"
                        src={`${item?.item?.small}`}
                        alt="logo"
                      />
                      <h3>{item?.item?.symbol}</h3>
                      <div
                        className={` flex items-center rounded-lg pr-1 ${
                          item?.item?.data?.price_change_percentage_24h?.usd < 0
                            ? "bg-red-100 text-red-500"
                            : "bg-green-100 text-green-900"
                        }`}
                      >
                        <h4 className="text-sm">
                          {item?.item?.data?.price_change_percentage_24h?.usd.toFixed(
                            2
                          )}
                          %
                        </h4>
                      </div>
                    </div>
                    <h3 className="font-bold my-2">{item.item.data.price}</h3>
                    <div className="h-10 w-fit">
                      <Image src={item.item.data.sparkline} alt="graph" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        )}
      </Swiper>
    </>
  );
}
