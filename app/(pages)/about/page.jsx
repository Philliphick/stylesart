import React from 'react'
import { About } from '@/components/about'

const page = () => {
  return (
 <div className='w-screen h-full flex flex-col md:px-16 md:pb-8 px-4 justify-center items-center text-xl bg-gradient-to-br from-gray-200 via-gray-200 to-gray-400'>
 <About className='w-full mx-10'/>
 </div>   
)
}

export default page