import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Link href="/">
        <img src="/logo.png" className="h-12 cursor-pointer" alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Header
