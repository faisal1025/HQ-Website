import React from "react";

import { useFormik } from "formik";
import {signUpSchema} from '../../schemas'


const initialValues = {
  email: "",
  password: "",
  confirm_password:""
};

export const SignupForm = () => {
  const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values,action)=>{
      console.log(values);
      
      action.resetForm()
    }
  })
  console.log(errors);
  
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="rounded-full my-1 dark:bg-slate-500 dark:text-white mb-1 text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email ? <p>{errors.email}</p>:null}
      <input
        className="rounded-full my-1 dark:bg-slate-500 dark:text-white text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        type="password"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && touched.password ? <p>{errors.password}</p>:null}

      <input
        className="rounded-full my-1 dark:bg-slate-500 dark:text-white text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        type="password"
        placeholder="Confrim Password"
        name="confirm_password"
        value={values.confirm_password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.confirm_password && touched.confirm_password ? <p>{errors.confirm_password}</p>:null}
      <button className="rounded-full my-4 bg-gradient-to-r from-slate-500 to-slate-950 w-full text-white max-md:w-1/3 max-sm:w-full h-12 active:scale-75 transition hover:opacity-80">
        Submit
      </button>
    </form>
  );
};

