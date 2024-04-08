'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const PaymentSuccess = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-xl font-bold'>Your payment is completed successfully</h1>
      <h3 className='text-base font-semibold text-blue-500'>
        <button onClick={() => router.back()}>
            Return back to home page
        </button>
      </h3>
    </div>
  )
}

export default PaymentSuccess
