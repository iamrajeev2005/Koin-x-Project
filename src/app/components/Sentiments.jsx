export default function Sentiments() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <span>Sentiment</span>
      </h2>
      <h3 className="mt-4 mb-2 text-lg font-medium text-zinc-700 flex items-center gap-2">
        Key Events
        <i class="ri-information-fill"></i>
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 rounded-lg p-4 flex">
          <div className="flex-shrink-0">
            <TextIcon className="text-blue-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-bold">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim tincidunt.
            </p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
              sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>
        <div className="bg-green-100 rounded-lg p-4 flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon className="text-green-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-bold">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim tincidunt.
            </p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
              sit nisi viverra in a adipiscing metus quis del.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 mt-8">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">Analyst Estimates</h2>
          <i class="ri-information-fill text-lg font-medium text-zinc-700"></i>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center justify-center w-[9vw] h-[7.5vw] rounded-full bg-[#e6f4ea] text-[#1db954] font-bold text-2xl">
            76%
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <div className="flex items-center justify-between">
              <span className="font-medium">Buy</span>
              <div className="w-full h-2 bg-gray-200 rounded-full mx-2">
                <div
                  className="bg-[#1db954] h-2 rounded-full"
                  style={{
                    width: "76%",
                  }}
                />
              </div>
              <span className="font-medium text-[#1db954]">76%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Hold</span>
              <div className="w-full h-2 bg-gray-200 rounded-full mx-2">
                <div
                  className="bg-gray-400 h-2 rounded-full"
                  style={{
                    width: "8%",
                  }}
                />
              </div>
              <span className="font-medium text-gray-400">8%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Sell</span>
              <div className="w-full h-2 bg-gray-200 rounded-full mx-2">
                <div
                  className="bg-[#ff0000] h-2 rounded-full"
                  style={{
                    width: "16%",
                  }}
                />
              </div>
              <span className="font-medium text-[#ff0000]">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircleIcon(props) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function TextIcon(props) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}
