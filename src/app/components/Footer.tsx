import React from 'react'
import Image from 'next/image'

import Logo from "../../../public/assets/Logo.png"

const Footer = () => {
  return (
    <div className='main mt-4 bg-slate-500  tracking-tight text-slate-300'>

        <div className="sub_main flex  bg-slate-500 h-[16rem] max-md:h-full">
            <div className="one w-[25%] bg-slate-20 flex flex-col items-center justify-center ">
                <Image src={Logo} alt='logo' width={100} className='max-md:w-14 '/>
                <h4 className='text-[2rem] max-md:text-[1.4rem] font-bold max-md:mt-2'>Happy</h4>
                <h4 className='text-[2rem] max-md:text-[1.4rem] font-bold'>Quotient</h4>
            </div>
            <div className="two w-[45%] bg-yellow-10 flex flex-col lg:mt-3">
                    <h3 className='flex justify-center text-[2rem] mt-3 max-md:text-[1.5rem] font-bold'>Locations</h3>

                    <div className="flex mt-4 text-[1.4rem] justify-evenly max-md:text-[0.85rem] max-md:ml-3 max-md:mt-2">
                    <ul className='cursor-pointer'>
                        <li className='hover:underline'>Hotel in Delhi</li>
                        <li  className='hover:underline'>Hotel in Jaipur</li>
                        <li  className='hover:underline'>Hotel in Delhi</li>
                        <li  className='hover:underline'>Hotel in Jaipur</li>
                    </ul>
                    <ul className='cursor-pointer'>
                    <li className='hover:underline'>Hotel in Delhi</li>
                        <li  className='hover:underline'>Hotel in Jaipur</li>
                        <li  className='hover:underline'>Hotel in Delhi</li>
                        <li  className='hover:underline'>Hotel in Jaipur</li>
    
                    </ul>
                    </div>            
            </div>
            <div className="three flex flex-col w-[30%] lg:mt-3">
            <h3 className='flex justify-center text-[2rem] mt-3 max-md:text-[1.5rem] font-bold'>General</h3>
                <div className="mt-4 text-[1.4rem] max-md:text-[0.85rem]  max-md:mt-2">
                    <ul className='items-center justify-center flex flex-col '>
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
            <Image src={Logo} width={40} alt='Email' className='max-md:w-[2rem]'/>
            <Image src={Logo} width={40} alt='Email' className='max-md:w-[2rem]'/>
            <Image src={Logo} width={40} alt='Email' className='max-md:w-[2rem]'/>
          <hr className='w-[41%]'/>
        </div>

        <div className="copyright  flex justify-center items-center mt-4">
        <Image src={Logo} width={40} alt='Email' className='max-md:w-[2rem]'/>
        <h3 className='ml-2'>Copyright, All Right Reserved - 2024</h3>
        </div>
        
    </div>
  )
}

export default Footer