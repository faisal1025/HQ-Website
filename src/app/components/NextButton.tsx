import React from 'react'
import { AiOutlineRight } from "react-icons/ai";

const NextButton = (props: any) => {
    return (
        <div className='absolute right-3 -top-10'>
            <button className='p-2 dark:bg-slate-500 dark:text-white bg-slate-300 rounded-full shadow-xl' disabled={props.onClick === null} onClick={props.onClick}>
                <AiOutlineRight />
            </button>
        </div>
    )
}

export default NextButton