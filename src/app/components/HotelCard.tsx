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

import Image2 from "../../../public/assets/img1.jpg";
import Image1 from "../../../public/assets/img2.jpg";
import Image3 from "../../../public/assets/img3.jpg";
import Image4 from "../../../public/assets/img4.jpg";
import Image5 from "../../../public/assets/img5.jpg";
import Image6 from "../../../public/assets/img6.jpg";
import Image7 from "../../../public/assets/img7.jpg";

import Wifi from "../../../public/assets/wifi.svg";
import AC from "../../../public/assets/air-conditioner.svg";
import TV from "../../../public/assets/tv-retro.svg";
import CCTV from "../../../public/assets/cctv.svg";
import Check from "../../../public/assets/checkbox-circle-line.svg";
import ATM from "../../../public/assets/credit-card.svg";
import Login from "../../../public/assets/Login.png";

import { Divider, Typography } from "antd";
import PaymentCard from "./PaymentCard";
import Footer from "./Footer";

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
            <SwiperSlide className="flex flex-row max-md:flex-col justify-evenly">
              <Image
                src={Image1}
                alt="logo"
                className="w-[32.7%] max-lg:w-full lg:w-full rounded-[3.4px]"
              />
              <Image
                src={Image2}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px] md:hidden"
              />
              <Image
                src={Image3}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px] md:hidden"
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-row max-lg:flex-col justify-evenly">
              <Image
                src={Image4}
                alt="logo"
                className="w-[32.7%] max-lg:w-full rounded-[3.4px] lg:w-full"
              />
              <Image
                src={Image5}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px] md:hidden"
              />
              <Image
                src={Image6}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px] md:hidden"
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-row max-lg:flex-col justify-evenly">
              <Image
                src={Image7}
                alt="logo"
                className="w-[32.7%] max-lg:w-full rounded-[3.4px] lg:w-full"
              />
              <Image
                src={Image1}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px] md:hidden"
              />
              <Image
                src={Image2}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px] md:hidden"
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-row max-lg:flex-col justify-evenly">
              <Image
                src={Image6}
                alt="logo"
                className="w-[32.7%] max-lg:w-full rounded-[3.4px] lg:w-full"
              />
              <Image
                src={Image4}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px] md:hidden"
              />
              <Image
                src={Image5}
                alt="logo"
                className="w-[32.7%] max-lg:hidden rounded-[3.4px] md:hidden"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className="after-slider-main-div flex mt-3 max-lg:flex-col max-md:text-md ">
        <div className="left-div bg-slate-00 flex flex-col w-[80%] max-lg:w-full">
          <div className="heading-div-including-rating-card flex max-md:text-sm">
            <h1 className="text-[30px] ml-[5rem] mr-6 flex flex-wrap tracking-tight font-extrabold max-md:text-[17px]">
              Super OYO Townhouse 99 Rudra Inn Near Chhatarpur Highway Road
              Metro Station
            </h1>
            <div className="w-[17%] h-[4.5rem] ">
            <div className="logo mt-2 mr-4 w-9 h-[1.5rem] text-white bg-green-700 flex items-center justify-center rounded-sm font-bold text-sm max-md:text-[12px] max-md:w-">
              4 *
            </div>
            </div>
          </div>
          <h4 className="max-md:text-sm text-[20px] ml-[5rem] mr-6 flex flex-wrap tracking-tight">
            D-88, 100 Feet Road, Chattarpur Enclave, Chattarpur, Delhi
          </h4>
          <h5 className="max-md:text-sm text-[15px] ml-[5rem] mr-6 flex flex-wrap tracking-tight mt-1">
            5.0 · Check-in rating {`>`} Delightful experience
          </h5>
          <div className="ammeneties  ml-[5rem] mr-6 tracking-tight mt-5">
            <h3 className="text-[30px]  font-bold">Amenities</h3>

            <div className="ammenity-1 flex mt-6 max-md:text-[10px] max-md:items-center ">
              <div className="flex justify-center content-center ml-[2.6%]">
                <Image src={Wifi} alt="wifi" width={20} />
                <span className="ml-2">Free Wifi</span>
              </div>
              <div className="flex justify-center content-center ml-[18.5%]">
                <Image src={AC} alt="wifi" width={20} />
                <span className="ml-2"> AC</span>
              </div>
              <div className="flex justify-center content-center ml-[22.5%]">
                <Image src={TV} alt="wifi" width={20} />
                <span className="ml-2"> TV</span>
              </div>
            </div>

            <div className="ammenity-2 flex mt-6 max-md:text-[10px] max-md:items-center max-md:justify-evenly">
              <div className="flex justify-center content-center ml-[2.5%]">
                <Image src={ATM} alt="wifi" width={20} />
                <span className="ml-2"> Card Payments</span>
              </div>
              <div className="flex justify-center content-center ml-[11.5%]">
                <Image src={CCTV} alt="wifi" width={20} />
                <span className="ml-2"> CCTV Cameras</span>
              </div>
              <div className="flex justify-center content-center ml-[9.1%]">
                <Image src={Check} alt="wifi" width={20} />
                <span className="ml-2"> Geieser</span>
              </div>
            </div>

            <div className="ammenity-3 flex mt-6 max-md:text-[10px] max-md:items-center ">
              <div className="flex justify-center content-center ml-[2.5%]">
                <Image src={Check} alt="wifi" width={20} />
                <span className="ml-2"> 24/7 check-in </span>
              </div>
              <div className="flex justify-center content-center ml-[12%]">
                <Image src={Check} alt="wifi" width={20} />
                <span className="ml-2"> Attached bathroom</span>
              </div>
            </div>

            <div className="About">
              <h3 className="text-[30px] mt-8 font-bold ">About this </h3>
              <p className="mt-2 flex flex-wrap text-justify mr-[7.5%]">
                Hotel SPOT ON 61091 Hotel Silver Palace Dx located in Delhi is
                an affordable option for travelers who are looking for comfort
                and convenience. The 5 km distance from India Gate and 4 km
                distance from Red Fort is within easy reach for tourists. Power
                backup, housekeeping, and reception are the amenities offered.
                Special Features The hotel room is a clean and modern space
                equipped with a fire-extinguisher, AC, and TV. There is a modern
                wardrobe for clothing storage. Location & Transportation Guests
                can visit Jama Masjid, Agrasen ki baoli and Lodhi Garden which
                are about 3 km, 3 km and 7 km away from the property.
              </p>
            </div>

            <div className="testimonials OR Review">
              <h3 className="text-[30px] mt-8 font-bold max-md:text-[25px]">
                Ratings and reviews{" "}
              </h3>
              <div className=" MAIN_DIV rate w-[90%] flex    mt-5 rounded max-md:text-sm border-solid border-[1px] border-slate-300">
                <div className="LEFT_PORTION w-[30%] bg-slate-200 flex-col max-md:text-sm max-md:w-[40%] border-solid border-[1px] border-slate-300">
                  <div className="logo w-[45%] h-[3rem] text-white bg-green-700 ml-[27%] mt-16 flex items-center justify-center rounded-sm font-bold text-lg max-md:text-[12px] max-md:w-">
                    4.8 *
                  </div>
                  <h3 className="ml-[27%] text-sm font-bold mt-1 max-md:text-[10px]">
                    EXCELLENT
                  </h3>
                  <h4 className="ml-[27%] text-[12px] max-md:text-[9px]">
                    1435 ratings
                  </h4>
                </div>

                <div className=" RIGHT_PORTION flex flex-col ml-2 w-[70%] ">
                  <div className="flex mt-1 ">
                    <div className="mb-1 text-base flex  dark:text-white ml-4 text-[13px] max-md:">
                      5
                    </div>
                    <h4 className="text-xl ml-2">*</h4>
                    <h4 className="ml-[80%] text-[12px] text-base max-md:ml-[58%]">
                      90%
                    </h4>
                  </div>
                  <div className="w-[24rem] max-md:w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-900 ml-4">
                    <div className="bg-red-500 h-1 rounded-full dark:bg-blue-500 w-[90%]"></div>
                  </div>

                  <div className="flex ">
                    <div className="mb-1 text-base  dark:text-white ml-4 text-[13px]">
                      4
                    </div>
                    <h4 className="text-xl ml-2">*</h4>
                    <h4 className="ml-[80%] text-[12px] text-base max-md:ml-[58%]">
                      90%
                    </h4>
                  </div>
                  <div className="w-[24rem] max-md:w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-900 ml-4">
                    <div className="bg-red-500 h-1 rounded-full dark:bg-blue-500 w-[90%]"></div>
                  </div>

                  <div className="flex ">
                    <div className="mb-1 text-base  dark:text-white ml-4 text-[13px]">
                      3
                    </div>
                    <h4 className="text-xl ml-2">*</h4>
                    <h4 className="ml-[80%] text-[12px] text-base max-md:ml-[58%]">
                      90%
                    </h4>
                  </div>
                  <div className="w-[24rem] max-md:w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-900 ml-4">
                    <div className="bg-red-500 h-1 rounded-full dark:bg-blue-500 w-[90%]"></div>
                  </div>

                  <div className="flex ">
                    <div className="mb-1 text-base  dark:text-white ml-4 text-[13px]">
                      2
                    </div>
                    <h4 className="text-xl ml-2">*</h4>
                    <h4 className="ml-[80%] text-[12px] text-base max-md:ml-[58%]">
                      90%
                    </h4>
                  </div>
                  <div className="w-[24rem] max-md:w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-900 ml-4">
                    <div className="bg-red-500 h-1 rounded-full dark:bg-blue-500 w-[90%]"></div>
                  </div>

                  <div className="flex ">
                    <div className="mb-1 text-base  dark:text-white ml-4 text-[13px]">
                      1
                    </div>
                    <h4 className="text-xl ml-2">*</h4>
                    <h4 className="ml-[80%] text-[12px] text-base max-md:ml-[58%]">
                      90%
                    </h4>
                  </div>
                  <div className="w-[24rem] max-md:w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-900 ml-4">
                    <div className="bg-red-500 h-1 rounded-full dark:bg-blue-500 w-[90%]"></div>
                  </div>
                </div>
              </div>

              <div className="CUS_REVIEW_MAIN_1 mt-9 bg-slate-00">
                <div className="cus_review flex justify-between ">
                  <div className="flex mt-2 justify-center contents-center">
                    <Image src={Login} width={20}  alt="check" className=" ml-2 h-5" />
                    <h4 className="ml-2">Modassir azam</h4>
                    <h6 className="ml-2 font-bold">.</h6>
                    <h4 className="ml-2">12-02-2024</h4>
                  </div>
                  <div className="logo mt-2 mr-4 w-9 h-[1.5rem] text-white bg-green-700 flex items-center justify-center rounded-sm font-bold text-sm max-md:text-[12px] max-md:w-">
                    4 *
                  </div>
                </div>
                <div className="review_discrip mt-2 text-sm ml-2">The room was neet and clean,the hotel staff was also very cooperative and helpful.though it&apos;s is difficult to locate the hotel.</div>
                <div className="review_img flex mt-5">
                  <Image src={Image1} alt="fs" width={120} height={150} className="ml-2 rounded"/>
                  <Image src={Image1} alt="fs" width={120} height={150} className="ml-2 rounded"/>
                </div>
              </div>

                <hr className="w-full  mt-9"/>

              <div className="CUS_REVIEW_MAIN_2 mt-2 ">
                <div className="cus_review flex justify-between ">
                  <div className="flex mt-2 justify-center contents-center">
                    <Image src={Login} width={20}  alt="check" className=" ml-2 h-5" />
                    <h4 className="ml-2">Modassir azam</h4>
                    <h6 className="ml-2 font-bold">.</h6>
                    <h4 className="ml-2">12-02-2024</h4>
                  </div>
                  <div className="logo mt-2 mr-4 w-9 h-[1.5rem] text-white bg-green-700 flex items-center justify-center rounded-sm font-bold text-sm max-md:text-[12px] max-md:w-">
                    4 *
                  </div>
                </div>
                <div className="review_discrip mt-2 text-sm ml-2">The room was neet and clean,the hotel staff was also very cooperative and helpful.though it&apos;s is difficult to locate the hotel.</div>
                <div className="review_img flex mt-5">
                  <Image src={Image1} alt="fs" width={120} height={150} className="ml-2 rounded"/>
                  <Image src={Image1} alt="fs" width={120} height={150} className="ml-2 rounded"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-div payment-sticky-card  flex flex-col w-[40%] h-[35rem] mr-7 max-lg:w-[95%] sticky">
          <PaymentCard />
        </div>
      </div>

        <div className="main_map mt-3 bg-slate flex flex-col ml-[7%]  max-md:ml-[23%] ">
        <h3 className="text-[30px] mt-8 font-bold max-md:text-[25px] ">Locate Us</h3>
            <div className="w-[60%] h-[14rem] rounded-md overflow-hidden mt-2 max-md:w-[90%]  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90567.5103257972!2d20.365943012636272!3d44.81678309583739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7163a682044d%3A0x2a07a073e49f36ae!2sStridon%20group!5e0!3m2!1sen!2snl!4v1682522248790!5m2!1sen!2snl"
              loading="lazy"
              height="100%"
              width="100%"
            ></iframe>
          </div>
        </div>



        <div className="footer">
          <Footer/>
        </div>

        
    </div>
  );
};

export default HotelCard;

