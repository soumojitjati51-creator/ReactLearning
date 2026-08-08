import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 px-8 py-4 items-center'>
        <h2 className='text-xl font-bold'>
            Tesla
        </h2>
        <div className='flex gap-6'>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Product'>Product</Link>
            <Link to='/Contact'>Contact</Link>
            <Link to='/Courses'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar