'use client'

import React, { FormEvent, useEffect, useState } from "react";

import { useFormik } from "formik";
import {signUpSchema} from '../../../schemas'
import { registerUser } from "../../services/authApi";
import { errorResponse, loginResponse, setToken } from "@/app/utils/authHelper";
import { setAuthAsync } from "@/app/redux/authStateSlice";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { useRouter } from "next/navigation";


const initialValues = {
  username: "",
  email: "",
  password: "",
  confirm_password:""
};

export const SignupForm = () => {
  const [error, setError] = useState<errorResponse>()
  const [register, setRegister] = useState<loginResponse>()
  const dispatch = useDispatch<AppDispatch>()
  const {user} = useSelector((store: RootState) => store.authState)
  const {replace} = useRouter()

  const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values,action)=>{
      const register = await registerUser(values);
      console.log("register: ", register);
      
      if(register.error === undefined){
        setRegister(register)
      }else{
        setError(register.error)
      }
      action.resetForm()
    }
  })

  useEffect(() => {
    if(register){
      setToken(register)
      dispatch(setAuthAsync())
      .then(() => {
        message.info(`welcome back !! ${user.username}`)
      })
      .catch((err) => {
        console.log(err)
      })
      // replace('/')
    }else if(error){
      message.error(error.message)
    }
  }, [register, error])

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        className="rounded-full my-1 dark:bg-slate-500 dark:text-white text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        autoSave="false"
        type="text"
        placeholder="Username"
        name="username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.username && touched.username ? <p className="text-sm text-red-500">{errors.username}</p>:null}
      <input
        className="rounded-full my-1 dark:bg-slate-500 dark:text-white mb-1 text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        autoSave="false"
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email ? <p className="text-sm text-red-500">{errors.email}</p>:null}
      <input
        className="rounded-full my-1 dark:bg-slate-500 dark:text-white text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        type="password"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && touched.password ? <p className="text-sm text-red-500">{errors.password}</p>:null}

      <input
        className="rounded-full my-1 dark:bg-slate-500 dark:text-white text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        type="password"
        placeholder="Confrim Password"
        name="confirm_password"
        value={values.confirm_password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.confirm_password && touched.confirm_password ? <p className="text-sm text-red-500">{errors.confirm_password}</p>:null}
      <button type="submit" className="rounded-full my-4 bg-gradient-to-r from-slate-500 to-slate-950 w-full text-white h-12 active:scale-75 transition hover:opacity-80">
        SignUp
      </button>
    </form>
  );
};

