import React from 'react'

const Card = (props) => {
    console.log(props.user)
  return (
    <div className='card'>
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View profile</button>
      </div>
  )
}

export default Card
