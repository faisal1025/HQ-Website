"use client"

import React, {useState, useEffect} from 'react'
import HotelCardHorizontal from './HotelCardHorizontal'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import { hotels } from '../Schema';

const HotelList = ({list}:{list: hotels[]}) => {
    const length = list.length;

    const [screenSize, setScreenSize] = useState({
      largeScreen: false,
      mediumScreen: false,
      smallScreen: false
    });

    useEffect(() => {
      function handleResize() {          
          setScreenSize({
            largeScreen: (window && window.innerWidth <= 1550 && window.innerWidth > 1150),
            mediumScreen: (window && window.innerWidth <= 1150 && window.innerWidth > 600),
            smallScreen: (window && window.innerWidth <= 600)
          })
      }
      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [])
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
            breakpoint: 600,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
    };
    return (
        // <Slider {...settings}>
        //     {list && (
        //         list.map((hotel) => {
        //             return (
        //                 <HotelCardHorizontal key={hotel.id} item={hotel} />
        //             )
        //         })
        //     )}
        // </Slider>
      <>
      {
        (screenSize.largeScreen) ?
          length >= 3 ?
          <Slider {...settings}>
              {list && (
                  list.map((hotel) => {
                      return (
      
                          <HotelCardHorizontal key={hotel.id} item={hotel} />
            
                      )
                  })
              )}
          </Slider> : 
          <div className='flex gap-4 flex-row justify-start items-center w-full'>
          {list && (
            list.map((hotel) => {
                return (
                  <div key={hotel.id} className='w-max'>
                    <HotelCardHorizontal key={hotel.id} item={hotel} />
                  </div>
                )
            })
          )}
          </div>
        : (screenSize.mediumScreen) ?
            length >= 2 ?
            <Slider {...settings}>
              {list && (
                  list.map((hotel) => {
                      return (
      
                          <HotelCardHorizontal key={hotel.id} item={hotel} />
            
                      )
                  })
              )}
            </Slider> :
            <div className='flex gap-4 flex-row justify-start items-center w-full'>
            {list && (
              list.map((hotel) => {
                  return (
                    <div key={hotel.id} className='w-max'>
                      <HotelCardHorizontal key={hotel.id} item={hotel} />
                    </div>
                  )
              })
            )}
            </div>
        : (screenSize.smallScreen) ?
            length >= 2 ?
            <Slider {...settings}>
              {list && (
                  list.map((hotel) => {
                      return (
      
                          <HotelCardHorizontal key={hotel.id} item={hotel} />
            
                      )
                  })
              )}
            </Slider> :
            <div className='flex gap-4 flex-row justify-start items-center w-full'>
            {list && (
              list.map((hotel) => {
                  return (
                    <div key={hotel.id} className='w-max'>
                      <HotelCardHorizontal key={hotel.id} item={hotel} />
                    </div>
                  )
              })
            )}
            </div>
        :
            length >= 4 ?
            <Slider {...settings}>
              {list && (
                  list.map((hotel) => {
                      return (
      
                          <HotelCardHorizontal key={hotel.id} item={hotel} />
            
                      )
                  })
              )}
            </Slider> :
            <div className='flex flex-wrap gap-4 flex-row justify-start items-center w-full'>
            {list && (
              list.map((hotel) => {
                  return (
                    <div key={hotel.id} className='w-max'>
                      <HotelCardHorizontal key={hotel.id} item={hotel} />
                    </div>
                  )
              })
            )}
            </div>
      }
      </>
    )
}

export default HotelList
