import React from 'react'

const Courses = () => {
  return (
    <div>
      <h1 className='text-3xl text-white font-bold underline h-screen flex justify-center items-center '>Courses Page</h1>
    </div>
  )
}

export default Courses

// This courses page is created to learn dynamic routing. Dynamic routing is such a thing so that after writing the courses and giving '/', after that, if I write anything, anything if I write, it would not go to 404, it would go to a particular page. For suppose, if I have courses then "/" I write GitHub, then it would go to a particular page, for say, the particular page name is course details. So that the user don't need to write the perfect route path.