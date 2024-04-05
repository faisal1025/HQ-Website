"use client"
import React, {Suspense, useEffect} from 'react'

import Image from "next/image";
import {FaRegHeart, FaRegUserCircle, FaBars } from "react-icons/fa"
import { BsGlobe2 } from "react-icons/bs";
import Logo from "../../../public/assets/Logo.png"
import Link from 'next/link';
import {Avatar, Dropdown, message} from 'antd'
import type {MenuProps} from 'antd'
import { setAuth, setAuthAsync } from '../redux/authStateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import Cookies from 'js-cookie';
import { boolean } from 'yup';
import { unsetToken } from '../utils/authHelper';
import { useRouter } from 'next/navigation';


const menus: MenuProps['items'] = [
  {
      label: <Link href={'/join_us'}>Join Us</Link>,
      key: 1
  },
  {
      label: <Link href={'/about_us'}>About Us</Link>,
      key: 2,
    },
  ]
  const mobileMenu: MenuProps['items'] = [
  {
    label: <Link href={'/student_help'}>Support And Help</Link>,
    key: 1
  },
  {
    label: <Link href={'/bussiness_deals'}>Bussiness Deals</Link>,
    key: 2,
  },
]

const Navbar = () => {
  const {isAuthenticated, user} = useSelector((store: RootState) => store.authState)
  const dispatch = useDispatch<AppDispatch>()
  const {refresh} = useRouter()
  
  const handleLogout = () => {
    unsetToken()
    refresh()
    dispatch(setAuthAsync())
      .then(() => {
        message.info(`logout successful`);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const userMenu: MenuProps['items'] = [
    {
      label: <div onClick={handleLogout}>Logout</div>,
      key: 1
    }
  ]

  return (
      <header className="bg-gradient-to-r sticky top-0 z-20 from-indigo-300 to-indigo-50  dark:from-slate-600 dark:to-slate-950 py-1">
      <nav className="flex justify-between items-center px-3  ">
        <Link href={'/'} className="flex items-center lg:ml-[10%] cursor-pointer">
          <Image src={Logo} alt="Logo" width={65} />
        </Link>
        <div className="flex flex-wrap text-black dark:text-white items-center justify-end gap-6 max-md:flex mr-4">
            <Link
              href="#"
              className="flex items-center gap-2"
            >
              <i><FaRegHeart size={20} /></i>
              <h5 className='lg:mt-0 md:mt-0 max-md:hidden'>Favroites</h5>
            </Link>
          
            <Link
              href="#"
              className="flex items-center gap-2 max-md:hidden"
            >
              <i><BsGlobe2 size={20} /></i>
              <h5 className='lg:mt-0 md:mt-0'>EN . $</h5>
            </Link>
            {  
              isAuthenticated === true ? 
                (
                  <Suspense>
                    <Dropdown menu={{items: userMenu}} trigger={['click']}>
                      <Avatar>{user.username?.charAt(0).toUpperCase()}</Avatar>
                    </Dropdown>
                  </Suspense>
                ):
                (
                  <Link
                    href="/login"
                    className="flex items-center gap-2 "
                  >
                    <i><FaRegUserCircle  size={20} /></i>
                    <h5 className='lg:mt-0 md:mt-0 max-md:hidden'>{"Login"}</h5>
                  </Link>
                )
                

            }

            <Dropdown menu={{items: menus}}>
              <div
                className="flex items-center gap-2 cursor-pointer"
                >
                <i><FaBars  size={20} /></i>
                <h5 className='lg:mt-0 md:mt-0 max-md:hidden'>Menu</h5>
              </div>
            </Dropdown>
        
        </div>
      </nav>
    </header>
  )
}

export default Navbar
