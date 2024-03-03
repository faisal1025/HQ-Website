import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../../../public/assets/Logo.png"
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='main mt-4 bg-slate-500  tracking-tight text-slate-300'>

        <div className="sub_main flex text-base font-sans bg-slate-500 h-[16rem] max-md:h-full">
            <div className="one w-[25%] bg-slate-20 flex flex-col items-center justify-center ">
                <Image src={Logo} alt='logo' width={100} className='max-md:w-14 '/>
                <h4 className='text-2xl font-bold max-md:mt-2'>Happy</h4>
                <h4 className='text-2xl font-bold'>Quotient</h4>
            </div>
            <div className="two w-[45%] bg-yellow-10 flex flex-col lg:mt-3">
                    <h3 className='flex justify-center text-xl mt-3 font-bold'>HQ Hotels</h3>

                    <div className="flex mt-4 justify-evenly max-md:ml-3 max-md:mt-2">
                      <ul className='flex flex-col gap-4 cursor-pointer'>
                          <li className='hover:underline'>Hotel in Delhi</li>
                          <li  className='hover:underline'>Hotel in Jaipur</li>
                          <li  className='hover:underline'>Hotel in Delhi</li>
                          <li  className='hover:underline'>Hotel in Jaipur</li>
                      </ul>
                      <ul className='flex flex-col gap-4 cursor-pointer'>
                          <li className='hover:underline'>Hotel in Delhi</li>
                          <li  className='hover:underline'>Hotel in Jaipur</li>
                          <li  className='hover:underline'>Hotel in Delhi</li>
                          <li  className='hover:underline'>Hotel in Jaipur</li>
      
                      </ul>
                    </div>            
            </div>
            <div className="three flex items-center flex-col w-[30%] px-4 lg:mt-3">
                <h3 className='flex mt-3 text-xl font-bold'>General</h3>
                <div className="mt-4 max-md:mt-2">
                    <ul className='flex gap-4 items-center flex-col '>
                        <li className='cursor-pointer  hover:underline'>About Us</li>
                        <li className='cursor-pointer  hover:underline'>Join Us</li>
                        <li className='cursor-pointer  hover:underline'>Contact Us</li>
                        <li className='cursor-pointer  hover:underline'>Hotel in Jaipur</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="social  flex justify-between items-center mt-2">
          <hr className='w-[41%] '/>
            <i><FaFacebookF /></i>
            <i><FaInstagram /></i>
            <i><FaLinkedinIn /></i>
          <hr className='w-[41%]'/>
        </div>

        <div className="copyright py-4 flex justify-center items-center">
        <h3 className='ml-2'>&copy; All Right Reserved - 2024</h3>
        </div>
        
    </div>
  )
}

export default Footer