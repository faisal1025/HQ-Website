import Image from "next/image";
import Check from "../../../public/assets/Login.png";
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "./redux/store";
import { FaSearch, FaRegCalendar, FaBed, FaArrowRight } from "react-icons/fa";
import { DatePicker, Typography } from "antd";
import type { Dayjs } from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
// import HotelList from "./components/HotelList";
import Link from "next/link";
// import CitiesList from "./components/CitiesList";
// import { handleOnChange } from "./redux/contact-us/contactUsSlice";

const { RangePicker } = DatePicker;
const { Title, Text } = Typography;

type RangeValue = [Dayjs | null, Dayjs | null] | null;

const PaymentCard = () => {
  // const {topRatedHotels, citiesList, contactUs} = useSelector((store: RootState) => store)
  // const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  // const [dateVal, setDateVal] = useState<RangeValue>(null);

  const onOk = (value: RangePickerProps["value"]) => {
    //   console.log("dateVal", dateVal)
    console.log("onOk: ", value);
  };

  return (
    <div className="max-md:w-[75%] bg-gray-300 max-md:ml-[22%] max-md:text-sm max-md:mt-4 lg:h-full ">
      <div className="title flex items-center text-white bg-red-600 h-[3rem]  font-bold text-sm max-md:text-[0.6rem] ">
        {/* logo */}
        <Image src={Check} width={20} alt="check" className="ml-6 mt-[0.9px] " />
        {/* title */}
        <h3 className="ml-[0.5rem]">LOGIN NOW TO GET LOWER PRICES</h3>
        {/* login btn */}
        <button className="w-[15%] h-[2rem] bg-red-500 ml-[11%] rounded max-md:w-[13%]">
          LOGIN
        </button>
      </div>

      <div className="price ">
        <div className="flex ml-5 mt-7 font-bold text-xl">
          <h3>$1177</h3>
          <h5 className="text-[0.8rem] ml-2">$3998 </h5>
          <h3 className="ml-2 text-[0.6rem] text-yellow-500">70% off</h3>
        </div>
        <div className="ml-4 text-[0.8rem] mt-1">
          <h5>+taxes and fee $191</h5>
        </div>

        <div className="mt-10 flex flex-wrap max-w-7xl m-3 p-2 bg-white rounded-lg justify-center items-center max-md:w-[80%] max-md:ml-[10%]">
            <div className="flex flex-wrap max-w-7xl m-3 p-2 bg-white rounded-lg justify-center items-center">
        </div>
          {/* <div className="search-container flex w-1/4 max-md:w-1/3 max-sm:w-full h-14 justify-between items-center rounded-lg border-r-slate-400">
            <i className="bg-white text-black h-full text-center items-center justify-center flex w-12"><FaSearch size={20} /></i>
            <div className="flex flex-col justify-center h-full px-5 w-11/12 text-black font-sans font-semibold focus:border-0">
              <label className=" text-xs">Destination</label>
              <input type="text" className="text-base py-1 px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" value={searchText} placeholder="where to" onChange={(e) => {setSearchText(e.target.value)}}/>        
            </div>
          </div> */}
          <div className="calender-container flex w-1/3 max-md:w-1/3 max-sm:w-full h-14 justify-center items-center rounded-lg border-r-slate-400">
            <i className="bg-white text-black h-full text-center items-center justify-center flex w-12">
              <FaRegCalendar size={20} />
            </i>
            <div className="flex flex-col justify-center h-full px-5 w-full text-black font-sans font-semibold focus:border-0">
              <label className=" text-xs">From</label>
              <RangePicker
                className="text-base"
                showTime={{ format: "HH:mm" }}
                format="YYYY-MM-DD"
                onOk={onOk}
              />
            </div>
          </div>

          <div className="calender-container flex w-1/3 max-md:w-1/3 max-sm:w-full h-14 justify-center items-center rounded-lg border-r-slate-400">
            <i className="bg-white text-black h-full text-center items-center justify-center flex w-12">
              <FaRegCalendar size={20} />
            </i>
            <div className="flex flex-col justify-center h-full px-5 w-full text-black font-sans font-semibold focus:border-0">
              <label className=" text-xs">To</label>
              <RangePicker
                className="text-base"
                showTime={{ format: "HH:mm" }}
                format="YYYY-MM-DD"
                onOk={onOk}
              />
            </div>
          </div>

          <div className="room-container flex w-1/5 max-md:w-1/3 max-sm:w-full h-14 justify-center items-center rounded-lg ">
            <i className="bg-white text-black h-full text-center items-center justify-center flex w-14">
              <FaBed size={20} />
            </i>
            <div className="flex flex-col justify-center h-full w-80 max-md:w-full px-3 rounded-md bg-white font-sans font-semibold focus:border-0">
              <label className="text-black text-xs">Guest and Rooms</label>
              {/* <div className=" py-1 px-2 text-base max-w-fit">
                <h3>guest and rooms</h3>
              </div> */}
            </div>
          </div>
          {/* <button className="rounded-full m-1 bg-gradient-to-r from-slate-500 to-slate-950 w-1/5 text-white max-md:w-1/3 max-sm:w-full h-12 active:scale-75 transition hover:opacity-80" onClick={(e) => {e.stopPropagation();}}>Search</button> */}
        </div>

        <div className="mt-10">
            <div className="flex justify-between font-semibold">
                <h4 className="ml-5">Saving</h4>
                <h4 className="mr-5">$445</h4>
            </div>
            <div className="flex justify-between font-bold mt-3">
                <h4 className="ml-5">Total price</h4>
                <h4 className="mr-5">$1423</h4>
            </div>
            <button className="w-full h-9 rounded bg-green-500 hover:bg-green-600 font-semibold mt-6 lg:mt-[11.5rem]">Continue to Book</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
