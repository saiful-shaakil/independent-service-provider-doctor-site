import React from "react";
import Banner from "../Home/Banner/Banner";
import NewsLetter from "../Home/NewsLetter/NewsLetter";
import Services from "../Home/Services/Services";

const LandingPage = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default LandingPage;
