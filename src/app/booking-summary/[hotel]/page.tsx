
import BookingSummary from '@/app/components/BookingPageComponents/BookingSummary'
import MakeBookingForm from '@/app/components/BookingPageComponents/MakeBookingForm'
import GoBack from '@/app/custom-template/GoBack'
import MainLayout from '@/app/mainLayout/layout'
import { getMe } from '@/app/services/authApi'
import { getHotelById } from '@/app/services/hotelApi'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import React from 'react'

type Props = {
    params: { hotel: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

  
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {

    return {
        title: `booking details for ${params.hotel}`,
        description:`This is the booking details of the hotel ${params.hotel} the price and other details`,
        openGraph: {
            title: `booking details for ${params.hotel}`,
            description: `This is the booking details of the hotel ${params.hotel} the price and other details`
        }
    }
}

const page = async ({params}: {params: {hotel: string}}) => {
    
    const slug = params.hotel
    const {props} = await getHotelById(slug)
    const {hotel} = props

    return (
        <MainLayout>
            <section className=' flex bg-gradient-to-br dark:from-slate-800 dark:to-slate-600 from-blue-50 to-violet-300 items-center justify-center min-h-screen'>
                <div className='p-5 my-8 w-3/4 max-sm:w-4/5 rounded-lg border-2 border-slate-400 border-double bg-transparent bg-slate-300 bg-opacity-40'>
                    <div>
                        <GoBack />
                        <h1 className='text-xl font-bold'>Booking Summary</h1>
                    </div>
                    <div className='flex flex-wrap-reverse justify-around items-center mt-12 gap-16'>
                        <div className='max-w-96'>
                            <Image src={'/assets/Logo.png'} alt='hqrooms logo' width={130} height={130} className=''/>
                            <h2 className='text-7xl max-sm:text-6xl font-extrabold my-5 capitalize'>Book with ease</h2>
                            <h4 className='text-lg max-sm:text-base font-semibold my-2'>Fill your details</h4>
                            <MakeBookingForm />
                        </div>
                        <div className='w-96'>
                            <BookingSummary item={hotel} />
                        </div>
                    </div>
                </div>
            </section>
            
        </MainLayout>
    )
}

export default page
