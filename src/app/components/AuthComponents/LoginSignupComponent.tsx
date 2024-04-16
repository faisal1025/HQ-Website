"use client";

import React, { useState } from "react";

import { Divider } from "antd";
import Link from "next/link";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import Card from "@/app/custom-template/Card";

const LoginSignupComponent = () => {
  const [showLogin, setShowLogin] = useState(true);
  const toggelForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="w-[30rem]">
      <div className="bg-black bg-opacity-30 px-8 py-10 rounded-md border">
        <div className="card-header p-4 text-[30px] max-md:text-xl text-white">
          <h1>Login/Signup</h1>
        </div>
        <div className="card-content p-4 text-lg">
          {showLogin ? <LoginForm /> : <SignupForm />}

          <Divider className="text-slate-200">
            {showLogin ? (
              <span className="text-slate-200 text-base font-medium">
                {'Not have an account ? '}
                <span className="cursor-pointer text-blue-500" onClick={toggelForm}>
                  {'Signup'}
                </span>
              </span>
            ) : (
              <span className="text-slate-200 text-base font-medium">
                {'Already have Account ? '}
                <span className="cursor-pointer text-blue-500" onClick={toggelForm}>
                  {'Login'}
                </span>
              </span>
            )}
          </Divider>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupComponent;
