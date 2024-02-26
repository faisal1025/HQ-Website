"use client";
import Navbar from "./Navbar";
import SwiperCore from "swiper";
import Image from "next/image";

// import { useState } from 'react';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image1 from "../../../public/assets/hotel_tnagar1.avif";
import Image2 from "../../../public/assets/hotel_tnagar1.avif";
import Image3 from "../../../public/assets/hotel_tnagar1.avif";
import Image4 from "../../../public/assets/hotel_tnagar1.avif";
import Image5 from "../../../public/assets/hotel_tnagar1.avif";
import Image6 from "../../../public/assets/hotel_tnagar1.avif";
import Image7 from "../../../public/assets/hotel_tnagar1.avif";

import Wifi from "../../../public/assets/wifi.svg";
import AC from "../../../public/assets/air-conditioner.svg";
import TV from "../../../public/assets/tv-retro.svg";
import CCTV from "../../../public/assets/cctv.svg";
import Check from "../../../public/assets/checkbox-circle-line.svg";
import ATM from "../../../public/assets/credit-card.svg";

import { Divider, Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

// const ReadMore = () =>{
//   const [isReadMore,setIsReadMore] = useState(true);
//   const toggleReadMore = () => {setIsReadMore(!isReadMore)};
// }

const HotelCard = () => {
  SwiperCore.use([Navigation]);
  return (
    <div>
      <div>
        <Swiper navigation>
          <div style={{ backgroundSize: "cover" }}>
            <SwiperSlide className="flex flex-row max-lg:flex-col justify-evenly">
              <Image
                src={Image1}
                alt="logo"
                className="w-[32.7%] max-lg:w-full rounded-[3.4px]"
              />
              <Image
                src={Image2}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px]"
              />
              <Image
                src={Image3}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px]"
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-row max-lg:flex-col justify-evenly">
              <Image
                src={Image4}
                alt="logo"
                className="w-[32.7%] max-lg:w-full rounded-[3.4px]"
              />
              <Image
                src={Image5}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px]"
              />
              <Image
                src={Image6}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px]"
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-row max-lg:flex-col justify-evenly">
              <Image
                src={Image7}
                alt="logo"
                className="w-[32.7%] max-lg:w-full rounded-[3.4px]"
              />
              <Image
                src={Image1}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px]"
              />
              <Image
                src={Image2}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px]"
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-row max-lg:flex-col justify-evenly">
              <Image
                src={Image3}
                alt="logo"
                className="w-[32.7%] max-lg:w-full rounded-[3.4px]"
              />
              <Image
                src={Image4}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px]"
              />
              <Image
                src={Image5}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px]"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className="after-slider-main-div flex mt-3 max-lg:flex-col ">
        <div className="left-div bg-slate-100 flex flex-col w-[65%] max-lg:w-full ">
          <div className="heading-div-including-rating-card flex ">
            <h1 className="text-[30px] ml-[5rem] mr-6 flex flex-wrap tracking-tight font-extrabold max-lg:text-[15px]">
              Super OYO Townhouse 99 Rudra Inn Near Chhatarpur Highway Road
              Metro Station
            </h1>
            <div className="w-[17%] h-[4.5rem] bg-slate-300 mr-[8%] ">
              <h1>Rating mini-card</h1>
            </div>
          </div>
          <h4 className="text-[20px] ml-[5rem] mr-6 flex flex-wrap tracking-tight">
            D-88, 100 Feet Road, Chattarpur Enclave, Chattarpur, Delhi
          </h4>
          <h5 className="text-[15px] ml-[5rem] mr-6 flex flex-wrap tracking-tight mt-1">
            5.0 · Check-in rating {`>`} Delightful experience
          </h5>
          <div className="ammeneties  ml-[5rem] mr-6 tracking-tight mt-5">
            <h3 className="text-[30px]  font-bold">Amenities</h3>
            <div className="ammenity-1 flex justify-evenly mt-6">
              <div className="flex justify-center content-center mr-[11rem]">
                {/* <Image src={Wifi} alt="wifi" width={20} /> */}
                <span className="ml-2"> Free Wifi</span>
              </div>
              <div className="flex justify-center content-center mr-[10rem]">
                {/* <Image src={AC} alt="wifi" width={20} /> */}
                <span className="ml-2"> AC</span>
              </div>
              <div className="flex justify-center content-center mr-[10rem]">
                {/* <Image src={TV} alt="wifi" width={20} /> */}
                <span className="ml-2"> TV</span>
              </div>
            </div>

            <div className="ammenity-2 flex mt-6">
              <div className="flex justify-center content-center ml-[2.6%]">
                {/* <Image src={ATM} alt="wifi" width={20} /> */}
                <span className="ml-2"> Card Payments</span>
              </div>
              <div className="flex justify-center content-center ml-[19.5%]">
                {/* <Image src={CCTV} alt="wifi" width={20} /> */}
                <span className="ml-2"> CCTV Cameras</span>
              </div>
              <div className="flex justify-center content-center ml-[11.7%]">
                {/* <Image src={Check} alt="wifi" width={20} /> */}
                <span className="ml-2"> Daily Housekeeping</span>
              </div>
            </div>

            <div className="ammenity-3 flex mt-6">
              <div className="flex justify-center content-center ml-[2.4%]">
                {/* <Image src={Check} alt="wifi" width={20} /> */}
                <span className="ml-2"> 24/7 check-in </span>
              </div>
              <div className="flex justify-center content-center ml-[20.3%]">
                {/* <Image src={Check} alt="wifi" width={20} /> */}
                <span className="ml-2"> Attached bathroom</span>
              </div>
            </div>

            <div className="About">
              <h3 className="text-[30px] mt-8 font-bold ">About this </h3>
              <p className="mt-2 flex flex-wrap text-justify mr-[7.5%]">
                Hotel SPOT ON 61091 Hotel Silver Palace Dx located in Delhi is an
                affordable option for travelers who are looking for comfort and
                convenience. The 5 km distance from India Gate and 4 km distance
                from Red Fort is within easy reach for tourists. Power backup,
                housekeeping, and reception are the amenities offered. Special
                Features The hotel room is a clean and modern space equipped with
                a fire-extinguisher, AC, and TV. There is a modern wardrobe for
                clothing storage. Location & Transportation Guests can visit Jama
                Masjid, Agrasen ki baoli and Lodhi Garden which are about 3 km, 3
                km and 7 km away from the property.
              </p>
            </div>

            <div className="testimonials OR Review">
              <h3 className="text-[30px] mt-8 font-bold">Ratings and reviews </h3>
            </div>
          </div>
        </div>
        <div className="right-div payment-sticky-card bg-gray-500 flex flex-col w-[65%] max-lg:w-full ">
          <h1>Login to see the details</h1>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
