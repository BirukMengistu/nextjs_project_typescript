"use client";
import React, { useState } from 'react'
import {Reviewer} from '@/helpers/helpers'
import { timeLog } from 'console';
const UserProfile = ({params}:any) => {
    const [title ,setTitle] = useState<string>('')
    let newReviewer = new Reviewer('Biruk','male' ,35 , 'Code Reviewer and Tester')
    const Textload =()=>{
        setTimeout(()=>{
            setTitle('Developer')
        }, 0)
        setTimeout(()=>{
            setTitle('freelancer')
        }, 8000)
        setTimeout(()=>{
            setTitle('Content Creater')
        }, 16000)
        
    }
    setInterval(Textload,24000)
    return (
    <div  className='flex flex-col 
    items-center justify-center p-8 '>
      
        
      <p className="text-4xl mt-4">
        ProfilePage user <span className="p-4 rounded-full bg-slate-500">{params.id}</span>
      </p>

      <hr/>
      <p className="text-2xl mt-4">
        ProfilePage user <span className="p-2 rounded-full bg-slate-200">{newReviewer.getDetailsInfo()}</span>
      </p>
      <p className='m-3 '>
      <span className="p-2">{newReviewer.reviewrInfo()}</span>
      </p>
      <p className='m-3 ' >
        <span className="p-2">I am {title}</span>
      </p>
    </div>
  )
}

export default UserProfile
