import React from 'react'
import Card from '../custom-template/Card'
import {Divider} from 'antd'
import Link from 'next/link'

const Login = () => {
    return (
        <div className='flex items-center justify-center font-sans font-semibold h-[70vh]'>
            <Card>
                <div className='card-header p-4 text-[30px] max-md:text-xl'>
                    <h1>Login/Signup</h1>
                </div>
                <div className='card-content p-4 text-lg'>
                    <input className='mb-1 text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type="email" placeholder='Email' />
                    <input className='text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type="password" placeholder='Password' />
                    <button className='rounded-full m-1 bg-gradient-to-r from-slate-500 to-slate-950 w-full text-white max-md:w-1/3 max-sm:w-full h-12 active:scale-75 transition hover:opacity-80'>Login</button>
                    <Divider>
                        Not have an account ? <Link href={'/signup'}>Signup</Link>
                    </Divider>
                </div>
            </Card>
        </div>
    )
}

export default Login
