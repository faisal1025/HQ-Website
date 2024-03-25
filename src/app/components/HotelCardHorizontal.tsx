"use client"

import React from 'react'
import Image from 'next/image'
import { Typography } from 'antd'
import Amenities from '../custom-template/Amenities'
import Card from '../custom-template/Card'
import Link from 'next/link'
import { amenities, hotels } from '../Schema'
import { getRatingStatus } from '../utils/hotelDetailUtility'

const { Title, Text } = Typography
const HotelCardHorizontal = ({item}: {item: hotels}) => {
    return (
        <Card>
            <Link href={`/${item.state.slug}/${item.slug}`}>
                <div className="card-thumbnail">
                    <Image src={item.thumbnail} alt={item.name} width={100} height={100} className='w-full h-auto object-contain' layout='responsive' />
                </div>
                <div className="card-footer p-4 font-sans font-semibold capitalize">
                    <Title level={4} className='title-text dark:!text-white '>{item.name}</Title>
                    <div className='flex items-center gap-4 detail-block'>
                        <Text className='dark:!text-white para-text'>{item.rating}-{getRatingStatus(item.rating)} <span className='set-rating'>(568 ratings)</span></Text>
                        <Amenities icon='MdLocationPin' text={item.state.name}/>
                    </div>
                    <div className='flex items-center gap-4 detail-block'>
                        {
                            item.amenities && 
                                (
                                    item.amenities.slice(0, 2).map((amenity: amenities) => {
                                        return <Amenities key={amenity.id} icon={amenity.icon} text={amenity.text}/>
                                    })
                                    )
                                }
                        {
                            item.amenities &&
                                item?.amenities?.length > 2 && <Amenities icon='MdAdd' text='More'/>
                        }
                    </div>
                </div>
            </Link>
        </Card>
    )
}

export default HotelCardHorizontal
