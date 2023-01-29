import React from "react";

import Header from "../components/Header/header";
import About from "../components/About/about";
import Download from "../components/Download/download";
import Features from "../components/Features/features";
import Footer from "../components/Footer/footer";
import Showcase from "../components/Showcase/showcase";
import Team from "../components/Team/team";
import Usage from "../components/Usage/usage";

function Home() {
  return (
    <div>
        <div className="main-bg">
        <Header />
        <Showcase />
      </div>
      <About />
      <Features />
      <Download />
      <Usage />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
