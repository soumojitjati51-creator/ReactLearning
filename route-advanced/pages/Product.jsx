import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='flex  flex-col justify-around items-center h-screen w-full'>
      {/* <div className='text-4xl'>
        Product Page
      </div> */}
      <div className='flex justify-center gap-6'>
        <Link to='/Product/Men'>Men</Link>
        <Link to='/Product/Women'>Women</Link>
        <Link to='/Product/Kids'>Kids</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product