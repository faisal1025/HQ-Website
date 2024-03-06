"use client"

import { Typography } from 'antd'
import React, { useState, useEffect } from 'react'
import CustomSlider from './Slider'
import { RootState } from '../redux/store'
import {useSelector, useDispatch} from 'react-redux' 
import { IoMdClose } from 'react-icons/io'
import { toggleMobileFilter } from '../redux/globalStateSlice'

const Sidebar = () => {
    const [sortby, setsortby] = useState<string>();
    const {enableMobileFilter} = useSelector((store: RootState) => store.globalState)
    const dispatch = useDispatch();
    
    return (
        <div className='min-h-screen p-4 bg-gradient-to-b from-indigo-300 to-indigo-50 dark:from-slate-600 dark:to-slate-950'>
            {
                !enableMobileFilter && (
                    <div className='flex justify-end items-center'>
                        <IoMdClose size={25} onClick={() => {
                            document.body.style.overflowY = enableMobileFilter ? "hidden" : "scroll";
                            dispatch(toggleMobileFilter(!enableMobileFilter))
                        }} />
                    </div>
                )
            }
            <div className='flex justify-between items-center'>
                <h2 className='text-3xl font-sans font-semibold'>Filters</h2>
                <h2 className='text-red-500'>clear all</h2>
            </div>
            <div className='pt-2'>
                <h3 className='text-base font-sans font-semibold'>Price</h3>
                <CustomSlider />
            </div>
            <div className='py-2'>
                <h3 className='text-base font-sans font-semibold'>Collection</h3>
                <div className='py-2 flex gap-3 items-center'>
                    <input type='checkbox' className='inline-block'/> Family Deals
                </div>
                <div className='py-2 flex gap-3 items-center'>
                    <input type='checkbox' className='inline-block'/> Booking for Travellers
                </div>
            </div>
            <div className='py-2'>
                <h3 className='text-base font-sans font-semibold'>Hotel Facilities</h3>
                <div className='py-2 flex gap-3 items-center'>
                    <input type='checkbox' className='inline-block'/> Parking Area
                </div>
                <div className='py-2 flex gap-3 items-center'>
                    <input type='checkbox' className='inline-block'/> AC
                </div>
                <div className='py-2 flex gap-3 items-center'>
                    <input type='checkbox' className='inline-block'/> Double Bed
                </div>
                <div className='py-2 flex gap-3 items-center'>
                    <input type='checkbox' className='inline-block'/> Single Bed
                </div>
                <div className='py-2 flex gap-3 items-center'>
                    <input type='checkbox' className='inline-block'/> Twin Single Bed
                </div>
            </div>
            <div className='flex justify-between items-center py-2'>
                <h2 className='text-3xl font-sans font-semibold'>Sort by</h2>
            </div>
            <div className='py-2 w-full'>
                <select className='p-3 font-sans w-auto dark:bg-slate-600' value={sortby} onChange={(e)=>setsortby(e.target.value)}>
                    <option value="guest_rating">Guest Rating</option>
                    <option value="price_low_to_high">Price Low to High</option>
                    <option value="price_high_to_low">Price High to Low</option>
                </select>
            </div>
        </div>
    )
}

export default Sidebar
