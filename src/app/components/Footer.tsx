'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../../../public/assets/Logo.png"
import Link from 'next/link';
import Script from 'next/script';
import { getAllStates } from '../services/cityApi';
import { city } from '../Schema';

const Footer = () => {

  const [cities, setCities] = useState<city[]>([])

  useEffect(() => {
    const getFooterStates = async () => {
      const cities = await getAllStates()
      setCities(cities.props.cities)
    }
    getFooterStates();
  }, [])


  return (
    <div className='main mt-0 rounded-md bg-gradient-to-b from-indigo-300 to-indigo-200 dark:from-slate-800 dark:to-slate-700 tracking-tight'>

        <div className="sub_main py-4 justify-around flex flex-row-reverse gap-3 flex-wrap text-base max-md:text-sm font-sans">
            <div className='flex justify-around gap-2 w-2/4 max-sm:w-full'>
              <div className="two flex flex-col px-2 lg:mt-3">
                      <h3 className='flex justify-center text-xl max-sm:text-base mt-3 font-bold'>HQ Hotels</h3>

                      <div className="flex gap-4 py-2 justify-evenly">
                        <ul className='flex flex-col items-center max-w-fit gap-4 cursor-pointer'>
                          {
                            cities.slice(0, 4).map((city: city) => {
                              return <Link key={city.id} href={`/${city.slug}`}>
                                  <li className='hover:underline'>Hotel in {city.name}</li>
                              </Link>
                            })
                          }
                         
                        </ul>
                        {/* <ul className='second-hotel-footer-col flex flex-col max-w-fit gap-4 cursor-pointer'>
                        </ul> */}
                      </div>            
              </div>
              <div className="three flex items-center flex-col  px-2 lg:mt-3">
                  <h3 className='flex mt-3 text-xl max-sm:text-base font-bold'>General</h3>
                  <div className="py-2">
                      <ul className='flex gap-4 items-center flex-col '>
                          <Link href={'/about_us'} className='cursor-pointer  hover:underline'>About Us</Link>
                          <Link href={'/join_us'} className='cursor-pointer  hover:underline'>Join Us</Link>
                          {/* <Link href={'/login'} className='cursor-pointer  hover:underline'>Sign In</Link> */}
                         
                      </ul>
                  </div>
              </div>
            </div>
            <div className='flex gap-2 max-sm:w-2/5 max-md:w-1/3 w-1/5'>
              <div className='flex w-full flex-col justify-center  items-center'>
                  <Image src={Logo} alt='logo' width={100} height={100} className='max-md:w-16 '/>
                  <h4 className='text-slate-500 dark:text-slate-400 font-protest text-lg max-sm:text-base text-center'>Where comfort meets convenience, book with ease.</h4>
              </div>
            </div>
        </div>

        <div className="social  flex justify-between items-center mt-2">
          <hr className='w-[41%] '/>
            <Link href={'facebook.com'} target='_blank' className='px-2'><FaFacebookF /></Link>
            <Link href={'https://www.instagram.com/hqevents4?utm_source=qr&igsh=MWJpZ3l2b3JlZmh3OQ%3D%3D'} target='_blank' className='px-2'><FaInstagram /></Link>
            <Link href={'https://www.linkedin.com/company/happiness-quotient-events/'} target='_blank' className='px-2'><FaLinkedinIn /></Link>
          <hr className='w-[41%]'/>
        </div>

        <div className="copyright py-4 flex flex-wrap justify-center text-xs gap-3 items-center">
          <h3 className='w-fit text-nowrap'>hqevents.in&copy; All Right Reserved - 2024</h3>
          <Link href={'/privacy-policy'}>
            <h3 className='w-fit text-nowrap'>Privacy Policy</h3>
          </Link>
          <Link href={'/terms-conditions'}>
            <h3 className='w-fit text-nowrap'>Terms and Conditions</h3>
          </Link>
          <Link href={'/cancellation-refund-policy'}>
            <h3 className='w-fit text-nowrap'>Refund Policy</h3>
          </Link>
        </div>

        
    </div>
  )
}

export default Footer