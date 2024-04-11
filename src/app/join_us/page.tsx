"use client";
import Image from "next/image";
import React, { Suspense, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";


import five from "../../../public/assets/5.jpg";
import Contact from "../components/Contact";
import Testimonials from "../components/testimonials/Testimonials";
import Specifications from "../components/specifications/Specifications";

const JoinUs = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="bg-slate-200">
      <div className="relative flex h-screen ">
        <Image
          className="w-full " //max-md:h-[50%]
          src={five}
          alt="contact-bg"
          width={130}
        />
        <div className="tracking-tighter absolute top-[4rem] left-10 max-w-full max-md:left-4 max-md:text-sm">
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
        <div className="tracking-tighter absolute top-[19px] left-[65%] max-w-full max-md:left-5">
          <ul className=" flex flex-row gap-9 font-bold tracking-tighter text-white cursor-pointer text-xl">
        

            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="hover:text-slate-300 max-md:text-[17px]">Testimonials</li>
            </Link>
            <Link
              to="specifications"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="hover:text-slate-300 max-md:text-[17px]">Specifications</li>
            </Link>

            <Link
              to="contact_us"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="hover:text-slate-300 max-md:text-[17px]">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="tracking-tighter text-slate-500 absolute top-[53%]  max-w-full md:left-14 max-md:left-4 max-md:top-[30%]">
          <div className="bg-white rounded text-[33px] font-bold f  px-2 max-md:text-[15px]">
            Become an HQ
          </div>
          <div className="bg-white mt-2 rounded text-[33px] font-bold f  px-2 max-md:text-[15px]">
            within minutes
          </div>

          <Link
            to="contact_us"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button
              onClick={handleClick}
              className="mt-3 w-[100%] bg-slate-400 rounded h-12 text-white font-bold text-xl max-md:text-[15px] max-md:h-10 hover:bg-slate-500"
            >
              Join HQ
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <Testimonials />
        <Specifications/>
        <Contact />
      </div>
    </div>
  );
};

export default JoinUs;
