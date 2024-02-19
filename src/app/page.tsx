"use client"

import Image from "next/image";
import react, {useState} from "react"
import { FaSearch, FaRegCalendar, FaBed } from "react-icons/fa";
import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

type RangeValue = [Dayjs | null, Dayjs | null] | null;

export default function Home() {

  const [searchText, setSearchText] = useState("");
  const [dateVal, setDateVal] = useState<RangeValue>(null);

  return (
    <div className="flex flex-col justify-center items-center home-container">
      <h1 className="text-center py-2 text-4xl font-bold font-sans text-black" >We compare hotel prices from 100s of sites</h1>
      <h2 className="text-center py-2 text-lg font-semibold font-sans" >We’ll do the searching. You do the saving.</h2>
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
            <RangePicker className="text-base" value={dateVal} onChange={setDateVal} />
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
        <button className="rounded-full m-1 bg-black w-1/5  max-md:w-1/3 max-sm:w-full h-12 active:scale-75 transition hover:opacity-50" onClick={(e) => {e.stopPropagation();}}>Search</button>
      </div>
    </div>
  );
}
