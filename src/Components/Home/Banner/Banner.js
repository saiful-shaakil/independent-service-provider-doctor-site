import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="introduction">
        <h1 className="text-5xl">
          Welcome to My <span className="text-cyan-600">Dental Clinic</span>
        </h1>
        <p className="text-2xl text-cyan-800 mt-4">
          Get your smile back and enjoy life more.
        </p>
        <p className="mt-2">
          I am William Dorfman, a dentist who provide dental services to the
          people with affordable cost. I always think about my patient not
          money. So, I provide the best services. Don't hesitate to smile
          because smile is the base thing of man. Smile can prove many thing.
          And I'm here to give you back your smile. Smile with confidence. Be
          careful about your teeth before the time.
        </p>
      </div>
    </div>
  );
};

export default Banner;
