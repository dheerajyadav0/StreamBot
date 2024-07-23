import React from 'react'

const VedioTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>24
      <p className='p-6 text-lg w-1/2'>{overview}</p>
      <div className=''>
      <button className='bg-white text-black p-4 px-10 text-xl rounded-md  hover:bg-opacity-80'> ▶ Play</button>
      <button className='bg-gray-500 mx-2 text-black p-4 px-5 text-xl rounded-md  hover:bg-opacity-70'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VedioTitle
