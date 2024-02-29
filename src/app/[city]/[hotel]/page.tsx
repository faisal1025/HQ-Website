"use client"

import React from 'react'
import HotelCard from '@/app/components/HotelCard';

const HotelDetails = ({params}: {params: {hotel: string}}) => {
    return (
        <>
            <HotelCard/>
        </>
    )
}

export default HotelDetails
