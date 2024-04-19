import Image from 'next/image'
import React from 'react'
import { specification } from './Specifications'

const SpecificationsCard = ({specification}: {specification: specification}) => {
  return (
    <a  className="group relative block bg-black">

      <div className="relative p-4 bg-cover" style={{background: 'rgb(83 86 87) url(/assets/specification.avif) no-repeat center', backgroundSize: 'cover'}}>
        <p className="text-[13px] font-medium uppercase tracking-widest text-pink-500">{specification.title}</p>

        <p className="text-xl font-bold text-white sm:text-2xl">{specification.name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div
            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p className="text-sm text-white">
            {specification.desc}
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default SpecificationsCard