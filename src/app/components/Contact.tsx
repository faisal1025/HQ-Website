"use client";
import React, { useState } from "react";
import { useRef } from "react";
import { handleContactForm } from "../services/authApi";

const Contact = () => {
  const [input, setInput] = useState("");
  const form = useRef(null);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await handleContactForm(input);
    setInput("");
  };

  return (
    <div className="main ">
      <div className="content p-5 mt-3">
        <h1 className="flex items-center justify-center font-bold text-xl max-md:text-md">
          Request a Call
        </h1>
        <form
          className="flex flex-col w-full items-center justify-center  max-md:text-[10px] mt-3"
          action=""
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Enter Your Name"
            id="name"
            className="w-[45%] my-2 bg-slate-100 rounded h-8 px-3 font-bold "
          />
          <input
            type="email"
            placeholder="Enter Your Email Address"
            name="user_email"
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            className="w-[45%] my-2 bg-slate-100 rounded h-8 px-3 font-bold"
          />
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            id="phone"
            className="w-[45%] my-2 bg-slate-100 rounded h-8 px-3 font-bold"
          />
          <button
            type="submit"
            className="w-[45%] my-2 bg-blue-400 hover:bg-blue-600 rounded h-8 px-3 font-bold"
          >
            Request Call
          </button>
        </form>
      </div>
    </div>
//     <div className="relative rounded-lg border border-gray-200 shadow-lg">
//   <button className="absolute -end-1 -top-1 rounded-full border border-gray-300 bg-gray-100 p-1">
//     <span className="sr-only">Close</span>
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
//       <path
//         fill-rule="evenodd"
//         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//         clip-rule="evenodd"
//       />
//     </svg>
//   </button>

//   <div className="flex items-center gap-4 p-4">
//     <img
//       alt=""
//       src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//       className="size-12 rounded-lg object-cover"
//     />

//     <div>
//       <p className="font-medium text-gray-900">Carol Daines</p>

//       <p className="line-clamp-1 text-sm text-gray-500">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, laborum?
//       </p>
//     </div>
//   </div>
// </div>
  );
};

export default Contact;
