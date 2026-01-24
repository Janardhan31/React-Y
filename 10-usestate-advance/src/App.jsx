import React, { use, useState } from 'react'

const App = () => {

const [num,setnum]=useState({user:'madhav',age:20})

  function btnclick(){
    const newnum={...num}
    newnum.user='Harsh'
    setnum(newnum)
    console.log(newnum)
  }

  return (
    <div>
      <button onClick={btnclick}>Click me</button>
    </div>
  )
}

export default App
