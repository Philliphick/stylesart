import React from 'react'
import Link from 'next/link'

export default function Header () {
  return (
    <div className='top-0'>
    <div className=' w-screen flex flex-row px-4 md:px-12 py-4 justify-between items-center text-xl bg-gray-600'>
    <h1 className=' text-3xl md:text-5xl text-white hover:animate-pulse'>David Styles</h1>
    <Link href='/' className='drop-shadow-lg bg-gradient-to-br from-white via-gray-400 to-gray-500 rounded-sm px-4 py-1 text-gray-700 text-2xl md:text-4xl hover:scale-110 hover:animate-pulse'>Home</Link>
    </div>
    </div>
  )
}

