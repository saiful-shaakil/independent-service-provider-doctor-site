import React from "react";
import Banner from "../Home/Banner/Banner";
import Introduction from "../Home/Introduction/Introduction";
import Navbar from "../Home/Navbar/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Introduction></Introduction>
    </div>
  );
};

export default LandingPage;
