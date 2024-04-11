'use client'
import { RootState } from '@/app/redux/store'
import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

const Loading = () => {
    return (
        <dialog
            className="flex z-50 justify-center items-center"
        >
                <div className='text-4xl font-semibold text-white'>Processing</div>
        </dialog>
    )
}

const LoadingOutlay = () => {
    const {loading} = useSelector((store: RootState) => store.globalState)
    
    return (
        <>
            {
                loading && <Loading />
            }   
        </>
    )
}

export default LoadingOutlay
