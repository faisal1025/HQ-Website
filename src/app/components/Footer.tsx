import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../../../public/assets/Logo.png"
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='main mt-4 rounded-md bg-gradient-to-b from-indigo-300 to-indigo-200 dark:from-slate-800 dark:to-slate-700 tracking-tight'>

        <div className="sub_main py-4 justify-around flex flex-row-reverse gap-3 flex-wrap text-base max-md:text-sm font-sans">
            <div className='flex justify-around gap-2 w-2/4 max-sm:w-full'>
              <div className="two flex flex-col px-2 lg:mt-3">
                      <h3 className='flex justify-center text-xl max-sm:text-base mt-3 font-bold'>HQ Hotels</h3>

                      <div className="flex gap-4 py-2 justify-evenly">
                        <ul className='flex flex-col max-w-fit gap-4 cursor-pointer'>
                            <li className='hover:underline'>Hotel in Delhi</li>
                            <li  className='hover:underline'>Hotel in Jaipur</li>
                            <li  className='hover:underline'>Hotel in Delhi</li>
                            <li  className='hover:underline'>Hotel in Jaipur</li>
                        </ul>
                        <ul className='flex flex-col max-w-fit gap-4 cursor-pointer'>
                            <li className='hover:underline'>Hotel in Delhi</li>
                            <li  className='hover:underline'>Hotel in Jaipur</li>
                            <li  className='hover:underline'>Hotel in Delhi</li>
                            <li  className='hover:underline'>Hotel in Jaipur</li>
                        </ul>
                      </div>            
              </div>
              <div className="three flex items-center flex-col  px-2 lg:mt-3">
                  <h3 className='flex mt-3 text-xl max-sm:text-base font-bold'>General</h3>
                  <div className="py-2">
                      <ul className='flex gap-4 items-center flex-col '>
                          <li className='cursor-pointer  hover:underline'>About Us</li>
                          <li className='cursor-pointer  hover:underline'>Join Us</li>
                          <li className='cursor-pointer  hover:underline'>Contact Us</li>
                          <li className='cursor-pointer  hover:underline'>Hotel in Jaipur</li>
                      </ul>
                  </div>
              </div>
            </div>
            <div className='flex gap-2 max-sm:w-2/5 max-md:w-1/3 w-1/5'>
              <div className='flex w-full flex-col justify-center  items-center'>
                  <Image src={Logo} alt='logo' width={100} height={100} className='max-md:w-16 '/>
                  <h4 className='text-slate-600 font-protest text-lg max-sm:text-base text-center'>Where comfort meets convenience, book with ease.</h4>
              </div>
            </div>
        </div>

        <div className="social  flex justify-between items-center mt-2">
          <hr className='w-[41%] '/>
            <i className='px-2'><FaFacebookF /></i>
            <i className='px-2'><FaInstagram /></i>
            <i className='px-2'><FaLinkedinIn /></i>
          <hr className='w-[41%]'/>
        </div>

        <div className="copyright py-4 flex justify-center items-center">
          <h3 className='ml-2'>&copy; All Right Reserved - 2024</h3>
        </div>
        
    </div>
  )
}

export default Footer