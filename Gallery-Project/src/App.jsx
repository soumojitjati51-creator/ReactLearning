import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Pageination from './components/Pageination'
const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const [error, setError] = useState("")

  const getData = async () => {
    try {
      setError("")
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
      setUserData(response.data)
      console.log(response.data);
    } catch (err) {
      setError("Failed to load images");
      console.log(err);
    }
  }
  useEffect(function () {
    getData()
  }, [index])
  let printUserData = (
    <div className='w-full flex justify-center items-center h-screen'>
      <div className='w-12 h-12 rounded-full border-4 border-amber-400 border-t-transparent animate-spin'>

      </div>
    </div>
  );
  if(error){
    printUserData=(
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h2 className='text-red-500 text-xl font-bold'>{error}</h2>
        <button
        onClick={getData}
        className='bg-amber-400 text-black px-5 py-2 rounded'
        >
          Retry
        </button>
      </div>
    );
  }else if(userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }
  return (
    <div className='bg-black min-h-screen w-full overflow-auto text-white p-2 pb-20'>
      {/* <button
        onClick={() => {
          getData()
        }}
        className='bg-green-600 px-5 py-2 rounded active:scale-95 hover:cursor-pointer'>
        get data
      </button> */}
      <div className='m-5 p-3 flex flex-wrap justify-around items-center gap-5'>
        {printUserData}
      </div>
      <Pageination
        index={index}
        setIndex={setIndex}
        setUserData={setUserData}
      />
    </div>
  )
}

export default App