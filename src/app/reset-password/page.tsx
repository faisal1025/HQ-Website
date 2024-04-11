"use client";
import { Card, message } from "antd";
import React, { useState, useRef } from "react";
import { handleForgotForm } from "../services/authApi";
import MainLayout from "../mainLayout/layout";

const intitialFormState = {
  password:'',
  confirm_password:''
}

const ResetPassword = ({searchParams}:{searchParams?:{code: string}}) => {
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });
  const sendForgot = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await handleForgotForm(formData, searchParams?.code);
    if(response.error === undefined){
      message.success('Your password successfully changed login with you new password')
    }else{
      message.error("something went wrong please try again.")
    }
    setFormData(intitialFormState)
  };
  return (
    <MainLayout>
      <div className='flex flex-col items-center m-4 justify-center font-sans font-semibold min-h-[80vh]'>
        <div className="max-w-[30rem]">
          <Card>
            <div className="card-header p-4 text-[30px] max-md:text-xl">
              <h1 className='text-xl py-3 font-semibold'>Reset Password</h1>
            </div>
            <form className="w-full" onSubmit={sendForgot}>
              <input
                className="rounded-full my-1 dark:bg-slate-500 dark:text-white text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                type="password"
                placeholder="New Password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <input
                className="rounded-full my-1 dark:bg-slate-500 dark:text-white text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                type="password"
                placeholder="Confirm New Password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={(e) =>
                  setFormData({ ...formData, confirm_password: e.target.value })
                }
              />
              <button
                type="submit"
                className="rounded-full my-4 bg-gradient-to-r from-slate-500 to-slate-950 w-full text-white h-12 active:scale-75 transition hover:opacity-80"
              >
                Reset Password
              </button>
            </form>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResetPassword;
