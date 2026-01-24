import React from 'react'

const App = () => {

  function inputchanging(val){
    console.log(val)
  }

  return (
    <div onWheel={
      function(){
        console.log('page scrolling')
      }
    }>
    <div className='page1'></div>
    <div className='page2'></div>
    <div className='page3'></div>
    </div>
  ) 
}

export default App
