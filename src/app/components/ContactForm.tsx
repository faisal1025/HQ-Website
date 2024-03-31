"use client";
import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const func = () => {
  setTimeout(()=>{
    message.success('Success')
  },200)
}

const ContactForm = () => {
  const [input, setInput] = useState("");
  const form = useRef(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            {func()}
            
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  return (
    <div className="email-contact flex gap-4 justify-center items-center">
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="email"
          name="user_email"
          className="text-slate-800 contact-input rounded-lg border-2 border-gray-500 border-solid p-4"
          placeholder="Your email"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="notify-me-button rounded p-4 active:scale-75 transition hover:opacity-80 text-white bg-gradient-to-r from-red-400 to-red-500"
          onSubmit={() => {
            setInput("");
          }}
          onClick={() => {
            setInput("");
          }}
        >
          Notify me
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
