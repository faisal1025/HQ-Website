"use client";

import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import { signInSchema } from "../../../schemas";
import { loginUser } from "../../services/authApi";
import { errorResponse, getUser, loginResponse, setToken } from "../../utils/authHelper";
import Router from "next/router";
import { setAuth } from "../../redux/authStateSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { message } from "antd";
import { useRouter } from "next/navigation";
import Forgot from "./Forgot";

const initialValues = {
  identifier: "",
  password: "",
};

export const LoginForm = () => {
  const [error, setError] = useState<errorResponse>()
  const [login, setLogin] = useState<loginResponse>()
  const dispatch = useDispatch<AppDispatch>()
  const {user} = useSelector((store: RootState) => store.authState)
  const {back} = useRouter()

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit: async (values, action) => {
        const login = await loginUser(values);

        if (login.error === undefined) {
          setLogin(login);
        } else {
          setError(login.error);
        }
        action.resetForm();
      },
    });

  useEffect(() => {
    if(login){
      setToken(login)
      dispatch(setAuth())
      message.success(`Welcome back !!! ${getUser().username}`)
      back()
    }else if(error){
      message.error(error.message)
    }
  }, [login, error]);

  const [forget, setForget] = useState(false);
  const getForget = () => {
    setForget(!forget);
  };

  return (
    <div>
      {forget ? (
        <Forgot />
      ) : (
        <form
          autoComplete="off"
          autoSave="off"
          className="w-full"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded-full my-1 dark:bg-slate-500 dark:text-white mb-1 text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
            autoComplete="off"
            type="email"
            placeholder="Email"
            name="identifier"
            value={values.identifier}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.identifier && touched.identifier ? (
            <p className="text-sm text-red-500">{errors.identifier}</p>
          ) : null}
          <input
            className="rounded-full my-1 dark:bg-slate-500 dark:text-white text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
            autoComplete="off"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="text-sm text-red-500">{errors.password}</p>
          ) : null}
          <button
            type="submit"
            className="rounded-full my-4 bg-gradient-to-r from-slate-500 to-slate-950 w-full text-white h-12 active:scale-75 transition hover:opacity-80"
          >
            Login
          </button>
        </form>
      )}

      <span className="dark:text-white">
        <span className="cursor-pointer ml-[30%]" onClick={getForget} >
          Forgott Password ?
        </span>
      </span>
    </div>
  );
};
