'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import MainLayout from '../mainLayout/layout'
import Head from 'next/head'

const PaymentFaliure = () => {
  const {back} = useRouter()
  return (
    <>
      <title>Payment Failed | Hq Rooms</title>
      <meta
        name="description"
        content="This is the payment failed page which is giving the info that your payment is not done."
      />
      <meta property="og:title" content={`Payment failed page info`}/>
      <meta
      property="og:description"
      content={`This page gives the information about the payment faliure if any payment gets failed`}
      />
      <MainLayout>
        <div className='flex flex-col justify-center items-center h-screen'>
          <h1 className='text-xl font-bold'>Payment faliure</h1>
          <h3 className='text-base font-semibold text-blue-500'>
            <button onClick={() => back()}>
                Return back
            </button>
          </h3>
        </div>
      </MainLayout>
    </>
  )
}

export default PaymentFaliure
