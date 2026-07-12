import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Card/>
      <Card/>
    </div>
  )
}

export default App
//we generally don't code all things inside app...we make components and use them in app..for components usually make separate folder