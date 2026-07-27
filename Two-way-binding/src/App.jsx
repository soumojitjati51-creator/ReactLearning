import React, { useState } from 'react'
const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const submitHandler=(e)=>{
  e.preventDefault()
  console.log("Form Submitted by ",name);
  setName('');//9,10&11 thline used to clear the input fields after submit clicked without form reload
  setEmail('')
  setPhone('')
  
}
  return (
    <div className='bg-gray-900 min-h-screen min-w-full text-white flex flex-col items-center justify-center'>
      <form className='flex flex-col gap-5' onSubmit={(e)=>{//to prevent default behaviour of form
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter your name' className='bg-stone-600 border-2 border-white focus:outline-none p-2 rounded-md'  value={name} onChange={(e)=>{
          setName(e.target.value);
        }}/>
        <input type='email' placeholder='Enter your email id' className='bg-stone-600 border-2 border-white focus:outline-none p-2 rounded-md' value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
        <input type='tel' placeholder='Enter your phone number' className='bg-stone-600 border-2 border-white focus:outline-none p-2 rounded-md' value={phone} onChange={(e)=>{
          setPhone(e.target.value);
          
        }}/>
        <button className='bg-sky-600 p-3 rounded-lg hover:cursor-pointer hover:font-bold hover:bg-sky-300'>Submit</button>
      </form>
    </div>
  )
}

export default App

// value={name} onChange={(e)=>{
//           setName(e.target.value);
//         }} by that portion we're trying to passs input through react not by direct.... here input gets a hardcore value of name ...if we didn't use useState then we couldn't be able to change the hardcore value... but when we use useState ...we're just updating the value 