"use client";
import React from 'react'

const UserProfile = ({params}:any) => {
  return (
    <div className='flex flex-col 
    items-center justify-center py-2 '>
      <h1>Profile</h1>
      <hr/>
      <p className="text-4xl">
        ProfilePage <span className="p-2 rounded">{params.id}</span>
      </p>
    </div>
  )
}

export default UserProfile
