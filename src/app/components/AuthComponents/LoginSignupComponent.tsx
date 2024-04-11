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
      <Card>
        <div className="card-header p-4 text-[30px] max-md:text-xl">
          <h1>Login/Signup</h1>
        </div>
        <div className="card-content p-4 text-lg">
          {showLogin ? <LoginForm /> : <SignupForm />}

          <Divider className="dark:text-white">
            {showLogin ? (
              <span className="dark:text-white text-base font-medium text-slate-500">
                {'Not have an account ? '}
                <span className="cursor-pointer text-blue-500" onClick={toggelForm}>
                  {'Signup'}
                </span>
              </span>
            ) : (
              <span className="dark:text-white text-base font-medium text-slate-500">
                {'Already have Account ? '}
                <span className="cursor-pointer text-blue-500" onClick={toggelForm}>
                  {'Login'}
                </span>
              </span>
            )}
          </Divider>
        </div>
      </Card>
    </div>
  );
};

export default LoginSignupComponent;
