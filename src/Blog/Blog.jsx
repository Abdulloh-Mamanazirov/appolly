import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import BlogCard from "../components/Blog/blogCard";
import BlogAside from "../components/Blog/blogAside";

import image from "../images/Blog/image.png";
import image1 from "../images/Blog/image-1.png";
import image2 from "../images/Blog/image-2.png";
import image3 from "../images/Blog/image-3.png";
import image4 from "../images/Blog/image-4.png";

const Blog = () => {
  return (
    <>
      <div className="main-bg">
        <Header />
        <h1 className="text-center text-white fw-bold py-5">BLOG</h1>
        <span className="d-flex justify-content-center gap-2 text-white pb-5">
          <Link to="/" className="text-reset text-decoration-none text-white">
            <i className="fa-solid fa-house"></i> Home
          </Link>
          <p>/</p>
          <Link to="" className="text-reset text-decoration-none text-white">
            Blog
          </Link>
        </span>
      </div>
      <div className="container d-flex justify-content-between py-5">
        
        <div className="blogCards">
          <BlogCard
            imgSrc={image}
            heading="The Snap Pixel: How It Works and How to Install "
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac."
          />
          <BlogCard
            imgSrc={image1}
            heading="Have brands given up on International Women’s Day?"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac."
          />
          <BlogCard
            imgSrc={image2}
            heading="6 Designers On The Brands Empowering Women Today?"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac."
          />
          <BlogCard
            imgSrc={image3}
            heading="Gillette Launches Planet KIND, A Slightly More Sustainable Line Of Personal Care."
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac."
          />
          <BlogCard
            imgSrc={image4}
            heading="The Snap Pixel: How It Works and How to Install "
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac."
          />
        </div>

        <BlogAside />

      </div>
      <Footer />
    </>
  );
};

export default Blog;
