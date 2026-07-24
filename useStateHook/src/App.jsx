// import React, { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(0)
//   const [username, setusername] = useState('Soumojit')

//   function changeNum() {
//     setnum(30);
//     setusername('Rahul')
//   }

//   return (

//      <div className="bg-blue-800 w-full h-screen m-3 p-3 text-3xl text-white">
//       <h1 className='text-5xl'>Value of num is {num}</h1>
//       <h1 className='text-5xl'>Value of user is {username}</h1>
//       <button className='bg-gray-500 text-white m-3 px-3 py-1 rounded-full hover:cursor-pointer hover:font-bold hover:bg-gray-600 focus:outline-0 border-dotted' onClick={changeNum}>Click</button>

//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {

const [num, setNum] = useState(0)

function increase() {
  setNum(num+1)
}

function decrease() {
  setNum(num-1)
}
function jump5() {
  setNum(num+5)
}

  return (
    <div className='flex flex-col gap-3 justify-center items-center h-screen w-full bg-amber-400'>
      <h1 className='bg-gray-700 w-fit p-10 m-2 h-fit text-white text-3xl'>{num}</h1>
      <div className='flex gap-5 flex-wrap p-2 justify-center lg:flex-nowrap '>
        <button className='bg-gray-700 text-2xl text-shadow-2xs text-white w-fit p-2 rounded-md hover:bg-gray-500' onClick={increase}>increase</button>
        <button className='bg-gray-700 text-2xl text-shadow-2xs text-white w-fit p-2 rounded-md  hover:bg-gray-500' onClick={decrease}>decrese</button>
        <button className='bg-gray-700 text-2xl text-shadow-2xs text-white w-fit p-2 rounded-md  hover:bg-gray-500' onClick={jump5}>jump by 5</button>
      </div>

    </div>
  )
}

export default App