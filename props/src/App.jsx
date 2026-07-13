import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      {/*in prop drilling to pass data from parent to child after tag put attribute as data and value as datavalue */}
      <Card user='Soumojit Jati' age={20} src="https://images.unsplash.com/photo-1754663186468-862cbee39b33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user='Mom Donkey' age={-1} src="https://images.unsplash.com/photo-1781853330027-bbabc95d3577?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
    </div>
  )
}

export default App