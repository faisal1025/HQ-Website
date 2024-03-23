
import React from 'react'
import CityLayout from '../city/layout'
import HotelCardVertical from '../components/HotelCardVertical'
import { getStateById } from '../services/cityApi';
import MobileFilterSortBy from '../components/StateDetailPageComponents/MobileFilterSortBy';
import { hotels } from '../Schema';
import Pagination from '../components/Pagination';

const City = async ({params, searchParams}: {params: {city: string}, searchParams?: {page?: string}}) => {
    const currentPage = Number(searchParams?.page) || 1;
    const {props} = await getStateById(params.city, currentPage)
    const {city, pagination} = props;

    return (
        <CityLayout>
            <section className='h-full p-5 bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl relative'>
                <h1 className='text-3xl font-sans font-semibold'>Hotels in {city.name}</h1>
                <MobileFilterSortBy />
                {
                    city.hotels && (
                        city.hotels.map((hotel: hotels)=> {
                            return (
                                <HotelCardVertical key={hotel.id} city={params.city} item={hotel} />
                            )
                        })
                    )
                }
                <div className='flex justify-center mt-12'>
                    <Pagination pagination={pagination} />
                </div>
            </section>
        </CityLayout>
    )
}

export default City
