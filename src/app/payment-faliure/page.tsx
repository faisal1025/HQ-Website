
import React from 'react'
import MainLayout from '../mainLayout/layout'
import GoBack from '../custom-template/GoBack'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment Failed',
  description: "This is the payment failed page which is giving the info that your payment is not done.",
  openGraph: {
    title: 'Payment failed page info',
    description: 'This page gives the information about the payment faliure if any payment gets failed'
  }
}

const PaymentFaliure = () => {
  return (
    <>
      <MainLayout>
        <div className='flex flex-col justify-center items-center h-screen'>
          <h1 className='text-xl font-bold'>Payment faliure</h1>
          <h3 className='text-base font-semibold text-blue-500'>
            <GoBack />
          </h3>
        </div>
      </MainLayout>
    </>
  )
}

export default PaymentFaliure
