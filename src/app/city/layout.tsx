import React, {Suspense} from 'react'
import Sidebar from '../components/Sidebar'


const CityLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className='flex relative'>
            <Suspense>
                <Sidebar />
            </Suspense>
            <div className='hotel-archive w-full min-h-screen'>
                {children}
            </div>
        </div>
    )
}
// className=''

export default CityLayout
