'use client';
import React, { useState } from 'react'

const Login = () => {
  const [userName , setUserName] = useState('')
  const [password , setPassword] = useState('')

  return (
    <div className='flex flex-col bg-slate-500 items-center justify-center min-h-screen py-2'>
          <div className="mb-4 flex flex-col">
          <label className='justify-first p-2'>User name</label>
          <input className='justify-first  rounded-sm p-2' type="text" placeholder='enter username ..' 
            value={userName}  onChange={(e)=>setUserName(e.target.value)}/>
              </div>
              <div className="mb-4 flex flex-col">
        <label className='justify-first p-2'>Password</label>
        <input className='justify-first rounded-sm p-2' type="password" placeholder='*********'
         value={password}  onChange={(e)=>setUserName(e.target.value)}/>
          </div>
          <div className="mt-4 flex items-center justify-between">
           <button type="button" className='bg-white p-2 rounded focus:shadow-outline text-gray-900 hover:bg-white-900 focus:outline-none'>Login</button>
           <a  className=' p-2 rounded text-white hover:bg-white-900 focus:outline-none'>Forget password</a>
          </div>
    </div>
  )
}

export default Login
