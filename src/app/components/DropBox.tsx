'use client'

import Link from 'next/link'
import React, { ReactNode, useRef, Dispatch, SetStateAction, useEffect } from 'react'


const DropBox = ({children, setDropDown} : {children:ReactNode, setDropDown:Dispatch<SetStateAction<boolean>>}) => {
    const dropBoxRef = useRef(null)
    
    useEffect(() => {
        const dropRef = dropBoxRef.current
        window.addEventListener('click', (e) => {
            if(e.target !== dropRef){
                setDropDown(false);
            }
        })
        
        return () => {
            window.removeEventListener('click', (e) => {
                if(e.target !== dropRef){
                    setDropDown(false);
                }
            })
        }

    }, [setDropDown])

    return (
        <div ref={dropBoxRef} onClick={(e) => e.stopPropagation()} className='absolute top-3 right-1 rounded-lg flex flex-col justify-center items-center py-4 px-4 m-5 bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-600 dark:to-slate-500 shadow-xl'>
            {children}
        </div>
    )
}

export default DropBox
