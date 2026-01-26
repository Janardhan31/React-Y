import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')

  const [task, settask] = useState([])

  const submithandler= (e)=>{
    e.preventDefault()

    const copytask = [...task];

    copytask.push({title,details})
    settask(copytask)
    console.log(task)

    settitle('')
    setdetails('')
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>

      <form onSubmit={
        (e)=>{
          submithandler(e)
        }
      } action="" className='flex p-10 lg:w-1/2 gap-4 items-start flex-col p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        {/* pehla wala input for heading */}
        <input
        type="text"
        placeholder='Enter notes heading'
        className='px-5 py-2 border-5 rounded w-full font-medium'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        />
        {/* detailed wala input */}
        <textarea 
        type="text" 
        placeholder='write details'
        className=' border-5 rounded h-60 w-full font-medium'
        value={details}
        onChange={(e)=>{
          setdetails(e.target.value)
        }}
        />

        <button 
        className='active:bg-black bg-white text-black px-5 py-2 rounded w-full font-medium'>
        Add note
        </button>

        <img className='h-46' src="https://www.shutterstock.com/image-vector/notes-taking-vector-260nw-17244622.jpg" alt=""/>

      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2'>
      <h1 className='text-xl font-bold'>Your Notes</h1>
      <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
        {
          task.map(function(elem,idx){
            return <div key={idx} className="h-52 w-40 rounded-2xl bg-white">
              <h3 className='leading-tight text-xl font-bold text-black p-3'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-700 p-2'>{elem.details}</p>
            </div>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default App
