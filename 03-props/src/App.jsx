import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='madhav' age={22} />
      <Card user='thilak' age={55}/>
    </div>
  )
}

export default App
