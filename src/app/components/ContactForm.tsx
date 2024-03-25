"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { handleOnChange } from '../redux/contact-us/contactUsSlice'

const ContactForm = () => {
    const {contactUs } = useSelector((store: RootState) => store)
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="email-contact flex gap-4 justify-center items-center">
            <input type="text" className="text-slate-800 contact-input rounded-lg border-2 border-gray-500 border-solid p-4" placeholder="Your Email" value={contactUs.email} onChange={(e) => dispatch(handleOnChange(e.target.value))} />
            <button className="notify-me-button rounded p-4 active:scale-75 transition hover:opacity-80 text-white bg-gradient-to-r from-red-400 to-red-500">Notify me</button>
        </div>
    )
}

export default ContactForm
