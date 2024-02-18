import React from 'react'

import Image from "next/image";
import {FaRegHeart, FaRegUserCircle, FaBars } from "react-icons/fa"
import { BsGlobe2 } from "react-icons/bs";
import Logo from "../../../public/assets/Logo.png"
import Heart from "../../../public/assets/Heart.png"
import Bars from "../../../public/assets/bars.png"
import Login from "../../../public/assets/Login.png"
import Language from "../../../public/assets/Language.png"
import Link from 'next/link';


const Navbar = () => {
    return (
        <header className="bg-gray-100  py-1">
        <nav className="flex justify-between items-center px-3  ">
          <div className="flex items-center lg:ml-[10%] cursor-pointer">
            <Image src={Logo} alt="Logo" width={65} />
          </div>
          <div className="flex flex-wrap items-center justify-end gap-6 max-md:flex mr-4">
              <Link
                href="#"
                className="flex items-center gap-2 text-black"
              >
                <i className='text-black' ><FaRegHeart size={20} /></i>
                <h5 className='lg:mt-0 md:mt-0 max-md:hidden'>Favroites</h5>
              </Link>
            
              <Link
                href="#"
                className="flex items-center gap-2 text-black max-md:hidden"
              >
                <i className='text-black' ><BsGlobe2 size={20} /></i>
                <h5 className='lg:mt-0 md:mt-0'>EN . $</h5>
              </Link>
            
              <Link
                href="#"
                className="flex items-center gap-2 text-black"
              >
                <i className='text-black' ><FaRegUserCircle  size={20} /></i>
                <h5 className='lg:mt-0 md:mt-0 max-md:hidden'>Login</h5>
              </Link>
           
              <div
                className="flex items-center gap-2 cursor-pointer text-black"
              >
                <i className='text-black' ><FaBars  size={20} /></i>
                <h5 className='lg:mt-0 md:mt-0 max-md:hidden'>Menu</h5>
              </div>
          
          </div>
        </nav>
      </header>
    )
}

export default Navbar
