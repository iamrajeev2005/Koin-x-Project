import React from "react";

function Advertisement() {
  return (
    <div className="bg-blue-600 text-white py-10 max-md:mx-4 px-5 rounded-xl flex items-center justify-center flex-col">
      <img
        className="md:hidden"
        src={
          "https://xgjzloifyvgpbmyonaya.supabase.co/storage/v1/object/public/files/lgvfhTYfFX/P3lGFupAHK"
        }
        alt=""
      />
      <h1 className="font-bold text-xl w-[70%] max-md:w-full text-center leading-9 pb-4">
        Get Started with KoinX for FREE
      </h1>
      <p className="text-[1vw] max-md:text-[3.5vw] max-md:pb-3 text-zinc-100 text-center">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img
        className="max-md:hidden"
        src={
          "https://xgjzloifyvgpbmyonaya.supabase.co/storage/v1/object/public/files/lgvfhTYfFX/P3lGFupAHK"
        }
        alt=""
      />
      <button className="py-2 px-4 bg-white text-zinc-900 font-bold rounded-lg">
        Get Started for FREE <i className="ri-arrow-right-line"></i>
      </button>
    </div>
  );
}

export default Advertisement;
