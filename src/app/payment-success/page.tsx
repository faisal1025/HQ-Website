'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import MainLayout from '../mainLayout/layout'

const PaymentSuccess = () => {
  const router = useRouter()
  return (
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
  )
}

export default PaymentSuccess
