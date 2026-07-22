import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6 px-18'>
        <h4 className='bg-black px-3 py-1.5 rounded-4xl text-white uppercase text-xs'>Target Audience</h4>
        <button className='bg-gray-300 uppercase hover:cursor-pointer px-4 py-2 rounded-full tracking-wider  hover:shadow-2xl shadow-gray-700 hover:font-semibold '>Digital Banking platform</button>
    </div>
  )
}

export default Navbar