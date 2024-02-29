import React from 'react'
import Sidebar from '../components/Sidebar'
import { RootState } from '../redux/store'
import {useSelector} from 'react-redux'

const CityLayout = ({children}: {children: React.ReactNode}) => {

    const {enableMobileFilter} = useSelector((store: RootState) => store.globalState)

    return ( 
        <div className='flex relative'>
            <div className={`sidebar min-w-max overflow-y-scroll transition-all z-10 overflow-x-hidden max-md:w-full max-md:absolute top-0 ${(enableMobileFilter) ? `max-md:-translate-x-full` : `max-md:translate-x-0`}`}>
                <Sidebar />
            </div>
            <div className='hotel-archive w-full'>
                {children}
            </div>
        </div>
    )
}
// className=''

export default CityLayout
