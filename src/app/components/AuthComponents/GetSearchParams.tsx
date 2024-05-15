'use client'

import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const GetSearchParams = ({search, getVal}: {search: string, getVal: (val:string | null) => void}) => {
    const searchParams = useSearchParams();
    const val = searchParams.get(search)
    useEffect(() => {
        getVal(val)
    }, [])
    return (
        <>
        </>
    )
}

export default GetSearchParams
