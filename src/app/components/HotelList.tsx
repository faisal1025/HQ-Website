"use client"

import React from 'react'
import { hotels } from '../redux/hotelLists/hotels'
import HotelCardHorizontal from './HotelCardHorizontal'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const HotelList = ({list}:{list: hotels[]}) => {
    const settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        mobileFirst: true,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />,
        responsive: [
          {
            breakpoint: 1550,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
             
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <Slider {...settings}>
            {list && (
                list.map((hotel) => {
                    return (
                        <HotelCardHorizontal key={hotel.id} item={hotel} />
                    )
                })
            )}
        </Slider>
    )
}

export default HotelList
