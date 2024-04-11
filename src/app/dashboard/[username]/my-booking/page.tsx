'use client'

import React, {useEffect, useState} from 'react'
import { booking, hotels, pagination } from '@/app/Schema'
import BookingCardVertical from '@/app/components/BookingPageComponents/BookingCardVertical'
import { getAllOrders } from '@/app/services/authApi'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux/store'
import MainLayout from '@/app/mainLayout/layout'

const MyBooking = ({params}: {params: {username: string}}) => {
    const [loading, setLoading] = useState(true)
    const {bookingListChanged}  = useSelector((store: RootState) => store.globalState)
    const [result, setresult] = useState<{allBooking: booking[], pagination: pagination}>({
        allBooking: [],
        pagination: {
            total: 0,
            page: 0,
            pageCount: 0,
            pageSize: 0
        }
    })
    useEffect(() => {
        setLoading(true)
        const getBookingDetails = async () => {
            const {allBooking, pagination} = await getAllOrders(params.username)
            setresult({
                allBooking,
                pagination
            })
        }
        getBookingDetails()
        setLoading(false)
    }, [bookingListChanged, params.username])
    return (
        <MainLayout>
            <section className="rounded-lg p-5  m-5  bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl">
                <div className='p-4'>
                    <h2 className='dark:!text-white text-2xl font-sans font-semibold py-3' >My Bookings</h2>
                    {
                        loading === false ?
                        result.allBooking && 
                            result.allBooking.length === 0 ? (
                                <div className='min-h-[80vh] flex justify-center items-center'>
                                    Currently, You have done no bookings
                                </div>
                            ) : (
                                <div className='min-h-[80vh] flex justify-center items-center flex-col'>
                                    {
                                        result.allBooking.map((item: booking) => {
                                            return (
                                                <BookingCardVertical key={item.id} item={item} />
                                            )
                                        })
                                    }
                                </div>
                            )
                        :
                        <div className='h-screen flex justify-center items-center'>
                            Loading...
                        </div>
                        
                    }
                </div>
            </section>
        </MainLayout>
    )
}

export default MyBooking
