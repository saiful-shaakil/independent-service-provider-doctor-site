import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

const EachService = ({ service }) => {
  const { img, name, description, price } = service;
  return (
    <div className="service rounded-lg">
      <img src={img} alt="" />
      <br />
      <h1 className="text-3xl">{name}</h1>
      <p className="text-xl mt-2 font-semibold">${price}</p>
      <p className="mt-2">{description.slice(0, 149)}</p>
      <Link to="booking">
        <button className="w-full h-12 rounded-lg bg-gray-400 text-gray-200 uppercase font-semibold hover:bg-gray-900 text-gray-100 transition mt-4">
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default EachService;
