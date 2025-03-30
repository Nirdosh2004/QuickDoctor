import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { backendUrl, token, setToken } = useContext(AppContext)
  const navigate = useNavigate()

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPasssword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault() // it doesn't reload the website by itself

    try {
      if (state == 'Sign Up') {

        const { data } = await axios.post(backendUrl + '/api/user/register', { name, password, email })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }

      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', { password, email })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }


  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])



  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-black rounded-xl  text-black  text-sm shadow-lg'>
        <p className='text-2xl font-semibold  '>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p >Please {state === 'Sign Up' ? "Sign Up" : "log in"} to book appointment</p>
        {
          state === "Sign Up" && <div className='w-full'>
            <p className='font-medium'>Full Name</p>
            <input className='border bg-gray-100 border-green-300 font-medium rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
        }
        <div className='w-full'>
          <p className='font-medium'>Email</p>
          <input className='border bg-gray-100 border-green-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <p className='font-medium'>Password</p>
          <input className='border bg-gray-100 border-green-300 font-medium rounded w-full p-2 mt-1' type="text" onChange={(e) => setPasssword(e.target.value)} value={password} required />
        </div>
        <button type='submit' className='bg-blue-500 text-white w-full py-2 rounded-md text-base hover:bg-green-600 hover:text-white border-blue-900 transition-all duration-500'>{state === 'Sign Up' ? "Create Account" : "Login"} </button>
        {
          state === "Sign Up"
            ? <p className='font-medium'>Already have an account? <span onClick={() => setState('Login')} className='text-blue-500  underline cursor-pointer'>Login here</span></p>
            : <p className='font-medium'>Create a new account? <span onClick={() => setState('Sign Up')} className='text-blue-500 underline cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login