import React from 'react'
import { useNavigate } from 'react-router-dom'


const Nav2 = () => {
    let navigate = useNavigate()
  return (
    <div className=' flex py-4 px-2 bg-cyan-800 gap-5'>
        <button className='px-3 py-2 bg-red-600 text-white hover:cursor-pointer active:scale-95 rounded' 
      onClick={()=>{
        navigate('/')
      } }>
        Return to Home
      </button>
      <button className='px-3 py-2 bg-red-600 text-white hover:cursor-pointer active:scale-95 rounded' 
      onClick={()=>{
        navigate(-1)
      } }>
        Back
      </button>
      <button className='px-3 py-2 bg-red-600 text-white hover:cursor-pointer active:scale-95 rounded' 
      onClick={()=>{
        navigate(+1)
      } }>
        Next
      </button>
    </div>
  )
}

export default Nav2