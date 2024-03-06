'use client'

import Link from 'next/link'
import React, { ReactNode, useRef, Dispatch, SetStateAction } from 'react'


const DropBox = ({children, setDropDown} : {children:ReactNode, setDropDown:Dispatch<SetStateAction<boolean>>}) => {
    const dropBoxRef = useRef(null)
    
    window.addEventListener('click', (e) => {
        if(e.target !== dropBoxRef.current){
            setDropDown(false);
        }
    })

    return (
        <div ref={dropBoxRef} onClick={(e) => e.stopPropagation()} className='absolute top-3 right-1 rounded-lg flex flex-col justify-center items-center p-5 m-5 bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-600 dark:to-slate-500 shadow-xl'>
            {children}
        </div>
    )
}

export default DropBox
