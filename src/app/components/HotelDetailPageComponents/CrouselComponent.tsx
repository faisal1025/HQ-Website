"use client"

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const CrouselComponent = ({list}: {list: string[]}) => {

    const settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section>
                <Slider {...settings}>
                    {
                        list &&
                    list.map((photo, ind) => {
                        return(
                            <div key={ind} className="flex">
                                <Image
                                    src={photo}
                                    alt="logo"
                                    width={100}
                                    height={100}
                                    layout="responsive"
                                    className="w-full object-cover max-md:h-40"
                                />
                            </div>
                        )
                    })
                    } 
                </Slider>
            </section>
    )
}

export default CrouselComponent
