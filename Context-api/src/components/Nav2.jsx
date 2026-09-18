import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = () => {
  const [theme,settheme]=useContext(ThemeDataContext)
  return (
    <div className='flex gap-5 px-2 font-bold'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
        
    </div>
  )
}

export default Nav2