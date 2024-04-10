"use client"

import React, { useState } from 'react'
import SearchContainer from './SearchContainer';
import DateRangePicker from './DateRangePicker';
import GuestSelector from './GuestSelector';
import type { Dayjs } from 'dayjs';
import {useSelector, useDispatch} from 'react-redux'
import { RangePickerProps } from 'antd/es/date-picker';
import { AppDispatch, RootState, store } from '../../redux/store';
import { setDateVal, setShowSearchBar } from '../../redux/globalStateSlice';
import { useSearchParams, useRouter } from 'next/navigation';
import { baseUrl } from '../../services/cityApi';
import moment from 'moment'

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
        const checkIn = dateVal && dateVal[0]?.format('YYYY-MM-DD')
        const checkOut = dateVal && dateVal[1]?.format('YYYY-MM-DD')
        const room = rooms.length;
        const guest = totalGuest;
        const room_config = rooms.reduce((pre, next, ind) => {
            return pre += `${ind}_${next.guest}-`
        }, "")
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

        if(room_config){
            params.set('room_config', String(room_config));
        }else{
            params.delete('room_config')
        }

        const url = `/search?${params.toString()}`
        replace(url);
    }

    return (
        <div className="flex flex-wrap max-w-7xl m-3 p-2 bg-white rounded-lg justify-center items-center" >
            <SearchContainer className="w-1/4 max-md:w-1/3" />
            <DateRangePicker className="w-1/3 max-md:w-1/3" onOk={onOk} />
            <GuestSelector className="w-1/5 max-md:w-1/3" />
            <button className="rounded-full m-1 bg-gradient-to-r from-slate-500 to-slate-950 w-1/5 text-white max-md:w-1/3 max-sm:w-full h-12 active:scale-75 transition hover:opacity-80" onClick={(e) => {e.stopPropagation(); dispatch(setShowSearchBar(false)); handleSearch();}}>Search</button>
        </div>
    )
}

export default SearchComponent
