import React from 'react'

const Card = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`card rounded-xl shadow-xl h-auto max-w-full bg-gradient-to-t from-violet-200 to-sky-50 dark:from-sky-950 dark:to-slate-600 ${className}`}>
      {children}
    </div>
  )
}

export default Card
