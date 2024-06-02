
import React from 'react'
import MainLayout from '../mainLayout/layout'
import GoBack from '../custom-template/GoBack'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment Success',
  description: "This is the payment success page which is giving the info that your payment is successfully done.",
  openGraph: {
    title: 'Payment Success page info',
    description: 'This page gives the information about the payment success if any payment done success'
  }
}

const PaymentSuccess = () => {
  return (
    <>
       
      <MainLayout>
        <div className='flex flex-col justify-center items-center h-screen'>
          <h1 className='text-xl font-bold'>Your payment is completed successfully</h1>
          <h3 className='text-base font-semibold text-blue-500'>
            <GoBack />
          </h3>
        </div>
      </MainLayout>
    </>
  )
}

export default PaymentSuccess
