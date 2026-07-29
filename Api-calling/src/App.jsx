import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [data, setData] = useState([])
  // const getData= async()=>{
  //   const response=await fetch('https://jsonplaceholder.typicode.com/todos') 
  //   // console.log(response);
  //   const data = await response.json()
  //   console.log(data);
    
  // }
  // const getData=async()=>{
  //   const response =await axios.get('https://jsonplaceholder.typicode.com/posts')
  //   console.log(response.data);
    
  // }
  const getData=async()=>{
    const response= await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }
  return (
    <div className='p-3 flex  flex-col min-h-screen min-w-full justify-around items-center'>
      <button className='bg-blue-500 px-3 py-2 text-white hover:cursor-pointer active:scale-95 hover:bg-blue-300 hover:font-semibold rounded '  onClick={getData}>Get Data</button>
      <div className='m-2 p-3'>
          {data.map(function(elem,idx){
            return <h3 className='text-2xl'>Hello, {elem.author} {idx}</h3>
          })}
      </div>
    </div>
  )
}

export default App

//Two methods of calling API 
//1. fetch-in buit in js
//2.Axios-third party library