import React from 'react'
import SpecificationsCard from './SpecificationsCard'
import specificationsData from './specificationsData.json'

const Specifications = () => {
  return (
    <div className='specifications'>
        <h1 className='ml-2 text-[30px] font-bold tracking-tighter max-md:text-[25px]'>Why join hands with HQ?</h1>
        <h3 className='ml-2  text-[20px] font-bold tracking-tighter max-md:text-[18px]'>HQ's advanced tools can help you gain MORE out of your business</h3>
        
        <div className='flex gap-3'>
          {specificationsData.map((specification,i)=>(
            <div key={i}>
              <SpecificationsCard key={i} />
            </div>
          ))}

        </div>
        {/* <SpecificationsCard/> */}

    </div>
  )
}

export default Specifications