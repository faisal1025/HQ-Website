"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import three from "../../../public/assets/3.jpg";
import Contact from "../components/Contact";

const page = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      {click ? (
        <Contact />
      ) : (
        <div className="relative flex h-screen ">
          <Image className="w-full" src={three} alt="contact-bg" width={130} />
          <div className="tracking-tighter absolute top-[2rem] left-10 max-w-full max-md:left-4">
            <div className="font-bold text-5xl text-white max-md:text-2xl ">
              HQ EVENTS
            </div>
            <div className="mt-5 rounded bg-white text-2xl font-bold text-black mix-blend-screen px-2 max-md:text-[15px] max-md:left-4">
              Growing your business
            </div>
            <div className="rounded  mt-3 bg-white text-2xl font-bold text-black mix-blend-screen px-2 max-md:text-[15px]">
              easy, Just for you.
            </div>
          </div>
          <div className="tracking-tighter absolute top-[53%] left-10 max-w-full md:left-14 max-md:left-4">
            <div className="bg-white rounded text-[33px] font-bold f  px-2 max-md:text-[15px]">
              Become an HQ
            </div>
            <div className="bg-white mt-2 rounded text-[33px] font-bold f  px-2 max-md:text-[15px]">
              within minutes
            </div>

            {/* <Link href="/join_us/request_call"> */}
            <button
              onClick={handleClick}
              className="mt-3 w-[100%] bg-slate-500 rounded h-12 text-white font-bold text-xl max-md:text-[15px] max-md:h-10"
            >
              Join HQ
            </button>
            {/* </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
