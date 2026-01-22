import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

const Page1content = () => {
  return (
    <div className='py-3 px-18 h-[90vh] flex items-center gap-10'>
      <Leftcontent/>
      <Rightcontent/>
    </div>
  )
}

export default Page1content
