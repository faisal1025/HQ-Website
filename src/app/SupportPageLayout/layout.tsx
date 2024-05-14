import Link from 'next/link'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { MdEmail, MdMyLocation } from 'react-icons/md'
import Navbar from '../components/Navbar'

const SupportPageLayout = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <Navbar />
        {children}
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Reach to us</h2>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">

                <FaPhone className="w-14 text-pink-500 h-6"/>

                <h2 className="mt-6 text-xl font-bold text-white">Call Us</h2>
                <Link href="tel:8282323232" className="mt-1 text-sm text-gray-300">
                    +91-9654888027

                </Link>
                {/* <br />
                <a href="tel:7282323232" className="mt-1 text-sm text-gray-300">
                    +91-7282323232
                </a> */}
                </a>

                <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                <MdEmail className="w-8 text-pink-500 h-6"/>

                <h2 className="mt-4 text-xl font-bold text-white">Email Us</h2>

                <Link
                    href="mailto:contact@hqevents.in"
                    className="mt-1 text-sm text-gray-300"
                >
                contact@hqevents.in
                </Link>
                </a>

                <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                <MdMyLocation className="w-8 text-pink-500 h-6"/>
                <h2 className="mt-4 text-xl font-bold text-white">Address</h2>

                <p className="mt-1 text-sm text-gray-300">
                2nd Floor, F35/4, Okhla Phase - 2,  New Delhi - 110020
                </p>
                </a>
            </div>
            </div>
        </section>
    </div>
  )
}

export default SupportPageLayout
