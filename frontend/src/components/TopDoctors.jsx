import React, { useContext } from 'react'
// import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const TopDoctors = () => {

  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)


  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Elite Medical Professionals at Your Service</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {
          doctors.slice(0, 10).map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className=' border-2 border-green-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-20px] transition-all duration-500' key={index}>
              <img className='bg-green-100 ' src={item.image} alt="" />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full '></p>
                  <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name} </p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))
        }
      </div>
      <button
        onClick={() => {
          navigate('/doctors');
          scrollTo(0, 0)
        }}
        className='bg-green-100 text-gray-600 px-12 flex justify-between gap-3 hover:scale-105 transition-all duratipn-300  py-3 rounded-full border-2  mt-10'>more to explore <img src={assets.arrow_icon} alt="" /> </button>
    </div>
  )
}

export default TopDoctors