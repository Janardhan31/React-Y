import React from 'react'

const App = () => {

  function formsubmit(e){
    e.preventDefault()
    console.log('form submitted')
  }

  return (
    <div>
      <form action="" onSubmit={(e)=>{
        formsubmit(e)
      }}>
        <input type="text" name="" id="" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
