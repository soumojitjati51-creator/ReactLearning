import React, { useState } from 'react'
import notes from "./assets/man.png";
import notesBg from "./assets/notesBg.png"
const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask);
    setTitle('')
    setDetails('')
  }

  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)
    setTask(copyTask)             //splice method used to delete
  }

  return (
    <div className='min-h-screen min-w-full p-5 bg-black text-white text-xs lg:text-lg'>
      <nav className='w-full mb-4 flex gap-2 bg-stone-700 p-2 rounded '>
        <img src={notes} className='h-6 object-cover sm:h-8 md:h-10 lg:h-14' />
        <h1 className='lg:pt-4'>NotesApp</h1>
      </nav>
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className=' w-full lg:w-1/2 '>
          <div className='flex pl-5 '>
            <h1 className='text-sm lg:text-2xl font-bold '>Add Notes</h1>
          </div>
          <form className='flex    p-5 ' onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='flex flex-col  w-full gap-5  '>
              {/* //Pehla Input */}
              <input
                type='text'
                placeholder='Enter Notes Heading'
                className='border-2 border-gray-700 w-full rounded-md px-2 py-1 outline-none'
                value={title} onChange={(e) => {
                  setTitle(e.target.value)

                }} />
              {/* //Detailed input */}
              <textarea
                placeholder='Enter details'
                name=''
                id=''
                className='border-2 border-gray-700 w-full rounded-md p-3 h-30 lg:h-50 md:text-lg outline-none'
                value={details} onChange={(e) => {
                  setDetails(e.target.value)
                }}
              />
              <button className='bg-white text-black rounded-md p-3 w-full font-semibold hover:cursor-pointer hover:font-bold active:bg-gray-500 active:scale-95'>Add Note

              </button>
            </div>

          </form>

        </div>
        <div className='w-full h-screen  lg:w-1/2 p-5 bg-gray-950 rounded-lg  overflow-auto'>
          <div className='flex items-center justify-center '>
            <h1 className='text-sm lg:text-2xl font-bold underline'>Recent Notes</h1>
          </div>
          <div className='flex flex-wrap gap-4 mt-2 justify-around items-start'>
            {task.map(function (elem, idx) {
              return <div key={idx}
                style={{ backgroundImage: `url(${notesBg})` }}
                className="flex flex-col justify-between items-start relative h-28 w-20 rounded-xl  text-black  py-4 px-3 sm:h-36 sm:w-24 md:h-44  md:w-32 md:py-5 md:px-3 lg:h-52 lg:w-40 lg:py-6 lg:px-6 bg-cover ">
                <div className='overflow-y-auto  scrollbar-none'>
                  <h3 className='leading-tight text-xs md:text-md lg:text-lg font-bold '>{elem.title}</h3>
                  <p className='mt-1 text-gray-700 leading-tight text-sm'>{elem.details}</p>
                </div>
                <button className='w-full bg-red-500 text-white text-xs py-0.5 rounded  font-bold active:scale-95 hover:cursor-pointer' onClick={()=>{
                  deleteNote(idx)
                }}>Delete</button>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

