"use client"

import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { toggleMobileFilter } from '@/app/redux/globalStateSlice'
import { RootState } from '@/app/redux/store'
import { MdFilterList, MdOutlineSort } from 'react-icons/md'

const MobileFilterSortBy = () => {
    const {enableMobileFilter} = useSelector((store: RootState) => store.globalState)
    const dispatch = useDispatch();
    const toggleSidebar = () => {
        document.body.style.overflowY = enableMobileFilter ? "hidden" : "scroll";
        dispatch(toggleMobileFilter(!enableMobileFilter))
    }
    return (
        <div className='flex gap-1 justify-end items-center'>
            <button onClick={toggleSidebar} className='hidden max-md:block p-2 rounded-full bg-opacity-40 bg-slate-950 shadow-xl top-2 right-2'><MdFilterList /></button>
            <button onClick={toggleSidebar} className='hidden max-md:block p-2 rounded-full bg-opacity-40 bg-slate-950 shadow-xl top-2 right-2'><MdOutlineSort /></button>
        </div>
    )
}

export default MobileFilterSortBy
