"use client"

import { Router } from 'next/router'
import { MdFilterList, MdOutlineSort } from "react-icons/md";
import React from 'react'
import CityLayout from '../city/layout'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import HotelCardVertical from '../components/HotelCardVertical'
import { toggleMobileFilter } from '../redux/globalStateSlice';

const City = ({params}: {params: {city: string}}) => {
    
    const {hotels, totalNoHotels} = useSelector((store: RootState) => store.hotelWithCity)
    const {enableMobileFilter} = useSelector((store: RootState) => store.globalState)
    const dispatch = useDispatch();
    const toggleSidebar = () => {
        document.body.style.overflowY = enableMobileFilter ? "hidden" : "scroll";
        dispatch(toggleMobileFilter(!enableMobileFilter))
    }

    return (
        <CityLayout>
            <section className='p-5 bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl relative'>
                <h1 className='text-3xl font-sans font-semibold'>Hotels in {params.city}</h1>
                <div className='flex gap-1 justify-end items-center'>
                    <button onClick={toggleSidebar} className='hidden max-md:block p-2 rounded-full bg-opacity-40 bg-slate-950 shadow-xl top-2 right-2'><MdFilterList /></button>
                    <button onClick={toggleSidebar} className='hidden max-md:block p-2 rounded-full bg-opacity-40 bg-slate-950 shadow-xl top-2 right-2'><MdOutlineSort /></button>
                </div>
                {
                    hotels && (
                        hotels.map((hotel)=> {
                            return (
                                <HotelCardVertical key={hotel.id} city={params.city} item={hotel} />
                            )
                        })
                    )
                }
            </section>
        </CityLayout>
    )
}

export default City
