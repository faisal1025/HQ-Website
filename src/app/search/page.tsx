import React, {Suspense} from 'react'
import CityLayout from '../city/layout'
import MobileFilterSortBy from '../components/StateDetailPageComponents/MobileFilterSortBy'
import HotelCardVertical from '../components/HotelCardVertical';
import { hotels } from '../Schema';
import { getSearchHotels } from '../services/hotelApi';
import Pagination from '../components/Pagination';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

  
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {

    return {
        title:  `${searchParams.query ? `hotels in ${searchParams.query}` : 'Best hotels deals on your searched results'}`,
        description: `Search page for hqrooms provide all the hotels of ${searchParams.query}`,
        openGraph: {
            title: `${searchParams.query ? `hotels in ${searchParams.query}` : 'Your of search hotels'}`,
            description: `Search page for hqrooms provide all the hotels in ${searchParams.query} state at our cheaper and best rate.`
        }
    }
}

const page = async ({searchParams}: {searchParams: {page?: string, query?: string, checkIn?: string, checkOut?: string, rooms?: string, guest?: string}}) => {
    const params = new URLSearchParams(searchParams)
    const {props} = await getSearchHotels(params.toString());
    const {hotels, pagination} = props

    return (
        <CityLayout>
            <section className='h-full p-5 bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl relative'>
                <h1 className='text-3xl font-sans font-semibold'>Search Results</h1>
                <MobileFilterSortBy />
                {
                    hotels.length === 0 && (
                        <div className='flex justify-center items-center h-full text-pretty text-base font-semibold'>
                            {"No search results found :("}
                        </div>
                    )
                }
                {
                    hotels && (
                        hotels.map((hotel: hotels)=> {
                            return (
                                <Suspense key={hotel.id}>
                                    <HotelCardVertical city={hotel.state.slug} item={hotel} />
                                </Suspense>
                            )
                        })
                    )
                }
                {
                    pagination.pageCount > 1 
                        && (
                            <Suspense>
                                <div className='flex justify-center mt-12'>
                                    <Pagination pagination={pagination} />
                                </div>
                            </Suspense>
                        )
                }
            </section>
        </CityLayout>
    )
}

export default page
