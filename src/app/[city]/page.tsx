
import React, {Suspense} from 'react'
import CityLayout from '../city/layout'
import HotelCardVertical from '../components/HotelCardVertical'
import { getStateById } from '../services/cityApi';
import MobileFilterSortBy from '../components/StateDetailPageComponents/MobileFilterSortBy';
import { hotels } from '../Schema';
import Pagination from '../components/Pagination';

export const dynamic='force-dynamic';

const City = async ({params, searchParams}: {params: {city: string}, searchParams?: {page?: string}}) => {
    const query = new URLSearchParams(searchParams)
    const {props} = await getStateById(params.city, query.toString())
    const {city, pagination} = props;

    return (
        <CityLayout>
            <section className='h-full p-5 bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl relative'>
                <h1 className='text-3xl font-sans font-semibold'>Hotels in {city.name}</h1>
                <MobileFilterSortBy />
                {
                    city.hotels && (
                        city.hotels.length > 0 ? 
                            city.hotels.map((hotel: hotels)=> {
                                return (
                                    <Suspense key={hotel.id}>
                                        <HotelCardVertical city={city.slug} item={hotel} />
                                    </Suspense>
                                )
                            }) : 
                            <div className='flex h-screen justify-center items-center'>
                                {'No Any Hotels Found :('}
                            </div>
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

export default City
