'use client'

import React from 'react'
import Card from '../custom-template/Card'
import { MdOutlineStarPurple500 } from "react-icons/md";
import Image from 'next/image'
import {getOffPercent, getRatingStatus} from '../utils/hotelDetailUtility';
import Amenities from '../custom-template/Amenities';
import Link from 'next/link';
import Modal from '../modal/modal';
import PaymentCard from './PaymentCard';
import { amenities, hotels } from '../Schema';
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store';
import PaymentModal from './PaymentModal';
import { setShowBookModal } from '../redux/globalStateSlice';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const HotelCardVertical = ({item, city}: {item: hotels, city: string}) => {
    
    const dispatch = useDispatch<AppDispatch>()
    const searchParams = useSearchParams()
    const {push} = useRouter()
    const pathName = usePathname()
    const openPaymentModal = () => {
        dispatch(setShowBookModal(true));
        const params = new URLSearchParams(searchParams)
        console.log("params: ", params);
        params.set('modal', 'true')
        
        push(`${pathName}?${params.toString()}`)
    }

    return (
        <Card>
            <div className='vertical-hotel-card flex flex-wrap justify-between p-2 my-3 gap-1 items-center'>
                <div className='min-w-[41%] hotel-thumbnail'>
                    <Image src={item.thumbnail} alt='hotel image' width={100} height={100} className='w-full h-auto object-cover' layout='responsive' />
                </div>
                <div className='flex flex-col justify-start min-w-[52%] hotel-container'>
                    <h2 className='text-2xl font-sans font-semibold capitalize tracking-tight'>{ item.name }</h2>
                    <h2 className='text-base text-slate-800 ont-sans font-medium capitalize'>{ `${item.address}, ${item.city}` }</h2>
                    <div className='flex gap-1 items-center py-2 text-xs font-sans capitalize font-semibold'>
                        <div className='px-1 py-1 flex gap-1 items-center w-fit bg-green-600 text-white'>{item.rating} <i className='inline-block m-auto p-auto'><MdOutlineStarPurple500 size={14} /></i></div> {" "}
                        <div>( {item.reviews?.length} Ratings ) . {getRatingStatus(item.rating)}</div>
                    </div>
                    <div className='flex items-center gap-2 text-xs font-sans capitalize font-semibold'>
                        {
                            item.amenities && 
                                (
                                    item.amenities.slice(0, 3).map((amenity: amenities) => {
                                        return <Amenities key={amenity.id} icon={amenity.icon} text={amenity.text}/>
                                    })
                                )
                        }
                        {
                            item.amenities &&
                                item?.amenities?.length > 3 && <Amenities icon='MdAdd' text='More'/>
                        }
                    </div>
                    <div className='flex flex-wrap justify-between items-end gap-2 text-xs py-4 font-sans capitalize font-semibold'>
                        <div className='flex gap-2 items-end'>
                            <span className='text-xl'>&#8377;{item.price}</span>
                            <span className='line-through'>&#8377;{item.originalPrice}</span>
                            <span className='text-green-600'>{getOffPercent(item.originalPrice, item.price)} % off</span>
                        </div>
                       {/* modal space */}
                       <PaymentModal item={item} />
                        <div className='flex items-end gap-2'>
                            <Link href={`${city}/${item.slug}`} className='text-sm para-text action-button transition active:scale-75 p-2 px-4 border-2 border-solid border-black rounded-full'>View Details</Link>
                            <button className='text-sm para-text action-button transition active:scale-75 bg-slate-950 border-2 border-solid border-black text-white p-2 px-4 rounded-full' onClick={openPaymentModal}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default HotelCardVertical
