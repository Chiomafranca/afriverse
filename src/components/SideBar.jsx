import React from 'react'
// import circle from '../assets/circle.png'
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
        <>

            <div className='bg-white  lg:block max-w-[250px] h-screen -z-20  lg:h-[1000px] absolute top-16 left-0 right-0 bottom-0'>


                <div className='flex bg-[#5D5FEF] gap-4 h-10 rounded-md  mt-10 max-w-[240px] z-auto mx-auto justify-center items-center w-44 text-center'>
                    <div>
                        <img src={graph} alt="/" width={27} />
                    </div>

                    <div className=' text-white text-[18px] mr-7'>
                        <p>Dashboard</p>
                    </div>

                </div>

                <div>
                    <ul className=' mt-7 max-w-[240px] flex flex-col  text-gray-500 justify-center items-center'>

                        <li className=' flex items-center gap-7'>
                            <img src={dots} alt="/" width={30} />
                            Analytics
                        </li>

                        <li className=' flex items-center gap-7 text-gray-500 mt-3'>
                            <img src={vidoe} alt="/" width={30} />
                            Contents
                        </li>
                        <li className=' flex items-center gap-7  text-gray-500 mt-3'>
                            <img src={money} alt="/" width={30} />
                            Earnings
                        </li>
                        <li className=' flex items-center gap-7 mt-3  text-gray-500'>
                            <img src={message} alt="/" width={25} />
                            Messages
                        </li>
                        <li className=' flex items-center gap-7 mt-3  text-gray-500'>
                            <img src={settings} alt="/" width={30} />
                            Settings
                        </li>
                        <li className=' flex items-center gap-7 mt-3  text-gray-500'>
                            <img src={sighout} alt="/" width={30} />
                            Sign Out
                        </li>
                    </ul>
                </div>

                <div className='bg-[#5D5FEF] max-w-[1250px] rounded-lg mx-auto w-48 mt-28 h-52 '>
                    <div className='text-white text-center pt-7'>
                        <img src={dummy} alt="/" className='text-white bg-white rounded-lg text-center mx-auto p-1' />
                        <h1 className=' text-bold text-xl text-[20px]'>ACC Community</h1>
                        <span className=' text-white text-xs tracking-wide text-[10px]'>Meet Creators just like you</span>
                    </div>

                    <button className='bg-white mx-auto flex justify-center mt-10 rounded-lg p-1 text-[17px] px-6 text-[#5D5FEF]'>Join Now</button>
                </div>
            </div>



        </>
    )
}

export default SideBar
