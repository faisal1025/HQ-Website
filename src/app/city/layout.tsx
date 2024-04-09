import React, {Suspense} from 'react'
import Sidebar from '../components/Sidebar'
import MainLayout from '../mainLayout/layout'


const CityLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <MainLayout>
            <div className='flex relative'>
                <Suspense>
                    <Sidebar />
                </Suspense>
                <div className='hotel-archive w-full min-h-screen'>
                    {children}
                </div>
            </div>
        </MainLayout> 
    )
}
// className=''

export default CityLayout
