import React from 'react'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'

export default function MainLayout({ children }) {
    return (
        <section className='flex'>
            <SideBar />
            <div className='w-full'>
                <Navbar />
                {children}
            </div>

        </section>
    )
}
