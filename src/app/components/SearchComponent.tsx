"use client"

import React, { useState } from 'react'
import SearchContainer from './SearchContainer';
import DateRangePicker from './DateRangePicker';
import GuestSelector from './GuestSelector';
import type { Dayjs } from 'dayjs';
import {useSelector, useDispatch} from 'react-redux'
import { RangePickerProps } from 'antd/es/date-picker';
import { AppDispatch, RootState, store } from '../redux/store';
import { setDateVal } from '../redux/globalStateSlice';
import { useSearchParams, useRouter } from 'next/navigation';
import { baseUrl } from '../services/cityApi';

type RangeValue = [Dayjs | null, Dayjs | null] | null;

const SearchComponent = () => {
    const {searchText, dateVal, rooms, totalGuest} = useSelector((store: RootState) => store.globalState)
    const dispatch = useDispatch<AppDispatch>()
    
    const onOk = (value: RangePickerProps['value']) => {
        dispatch(setDateVal(value))
    };

    const searchParams = useSearchParams()
    const {replace} = useRouter()

    const handleSearch = () => {
        const checkIn = dateVal && `${dateVal[0]?.date()}-${dateVal[0]?.month()}-${dateVal[0]?.year()}`
        const checkOut = dateVal && `${dateVal[1]?.date()}-${dateVal[1]?.month()}-${dateVal[1]?.year()}`
        const room = rooms.length;
        const guest = totalGuest;
        const params = new URLSearchParams(searchParams)

        if(searchText !== ""){
            params.set('query', searchText);
        }else{
            params.delete('query')
        }

        if(checkIn){
            params.set('chechIn', checkIn);
        }else{
            params.delete('checkIn')
        }

        if(checkOut){
            params.set('checkOut', checkOut);
        }else{
            params.delete('checkOut')
        }

        if(room){
            params.set('rooms', String(room));
        }else{
            params.delete('rooms')
        }

        if(guest){
            params.set('guest', String(guest));
        }else{
            params.delete('guest')
        }

        const url = `/search?${params.toString()}`
        replace(url);
    }

    return (
        <div className="flex flex-wrap max-w-7xl m-3 p-2 bg-white rounded-lg justify-center items-center">
            <SearchContainer className="w-1/4 max-md:w-1/3" />
            <DateRangePicker className="w-1/3 max-md:w-1/3" onOk={onOk} />
            <GuestSelector className="w-1/5 max-md:w-1/3" />
            <button className="rounded-full m-1 bg-gradient-to-r from-slate-500 to-slate-950 w-1/5 text-white max-md:w-1/3 max-sm:w-full h-12 active:scale-75 transition hover:opacity-80" onClick={(e) => {e.stopPropagation(); handleSearch();}}>Search</button>
        </div>
    )
}

export default SearchComponent
