import React from 'react'

import profile1 from '../../images/profile1.png'
import profile2 from '../../images/profile2.png'
import profile3 from '../../images/profile3.png'

const Team = () => {
  return (
    <div className='container py-5 mt-5'>
      <h2 className='text-center'>OUR RELATIVE TEAM</h2>
      <p className="w-50 mx-auto opacity-75 text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore beatae adipisci nesciunt error voluptate tempora aliquid dolorum iste cupiditate minima. Consequuntur voluptatibus accusantium deleniti. Aspernatur quia nostrum mollitia consequuntur ad.
      </p>
      <div className="d-flex align-items-center justify-content-between gap-5">
          <div className="border rounded-4 p-3 text-center">
            <img width={200} src={profile1} alt="profile" />
            <h3>CARLA PRESS</h3>
            <h4>APP DEVELOPER</h4>
            <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veritatis.</p>
            <div className="d-flex align-items-center justify-content-evenly">
                <i className="fa-2x fa-brands fa-facebook"></i>|
                <i className="fa-2x fa-brands fa-instagram"></i>|
                <i className="fa-2x fa-brands fa-youtube"></i>|
                <i className="fa-2x fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="border rounded-4 p-3 text-center">
            <img width={200} src={profile2} alt="profile" />
            <h3>CARLA PRESS</h3>
            <h4>APP DEVELOPER</h4>
            <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veritatis.</p>
            <div className="d-flex align-items-center justify-content-evenly">
                <i className="fa-2x fa-brands fa-facebook"></i>|
                <i className="fa-2x fa-brands fa-instagram"></i>|
                <i className="fa-2x fa-brands fa-youtube"></i>|
                <i className="fa-2x fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="border rounded-4 p-3 text-center">
            <img width={200} src={profile3} alt="profile" />
            <h3>CARLA PRESS</h3>
            <h4>APP DEVELOPER</h4>
            <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veritatis.</p>
            <div className="d-flex align-items-center justify-content-evenly">
                <i className="fa-2x fa-brands fa-facebook"></i>|
                <i className="fa-2x fa-brands fa-instagram"></i>|
                <i className="fa-2x fa-brands fa-youtube"></i>|
                <i className="fa-2x fa-brands fa-twitter"></i>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Team
