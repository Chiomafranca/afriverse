import React, { useState } from 'react'
import header from '../assets/logo-header.png'
import search from '../assets/search.png'
import flag from '../assets/flag.png'
import drop from '../assets/drop.png'
import bell from '../assets/bell.png'
import man from '../assets/man-logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Charts from './Charts'



const Header = () => {
    const [showLogo, setShowLogo] = useState(false)
    const [showNav, setShowNav] = useState(false)

    const showToggle = () => {
        setShowLogo(!showLogo)
        setShowNav(!showNav)
    }

    return (

        <>
            <div className=' max-w-[1350px]  mx-auto  bg-white lg:bg-white  w-full  '>
                <div className=' lg:hidden sm:block'>
                    <img src={header} alt="/" width={100} />
                </div>

                <div>
                    <div className=' hidden justify-around items-center  lg:flex lg:w-full '>
                        <div >
                            <img src={header} alt="/" width={100} />
                        </div>

                        <h1 className=' text-blue-900 text-[30px]  text-bold text-4xl tracking-tighter'>Dashboard</h1>

                        <div className=' flex gap-10'>
                            <div className='flex border bg-gray-100 rounded-md pl-4'>
                                <img src={search} alt="/" className=' w-6 object-contain' />
                                <input type="text" className='bg-gray-100 w-60 border-none outline-none py-1' placeholder='searchhere' />
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={flag} alt="/" className=' object-contain h-6' />
                                <p className='text-bold text-xl '>Eng (NG)</p>
                                <img src={drop} alt="/" className='object-contain w-3 text-gray-300' />
                            </div>
                        </div>
                        <div className='flex items-center gap-10'>
                            <img src={bell} alt="/" />
                            <div className='flex gap-2 items-center'>
                                <img src={man} alt="/" className='w-10 h-10' />
                                <div>
                                    <p className=' font-bold text-xl'> Musfiq</p>
                                    <p>Admin</p>
                                </div>

                            </div>
                            <img src={drop} alt="" className='object-contain w-5' />
                        </div>


                    </div>

                </div>



                <div className=' float-right relative bottom-10'>
                    {
                        showLogo ? <IoMdClose size={35} className=' lg:hidden ' onClick={showToggle} />

                            : <RxHamburgerMenu className='lg:hidden ' size={35} onClick={showToggle} />
                    }
                </div>

                <div className={` lg:hidden  bg-white z-40  text-black px-4 py-5 flex flex-col ${showNav ? "block  " : " hidden "}`}
                    onClick={showToggle}>

                    <img src={header} alt="/" className='w-20 lg:28 absolute top[80px] hidden' />

                    <h1 className=' text-blue-900  text-[30px] text-bold pt-2 text-5xl tracking-tighter'>Dashboard</h1>

                    <div className='gap-10 mt-9'>
                        <div className='flex border bg-gray-100  rounded-md pl-4'>
                            <img src={search} alt="/" className=' w-6 object-contain' />
                            <input type="text" className='bg-gray-100 w-60 border-none outline-none py-1' placeholder='searchhere' />
                        </div>
                        <div className='flex items-center gap-2 mt-9'>
                            <img src={flag} alt="/" className=' object-contain h-6' />
                            <p className='text-bold text-2xl '>Eng (NG)</p>
                            <img src={drop} alt="/" className='object-contain w-3 hidden text-gray-300' />
                        </div>
                    </div>
                    <div className='flex items-center gap-10 mt-9'>
                        <img src={bell} alt="/" width={35} />
                        <div className='flex gap-2 items-center'>
                            <img src={man} alt="/" className='w-10 h-10' />
                            <div>
                                <p className=' font-bold text-2xl'> Musfiq</p>
                                <p>Admin</p>
                            </div>

                        </div>
                        <img src={drop} alt="" className='object-contain w-5 hidden' />
                    </div>

                </div>

            </div>


        </>
    )
}

export default Header
