"use client"

import Image from "next/image";
import React, {useState} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "./redux/store";
import { FaSearch, FaRegCalendar, FaBed, FaArrowRight } from "react-icons/fa";
import { DatePicker, Typography } from 'antd';
import type { Dayjs } from 'dayjs';
import { RangePickerProps } from "antd/es/date-picker";
import HotelList from "./components/HotelList";
import Link from "next/link";
import CitiesList from "./components/CitiesList";
import { handleOnChange } from "./redux/contact-us/contactUsSlice";

const { RangePicker } = DatePicker;
const {Title, Text} = Typography


type RangeValue = [Dayjs | null, Dayjs | null] | null;

export default function Home() {
  const {topRatedHotels, citiesList, contactUs} = useSelector((store: RootState) => store)
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [dateVal, setDateVal] = useState<RangeValue>(null);
  
  const onOk = (value: RangePickerProps['value']) => {
    console.log("dateVal", dateVal)
    console.log('onOk: ', value);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center home-container">
        <h1 className="text-center p-2 tracking-tight text-4xl font-bold font-sans text-black max-sm:text-2xl" >We compare hotel prices from 100s of sites</h1>
        <h2 className="text-center p-2 text-lg font-semibold font-sans max-sm:text-base" >We’ll do the searching. You do the saving.</h2>
        <div className="flex flex-wrap max-w-7xl m-3 p-2 bg-white rounded-lg justify-center items-center">
          <div className="search-container flex w-1/4 max-md:w-1/3 max-sm:w-full h-14 justify-between items-center rounded-lg border-r-slate-400">
            <i className="bg-white text-black h-full text-center items-center justify-center flex w-12"><FaSearch size={20} /></i>
            <div className="flex flex-col justify-center h-full px-5 w-11/12 text-black font-sans font-semibold focus:border-0">
              <label className=" text-xs">Destination</label>
              <input type="text" className="text-base py-1 px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" value={searchText} placeholder="where to" onChange={(e) => {setSearchText(e.target.value)}}/>        
            </div>
          </div>
          <div className="calender-container flex w-1/3 max-md:w-1/3 max-sm:w-full h-14 justify-center items-center rounded-lg border-r-slate-400">
            <i className="bg-white text-black h-full text-center items-center justify-center flex w-12"><FaRegCalendar size={20} /></i>
            <div className="flex flex-col justify-center h-full px-5 w-full text-black font-sans font-semibold focus:border-0">
              <label className=" text-xs">Date</label>
              <RangePicker className="text-base" 
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD" onOk={onOk}
              />
            </div>
          </div>
          <div className="room-container flex w-1/5 max-md:w-1/3 max-sm:w-full h-14 justify-center items-center rounded-lg border-r-slate-400">
            <i className="bg-white text-black h-full text-center items-center justify-center flex w-14"><FaBed size={20} /></i>
            <div className="flex flex-col justify-center h-full w-80 max-md:w-full px-3 rounded-md bg-white font-sans font-semibold focus:border-0">
              <label className="text-black text-xs">Guest and Rooms</label>
              <div className=" text-slate-400 py-1 px-2 text-base max-w-fit">
                <h3>guest and rooms</h3>
              </div>
            </div>
          </div>
          <button className="rounded-full m-1 bg-gradient-to-r from-slate-500 to-slate-950 w-1/5 text-white max-md:w-1/3 max-sm:w-full h-12 active:scale-75 transition hover:opacity-80" onClick={(e) => {e.stopPropagation();}}>Search</button>
        </div>
      </section>
      <section className="rounded-lg p-5 m-5 bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl">
        <Title level={3} className="dark:!text-white font-sans font-semibold">Take a dip at these top-rated hotels</Title>
        <div className="relative mt-14">
          <HotelList list={topRatedHotels.hotels} />
        </div>
        <div className="flex px-4 py-2 justify-end items-center">
          <Link href={'#'} className="flex items-center gap-1 font-sans font-bold text-blue-600">
            Explore more stays
            <i>
              <FaArrowRight />
            </i>
          </Link>
        </div>
      </section>
      <section className="rounded-lg p-5  m-5  bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl">
        <Title level={3} className="dark:!text-white font-sans font-semibold">Popular Searches</Title>
        <div className="relative mt-14">
          <CitiesList list={citiesList.cities} />
        </div>
      </section>
      <section className="flex justify-around flex-wrap gap-4 p-5 m-5 items-center border-solid shadow-xl bg-transparent rounded-lg border-[1px] border-slate-800">
          <div className="flex gap-4 justify-around items-center">
            <Image src={'/assets/hot-sale.png'} content="image/gif" alt="mail" width={100} height={100} />
            <div className="flex flex-col">
              <Title level={3} className="contact-heading dark:!text-white font-sans font-semibold max-md:text-lg">Get access to exclusive deals</Title>
              <Text className="contact-subtitle dark:!text-white font-sans font-medium text-base max-md:text-sm">We will notify you only our best deals</Text>
            </div>
          </div>
          <div className="email-contact flex gap-4 justify-center items-center">
            <input type="text" className="contact-input rounded-lg border-2 border-gray-500 border-solid p-4" placeholder="Your Email" value={contactUs.email} onChange={(e) => dispatch(handleOnChange(e.target.value))} />
            <button className="notify-me-button rounded p-4 active:scale-75 transition hover:opacity-80 text-white bg-gradient-to-r from-red-400 to-red-500">Notify me</button>
          </div>
      </section>
      <section className="bottom-hero flex justify-evenly min-h-96 flex-wrap gap-4 p-5 m-5 items-center rounded-lg">
          <div className="w-2/4 max-sm:w-full">
            <Image src={'/assets/world-tour.png'} alt="world-tour-img" width={0} height={0} className="w-full h-auto object-contain" layout="responsive"/>
          </div>
          <div className="w-2/5 max-sm:w-full flex justify-center">
            <div className="flex flex-col justify-center">
              <Title level={3} className="!text-white title-text" >Your Gateway to Blissful Stays</Title>
              <Text className="!text-white para-text text-base">We are there for you every time every where</Text>
              <ul className="grid grid-cols-3 max-md:grid-cols-2 gap-4 my-4 list-none">
                {
                  citiesList.cities && citiesList.cities.map((city, ind) => {
                    return (
                      <li key={city.id} className="title-text text-blue-500 font-sans font-semibold">
                        {city.name}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
      </section>
    </>
  );
}
