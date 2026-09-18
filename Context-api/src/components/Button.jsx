import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {
    const [theme,settheme]=useContext(ThemeDataContext)
    const changeTheme=()=>{
        settheme(theme === 'light' ? 'dark' : 'light')
    }
  return (
    <div>
        <button className='bg-stone-700 text-white hover:cursor-pointer active:scale-90 m-1 rounded px-2 py-0.5' onClick={changeTheme}>Change Theme </button>
    </div>
  )
}

export default Button