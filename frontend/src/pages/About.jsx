import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span> </p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate pariatur reprehenderit, exercitationem harum dolore tempora quae. Optio consequuntur commodi ducimus.</p>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, provident mollitia recusandae doloremque animi nostrum accusamus, culpa consequatur earum unde, esse reprehenderit facere temporibus odio inventore voluptas? Asperiores, aliquam vitae.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione placeat reiciendis excepturi magnam labore distinctio commodi nihil.</p>
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
        <div  className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15xl] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorum placeat.</p>
        </div>
        <div  className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15xl] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil ratione ad id libero?</p>
        </div>
      </div>
    </div>
  )
}

export default About