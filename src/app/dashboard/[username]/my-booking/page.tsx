import React, {useEffect, useState} from 'react'
import { booking, hotels, pagination } from '@/app/Schema'
import BookingCardVertical from '@/app/components/BookingPageComponents/BookingCardVertical'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux/store'
import MainLayout from '@/app/mainLayout/layout'
import { baseUrl } from '@/app/services/cityApi'
import { cookies } from 'next/headers'
import { Metadata, ResolvingMetadata } from 'next'


async function getAllOrders(username: string) {

    const url = `${baseUrl}/orders/${username}`
    
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies().get('jwt')?.value}`
        },
        cache: 'no-store'
    })

    const booking_data = await (response.json())

    if(booking_data.error !== undefined){
        return {
            allBooking: [],
            pagination: {
                page: 0,
                pageSize:  0,
                pageCount: 0,
                total: 0
            },
            error: booking_data.error
        }
    }

    const booking: booking[] = booking_data.data.attributes.results.map((booking: any): booking => {
        return {
            ...booking,
            hotel: {
                ...booking.hotel,
                thumbnail: booking.hotel.thumbnail.url,
            },
            givenRooms: booking.rooms.map((room: any) => {
              return room.id
            })
        }
    })

    return {
        allBooking: booking,
        pagination: booking_data.data.attributes.pagination
    }
}

export const dynamic='force-dynamic';

type Props = {
    params: { username: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {

    return {
        title: `All of your bookings user ${params.username}`,
        description: `All the hotels bookings for  user ${params.username} have done till now`,
        openGraph: {
            title: `All of your bookings user ${params.username}`,
            description: `All the hotel room record for ${params.username} user`
        }
    }
}

const MyBooking = async ({params}: {params: {username: string}}) => {
    
    const result = await getAllOrders(params.username)
    
    return (
        <>
            
            <MainLayout>
                <section className="rounded-lg p-5  m-5  bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl">
                    <div className='p-4'>
                        <h2 className='dark:!text-white text-2xl font-sans font-semibold py-3' >My Bookings</h2>
                        {
                            // loading === false ?
                            result.allBooking && 
                                result.allBooking.length === 0 ? (
                                    <div className='min-h-[80vh] flex justify-center items-center'>
                                        Currently, You have done no bookings
                                    </div>
                                ) : (
                                    <div className='min-h-[80vh] flex justify-start items-center flex-col'>
                                        {
                                            result.allBooking.map((item: booking) => {
                                                return (
                                                    <BookingCardVertical key={item.id} item={item} />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            // :
                            // <div className='h-screen flex justify-center items-center'>
                            //     Loading...
                            // </div>
                            
                        }
                    </div>
                </section>
            </MainLayout>
        </>
    )
}

export default MyBooking
