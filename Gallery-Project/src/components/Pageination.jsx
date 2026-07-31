import React from 'react'

const Pageination = ({index,setIndex,setUserData}) => {
  return (
    <div className='fixed bottom-0 left-0 w-full border-t-gray-600  border-2 py-3 flex justify-center items-center gap-4 lg:gap-6 bg-gray-900/80 backdrop-blur-md'>
        <button 
        style={{opacity:index==1?0.5:1,
            cursor:index==1?'not-allowed':'pointer'
        }}
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
            window.scrollTo({
            top:0,
            behavior:"smooth"
          });
          }
        }}
        className='bg-amber-400 text-black rounded font-semibold px-4 py-2 hover:cursor-pointer active:scale-95'>
          Prev
        </button>
        <h2>Page {index}</h2>
        <button 
        onClick={()=>{
          setIndex(index+1)
          setUserData([])
          window.scrollTo({//for scroll top
            top:0,
            behavior:"smooth"
          });
        }}
        className='bg-amber-400 text-black rounded font-semibold px-4 py-2 hover:cursor-pointer active:scale-95'>
          Next
        </button>
      </div>
  )
}

export default Pageination