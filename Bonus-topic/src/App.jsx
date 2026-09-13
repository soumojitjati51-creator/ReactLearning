import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [Theme, setTheme] = useState('light')
  return (
    <div>
      <h1  className='bg-amber-300 '>Theme is {Theme}</h1>
      <Navbar Theme={Theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
