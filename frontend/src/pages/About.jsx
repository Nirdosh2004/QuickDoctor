import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center font-medium text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span> </p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] border-2 border-green-700 rounded' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At QuickDoc, we are committed to revolutionizing healthcare access by connecting patients with trusted, qualified doctors in just a few clicks. We prioritize transparency, convenience, and quality care, ensuring that every patient can easily find, compare, and book appointments with healthcare providers who meet their unique needs. Whether you require an in-person consultation or a virtual visit, our seamless booking system is designed to save you time and reduce the stress of managing healthcare.</p>
          <p> What sets us apart is our dedication to patient-centric care. Every doctor on our platform undergoes a rigorous verification process, including credential checks and patient reviews, so you can book with confidence. gap between patients and top-tier medical professionals, making healthcare more accessible, affordable, and efficient for everyone.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Behind QuickDoc is a team of healthcare enthusiasts, technologists, and customer support specialists who are passionate about improving your medical journey. We continuously innovate to enhance your experience, from AI-driven doctor matching to secure payment options and telehealth integrations.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15xl] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, porro?</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15xl] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorum placeat.</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15xl] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil ratione ad id libero?</p>
        </div>
      </div>
    </div>
  )
}

export default About