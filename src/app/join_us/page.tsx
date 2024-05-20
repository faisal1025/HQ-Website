"use client"

import Image from "next/image";
import React from "react";
import reactScroll from "react-scroll";
import Link from "next/link";
import Logo from "../../../public/assets/Logo.png"
import five from "../../../public/assets/5.jpg";
import Contact from "../components/Contact";
import Testimonials from "../components/testimonials/Testimonials";
import Specifications from "../components/specifications/Specifications";
import { IoMdHome } from "react-icons/io";
import SupportPageLayout from "../SupportPageLayout/layout";
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdMyLocation } from "react-icons/md";

const JoinUs = () => {
  
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
          <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Reach to us</h2>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">

                <FaPhone className="w-14 text-pink-500 h-6"/>

                <h2 className="mt-6 text-xl font-bold text-white">Call Us</h2>
                <Link href="tel:8282323232" className="mt-1 text-sm text-gray-300">
                    +91-9654888027

                </Link>
                {/* <br />
                <a href="tel:7282323232" className="mt-1 text-sm text-gray-300">
                    +91-7282323232
                </a> */}
                </a>

                <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                <MdEmail className="w-8 text-pink-500 h-6"/>

                <h2 className="mt-4 text-xl font-bold text-white">Email Us</h2>

                <Link
                    href="mailto:contact@hqevents.in"
                    className="mt-1 text-sm text-gray-300"
                >
                contact@hqevents.in
                </Link>
                </a>

                <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                <MdMyLocation className="w-8 text-pink-500 h-6"/>
                <h2 className="mt-4 text-xl font-bold text-white">Address</h2>

                <p className="mt-1 text-sm text-gray-300">
                2nd Floor, F35/4, Okhla Phase - 2,  New Delhi - 110020
                </p>
                </a>
            </div>
            </div>
          </section>
        </div>
      </div>
 
  );
};

export default JoinUs;
