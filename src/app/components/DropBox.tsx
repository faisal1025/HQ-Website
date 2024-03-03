import Link from 'next/link'
import React, { ReactNode } from 'react'


const DropBox = ({children} : {children:ReactNode}) => {
    
    return (
        <div className='rounded-lg flex flex-col justify-center items-center p-5 m-5 bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl'>
            {children}
        </div>
    )
}

export default DropBox
