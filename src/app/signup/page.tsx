'use client';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import {axios} from 'axios'
import Link from 'next/link';
const SignUp = () => {
  const router = useRouter  
  const [userName , setUserName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [loading ,setLoading]= useState(true)
  //custom button condition

  const [buttonDispabled ,setButtonDispabled] = useState(false)
  
  useEffect(()=>{
    if( userName.length > 0 && email.length > 0 && password.length > 0 ) {
      setButtonDispabled(true)
    }
   
  },[userName , password ,email])
  
  const signupHandler =()=>{
                
  }
  return (
    <div className='flex flex-col bg-slate-500 items-center justify-center min-h-screen py-2'>
         <p className='text-lg '>SignUp Page</p>
         <p className='text-sm m-2 p2-2 '>{loading? '..Processing' :'Ready to signup'}</p>
        <div className="bg-state-200 shadow-lg p-3 m-4">
        <div className="mb-4 flex flex-col">
          <label className='justify-first p-2'>User name</label>
          <input className='justify-first  rounded-sm p-2' type="text" placeholder='enter username ..' 
            value={userName}  onChange={(e)=>setUserName(e.target.value)}/>
          </div>
          <div className="mb-4 flex flex-col">
          <label className='justify-first p-2'>User Email</label>
          <input className='justify-first  rounded-sm p-2' type="email" placeholder='enter username ..' 
            value={email}  onChange={(e)=>setEmail(e.target.value)}/>
          </div>
        <div className="mb-4 flex flex-col">
        <label className='justify-first p-2'>Password</label>
        <input className='justify-first rounded-sm p-2' type="password" placeholder='*********'
         value={password}  onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="mt-4 flex items-center justify-between">
           <button type="button" className='bg-white p-2 rounded 
                 focus:shadow-outline text-gray-900 hover:bg-white-900
                  focus:outline-none'>{ buttonDispabled===false ? 'Not signup': 'Sign Up'}
                  </button>
           <a  className=' p-2 rounded text-white hover:bg-white-900 focus:outline-none'>Forget password</a>
          </div>
          <div className="mt-4 p-3 flex items-center shadow-inner text-white">
            <p>if you already have an account - <Link className='text-lg my-2 hover:text-green-400 ' href='/login'>Login</Link></p>
          </div>
        </div>
         
    </div>
  )
}

export default SignUp
