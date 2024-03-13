import Link from "next/link";
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="w-screen h-20 bg-white flex items-center justify-between px-12 max-md:px-5">
      <div className="logo w-28 ">
        <Image
          src="https://app.koinx.com/static/media/Logo.3331aa2fc2f35c00e58921b44a2ebf0d.svg"
          alt="logo"
        />
      </div>
      <div className="nav-links flex items-center gap-8 max-md:hidden">
        {["Crypto Taxes", "Free Tools", "Resource Center"].map(
          (item, index) => (
            <Link key={index} className="font-bold text-zinc-900" href={"/#"}>
              {item}
            </Link>
          )
        )}
        <div className="rounded-md bg-blue-600 text-white px-6 py-2">
          <button>Get Started</button>
        </div>
      </div>
      <div className="md:hidden">
        <i className="ri-menu-line cursor-pointer text-3xl "></i>
      </div>
    </div>
  );
}

export default Header;
