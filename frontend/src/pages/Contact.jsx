import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500 font-medium'>
        <p> CONTACT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28  text-sm'>
        <img className='w-full border-2 border-green-700 rounded md:w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-bold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500 font-medium'>Nirala Estate <br />
            Gautam Buddha Nagar, Greater Noida <br />
            Uttar Pradesh, India - 201310</p>
          <p className='text-gray-500 font-medium'> 7704901719 <br /> nirdoshkushwaha75@gmail.com</p>
          <p className='font-bold text-lg text-gray-600'>Carrers at QuickDoc</p>
          <p className='text-gray-500 font-medium'>Join our mission to transform healthcare accessibility! We're always looking for passionate individuals in tech, customer support, and medical partnerships. Send your resume to the email above with the subject line.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-green-700 rounded hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact