import React from 'react'

import image5 from "../../images/Blog/image-5.png";
import image6 from "../../images/Blog/image-6.png";
import image7 from "../../images/Blog/image-7.png";
import image8 from "../../images/Blog/image-8.png";
import image9 from "../../images/Blog/image-9.png";

const BlogAside = () => {
  return (
    <div className="blogAside ps-4 ">
      <input
        type="text"
        className="form-control w-100 mb-4"
        placeholder="Search for ..."
      />
      <hr />
      <h2>RECENT POSTS</h2>
      <img src={image5} alt="image" />
      <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id.</h5>
      <img src={image6} alt="image" />
      <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id. Lorem.</h5>
      <img src={image7} alt="image" />
      <h5>Lorem ipsum Lorem, ipsum dolor. dolor sit, amet consectetur adipisicing Lorem, ipsum.</h5>
      <img src={image8} alt="image" />
      <h5>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet. Lorem, ipsum.</h5>
      <img src={image9} alt="image" />
      <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h5>
    </div>
  );
}

export default BlogAside
