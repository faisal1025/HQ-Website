'use client'

import { updateUserAsync } from '@/app/redux/authStateSlice'
import { AppDispatch, RootState } from '@/app/redux/store'
import { getMe, updateUser } from '@/app/services/authApi'
import { makeBookingForm } from '@/schemas'
import { message } from 'antd'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const initialValues = {
    fullName: "",
    phoneNumber: "",
    address: ""
}
const MakeBookingForm = () => {
   
    const {user} = useSelector((store: RootState) => store.authState)
    const dispatch = useDispatch<AppDispatch>()

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues,
        validationSchema: makeBookingForm,
        onSubmit: async (values, action) => {
            try {
                const arg = {
                    id: user.id as any  as string,
                    values
                }
                dispatch(updateUserAsync(arg))
                message.success('Account successfully updated')
            } catch (error) {
                if(error instanceof Error)
                    console.log(error.message);
                
                message.error('Something went wrong')
            }
            action.resetForm()
        }
    })

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <input
                className="rounded-full my-1 dark:bg-slate-500 dark:text-white mb-1 text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                value={values.fullName}
                type="text" 
                placeholder='Full Name' 
                name='fullName' 
                onChange={handleChange} 
                onBlur={handleBlur} 
            />
            {errors.fullName && touched.fullName ? <p className="text-sm text-red-500 drop-shadow-xl">{errors.fullName}</p>:null}
            <input 
                className="rounded-full my-1 dark:bg-slate-500 dark:text-white mb-1 text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                value={values.phoneNumber} 
                type="text" 
                placeholder='Phone Number' 
                name='phoneNumber' 
                onChange={handleChange} 
                onBlur={handleBlur} 
            />
            {errors.phoneNumber && touched.phoneNumber ? <p className="text-sm text-red-500 drop-shadow-xl">{errors.phoneNumber}</p>:null}
            <input 
                className="rounded-full my-1 dark:bg-slate-500 dark:text-white mb-1 text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                value={values.address}
                type="text"
                placeholder='Enter your full address'
                name='address'
                onChange={handleChange}
                onBlur={handleBlur} 
            />
            {errors.address && touched.address ? <p className="text-sm text-red-500 drop-shadow-xl">{errors.address}</p>:null}
            <button className="w-full h-9 text-white rounded-full active:scale-75 transition bg-gradient-to-r from-slate-800 to-slate-600 font-semibold my-2" type="submit">
                Submit
            </button>
        </form>
    )
}

export default MakeBookingForm
