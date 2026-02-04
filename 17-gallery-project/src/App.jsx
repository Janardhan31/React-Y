import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {

  const [userdata, setuserdata] = useState([])
  const [index, setindex] = useState(1)

  const getdata=async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setuserdata(response.data)
  }

  useEffect(function(){
    getdata()
  },[index])

  let printuserdata = 'no users available'

  if(userdata.length>0){
    printuserdata = userdata.map(function(elem,idx){
      return <div key={idx}>
        <a href={elem.url}>
          <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>     
        </a>
        </div>
    })
  }

  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto'>
      <div className='flex flex-wrap gap-4'>
          {printuserdata}
      </div>
      <div className='flex justify-center items-center p-4 gap-6'>
        <button 
        className='bg-amber-400 text-black rounded px-4 py-2 font-bold text-sm cursor-pointer active:scale-95'
        onClick={()=>{
          if(index>1){
            setindex(index-1)
          }
        }} >
          Prev
          </button>
          <h4>Page {index}</h4>
        <button 
        className='bg-amber-400 text-black rounded px-4 py-2 font-bold text-sm cursor-pointer active:scale-95'
        onClick={()=>{
          setindex(index+1)
        }} >
          Next
          </button>
      </div>
    </div>
  )
}

export default App
