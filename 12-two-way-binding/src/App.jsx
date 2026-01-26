import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')

  function formsubmit(e){
    e.preventDefault()
    console.log('form submitted',title)
  }

  return (
    <div>
      <form action="" onSubmit={(e)=>{
        formsubmit(e)
      }}>
        <input type="text" name="" id="" placeholder='Enter your name' value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
