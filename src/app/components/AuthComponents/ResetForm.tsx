"use client"

import { useRouter } from 'next/navigation'
import React, { Suspense, useState } from 'react'
import GetSearchParams from './GetSearchParams'
import { handleForgotForm } from '@/app/services/authApi'
import { useFormik } from "formik";
import { resetSchema } from "@/schemas";
import { message } from "antd";

const initialValues = {
    password:'',
    confirm_password:''
  }

const ResetForm = () => {
    const [code, setCode] = useState<string | undefined>("")

    function getVal(val: string | null) {
        if(val === null)
        setCode(undefined)
        else
        setCode(val)
    }

    const {push} = useRouter()

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
        initialValues: initialValues,
        validationSchema: resetSchema,
        onSubmit: async (values, action) => {
        
        const response = await handleForgotForm(values, code);
        
        
        if(response.error === undefined){
            message.success('Your password successfully changed login with your new password')
        }else{
            message.error("something went wrong please try again.")
        }
        push('/login')
        },
    });
    return (
        <>
            <Suspense>
                <GetSearchParams search={"code"} getVal={getVal} />
            </Suspense>
            <form className="w-full" onSubmit={handleSubmit}>
                <input
                  className="rounded-full my-1 dark:bg-slate-500 dark:text-white text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  type="password"
                  placeholder="New Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? <p className="text-sm text-red-500 drop-shadow-xl">{errors.password}</p>:null}
                <input
                  className="rounded-full my-1 dark:bg-slate-500 dark:text-white text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  type="password"
                  placeholder="Confirm New Password"
                  name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? <p className="text-sm text-red-500 drop-shadow-xl">{errors.confirm_password}</p>:null}
                <button
                  type="submit"
                  className="rounded-full my-4 bg-gradient-to-r from-slate-500 to-slate-950 w-full text-white h-12 active:scale-75 transition hover:opacity-80"
                >
                  Reset Password
                </button>
            </form>
        </>
    )
}

export default ResetForm
