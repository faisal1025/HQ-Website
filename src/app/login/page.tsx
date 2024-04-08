
import React from 'react'
import LoginSignupComponent from '../components/AuthComponents/LoginSignupComponent'
import MainLayout from '../mainLayout/layout'

const Login = () => {
    return (
        <MainLayout>
            <div className='flex items-center m-4 justify-center font-sans font-semibold min-h-[80vh]'>
                <LoginSignupComponent />
            </div>
        </MainLayout>
    )
}

export default Login
