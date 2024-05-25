
import React from "react";
import MainLayout from "../mainLayout/layout";
import ResetForm from "../components/AuthComponents/ResetForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Reset-Password',
  description: "Reset password page for HQ-Rooms"
}

const ResetPassword = () => {
  return (
    <>
      <MainLayout>
        <div className='bg-[url("/assets/reset_background.jpg")] flex items-center p-4 justify-center font-sans font-semibold min-h-[90vh] bg-cover bg-center bg-no-repeat'>
          <div className="w-[30rem]">
            <div className="bg-black bg-opacity-30 px-8 py-10 rounded-md border">
              <div className="card-header p-4 text-[30px] max-md:text-xl text-slate-700">
                <h1>Reset Password</h1>
              </div>
              <ResetForm />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default ResetPassword;
