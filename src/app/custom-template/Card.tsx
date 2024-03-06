import React from 'react'

const Card = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='card rounded-xl shadow-xl h-auto max-w-full bg-gradient-to-t from-violet-200 to-sky-50 dark:from-sky-950 dark:to-slate-600'>
      {children}
    </div>
  )
}

export default Card
