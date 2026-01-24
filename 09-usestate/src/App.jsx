import React, { useState } from 'react'

const App = () => {

  const[num,setnum]=useState(0)

  function numinc(){
    setnum(num+1)
  }
  function numdec(){
    setnum(num-1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={numinc}>
        Increase
      </button>
      <button onClick={numdec}>
        Decrease
      </button>
    </div>
  )
}

export default App
