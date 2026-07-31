import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
          <div className='h-40 w-40 rounded-xl overflow-hidden lg:h-52 lg:w-52 hover:scale-105 transition-all duration-300 shadow:lg '>
            <img src={props.elem.download_url} alt="" className='h-full w-full object-cover rounded-xl overflow-hidden ' />
          </div>
          <h2 className='font-semibold text-lg'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card