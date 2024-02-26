import React from 'react'
import Sidebar from '../components/Sidebar'

const CityLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='flex gap-4'>
            <div className='w-1/4 bg-teal-600'>
                <Sidebar />
            </div>
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}

export default CityLayout
