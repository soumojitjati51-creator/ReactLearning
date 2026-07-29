import React from 'react'

const App = () => {
  localStorage.clear()
  // sessionStorage.clear()
  // localStorage.setItem('user','Soumojit')
  // localStorage.setItem('age','20')
  // localStorage.setItem('location','Andul')
  // const user=localStorage.getItem('age')
  // localStorage.removeItem('location')
  // console.log(user);
  const user={
    usernamme:'Soumojit',
    age:20,
    city:'Andul'
  }

  localStorage.setItem('user',JSON.stringify(user))

  const n=JSON.parse(localStorage.getItem('user'))
  console.log(n);
  

  return (
    <div className='bg-red-500 text-2xl'>App</div>
  )
}

export default App

// localStorage and sessionStorage are web storage mechanisms that allow web applications to store key-value pairs locally within a user's browser. 
// They provide a much larger storage capacity (typically around 5MB) compared to traditional cookies (4KB) and never send data back to the server automatically.
// Here is a clear breakdown of the core differences and how they work.
// Core Differences
// Feature
//                        localStorage                                                      sessionStorage
// Data Lifetime           Permanent until explicitly cleared        .                      Cleared when the specific browser tab is closed.
// Storage Scope           Shared across all tabs/windows with the same origin.             Isolated strictly to the specific browser tab.
// Survival on Reload      Yes                                                              Yes
// Survival on Tab Close   Yes                                                              No
//JSON.stringify used to covert object to string