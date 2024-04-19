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


const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Link href="/">
          <div className="flex mt-3 ml-3 max-md:mt-3 cursor-pointer">
            <IoMdHome className=" w-8 h-6 " />
            <h3 className="font-bold text-xl max-md:text-sm max-md:my-1">
              Home
            </h3>
          </div>
        </Link>
        <h1 className="dark:text-white ml-[43%] text-4xl font-bold max-md:text-[30px] max-md:ml-[32%] max-lg:ml-[37%] tracking-tight">
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

          <div className="mt-12 text-center">
            {/* <a
        href="#"
        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

<div className="max-w-4xl mx-auto px-4 py-8">
  {/* <h2 className="text-4xl font-bold mb-4">About Happiness Quotient</h2> */}
  {/* <p className="mb-8">
  Welcome to our luxurious hotels. Our hotels offers an unforgettable
  experience for every guest.
</p>

<div className="mb-8">
  <h3 className="text-xl font-semibold mb-2">History</h3>
  <p>
    Established in 2019, our hotel has a rich history of providing
    exceptional hospitality. Over the years, we have become a beloved
    destination for travelers seeking comfort and luxury.
  </p>
</div>

<div className="mb-8">
  <h3 className="text-xl font-semibold mb-2">Mission and Values</h3>
  <p>
    At [Hotel Name], our mission is to exceed guest expectations by
    delivering personalized service, luxurious accommodations, and
    unforgettable experiences. We are committed to excellence,
    integrity, and sustainability in everything we do.
  </p>
</div>

<div className="mb-8">
  <h3 className="text-xl font-semibold mb-2">Accommodation</h3>
  <p>
    Indulge in luxury with our spacious rooms and suites, each
    thoughtfully designed to ensure maximum comfort and relaxation. From
    stunning views to plush amenities, our accommodations are a
    sanctuary away from home.
  </p>
</div>

<div className="mb-8">
  <h3 className="text-xl font-semibold mb-2">Amenities</h3>
  <p>
    Experience the height of luxury with our range of amenities,
    including a state-of-the-art fitness center, rejuvenating spa, and
    exquisite dining options. Whether you&apos;re here for business or
    pleasure, we have everything you need for a memorable stay.
  </p>
</div>

<div className="mb-8">
  <h3 className="text-xl font-semibold mb-2">Events and Meetings</h3>
  <p>
    Host your next event or meeting in style at [Hotel Name]. With
    flexible event spaces, cutting-edge technology, and expert event
    planning services, we&apos;ll ensure your event is a resounding
    success.
  </p>
</div>

<div className="mb-8">
  <h3 className="text-xl font-semibold mb-2">
    Sustainability Initiatives
  </h3>
  <p>
    We are dedicated to preserving the environment and giving back to
    the community. From energy-efficient practices to local sourcing, we
    are committed to sustainability in all aspects of our operations.
  </p>
</div>

<div className="mb-8">
  <h3 className="text-xl font-semibold mb-2">
    Location and Surroundings
  </h3>
  <p>
    Explore the vibrant [location] area surrounding our hotel, with
    attractions, shopping, and dining options just steps away.
  </p>
</div>

<div className="mb-8">
  <h3 className="text-xl font-semibold mb-2">Team Members</h3>
  <p>
    Meet the dedicated team behind [Hotel Name]. From our experienced
    management team to our friendly staff, we are here to ensure your
    stay is nothing short of perfect.
  </p>
</div>

<div>
  <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
  <p>
    Ready to book your stay or have questions? Contact us today at
    [phone number] or [email address]. We look forward to welcoming you
    to [Hotel Name].
  </p>
</div> */}
</div>

export default page;
