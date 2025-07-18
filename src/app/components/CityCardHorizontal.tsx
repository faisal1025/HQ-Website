"use client"

import React from 'react'
import Card from '../custom-template/Card'
import { Typography } from 'antd'
import { MdArrowForwardIos } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import { city } from '../Schema';

const {Title, Text} = Typography;

type cityCardProps = {item: city}

const CityCardHorizontal = ({item} : cityCardProps) => {
   
    return (
        <Card>
            <div className="state-main flex flex-col h-full gap-16 p-4 justify-between rounded-lg" style={{backgroundImage: `url(${item.thumbnail})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                <div className='flex flex-col justify-start items-start'>
                    <Title level={4} className='!m-1 font-sans font-bold rounded-full bg-white text-black p-2'><span className='text-blue-600 font-bold'>{item.name}</span></Title>
                    <Title level={4} className='!m-1 font-sans font-bold rounded-full bg-white text-black p-2'><span className='text-blue-600 font-bold'>{item.totalNoHotels}</span> Hotels</Title>
                    <Title level={4} className='!m-1 font-sans font-semibold rounded-full bg-white text-black p-2'>Avg. <span className='text-blue-600 font-bold'>{item.avgPrice}</span></Title>
                </div>
                <div className="state-link-div flex justify-end items-center w-full">
                    <Link href={`/${item.slug}`} className='state-link text-white p-4 rounded-full bg-opacity-50 bg-slate-950 shadow-xl'><MdArrowForwardIos /></Link>
                </div>
            </div>
        </Card>
    )
}

export default CityCardHorizontal
