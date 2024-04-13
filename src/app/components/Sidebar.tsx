"use client"

import React, { useState, useEffect } from 'react'
import CustomSlider from './Slider'
import { RootState } from '../redux/store'
import {useSelector, useDispatch} from 'react-redux' 
import { IoMdClose } from 'react-icons/io'
import { toggleMobileFilter } from '../redux/globalStateSlice'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

const Sidebar = () => {
    const {enableMobileFilter} = useSelector((store: RootState) => store.globalState)
    const dispatch = useDispatch();
    const searchParams = useSearchParams()
    const {push} = useRouter()
    const pathName = usePathname()
    const handleSortBy = (sortBy: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('sortby', sortBy)
        push(`${pathName}?${params.toString()}`)
    }
    const handleFilter = (type: string, value: boolean) => {
        const params = new URLSearchParams(searchParams)
        if(value) params.set(type, type)
        else params.delete(type)
        push(`${pathName}?${params.toString()}`)
    }
    const handlePriceFilter = (value: number[]) => {
        const params = new URLSearchParams(searchParams)
        params.set('min', value[0].toString())
        params.set('max', value[1].toString())
        push(`${pathName}?${params.toString()}`)
    }
    return (
        <div className={`min-w-max transition-all z-10 overflow-x-hidden max-md:w-full max-md:absolute top-0 ${(enableMobileFilter) ? `max-md:-translate-x-full` : `max-md:translate-x-0`}`}>
            <div className='sidebar max-md:h-[90vh] p-4 overflow-y-scroll bg-gradient-to-b from-indigo-300 to-indigo-50 dark:from-slate-600 dark:to-slate-950'>
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
                    <CustomSlider handlePriceFilter={handlePriceFilter}/>
                </div>
                <div className='py-2'>
                    <h3 className='text-base font-sans font-semibold'>Collection</h3>
                    <div className='py-2 flex gap-3 items-center'>
                        <input type='checkbox' className='inline-block' value={"family_deals"} onChange={(e) => handleFilter(e.target.value, e.target.checked)}/> Family Deals
                    </div>
                    <div className='py-2 flex gap-3 items-center'>
                        <input type='checkbox' className='inline-block' value={'booking_for_travellers'} onChange={(e) => handleFilter(e.target.value, e.target.checked)}/> Booking for Travellers
                    </div>
                </div>
                <div className='py-2'>
                    <h3 className='text-base font-sans font-semibold'>Hotel Facilities</h3>
                    <div className='py-2 flex gap-3 items-center'>
                        <input type='checkbox' className='inline-block' value={"Parking"} onChange={(e) => handleFilter(e.target.value, e.target.checked)}/> Parking Area
                    </div>
                    <div className='py-2 flex gap-3 items-center'>
                        <input type='checkbox' className='inline-block' value={"AC"} onChange={(e) => handleFilter(e.target.value, e.target.checked)}/> AC
                    </div>
                    <div className='py-2 flex gap-3 items-center'>
                        <input type='checkbox' className='inline-block' value={"king_sized_bed"} onChange={(e) => handleFilter(e.target.value, e.target.checked)}/> King Sized Bed
                    </div>
                    <div className='py-2 flex gap-3 items-center'>
                        <input type='checkbox' className='inline-block' value={"queen_sized_bed"} onChange={(e) => handleFilter(e.target.value, e.target.checked)}/> Queen Sized Bed
                    </div>
                    <div className='py-2 flex gap-3 items-center'>
                        <input type='checkbox' className='inline-block' value={"twin_bed"} onChange={(e) => handleFilter(e.target.value, e.target.checked)}/> Twin Bed
                    </div>
                </div>
                <div className='flex justify-between items-center py-2'>
                    <h2 className='text-3xl font-sans font-semibold'>Sort by</h2>
                </div>
                <div className='py-2 w-full'>
                    <select className='p-3 font-sans w-auto dark:bg-slate-600' onChange={(e)=>handleSortBy(e.target.value)}>
                        <option value="guest_rating">Guest Rating</option>
                        <option value="price_low_to_high">Price Low to High</option>
                        <option value="price_high_to_low">Price High to Low</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
