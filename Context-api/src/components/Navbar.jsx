import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {//instead of writing props we could write children,theme and then we don't need to write 'props.' only children or only theme would be enough
  const [theme]=useContext(ThemeDataContext)
  
  
  
  return (
    <div className={`flex ${theme === 'light' ? 'bg-green-300' : 'bg-green-800'} justify-between p-2 items-center`}>
        <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-blue-800' : 'text-sky-300'}`}>Sheryians</h2>
        <h2 className={`${theme === 'light' ? 'text-red-700' : 'text-yellow-300'} font-extrabold text-3xl`}>{theme}</h2>
        
        <Nav2 />
    </div>
  )
}

export default Navbar