"use client"
import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'

const PrevButton = (props: any) => {
    return (
        <div className='absolute right-14 -top-10'>
            <button className='p-2  dark:bg-slate-500 dark:text-white bg-slate-300 rounded-full shadow-xl' disabled={props.onClick === null} onClick={props.onClick}>
                <AiOutlineLeft />
            </button>
        </div>
    )
}

export default PrevButton