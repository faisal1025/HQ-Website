'use client'
import { RootState } from '@/app/redux/store'
import Image from 'next/image'
import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

const Loading = () => {
    return (
        <dialog
            className="flex z-50 justify-center items-center"
        >
                <div className='text-xl font-semibold text-white'>
                    <Image 
                        alt='spinner'
                        src={'/assets/Spinner.svg'}
                        width={100}
                        height={100}
                    />
                    <h1 style={{color: '#e4e4e4'}}>Please Wait</h1>
                </div>
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
