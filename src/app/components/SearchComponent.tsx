"use client"

import React, { useState } from 'react'
import SearchContainer from './SearchContainer';
import DateRangePicker from './DateRangePicker';
import GuestSelector from './GuestSelector';
import type { Dayjs } from 'dayjs';
import { RangePickerProps } from 'antd/es/date-picker';

type RangeValue = [Dayjs | null, Dayjs | null] | null;

const SearchComponent = () => {
    const [searchText, setSearchText] = useState("");
    const [dateVal, setDateVal] = useState<RangeValue>(null);
    const onOk = (value: RangePickerProps['value']) => {
        console.log("dateVal", dateVal)
        console.log('onOk: ', value);
    };
    return (
        <div className="flex flex-wrap max-w-7xl m-3 p-2 bg-white rounded-lg justify-center items-center">
            <SearchContainer className="w-1/4 max-md:w-1/3" searchText={searchText} setSearchText={setSearchText}/>
            <DateRangePicker className="w-1/3 max-md:w-1/3" onOk={onOk} />
            <GuestSelector className="w-1/5 max-md:w-1/3" />
            <button className="rounded-full m-1 bg-gradient-to-r from-slate-500 to-slate-950 w-1/5 text-white max-md:w-1/3 max-sm:w-full h-12 active:scale-75 transition hover:opacity-80" onClick={(e) => {e.stopPropagation();}}>Search</button>
        </div>
    )
}

export default SearchComponent
