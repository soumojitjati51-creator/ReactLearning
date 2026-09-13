import React from 'react'

const Navbar = (props) => {
  console.log(props)
  function changeTheme(){
    console.log('Theme changed',props.Theme);
    props.setTheme('dark')
  }
  return (
    <div>
      <button  onClick={changeTheme} className='text-md bg-blue-500 w-20 rounded m-1 hover:cursor-pointer active:scale-90'>Change Theme</button>
    </div>
  )
}

export default Navbar