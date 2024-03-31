"use client"

import React, {useEffect, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import CityCardHorizontal from './CityCardHorizontal';
import { city } from '../Schema';

const CitiesList = ({list}:{list: city[]}) => {
    const length = list.length;
    const [screenSize, setScreenSize] = useState({
      largeScreen: false,
      mediumScreen: false,
      smallScreen: false
    });
    useEffect(() => {
      function handleResize() {
          setScreenSize({
            largeScreen: (window.innerWidth <= 1550 && window.innerWidth > 1150),
            mediumScreen: (window.innerWidth <= 1150 && window.innerWidth > 600),
            smallScreen: (window.innerWidth <= 600)
          })
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [])

    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        mobileFirst: true,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />,
        responsive: [
          {
            breakpoint: 1550,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 2.5,
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
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
      <>
      {
        (screenSize.largeScreen) ?
          length >= 4 ?
          <Slider {...settings}>
              {list && (
                  list.map((city) => {
                      return (
      
                          <CityCardHorizontal key={city.id} item={city} />
            
                      )
                  })
              )}
          </Slider> : 
          <div className='flex gap-4 flex-row justify-start items-center w-full'>
          {list && (
            list.map((city) => {
                return (
                  <div key={city.id} className='w-72'>
                    <CityCardHorizontal key={city.id} item={city} />
                  </div>
                )
            })
          )}
          </div>
        : (screenSize.mediumScreen) ?
            length >= 3 ?
            <Slider {...settings}>
              {list && (
                  list.map((city) => {
                      return (
      
                          <CityCardHorizontal key={city.id} item={city} />
            
                      )
                  })
              )}
            </Slider> :
            <div className='flex gap-4 flex-row justify-start items-center w-full'>
            {list && (
              list.map((city) => {
                  return (
                    <div key={city.id} className='w-72'>
                      <CityCardHorizontal key={city.id} item={city} />
                    </div>
                  )
              })
            )}
            </div>
        : (screenSize.smallScreen) ?
            length >= 2 ?
            <Slider {...settings}>
              {list && (
                  list.map((city) => {
                      return (
      
                          <CityCardHorizontal key={city.id} item={city} />
            
                      )
                  })
              )}
            </Slider> :
            <div className='flex gap-4 flex-row justify-start items-center w-full'>
            {list && (
              list.map((city) => {
                  return (
                    <div key={city.id} className='w-72'>
                      <CityCardHorizontal key={city.id} item={city} />
                    </div>
                  )
              })
            )}
            </div>
        :
            length >= 5 ?
            <Slider {...settings}>
              {list && (
                  list.map((city) => {
                      return (
      
                          <CityCardHorizontal key={city.id} item={city} />
            
                      )
                  })
              )}
            </Slider> :
            <div className='flex gap-4 flex-row justify-start items-center w-full'>
            {list && (
              list.map((city) => {
                  return (
                    <div key={city.id} className='w-72'>
                      <CityCardHorizontal key={city.id} item={city} />
                    </div>
                  )
              })
            )}
            </div>
      }
    </>
    )
}

export default CitiesList
