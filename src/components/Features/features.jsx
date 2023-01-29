import React from "react";
import "./features.css";
import phone from '../../images/phone3.png'
const Features = () => {
  return (
    <div className="main-bg">
      <div className="container py-5 text-white">
        <h2 className="text-center">APP FEATURES</h2>
        <p className="w-50 text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          maxime ipsum quo dolorum asperiores eveniet, nobis labore quod rem
          vitae, amet, similique veritatis eaque quam quae nihil fugiat harum
          totam.
        </p>
        <i className="text-center fa-solid fa-message py-3"></i>
        <h3 className="text-center">FULL FREE CHAT</h3>
        <p className="w-25 mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing. Quas, doloremque.
        </p>
        <div className="grid">
          <span className="gridItem1 text-end ">
            <i className="fa-3x pb-2 fa-solid fa-shop"></i>
            <h3>UNLIMITED FEATURES</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
              omnis!
            </p>
          </span>
          <span className="gridItem2">
            <img src={phone} alt="" />
          </span>
          <span className="gridItem3">
            <i className="fa-3x pb-2 fa-solid fa-mobile-screen-button"></i>
            <h3>iOS & ANDROID VERSION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
              libero!
            </p>
          </span>
          <span className="gridItem4 text-end ">
            <i className="fa-3x pb-2 fa-solid fa-eye"></i>
            <h3>RETINA READY GRAPHICS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
              libero!
            </p>
          </span>
          <span className="gridItem5 ">
            <i className="fa-3x pb-2 fa-solid fa-pen-nib"></i>
            <h3>AWESOME UI DESIGN</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              consequatur!
            </p>
          </span>
        </div>
        <i className="text-center fa-solid fa-user py-3"></i>
        <h3 className="text-center">24/7 SUPPORT NY REAL PEOPLE</h3>
        <p className="w-25 mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing. Quas, doloremque.
        </p>
      </div>
    </div>
  );
};

export default Features;
