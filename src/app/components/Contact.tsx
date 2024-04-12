"use client";
import React, { useState } from "react";
import { useRef } from "react";
import { handleCallForm } from "../services/authApi";
import { message } from "antd";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setLoading } from "../redux/globalStateSlice";

const Contact = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const form = useRef(null);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("input", input);
    dispatch(setLoading(true))
    const response = await handleCallForm(input);
    dispatch(setLoading(false))
    if(response.error === undefined)
      message.success(response.msg)
    else{
      message.error('Something went wrong. Please try again')
    }
    setInput({
      name: "",
      email: "",
      phone: ""
    });
  };

  return (
    <div className="contact_us max-md:my-[-50%]">
      <div className="content p-5 mt-3 border-solid border-2 border-slate-500 ">
        <h1 className="flex items-center justify-center font-bold text-[30px] max-md:text-md tracking-tighter max-md:text-[20px]">
          Get Associated With HQ
        </h1>
        {/* <form
          className="flex flex-col w-full items-center justify-center  max-md:text-[10px] mt-3"
          action=""
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Enter Your Name"
            id="name"
            value={input.name}
            onChange={(e) => {setInput({...input, name: e.target.value})}}
            className="w-[45%] my-2 bg-slate-100 rounded h-8 px-3 font-bold "
          />
          <input
            type="email"
            placeholder="Enter Your Email Address"
            name="user_email"
            value={input.email}
            onChange={(e)=>{setInput({...input, email: e.target.value})}}
            className="w-[45%] my-2 bg-slate-100 rounded h-8 px-3 font-bold"
          />
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            id="phone"
            value={input.phone}
            onChange={(e)=>{setInput({...input, phone: e.target.value})}}
            className="w-[45%] my-2 bg-slate-100 rounded h-8 px-3 font-bold"
          />
          <button
            type="submit"
            className="w-[45%] my-2 bg-blue-400 hover:bg-blue-600 rounded h-8 px-3 font-bold"
          >
            Request Call
          </button>
        </form> */}

        <section className="relative flex flex-wrap lg:h-screen lg:items-center mt-6">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Get started today!
              </h1>

              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                libero nulla eaque error neque ipsa culpa autem, at itaque
                nostrum!
              </p>
            </div>

            <form
              action="#"
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
              ref={form}
              onSubmit={sendEmail}
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter Your Name"
                    value={input.name}
                    onChange={(e) => {setInput({...input, name: e.target.value})}}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                    name="user_email"
                    value={input.email}
                    onChange={(e) => {setInput({...input, email: e.target.value})}}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter phone number"
                    name="user_phone"
                    value={input.phone}
                    onChange={(e) => {setInput({...input, phone: e.target.value})}}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">

                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Request call
                </button>
              </div>
            </form>
          </div>

          <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <Image
              alt=""
              src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="absolute inset-0 h-full w-full object-cover"
              width={16}
              height={16}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
