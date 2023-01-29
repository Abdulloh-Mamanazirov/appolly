import React from "react";
import { Route, Routes } from "react-router-dom";

import Blog from "./Blog/Blog";
import Home from "./Home/home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
