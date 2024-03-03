"use client";
import SwiperCore from "swiper";
import Image from "next/image";

// import { useState } from 'react';
import { Navigation, Pagination } from "swiper/modules";
import Image1 from '../../../../public/assets/img1.jpg'

import { Divider, Typography } from "antd";
import PaymentCard from "@/app/components/PaymentCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Amenities from "@/app/custom-template/Amenities";
import Slider from "react-slick";
import { getRatingStatus } from "@/app/utils/hotelDetailUtility";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineStar } from "react-icons/md";

const { Title, Paragraph, Text, Link } = Typography;


const HotelDetails = ({params}: {params: {hotel: string}}) => {
    
    const {hotel} = useSelector((store:RootState) => store.hotelWithSlug)

    const settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        mobileFirst: true,
    };

    return (
        <section className="overflow-x-hidden">
            <section>
                <Slider {...settings}>
                    {
                        hotel.photos &&
                    hotel.photos.map((photo, ind) => {
                        return(
                            <div key={ind} className="flex">
                                <Image
                                    src={photo}
                                    alt="logo"
                                    width={100}
                                    height={100}
                                    layout="responsive"
                                    className="w-full object-cover max-md:h-40"
                                />
                            </div>
                        )
                    })
                    } 
                </Slider>
            </section>
            <section  className="rounded-lg p-5 m-5 bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl after-slider-main-div flex gap-2 mt-3 max-lg:flex-col max-md:text-md ">
                <div className="left-div flex px-8 items-start flex-col w-[80%] max-lg:w-full text-[30px] max-md:text-2xl">
                    <div className="heading-div-including-rating-card flex gap-4 py-2 items-center">
                        <h1 className="flex flex-wrap capitalize tracking-tight font-extrabold">
                        {hotel.name}
                        </h1>
                        <div className="h-8 max-md:h-6 text-white bg-green-700 flex gap-1 px-2 items-center justify-center rounded-sm font-bold text-sm">
                            {hotel.rating} <i><MdOutlineStar /></i>
                        </div>
                    </div>
                    <h4 className="text-[20px] max-md:text-base py-2 flex flex-wrap tracking-tight capitalize">
                        {hotel.address}
                    </h4>
                    <h5 className="text-[15px] max-md:text-sm py-2 flex flex-wrap tracking-tight">
                        {`${hotel.rating} · Check-in rating > ${getRatingStatus(hotel.rating)}`}
                    </h5>
                    <div className="ammeneties mt-2 tracking-tight">
                        <h3 className="font-bold">Amenities</h3>

                        <div className="ammenity-1 flex justify-between py-2 max-md:lg max-md:items-center ">
                            <Amenities icon="MdOutlineWifi" text="Free Wifi" />
                            <Amenities icon='MdBathtub' text='Geyser'/>
                            <Amenities icon='MdCelebration' text='Reception' />
                            <Amenities icon='MdAddCard' text='Card' />
                        </div>

                        <div className="flex flex-col py-2">
                        <h3 className="font-bold">About this </h3>
                        <p className="text-base max-md:text-sm py-2 flex flex-wrap text-justify">
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
                            <h3 className="font-bold">
                                Ratings and reviews{" "}
                            </h3>
                            <div className=" MAIN_DIV rate w-[90%] flex    mt-5 rounded max-md:text-sm border-solid border-[1px] border-slate-300">
                                <div className="LEFT_PORTION w-[30%] bg-slate-200 flex-col max-md:text-sm max-md:w-[40%] border-solid border-[1px] border-slate-300">
                                <div className="logo w-[45%] h-[3rem] text-white bg-green-700 ml-[27%] mt-16 flex items-center justify-center rounded-sm font-bold text-lg max-md:text-[12px] max-md:w-">
                                    {hotel.rating} <i><MdOutlineStar /></i>
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
                                <div className="flex mt-2 text-lg justify-center items-center contents-center">
                                    {/* <Image src={Login} width={20}  alt="check" className=" ml-2 h-5" /> */}
                                    <h4 className="ml-2">Modassir azam</h4>
                                    <h6 className="ml-2 font-bold">.</h6>
                                    <h4 className="ml-2">12-02-2024</h4>
                                </div>
                                <div className="logo h-6 px-1 text-white bg-green-700 flex items-center justify-center rounded-sm font-bold text-sm max-md:text-[12px] max-md:w-">
                                    {hotel.rating} <i><MdOutlineStar /></i>
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
                                <div className="cus_review flex items-center justify-between ">
                                <div className="flex mt-2 text-lg justify-center contents-center">
                                    {/* <Image src={Login} width={20}  alt="check" className=" ml-2 h-5" /> */}
                                    <h4 className="ml-2">Modassir azam</h4>
                                    <h6 className="ml-2 font-bold">.</h6>
                                    <h4 className="ml-2">12-02-2024</h4>
                                </div>
                                <div className="logo h-6 px-1 text-white bg-green-700 flex items-center justify-center rounded-sm font-bold text-sm max-md:text-[12px] max-md:w-">
                                    {hotel.rating} <i><MdOutlineStar /></i>
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

                <div className="rounded-lg p-2 border-2 border-solid right-div payment-sticky-card flex flex-col w-[40%] h-[35rem] max-lg:w-full ">
                    <PaymentCard item={hotel}/>
                </div>
            </section>
        </section>
    );
}

export default HotelDetails
