import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-s w-1/3'>{overview}</p>
      <div>
        <button className='bg-white text-black p-2 px-6 text-lg rounded-lg hover:bg-opacity-50'>Play</button>
        <button className='bg-gray-400 text-white p-2 px-5 text-lg rounded-lg ml-2'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
