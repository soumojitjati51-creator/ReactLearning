import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between text-white bg-stone-600 p-4'>
        <h1>Mom The God</h1>
        <div className='flex gap-6'>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
        </div>
      </div>
  )
}

export default Navbar


//to stop webpage reloading on every route change use Link instead of a