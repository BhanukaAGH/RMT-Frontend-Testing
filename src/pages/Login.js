import React, { useState } from 'react'
import SliitLogo from '../assets/logo.png'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div class='flex items-center min-h-screen bg-white'>
      <div class='container mx-auto'>
        <div class='max-w-md mx-auto mb-10'>
          <div class='text-center flex flex-col items-center'>
            <img
              src={SliitLogo}
              alt='sliit-logo'
              className='w-36 h-36 object-cover'
            />
            <h1 class='my-2 text-3xl font-semibold text-gray-700'>Sign in</h1>
            <p class='text-gray-500'>Sign in to access your account</p>
          </div>
          <div class='my-3 p-6 bg-gray-200'>
            <form action=''>
              <div class='mb-6'>
                <label for='email' class='block mb-2 text-sm text-gray-600'>
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='itxxxxxxxx@my.sliit.lk'
                  class='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-100 focus:border-[#e2a500]'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class='mb-6'>
                <label for='password' class='block mb-2 text-sm text-gray-600'>
                  Password
                </label>

                <input
                  type='password'
                  name='password'
                  placeholder='Your Password'
                  class='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-100 focus:border-[#e2a500]'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class='mb-6'>
                <button
                  type='button'
                  class='w-full px-3 py-2 text-white bg-[#e2a500] rounded-md focus:bg-[#e2a500] focus:outline-none'
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
