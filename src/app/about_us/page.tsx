import React from "react";
import Link from "next/link";

import Image from "next/image";

import { IoMdHome } from "react-icons/io";
import { IoIosApps } from "react-icons/io";
import { FaCartFlatbed } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { FaEnvira } from "react-icons/fa";
import { MdSurroundSound } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";

import about_1 from '../../../public/assets/about_1.avif'
import about_2 from '../../../public/assets/about_2.avif'
import SupportPageLayout from "../SupportPageLayout/layout";


const page = () => {
  return (
    <SupportPageLayout>
      <div className="overflow-x-hidden">
        <div>
          <h1 className="dark:text-white ml-[43%] py-3 text-4xl font-bold max-md:text-[30px] max-md:ml-[32%] max-lg:ml-[37%] tracking-tight">
            ABOUT US
          </h1>
        </div>

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <Image
                  alt="about our company"
                  src={about_1}
                  className="absolute inset-0 h-full w-full object-cover"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-3xl">The First Step</h2>

                <p className="dark:text-white mt-4 text-gray-600 text-lg font-bold text-wrap">
                  Our journey got started as HQ events in year 2017 with top notch
                  service in managing events at various occasions. We managed
                  events at different hotels, the occasions includes national,
                  international, domestic as well as personal events, we got
                  rewarded as top events management company through different
                  years.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <Image
                    alt="about our journey"
                    src={about_2}
                    className="absolute inset-0 h-full w-full object-cover"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-100">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div className="p-8 sm:p- lg:p-24">
                  <h2 className="text-4xl font-bold sm:text-3xl dark:text-black">
                    The Second step - JOURNEY TOWARDS THE SUCCESS.
                  </h2>

                  <p className="mt-4 text-gray-600 font-bold">
                    After succesfully serving througout years as Events management
                    company, we Established an HQ as Hotel aggegator to reduce the
                    overhead of customers that took time , money to find the best
                    suitable pocket friendly hotels for them. In HQ world the
                    Hotel owner can list their hotels within minutes and start
                    getting benifited with best user experience
                  </p>

                  {/* <a
                    href="#"
                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Get in Touch
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-slate-100">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
              <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                <h2 className="text-3xl font-bold sm:text-4xl dark:text-black">
                  What make us different?
                </h2>

                <p className="mt-4 text-gray-600 font-bold">
                  Welcome to our luxurious hotels. Our hotels offers an
                  unforgettable experience for every guest Our journey got started
                  as HQ events in year 2017 with top notch service in managing
                  events at various occasions. We managed events at different
                  hotels, the occasions includes national, international, domestic
                  as well as personal events, we got rewarded as top events
                  management company through different years.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 dark:text-black">
                <a className="hover:bg-slate-200 block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-gray-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                    <FaCartFlatbed />
                  </span>

                  <h2 className="mt-2 font-bold dark:text-black">Accoomodation</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Accomodation with best comfort and eassy.
                  </p>
                </a>

                <a className="hover:bg-slate-200 block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-gray-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <span className="inline-block rounded-lg bg-gray-50 p-3 ">
                    <IoIosApps />
                  </span>

                  <h2 className="mt-2 font-bold">Amenities</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Experience the height of luxury with our range of amenities.
                  </p>
                </a>

                <a className="hover:bg-slate-200 block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-gray-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                    <MdEmojiEvents/>
                  </span>

                  <h2 className="mt-2 font-bold">Events</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    flexible event spaces, cutting-edge technology.
                  </p>
                </a>

                <a className="hover:bg-slate-200 block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-gray-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <span className="inline-block rounded-lg bg-gray-50 p-3">

                    <FaEnvira/>
                  </span>

                  <h2 className="mt-2 font-bold">Eco-friendly</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Dedicated to preserving the environment.
                  </p>
                </a>

                <a className="hover:bg-slate-200 block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-gray-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <span className="inline-block rounded-lg bg-gray-50 p-3">
  
                    <MdSurroundSound/>
                  </span>

                  <h2 className="mt-2 font-bold">Surroundings</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Explore the vibrant location area surrounding our hotel.
                  </p>
                </a>

                <a className="hover:bg-slate-200 block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-gray-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <span className="inline-block rounded-lg bg-gray-50 p-3">

                    <GiReceiveMoney/>
                  </span>

                  <h2 className="mt-2 font-bold">Cost effecient</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Best deals that is cheap and best.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </SupportPageLayout>
  );
};

export default page;
