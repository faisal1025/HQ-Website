"use client";
import { Card, message } from "antd";
import React, { useState, useRef } from "react";
import { handleForgotForm } from "../services/authApi";
import MainLayout from "../mainLayout/layout";
import { useFormik } from "formik";
import { resetSchema } from "@/schemas";

const initialValues = {
  password:'',
  confirm_password:''
}

const ResetPassword = ({searchParams}:{searchParams?:{code: string}}) => {
  
  const [formData, setFormData] = useState(initialValues);

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
  useFormik({
    initialValues: initialValues,
    validationSchema: resetSchema,
    onSubmit: async (values, action) => {
      const response = await handleForgotForm(formData, searchParams?.code);
      if(response.error === undefined){
        message.success('Your password successfully changed login with your new password')
      }else{
        message.error("something went wrong please try again.")
      }
      setFormData(initialValues)
    },
  });

  return (
    <MainLayout>
      <div className='bg-[url("/assets/reset_background.jpg")] flex items-center p-4 justify-center font-sans font-semibold min-h-[90vh] bg-cover bg-center bg-no-repeat'>
        <div className="w-[30rem]">
          <div className="bg-black bg-opacity-30 px-8 py-10 rounded-md border">
            <div className="card-header p-4 text-[30px] max-md:text-xl text-slate-700">
              <h1>Reset Password</h1>
            </div>
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
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResetPassword;
