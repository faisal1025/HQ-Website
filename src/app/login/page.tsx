'use client'

import React, { useState } from 'react'
import Card from '../custom-template/Card'
import {Divider} from 'antd'
import Link from 'next/link'
import { LoginForm } from '../components/LoginForm'
import { SignupForm } from '../components/SignupForm'

const Login = () => {
    const [showLogin, setShowLogin] = useState(true); 
    const toggelForm = () => {
        setShowLogin(!showLogin)
    }

    return (
        <div className='flex items-center m-4 justify-center font-sans font-semibold h-[80vh]'>
            <Card>
                <div className='card-header p-4 text-[30px] max-md:text-xl'>
                    <h1>Login/Signup</h1>
                </div>
                <div className='card-content p-4 text-lg'>
                    {
                        showLogin ? <LoginForm /> : <SignupForm />
                    }
                    
                    <Divider className='dark:text-white'>
                        {
                            showLogin ? <span className='dark:text-white'>Not have an account ? <span className='cursor-pointer' onClick={toggelForm}>Signup</span></span> :
                            <span className='dark:text-white'>Already have Account ? <span className='cursor-pointer' onClick={toggelForm}>Login</span></span>
                        }
                    </Divider>
                </div>
            </Card>
        </div>
    )
}

export default Login
