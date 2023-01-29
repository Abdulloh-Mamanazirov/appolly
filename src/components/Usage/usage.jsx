import React from 'react'
import './usage.css'

import video from '../../images/video.png'

const Usage = () => {
  return (
    <div className='usage main-bg text-white py-5 position-relative'>
      <h2 className='text-center'>HOW TO USE THE APP PERFECTLY</h2>
      <p className="w-50 mx-auto text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quaerat aspernatur ut! Voluptatibus ratione, ipsam ex adipisci rerum fuga nobis laboriosam, est deleniti asperiores, maxime necessitatibus quam excepturi nisi accusantium!
      </p>
        <img className='video' src={video} alt="profile" />
    </div>
  )
}

export default Usage
