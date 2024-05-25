'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import MainLayout from '../mainLayout/layout'
import Head from 'next/head'

const PaymentSuccess = () => {
  const router = useRouter()
  return (
    <>
     
      <title>Payment Success | Hq Rooms</title>
      <meta
        name="description"
        content="This is the payment success page which is giving the info that your payment is successfully done."
      />
      <meta property="og:title" content={`Payment Success page info`}/>
      <meta
      property="og:description"
      content={`This page gives the information about the payment success if any payment done success`}
      />
       
      <MainLayout>
        <div className='flex flex-col justify-center items-center h-screen'>
          <h1 className='text-xl font-bold'>Your payment is completed successfully</h1>
          <h3 className='text-base font-semibold text-blue-500'>
            <button onClick={() => router.back()}>
                Return back
            </button>
          </h3>
        </div>
      </MainLayout>
    </>
  )
}

export default PaymentSuccess
