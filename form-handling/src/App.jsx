import React from 'react'

const submitHandler=(e)=>{
  e.preventDefault()
  console.log("Form Submitted");
  
}

const App = () => {
  return (
    <div className='bg-gray-900 min-h-screen min-w-full text-white flex flex-col items-center justify-center'>
      <form className='flex flex-col gap-5' onSubmit={(e)=>{//to prevent default behaviour of form
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter your name' className='bg-stone-600 border-2 border-white focus:outline-none p-2 rounded-md'/>
        <input type='email' placeholder='Enter your email id' className='bg-stone-600 border-2 border-white focus:outline-none p-2 rounded-md'/>
        <input type='tel' placeholder='Enter your phone number' className='bg-stone-600 border-2 border-white focus:outline-none p-2 rounded-md'/>
        <button className='bg-sky-600 p-3 rounded-lg hover:cursor-pointer hover:font-bold hover:bg-sky-300'>Submit</button>
      </form>
    </div>
  )
}

export default App