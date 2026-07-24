import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:"Soumojit",age:20})
  const [arr, setarr] = useState([10,20,30])
  const btnClicked=()=>{
    // const newNum={...num};
    // newNum.user="Aman"
    // setNum(newNum)
    // const newarr=[...arr]
    // newarr.push(99)
    // setarr(newarr)
    setNum(prev=>({...prev,age:50}))
  }
  const [user, setUser] = useState({user:"Soumojit",age:20})
  const [number, setNumber] = useState(10)
  const btnClicked2=()=>{
    // setUser(prev=>({...prev,age:50}))
    setNumber(prev=>(prev+1))//batch update
    setNumber(prev=>(prev+1))
    setNumber(prev=>(prev+1))
  }
  return (
    <div className='h-screen w-full bg-gray-800 text-white flex flex-col items-center justify-center'>
      <h1 className='bg-stone-600 text-xl sm:text-2xl md:text-4xl lg:text-6xl p-5 m-3 md:p-7 lg:p-10 lg:m-5 rounded-xl'>{number}</h1>
      <button className='bg-stone-400 px-3 py-2 rounded-md hover:font-bold border-2  border-emerald-600 hover:bg-stone-700 hover:cursor-pointer' onClick={btnClicked2}>Click</button>
    </div>
  )
}

export default App