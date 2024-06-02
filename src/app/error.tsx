'use client'

import Link from 'next/link'
import React from 'react'

const error = ({error, reset}: {error: Error, reset: () => void}) => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center bg-gradient-r h-screen dark:from-slate-900 dark:to-slate-500 from-violet-600 to-violet-300'>
            <p className='text-base font-semibold'>
                There was a problem 
            </p>
            <h1 className='text-xl font-bold px-5'>
                {error.message || 'Some thing went wrong'}
            </h1>
            <p className='text-base font-semibold'>
                Please try again or connect support if the problem persist
            </p>
            <div className='flex gap-12 justify-around items-center'>
                <button onClick={reset} className='text-green-500 p-4 rounded border-[2px] border-emerald-400'>
                    Try Again
                </button>
                <Link href={'/'} className='text-red-500 p-4 rounded border-[2px] border-red-400'>
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default error
