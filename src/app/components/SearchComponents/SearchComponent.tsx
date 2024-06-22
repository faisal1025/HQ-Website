"use client"

import React, { useEffect } from 'react'
import SearchContainer from './SearchContainer';
import DateRangePicker from './DateRangePicker';
import GuestSelector from './GuestSelector';
import type { Dayjs } from 'dayjs';
import {useSelector, useDispatch} from 'react-redux'
import { RangePickerProps } from 'antd/es/date-picker';
import { AppDispatch, RootState, store } from '../../redux/store';
import { categoryName, resetRoom, selectRoomForSearch, setDateVal, setShowSearchBar } from '../../redux/globalStateSlice';
import { useSearchParams, useRouter } from 'next/navigation';
import { baseUrl } from '../../services/cityApi';
import moment from 'moment'

type RangeValue = [Dayjs | null, Dayjs | null] | null;

const SearchComponent = () => {
    const {searchText, dateVal, selectRooms} = useSelector((store: RootState) => store.globalState)
    const dispatch = useDispatch<AppDispatch>()
    
    const onOk = (value: RangePickerProps['value']) => {
        dispatch(setDateVal(value))
    };

    const searchParams = useSearchParams()
    const {replace} = useRouter()

    const handleSearch = () => {
        const checkIn = dateVal && dateVal[0]?.format('YYYY-MM-DD')
        const checkOut = dateVal && dateVal[1]?.format('YYYY-MM-DD')
        
        
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

        selectRooms.map((category: selectRoomForSearch, ind: number) => {
            const key = categoryName[category.category].split(' ').at(0)
            if(category.noOfRooms !== 0 && key){
                params.set(key, String(category.noOfRooms));
            }else if(key){
                params.delete(key)
            }
        })

        const url = `/search?${params.toString()}`
        replace(url);
    }

    return (
        <div className="flex flex-wrap max-w-7xl m-3 p-2 bg-white rounded-lg justify-center items-center" >
            <SearchContainer className="w-1/4 max-md:w-1/3" />
            <DateRangePicker className="w-1/3 max-md:w-1/3" onOk={onOk} />
            <GuestSelector searchRoom={true} className="w-1/5 max-md:w-1/3" />
            <button className="rounded-full m-1 bg-gradient-to-r from-slate-500 to-slate-950 w-1/5 text-white max-md:w-1/3 max-sm:w-full h-12 active:scale-75 transition hover:opacity-80" onClick={(e) => {e.stopPropagation(); dispatch(setShowSearchBar(false)); handleSearch();}}>Search</button>
        </div>
    )
}

export default SearchComponent
