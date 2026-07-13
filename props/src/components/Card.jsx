import React from 'react'

const Card = (props) => {
    console.log(props.user,props.age, props.src);
    
  return (
    <div className="card">
        <img src={props.src}alt='imga'></img>
        <h1>{props.user}</h1>
        <h2>age is {props.age}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <button>Click me!</button>
      </div>
  )
}

export default Card