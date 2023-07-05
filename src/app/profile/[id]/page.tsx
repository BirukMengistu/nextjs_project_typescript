"use client";
import React from 'react'

const UserProfile = ({params}:any) => {
  return (
    <div className='flex flex-col 
    items-center justify-center p-8 '>
      
      
      <p className="text-4xl mt-4">
        ProfilePage user <span className="p-4 rounded-full bg-slate-500">{params.id}</span>
      </p>
      <hr/>
    </div>
  )
}

export default UserProfile
