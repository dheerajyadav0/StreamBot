import React from 'react'

const VedioTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-16 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>24
      <p className='hidden md:inline-block p-1 text-lg w-2/5'>{overview}</p>
      <div className='my-6 md:m-2'>
      <button className='bg-white text-black py-1 md:py-4 px-3 md:px-10 text-xl rounded-md  hover:bg-opacity-80'> ▶ Play</button>
      <button className='hidden md:inline-block bg-gray-500 mx-2 text-black p-4 px-5 text-xl rounded-md  hover:bg-opacity-70'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VedioTitle
