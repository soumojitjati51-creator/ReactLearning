import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    const params=useParams()
    console.log(params.id);
    
  return (
    <div className='text-3xl text-white'>{params.id} CourseDetails</div>
  )
}

export default CourseDetails