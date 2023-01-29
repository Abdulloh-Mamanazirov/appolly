import React from 'react'
import download from "../../images/download-text.png";
import phone from "../../images/phone.png";

const Showcase = () => {
  return (
    <div className='py-5 container d-flex align-items-center justify-content-between'>
      <img src={phone} alt="image" />
      <img src={download} alt="image" />
    </div>
  )
}

export default Showcase
