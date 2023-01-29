import React from 'react'

const blogCard = ({imgSrc, heading, desc}) => {
  return (
    <div>
      <img src={imgSrc} alt="image" />
      <p className="display-4">{heading}</p>
      <p>{desc}</p>
      <a href="#">READ MORE</a>
    </div>
  );
}

export default blogCard
