import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, seta] = useState(0)
  const [b, setb] = useState(0)

  function achanging(){
    console.log('a is changing.')
  }
  function bchanging(){
    console.log('b is changing.')
  }

  useEffect(function(){
    console.log('use effect is running...')
  })

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        seta(a+1)
      }}>change a </button>
      <button onClick={()=>{
        setb(b-1)
      }}>change b </button>
    </div>
  )
}

export default App
