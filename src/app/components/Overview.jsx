export default function Component() {
  return (
    <div className="max-w-4xl mx-auto px-6 bg-white rounded-lg">
      <div className="bg-white pb-6 rounded-lg ">
        <h2 className="text-2xl font-semibold flex items-center text-zinc-800 py-4">
          Performance
        </h2>
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Today's Low</span>
            <span className="text-sm font-medium">Today's High</span>
          </div>
          <div className="relative">
            <div className="mx-24 h-1 rounded-full bg-gradient-to-r from-red-500 to-green-500"></div>
            <div className="absolute left-[60%] top-2">
              <div
                className="w-0 h-0 
                          border-l-[5px] border-l-transparent
                          border-b-[10px] border-b-black
                          border-r-[5px] border-r-transparent"
              />
              <span className="absolute -translate-x-[50%] top-4 text-sm text-zinc-900">
                $48,637.83
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-bold text-zinc-800">46,930.22</span>
            <span className="text-sm font-bold text-zinc-800">49,343.83</span>
          </div>
          <div className="pt-8">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">52W Low</span>
              <span className="text-sm font-medium">52W High</span>
            </div>
            <div className="relative">
              <div className="mx-24 rounded-full h-1 bg-gradient-to-r from-red-500 to-green-500"></div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-bold text-zinc-800">16,930.22</span>
              <span className="text-sm font-bold text-zinc-800">49,743.83</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold flex items-center text-zinc-800">
          Fundamentals
          <InfoIcon className="ml-2 w-5 h-5 text-gray-400" />
        </h2>
        <div className="grid grid-cols-2 max-md:flex max-md:flex-col gap-8 mt-4">
          <div>
            <div className="flex justify-between border-b-[1px] border-zinc-300 pb-3">
              <span className=" text-sm text-zinc-500">Bitcoin Price</span>
              <span className="font-bold text-sm">$16,815.46</span>
            </div>
            <div className="flex justify-between mt-2 border-b-[1px] border-zinc-300 pb-3">
              <span className=" text-sm text-zinc-500">24h Low / 24h High</span>
              <span className="font-bold text-sm">$16,382.07 / $16,874.12</span>
            </div>
            <div className="flex justify-between mt-2 border-b-[1px] border-zinc-300 pb-3">
              <span className=" text-sm text-zinc-500">7d Low / 7d High</span>
              <span className="font-bold text-sm">$16,382.07 / $16,874.12</span>
            </div>
            <div className="flex justify-between mt-2 border-b-[1px] border-zinc-300 pb-3">
              <span className=" text-sm text-zinc-500">Trading Volume</span>
              <span className="font-bold text-sm">$23,249,202,782</span>
            </div>
            <div className="flex justify-between mt-2 border-b-[1px] border-zinc-300 pb-3 ">
              <span className=" text-sm text-zinc-500">Market Cap Rank</span>
              <span className="font-bold text-sm">#1</span>
            </div>
          </div>
          <div className=" max-md:-mt-3">
            <div className="flex justify-between border-b-[1px] border-zinc-300 pb-3">
              <span className=" text-sm text-zinc-500">Market Cap</span>
              <span className="font-bold text-sm">$323,507,290,047</span>
            </div>
            <div className="flex justify-between mt-2 border-b-[1px] border-zinc-300 pb-3">
              <span className=" text-sm text-zinc-500">
                Market Cap Dominance
              </span>
              <span className="font-bold text-sm">38.343%</span>
            </div>
            <div className="flex justify-between mt-2 border-b-[1px] border-zinc-300 pb-3">
              <span className=" text-sm text-zinc-500">
                Volume / Market Cap
              </span>
              <span className="font-bold text-sm">0.0718</span>
            </div>
            <div className="flex items-center justify-between border-b-[1px] border-zinc-300 ">
              <span className=" text-sm text-zinc-500">All-Time High</span>
              <div className="flex flex-col items-end leading-tight">
                <div>
                  <span className="font-semibold text-[1vw] max-md:text-sm">
                    $69,044.77
                    <span className="text-red-500"> -75.6%</span>
                  </span>
                </div>
                <div>
                  <span className="text-[1vw] max-md:text-sm text-zinc-700">
                    Nov 10, 2021 (about 1 year)
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-b-[1px] border-zinc-300 ">
              <span className=" text-sm text-zinc-500">All-Time Low</span>
              <div className="flex flex-col items-end leading-tight">
                <div>
                  <span className="font-semibold text-[1vw] max-md:text-sm">
                    $67.81
                    <span className="text-green-500"> 24729.1%</span>
                  </span>
                </div>
                <div>
                  <span className="text-[1vw] max-md:text-sm text-zinc-700">
                    Jul 6, 2013 (over 9 year)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
