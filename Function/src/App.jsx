import React from 'react'

const App = () => {
  function btnClicked() {
    console.log("Button is clicked");

  }
  function mouseEnter() {
    console.log("Mouse Entered");

  }
  const inputChanging = (elem) => {
    console.log(elem + " is typing");

  }
  const pageScroll=(elem)=>{
    console.log("Page Scrolling at speed",elem);
    if (elem>0) {
      console.log("seedha scrolling");
      
    } else {
      console.log("ulta scrolling");
      
    }
    
  }
  return (
    <div className='h-screen w-full bg-gray-800 text-white flex flex-col justify-center items-center'>
      {/* <h1 className='text-5xl'>Hello,Soumojit</h1>
      <button className='p-4 text-2xl bg-blue-400 m-3 rounded-lg' onClick={btnClicked} onMouseEnter={mouseEnter}>Change user</button> {/*like js dom and eventlistner here an function is passed to evevnt click  here inside curly braces we don't need to call the function i.e dont put() after function name neither it would run automatically*/}
      {/* <button className='p-4 text-2xl bg-orange-400 m-3 rounded-lg' onClick={btnClicked}>Explore this</button>
      <button className='p-4 text-2xl bg-pink-300 m-3 rounded-lg' onClick={() => {
        console.log("Working fine");

      }}>
        NEW BUTTON
      </button>
      <input type='text' placeholder='Enter name' className='m-5 border-2 border-emerald-600 bg-yellow-200 text-red-700 focus:outline-none p-1' onChange={inputChanging} />
      <input type='text' placeholder='Re-Enter name' className='m-5 border-2 border-emerald-600 bg-yellow-200 text-red-700 focus:outline-none p-1' onChange={function (elem) {
        inputChanging(elem.target.value)
      }} />

      <div className='h-80 w-80 bg-red-700' onMouseMove={(elem) => {
        console.log(elem.clientX);

      }}>

      </div > */} 
      <div className='h-screen w-full bg-red' onWheel={(elem)=>{
        pageScroll(elem.deltaY)
      }}>
        <div className='h-[100vh] w-full bg-gray-400'></div>
        <div className='h-[100vh] w-full bg-gray-600'></div>
        <div className='h-[100vh] w-full bg-gray-500'></div>
      </div>
    </div>
  )
}

export default App