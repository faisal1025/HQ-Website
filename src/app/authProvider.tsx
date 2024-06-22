'use client'

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './redux/store'
import { setAuthAsync } from './redux/authStateSlice'



const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(setAuthAsync())
    }, [dispatch])

    return (
        <>
        {children}
        </>
    )
}

export default AuthProvider
