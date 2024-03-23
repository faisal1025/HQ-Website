"use client"
import React, { Dispatch } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchContainer = ({className, searchText, setSearchText}: {className?:string, searchText:string, setSearchText: Dispatch<string>}) => {

    return (
        <div className={`search-container flex ${className} max-sm:w-full h-14 justify-between items-center rounded-lg border-r-slate-400`}>
            <i className="bg-white text-black h-full text-center items-center justify-center flex w-12"><FaSearch size={20} /></i>
            <div className="flex flex-col justify-center h-full px-3 w-11/12 text-black font-sans font-semibold focus:border-0">
              <label className=" text-xs">Destination</label>
              <input type="text" className="text-base py-1 px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" value={searchText} placeholder="where to" onChange={(e) => {setSearchText(e.target.value)}}/>        
            </div>
        </div>
    )
}

export default SearchContainer
