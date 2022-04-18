import React from "react";
import newsLetter from "../../../images/subscribe.jpg";
import "./NewsLetter.css";
import "../../Stylesheet/PublicStyleSheet.css";

const NewsLetter = () => {
  return (
    <div className="each-section">
      <section className="mt-20">
        <div className="subs">
          <div className="subs-image">
            <img src={newsLetter} alt="" />
          </div>
          <div className="subs-details">
            <h3>Let's stay in touch</h3>
            <p>
              Join my newsletter. So that I can reach out to you with my best
              news and offers.
            </p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
            <br />
            <br />
            <button className="hover:bg-gray-800 bg-gray-400">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
