import React from 'react'
import Mainlogo from '../assets/logo-header.png'
import dots from '../assets/3lines.png'
import vidoe from '../assets/vidoe-icon.png'
import money from '../assets/Naira.png'
import message from '../assets/message.png'
import settings from '../assets/settings.png'
import sighout from '../assets/SignOut-Icon.png'
import dummy from '../assets/dummy-side.png'
import graph from '../assets/Graph-side.png'

const SideBar = () => {

    return (
        <div className='bg-white max-w-[345px] w-full min:h-screen h-full'>
            <div className='mt-6 ms-16'>
                <img src={Mainlogo} alt="/" />
            </div>

            <div>
                <ul className=' mt-6 max-w-[240px] mx-auto flex flex-col gap-8 text-gray-500 justify-center items-center'>

                    <li className='flex bg-[#5D5FEF] text-white gap-6 rounded-md items-center w-full py-4 px-6 mb-[10px]'>
                        <img src={graph} alt="/" width={32} height={32} />
                        Dashboard
                    </li>

                    <li className='flex gap-6 rounded-md  items-center w-full px-6'>
                        <img src={dots} alt="/" width={32} height={32} />
                        Analytics
                    </li>

                    <li className='flex gap-6 rounded-md  items-center w-full px-6'>
                        <img src={vidoe} alt="/" width={32} height={32} />
                        Contents
                    </li>
                    <li className='flex gap-6 rounded-md  items-center w-full px-6'>
                        <img src={money} alt="/" width={32} height={32} />
                        Earnings
                    </li>
                    <li className='flex gap-6 rounded-md  items-center w-full px-6'>
                        <img src={message} alt="/" width={25} />
                        Messages
                    </li>
                    <li className='flex gap-6 rounded-md  items-center w-full px-6'>
                        <img src={settings} alt="/" width={32} height={32} />
                        Settings
                    </li>
                    <li className='flex gap-6 rounded-md  items-center w-full px-6'>
                        <img src={sighout} alt="/" width={32} height={32} />
                        Sign Out
                    </li>
                </ul>
            </div>

            <div className='bg-[#5D5FEF] max-w-[283px] w-full rounded-lg mx-auto mt-28 p-8 text-white text-center'>
                <div className='mx-auto w-12 h-11 flex place-items-center bg-white rounded-lg'>
                    <img src={dummy} alt="/" className='mx-auto' />
                </div>
                <h1 className='my-2 text-bold text-xl'>ACC Community</h1>
                <p className='text-xs'>Meet Creators just like you</p>

                <button className='w-full max-w-[136px] mx-auto bg-white mt-10 rounded-lg text-[17px] p-2 text-[#5D5FEF]'>Join Now</button>
            </div>
        </div>
    )
}

export default SideBar
