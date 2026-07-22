import React from 'react'

const RightCardContent = (props) => {
  return (
    
        <div className='absolute top-0 left-0 h-full w-full p-2 flex flex-col justify-between lg:p-8 md:p-6 sm:p-4'>
            <h2 className='bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold'>{props.id+1}</h2>
            <div>
                <p className='text-xs text-shadow-2xs text-white leading-relaxed mb-4 sm:text-xs sm:mb-6 md:text-sm md:mb-8 lg:text-md lg:mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae deleniti voluptate possimus incidunt aspernatur!</p>
                <div >
                    <button className='hover:cursor-pointer focus:border-2 bg-blue-600 text-white text-xs font-medium px-0.5 py-0.5 rounded-full sm:pl-3 sm:text-sm sm:pr-4 lg:pl-4 lg:pr-6 lg:text-lg'>{props.tag}</button>
                    <button><i className=" hover:cursor-pointer  ri-arrow-right-line bg-blue-600 text-white font-medium px-0.5 py-0.5 rounded-full sm:p-1 md:p-2 lg:p-2.5"></i></button>
                </div>
            </div>
        </div>
    
  )
}

export default RightCardContent