"use client"

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import CityCardHorizontal from './CityCardHorizontal';
import { city } from '../Schema';

const CitiesList = ({list}:{list: city[]}) => {
    const length = list.length;

    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        mobileFirst: true,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />,
        responsive: [
          {
            breakpoint: 1550,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
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
                list.map((city) => {
                    return (
                        <CityCardHorizontal key={city.id} item={city} />
                    )
                })
            )}
        </Slider>
    )
}

export default CitiesList
