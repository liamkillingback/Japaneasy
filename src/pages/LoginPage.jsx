import React from 'react'
import { Login } from '../components/auth'

const LoginPage = () => {
  return (
    <div className='w-full h-full items-center justify-center flex absolute top-0 left-0'>
        <div className='lg:w-[60%] sm:h-[85%] h-[78%] sm:mt-24 rounded-xl mb-10 mt-24 items-center justify-center bg-[rgba(13,18,29,0.96)]'>
            <Login />
        </div>
    </div>
  )
}

export default LoginPage