"use client";
import Image from "next/image";
import React, { Suspense, useState } from "react";
import reactScroll from "react-scroll";
import Link from "next/link";
import Logo from "../../../public/assets/Logo.png"
import five from "../../../public/assets/5.jpg";
import Contact from "../components/Contact";
import Testimonials from "../components/testimonials/Testimonials";
import Specifications from "../components/specifications/Specifications";
import { IoMdHome } from "react-icons/io";

const JoinUs = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen" style={{background: `#ffffff url(/assets/5.jpg) no-repeat center`, backgroundSize: 'cover'}}>
        <div className="flex justify-between max-sm:flex-wrap items-center gap-3 tracking-tighter max-w-full h-[15vh] p-3">
          <Link href={'/'} className="flex items-center lg:ml-[10%] cursor-pointer">
            <Image src={Logo} alt="Logo" width={65} />
          </Link>
          <ul className=" flex flex-row max-sm:w-full justify-end max-sm:gap-5 gap-9 font-bold tracking-tighter text-white cursor-pointer text-xl ">
           
            <reactScroll.Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="hover:text-slate-300  max-md:text-[15px]">
                Testimonials
              </li>
            </reactScroll.Link>
          
            <reactScroll.Link
              to="specifications"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="hover:text-slate-300 max-md:text-[15px]">
                Specifications
              </li>
            </reactScroll.Link>

            <reactScroll.Link
              to="contact_us"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="hover:text-slate-300 max-md:text-[15px]">
                Contact Us
              </li>
            </reactScroll.Link>
          </ul>
        </div>

        <div className="w-full flex justify-start h-[80vh] px-10">
          <div className="flex flex-col justify-center items-center h-full gap-16">
            <div className="tracking-tighter text-2xl max-sm:text-xl w-fit">
              <h4 className="font-bold text-5xl max-sm:text-3xl text-white ">
                HQ EVENTS
              </h4>
              <h4 className="mt-5 rounded bg-white max-sm:text-sm font-bold text-black mix-blend-screen px-2 ">
                Growing your business
              </h4>
              <h4 className="rounded  mt-3 bg-white max-sm:text-sm font-bold text-black mix-blend-screen px-2 ">
                easy, Just for you.
              </h4>
            </div>
            <div className="tracking-tighter text-3xl max-sm:text-xl text-slate-500 w-fit">
              <h4 className="bg-white rounded font-bold px-2 ">
                Become an HQ
              </h4>
              <h4 className="bg-white mt-2 rounded font-bold  px-2">
                within minutes
              </h4>

              <reactScroll.Link
                to="contact_us"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button
                  className="mt-3 w-[100%] bg-gradient-to-tr from-slate-800 to-slate-400 rounded h-12 text-white font-bold text-xl max-md:text-[15px] max-md:h-10 hover:bg-slate-500"
                >
                  Join HQ
                </button>
              </reactScroll.Link>
            </div>
          </div>
        </div>

      </div>

      <div className="">
        <Testimonials />
        <Specifications />
        <Contact />
      </div>
    </div>
  );
};

export default JoinUs;
