import React from 'react'
import phone from '../../images/phone4.png'

import './download.css'

const Download = () => {
  return (
    <div className="container d-flex align-items-center justify-content-between py-5">
      <div className="w-50">
        <h2>DOWNLOAD NOW</h2>
        <p className="opacity-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          voluptas error dolor modi placeat excepturi vel id cumque deserunt
          eum, quas veniam vitae labore nostrum, similique deleniti
          necessitatibus architecto esse.
        </p>
        <div className="d-flex align-items-center gap-4">
          <button className="btn text-bg-dark">
            <i className="fs-5 fa-brands fa-google-play"></i> Google Play
          </button>
          <button className="btn text-bg-dark">
            <i className="fs-5 fa-brands fa-app-store-ios"></i> App Store
          </button>
        </div>
        <div className="d-flex align-items-center gap-4 pt-4">
          <div className="main-bg downloadsCard text-center py-4 text-white rounded-4">
            <i class="fa fa-download fa-2x pb-3" aria-hidden="true"></i>
            <h4>6549</h4>
            <h4>DOWNLOAD</h4>
          </div>
          <div className="main-bg downloadsCard text-center py-4 text-white rounded-4">
            <i class="fa fa-thumbs-up fa-2x pb-3" aria-hidden="true"></i>
            <h4>32549</h4>
            <h4>LIKE</h4>
          </div>
          <div className="main-bg downloadsCard text-center py-4 text-white rounded-4">
            <i class="fa fa-star fa-2x pb-3" aria-hidden="true"></i>
            <h4>4549</h4>
            <h4>5 STAR RATING</h4>
          </div>
        </div>
      </div>
      <div>
        <img src={phone} alt="" />
      </div>
    </div>
  );
}

export default Download
