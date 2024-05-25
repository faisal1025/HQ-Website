
import React, {Suspense} from 'react'
import CityLayout from '../city/layout'
import HotelCardVertical from '../components/HotelCardVertical'
import { getStateById } from '../services/cityApi';
import MobileFilterSortBy from '../components/StateDetailPageComponents/MobileFilterSortBy';
import { hotels } from '../Schema';
import Pagination from '../components/Pagination';
import { Metadata, ResolvingMetadata } from 'next';

export const dynamic='force-dynamic';

type Props = {
    params: { city: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

  
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {

    return {
        title: `hotels in ${params.city}`,
        description: "page will show all the hotels available in that state and rooms to book",
        openGraph: {
            title: `hotels in ${params.city}`,
            description: `Our luxary hotel in the best rate is currently in your town ${params.city}, we provide you the best deals ever.`
        }
    }
}

const City = async ({params, searchParams}: {params: {city: string}, searchParams?: {page?: string}}) => {
    const query = new URLSearchParams(searchParams)
    const {props} = await getStateById(params.city, query.toString())
    const {city, pagination} = props;

    const jsonLd = {
        '@context': `https://hqrooms.in/${params.city}`,
        '@type': 'States',
        name: city.name,
        image: city.thumbnail,
        description: `All the hotels in this ${city.name} state`,
    }

    return (
        <CityLayout>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

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
