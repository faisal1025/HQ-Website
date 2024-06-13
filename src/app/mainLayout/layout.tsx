import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SocketClient from '../components/SocketClient';

const MainLayout = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div>
            <Navbar />
            {children}
            <SocketClient />
            <Footer />
        </div>
    )
}

export default MainLayout
