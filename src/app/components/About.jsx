import React from "react";

function About() {
  return (
    <div className="bg-white rounded-lg text-black mt-4">
      <div className="max-w-full p-6 ">
        <h1 className="text-2xl font-bold mb-4">About Bitcoin</h1>
        <h2 className="text-xl font-semibold mb-2">What is Bitcoin?</h2>
        <p className="mb-4">
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
        <hr />
        <h2 className="text-xl font-semibold my-2">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </p>
        <p className="mb-4">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.
        </p>
        <p>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
        <hr className="mt-4" />
      </div>
      <div className="bg-white p-6">
        <h2 className="text-2xl font-bold mb-4">Already Holding Bitcoin?</h2>
        <div className="flex max-md:flex-col justify-between items-center space-x-4 max-md:-space-x-2">
          <div className="h-[20vh] w-[30vw] max-md:w-full max-md:my-4 rounded-lg bg-gradient-to-br from-green-500 to-blue-500 text-white">
            <div className="flex items-center justify-start">
              <img
                alt="Investing"
                className="rounded-lg h-[16vh] w-[10vw] max-md:w-[30vw] m-3"
                src="https://imgs.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
              />
              <div className="flex flex-col">
                <div>
                  <h2 className="font-bold text-xl w-[80%]">
                    Calculate your Profits
                  </h2>
                </div>
                <button className="bg-white text-black flex items-center w-fit rounded-lg py-1 px-2 font-bold my-2">
                  Check Now <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
          <div className="h-[20vh] w-[30vw] max-md:w-full max-md:-ml-5 rounded-lg bg-gradient-to-br from-red-400 to-red-800 text-white">
            <div className="flex items-center justify-start ">
              <img
                alt="Investing"
                className="rounded-lg h-[16vh] w-[10vw] m-3 max-md:w-[30vw]"
                src="https://imgs.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
              />
              <div className="flex flex-col">
                <div>
                  <h2 className="font-bold text-xl w-[80%]">
                    Calculate your tax liability
                  </h2>
                </div>
                <button className="bg-white text-black flex items-center w-fit rounded-lg py-1 px-2 font-bold my-2">
                  Check Now <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-4" />
        <p className="text-gray-600 mt-6">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>
    </div>
  );
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default About;
