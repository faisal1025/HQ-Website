'use client'
import { handleForgot } from '@/app/services/authApi';
import { message } from 'antd';
import React,{ useRef, useState } from 'react'

const Forgot = () => {
  const [input,setInput] = useState("");
  const form = useRef(null);

  const sendForgotEmail = async (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const response = await handleForgot(input);
    if(response.error === undefined){
      message.success('Your reset password link is sent to your registered email.')
    }
    else{
      message.error('Something went wrong! please try again')
    }
  }
  return (
    <form ref={form} onSubmit={sendForgotEmail} className="w-full" > 
      <input
        name="user_email"
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
        className="rounded-full my-1 dark:bg-slate-500 dark:text-white mb-1 text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        autoComplete="off"
        type="email"
        placeholder="Enter Your registered email"
        // name="identifier"
      />
      <button type="submit" className="rounded-full my-4 bg-gradient-to-r from-slate-500 to-slate-950 w-full text-white h-12 active:scale-75 transition hover:opacity-80">
        Send
      </button>
    </form>
  )
}

export default Forgot