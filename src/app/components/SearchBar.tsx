'use client'

import React, { Suspense, useEffect } from 'react'
import SearchComponent from './SearchComponents/SearchComponent'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { setShowSearchBar } from '../redux/globalStateSlice'

const SearchBar = () => {
    const {showSearchBar} = useSelector((store: RootState) => store.globalState)
    
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        const elem = document.body;
        if(showSearchBar)
            elem.classList.add("fixedPosition");
        else
            elem.classList.remove('fixedPosition')
    }, [showSearchBar]);
    return (
        <div>
            <dialog
                className={`flex z-50 justify-center items-start ${showSearchBar ? 'translate-y-0 transition-transform': '-translate-y-full'}`}
                onClick={() => {
                    dispatch(setShowSearchBar(false))
                }}
            >
                <div className='my-40' onClick={(e) => e.stopPropagation()}>
                    <Suspense>
                        <SearchComponent />
                    </Suspense>
                </div>
            </dialog>
        </div>
    )
}

export default SearchBar
