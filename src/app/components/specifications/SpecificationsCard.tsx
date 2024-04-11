import Image from 'next/image'
import React from 'react'

const SpecificationsCard = () => {
  return (
    <a  className="group relative block bg-black">
  <Image
    alt=""
    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    width={17}
    height={16}
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-[13px] font-medium uppercase tracking-widest text-pink-500">Self Onboarding</p>

    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
        Onboard in just 30 minutes and start growing your business from Day 1
        </p>
      </div>
    </div>
  </div>
</a>
  )
}

export default SpecificationsCard