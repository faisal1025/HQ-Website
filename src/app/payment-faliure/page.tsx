'use client'

import Link from 'next/link'
import React from 'react'

const PaymentFaliure = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-xl font-bold'>Payment faliure</h1>
      <h3 className='text-base font-semibold text-blue-500'>
        <Link href={'/'}>
            Return back to home page and try again
        </Link>
      </h3>
    </div>
  )
}

export default PaymentFaliure
