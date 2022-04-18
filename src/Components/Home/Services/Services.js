import React, { useEffect, useState } from "react";
import "../../Stylesheet/PublicStyleSheet.css";
import EachService from "./EachService";
import "./service.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="each-section text-center mt-8" id="services">
      <h1 className="text-5xl mt-16">
        My <span className="text-gray-700">Dental Services</span>
      </h1>
      <p className="text-2xl mt-5">
        I am always happy to provide you my best services
      </p>
      <div className="services mt-10">
        {services.map((service) => (
          <EachService key={service.id} service={service}></EachService>
        ))}
      </div>
    </div>
  );
};

export default Services;
