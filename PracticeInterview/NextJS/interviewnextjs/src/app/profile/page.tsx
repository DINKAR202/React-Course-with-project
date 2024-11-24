"use client"
import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from "next/navigation";


export default function page() {
  const router = useRouter();


  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      router.push("/login")

    } catch (error:any) {
      console.log(error.message);
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile</h1>
      <hr />
      <p>Profile</p>

      <button onClick={logout} className='bg-blue-500 py-2 px-4'>Logout</button>
    </div>
  )
}
