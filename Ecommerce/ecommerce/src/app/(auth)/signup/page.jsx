"use client"

import React from 'react'

const Signup = () => {

    const onSubmit = async () => {};
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="h-screen">
        <img src="./signup.png" alt="" />
      </div>
      <div className="p-[15%] bg-white">
        <h1>Create an account</h1>
        <form action={onSubmit}>
            
        </form>
      </div>
    </div>
  )
}

export default Signup
