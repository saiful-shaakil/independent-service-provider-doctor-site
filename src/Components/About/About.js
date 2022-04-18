import React from "react";
import "../Stylesheet/PublicStyleSheet.css";
import profile from "../../images/profile-picture.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="each-section">
      <div className=" mt-20 rounded-lg">
        <div className="about-me">
          <div className="photo">
            <img className="image" src={profile} alt="Profile Image" />
          </div>
          <div className="info">
            I'm Shakil. I want to be a programmer. Now I'm learning web
            development. In future, I want to learn software development. I'm
            enough dedicated to reach my goal. I'm not so much hard working
            person. But I try to do my daily task in daily. If I want something.
            I do my best to achieve that thing.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
