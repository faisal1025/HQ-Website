import React from 'react'

import Image from "next/image";

import Logo from "../../../public/assets/Logo.png"
import Heart from "../../../public/assets/Heart.png"
import Bars from "../../../public/assets/bars.png"
import Login from "../../../public/assets/Login.png"
import Language from "../../../public/assets/Language.png"


const Navbar = () => {
    return (
        <header className="bg-gray-100  py-1">
        <div className="container flex justify-between items-center px-3  ">
          <div className="flex items-center lg:ml-[10%] cursor-pointer">
            <Image src={Logo} alt="Logo" width={65} />
          </div>
          <nav className="flex flex-wrap items-center justify-end gap-6 max-md:flex mr-4">
            <div className="flex mr-3 cursor-pointer">
              <Image src={Heart} width={25} className="mr-3 " alt="heart-logo" />
  
              <a
                href="#"
                className="mt-4 text-black lg:mt-0 md:mt-0 max-md:hidden"
              >
                Favroites
              </a>
            </div>
            <div className="mr-4 flex cursor-pointer max-md:hidden">
              <Image
                src={Language}
                width={25}
                className="mr-3 "
                alt="language-logo"
              />
              <a href="#" className="mt-4 text-black lg:mt-0 md:mt-0 ">
                EN . $
              </a>
            </div>
            <div className="ml-1 flex cursor-pointer">
              <Image src={Login} width={27} className="mr-3 " alt="Login logo" />
              <a
                href="#"
                className="mt-4 text-black lg:mt-0 md:mt-0 max-md:hidden"
              >
                Login
              </a>
            </div>
            <div className="flex cursor-pointer mr-4">
              <Image src={Bars} width={60} className="" alt="bars" />
              <a
                href="#"
                className="mt-4 text-black lg:mt-[1.1rem] max-md:hidden"
              >
                Menu
              </a>
            </div>
          </nav>
        </div>
      </header>
    )
}

export default Navbar
