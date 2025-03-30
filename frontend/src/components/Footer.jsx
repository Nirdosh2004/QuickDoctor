import React from 'react'
import { assets } from '../assets/assets'
import { Navigate, useNavigate } from 'react-router-dom'

const Footer = () => {


    const navigate = useNavigate()

    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* Left Section  */}
                <div  >
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6 font-medium'>QuickDoc connects you with 100+ trusted doctors across specialties. Book same-day appointments, compare reviews, and manage healthcare visits—all in one place. Fast, secure, and hassle-free.</p>
                </div>
                {/* center Section  */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li className='font-medium cursor-pointer hover:text-green-700' onClick={() => navigate('/')}>Home</li>
                        <li className='font-medium cursor-pointer hover:text-green-700' onClick={() => navigate('/doctors')}>All Doctors</li>
                        <li className='font-medium cursor-pointer hover:text-green-700' onClick={() => navigate('/about')}>About us</li>
                        <li className='font-medium cursor-pointer hover:text-green-700' onClick={() => navigate('/contact')}>Contact us</li>

                    </ul>
                </div>
                {/* Right Section  */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li className='font-medium hover:text-green-700' >+91 7704901719</li>
                        <li className='font-medium  hover:text-green-700' >nirdoshkushwaha75@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                {/* Copyright text  */}
                <hr className='border-2' />
                <p className='py-5 text-sm text-center'>Copyright @2025 QuickDoc - All Right Reserved. </p>
            </div>
        </div>
    )
}

export default Footer