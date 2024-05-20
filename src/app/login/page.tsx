import React from 'react'
import LoginSignupComponent from '../components/AuthComponents/LoginSignupComponent'
import MainLayout from '../mainLayout/layout'
import { url } from 'inspector'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login',
    description: "Login page for HQ-Rooms"
}

const Login = () => {
    return (
        <MainLayout>
            <div className='bg-[url("/assets/login_background.jpg")] flex items-center p-4 justify-center font-sans font-semibold min-h-[90vh] bg-cover bg-center bg-no-repeat'>
                <LoginSignupComponent />
            </div>
        </MainLayout>
    )
}

export default Login
