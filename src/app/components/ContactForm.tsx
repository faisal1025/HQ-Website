"use client";
import React, { useState } from "react";
import { useRef } from "react";
import { handleContactForm } from "../services/authApi";

const ContactForm = () => {
  const [input, setInput] = useState("");
  const form = useRef(null);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await handleContactForm(input);
    setInput('');
  };

  return (
    <div className="email-contact flex gap-4 justify-center items-center text-center">
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
          type="submit"
          className="notify-me-button rounded p-4 active:scale-75 transition hover:opacity-80 text-white bg-gradient-to-r from-red-400 to-red-500"
        >
          Notify me
        </button>
      </form>
    </div>
  );
};

export default ContactForm;