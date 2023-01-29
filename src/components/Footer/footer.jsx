import React from 'react'

const Footer = () => {
  return (
    <div className="text-bg-dark">
      <div className="container py-5 d-flex justify-content-between">
        <div className="w-25">
          <h3>LOGO</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            asperiores!
          </p>
          <div className="d-flex align-items-center justify-content-evenly">
            <i className="fa-2x fa-brands fa-facebook"></i>|
            <i className="fa-2x fa-brands fa-instagram"></i>|
            <i className="fa-2x fa-brands fa-youtube"></i>|
            <i className="fa-2x fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="w-25">
          <h3>QUICK LINK</h3>
          <ul className="list-unstyled">
            <li>About</li>
            <li>Screenshot</li>
            <li>Features</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="w-25">
          <h3>NEWS LETTER</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="btn btn-secondary" type="button" id="button-addon2">
              Button
            </button>
          </div>
        </div>
      </div>
      <p className='text-center py-3 border-top m-0'>&copy; Copyright 2021 .Ojjomedia. All Right Reserved.</p>
    </div>
  );
}

export default Footer
