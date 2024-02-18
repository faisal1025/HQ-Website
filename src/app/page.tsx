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
      <div className="flex flex-wrap w-full m-3 max-w-6xl bg-white rounded-lg justify-center items-center">
        <div className="search-container flex w-1/5 max-md:w-1/3 max-sm:w-full h-16 justify-center items-center rounded-lg border-r-slate-400">
          <i className="bg-white text-black h-full text-center items-center justify-center flex w-12"><FaSearch size={20} /></i>
          <input type="text" className="h-full px-5 w-full text-black font-sans font-semibold text-baseg focus:border-0" value={searchText} placeholder="where to" onChange={(e) => {setSearchText(e.target.value)}}/>        </div>
        <div className="calender-container flex w-1/5 max-md:w-1/3 max-sm:w-full h-16 justify-center items-center rounded-lg border-r-slate-400">
          <i className="bg-white text-black h-full text-center items-center justify-center flex w-12"><FaRegCalendar size={20} /></i>
          <RangePicker className="h-full px-5 w-full text-black font-sans font-semibold text-base focus:border-0" value={dateVal} onChange={setDateVal} />
        </div>
        <div className="calender-container flex w-1/5 max-md:w-1/3 max-sm:w-full h-16 justify-center items-center rounded-lg border-r-slate-400">
          <i className="bg-white text-black h-full text-center items-center justify-center flex w-12"><FaBed size={20} /></i>
          <div className="h-full flex items-center w-full justify-between lowercase px-3 rounded-md text-slate-400 bg-white font-sans font-semibold text-base focus:border-0" >
            <h3>guest and rooms</h3>
          </div>
        </div>
        <button className="rounded-full m-1 bg-black w-1/5  max-md:w-1/3 max-sm:w-full h-12 active:scale-75" onClick={(e) => {e.stopPropagation();}}>Search</button>
      </div>
    </div>
  );
}
