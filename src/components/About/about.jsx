import React from 'react'

import phone from '../../images/phone2.png'

const About = () => {
  return (
    <div className='container py-5'>
      <h2 className='text-center'>ABOUT OUR APP</h2>
      <p className='text-center w-50 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur quis, consequuntur ducimus pariatur dignissimos, sed alias maiores, molestias minus officia nisi fugit hic culpa ad voluptates est in repellendus! Quia.</p>
      <div className="d-flex justify-content-between align-items-center">
        <img src={phone} alt="" />
        <div className='w-50'>
            <div className="kard border p-2 mb-3 rounded-3 d-flex gap-3">
                <i className="fa fa-check-circle text-primary pt-2" aria-hidden="true"></i>
            <span>
                <h4>CREATIVE DESIGN</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque eius, debitis ipsam nihil molestias dolor iure itaque hic non sequi. Alias maiores rerum, numquam provident aliquid eius labore quibusdam laudantium!</p>
            </span>
            </div>
            <div className="kard border p-2 mb-3 rounded-3 d-flex gap-3">
                <i className="fa fa-check-circle text-primary pt-2" aria-hidden="true"></i>
            <span>
                <h4>EASY TO USE</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque eius, debitis ipsam nihil molestias dolor iure itaque hic non sequi. Alias maiores rerum, numquam provident aliquid eius labore quibusdam laudantium!</p>
            </span>
            </div>
            <div className="kard border p-2 mb-3 rounded-3 d-flex gap-3">
                <i className="fa fa-check-circle text-primary pt-2" aria-hidden="true"></i>
            <span>
                <h4>BEST USER EXPERIENCE</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque eius, debitis ipsam nihil molestias dolor iure itaque hic non sequi. Alias maiores rerum, numquam provident aliquid eius labore quibusdam laudantium!</p>
            </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
