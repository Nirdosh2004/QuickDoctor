import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium '>Browse Doctors by Expertise</h1>
      <p className='sm:w-1/3 text-center text-sm'>Explore our verified list of specialists and book hassle-free consultations at your convenience.
      </p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {
          specialityData.map((item, index) => (
            <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-20px] transition-all duration-500' key={index}
              to={`/doctors/${item.speciality}`}>
              <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
              <p>{item.speciality}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default SpecialityMenu