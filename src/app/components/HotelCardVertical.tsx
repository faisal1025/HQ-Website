'use client'

import React, { useState } from 'react'
import { hotels } from '../redux/hotelLists/hotels'
import Card from '../custom-template/Card'
import { MdOutlineStarPurple500 } from "react-icons/md";
import Image from 'next/image'
import {getOffPercent, getRatingStatus} from '../utils/hotelDetailUtility';
import Amenities from '../custom-template/Amenities';
import Link from 'next/link';
import Modal from '../modal/modal';
import PaymentCard from './PaymentCard';

const HotelCardVertical = ({item, city}: {item: hotels, city: string}) => {
    
    const [showBookNowModal, setShowBookModal] = useState(false);
    
    const openPaymentModal = () => {
        setShowBookModal(true);
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
                        <Amenities icon='MdCelebration' text='Reception' />
                        <Amenities icon='MdOutlineWifi' text='Free Wifi'/>
                        <Amenities icon='MdBathtub' text='Geyser'/>
                        <Amenities icon='MdAdd' text='More'/>
                    </div>
                    <div className='flex flex-wrap justify-between items-end gap-2 text-xs py-4 font-sans capitalize font-semibold'>
                        <div className='flex gap-2 items-end'>
                            <span className='text-xl'>&#8377;{item.price}</span>
                            <span className='line-through'>&#8377;{item.originalPrice}</span>
                            <span className='text-green-600'>{getOffPercent(item.originalPrice, item.price)} % off</span>
                        </div>
                        {
                            showBookNowModal && (
                                <Modal setModal={setShowBookModal}>
                                    <PaymentCard item={item}/>
                                </Modal>
                            )
                        }
                        <div className='flex items-end gap-2'>
                            <Link href={`${city}/${item.slug}`} className='text-sm para-text action-button transition active:scale-75 p-2 px-4 border-2 border-solid border-black rounded-full'>View Details</Link>
                            <Link href={`?modal=true`} className='text-sm para-text action-button transition active:scale-75 bg-slate-950 border-2 border-solid border-black text-white p-2 px-4 rounded-full' onClick={openPaymentModal}>Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default HotelCardVertical
