import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
     <>
     <div className='w-screen flex flex-row px-10 py-4 justify-between items-center text-xl bg-gray-700'>
         <h1 className='text-3xl text-white'>David Styles</h1>
         <Link href='/' className='bg-gradient-to-br from-white via-gray-400 to-gray-500 rounded-xl px-4 py-1 text-gray-700 text-2xl hover:scale-110 focus:border-gray-900'>Home</Link>
     </div>
    
    <div className='w-screen flex flex-col gap-4 justify-center items-center bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700'>
          <div className='my-10 flex flex-col gap-10  justify-center items-center w-screen'>
                <h1 className='text-4xl text-gray-200 bg border-b-4 border-gray-500 px-4'>Selected Work</h1>
              <div className='w-2/3 md:w-1/2 bg-white drop-shadow-xl rounded-lg bg-gradient-to-br from-white via-gray-400 to-gray-500 hover:scale-125 transition duration-800'>
                  <img src="/dream.jpg" alt="bluedavid" className='rounded-t-lg'></img>
                  <h1 className='text-xl flex justify-start mx-6 md:my-4'>Title</h1>

              </div>
              <hr className='w-1/3 md:w-1/2 border-gray-500'></hr>
              <div className='w-2/3 md:w-1/2 bg-white drop-shadow-xl rounded-lg bg-gradient-to-br from-white via-gray-400 to-gray-500 hover:scale-125 transition duration-800'>
                  <img src="/dream8.jpg" alt="bluedavid" className='rounded-t-lg'></img>
                  <h1 className='text-xl flex justify-start mx-6 md:my-4'>Title</h1>

              </div>
              <hr className='w-1/3 md:w-1/2 border-gray-500'></hr>
              <div className='w-2/3 md:w-1/2 bg-white drop-shadow-xl rounded-lg bg-gradient-to-br from-white via-gray-400 to-gray-500 hover:scale-125 transition duration-800'>
                  <img src="/FINALPIECE.jpg" alt="bluedavid" className='rounded-t-lg'></img>
                  <h1 className='text-xl flex justify-start mx-6 md:my-4'>Title</h1>

              </div>
              <hr className='w-1/3 md:w-1/2 border-gray-500'></hr>
              <div className='w-2/3 md:w-1/2 bg-white drop-shadow-xl rounded-lg bg-gradient-to-br from-white via-gray-400 to-gray-500 hover:scale-125 transition duration-800'>
                  <img src="/FINALPIECE2.jpg" alt="bluedavid" className='rounded-t-lg'></img>
                  <h1 className='text-xl flex justify-start mx-6 md:my-4'>Title</h1>

              </div>
              <hr className='w-1/3 md:w-1/2 border-gray-500'></hr>
              <div className='w-2/3 md:w-1/2 bg-white drop-shadow-xl rounded-lg bg-gradient-to-br from-white via-gray-400 to-gray-500 hover:scale-125 transition duration-800'>
                  <img src="/FINALPIECE4.jpg" alt="bluedavid" className='rounded-t-lg'></img>
                  <h1 className='text-xl flex justify-start mx-6 md:my-4'>Title</h1>

              </div>
              <hr className='w-1/3 md:w-1/2 border-gray-500'></hr>
              <div className='w-2/3 md:w-1/2 bg-white drop-shadow-xl rounded-lg bg-gradient-to-br from-white via-gray-400 to-gray-500 hover:scale-125 transition duration-800'>
                  <img src="/III.jpg" alt="bluedavid" className='rounded-t-lg'></img>
                  <h1 className='text-xl flex justify-start mx-6 md:my-4'>Title</h1>

              </div>
              <hr className='w-1/3 md:w-1/2 border-gray-500'></hr>
              <div className='w-2/3 md:w-1/2 bg-white drop-shadow-xl rounded-lg bg-gradient-to-br from-white via-gray-400 to-gray-500 hover:scale-125 transition duration-800'>
                  <img src="/351.jpg" alt="bluedavid" className='rounded-t-lg'></img>
                  <h1 className='text-xl flex justify-start mx-6 md:my-4'>Title</h1>

              </div>
              <hr className='w-1/3 md:w-1/2 border-gray-500'></hr>
              <div className='w-2/3 md:w-1/2 bg-white drop-shadow-xl rounded-lg bg-gradient-to-br from-white via-gray-400 to-gray-500 hover:scale-125 transition duration-800'>
                  <img src="/dream83.jpg" alt="bluedavid" className='rounded-t-lg'></img>
                  <h1 className='text-xl flex justify-start mx-6 md:my-4'>Title</h1>

              </div>
              <hr className='w-1/3 md:w-1/2 border-gray-500'></hr>
              <div className='w-2/3 md:w-1/2 bg-white drop-shadow-xl rounded-lg bg-gradient-to-br from-white via-gray-400 to-gray-500 hover:scale-125 transition duration-800'>
                  <img src="/Bailwhale.jpg" alt="bluedavid" className='rounded-t-lg'></img>
                  <h1 className='text-xl flex justify-start mx-6 md:my-4'>Title</h1>

              </div>
              <hr className='w-1/3 md:w-1/2 border-gray-500'></hr>
              <div className='w-2/3 md:w-1/2 bg-white drop-shadow-xl rounded-lg bg-gradient-to-br from-white via-gray-400 to-gray-500 hover:scale-125 transition duration-800'>
                  <img src="/20211.jpg" alt="bluedavid" className='rounded-t-lg'></img>
                  <h1 className='text-xl flex justify-start mx-6 md:my-4'>Title</h1>

              </div>
              <hr className='w-1/3 md:w-1/2 border-gray-500'></hr>
          </div>
      </div></>
  )
}

export default page