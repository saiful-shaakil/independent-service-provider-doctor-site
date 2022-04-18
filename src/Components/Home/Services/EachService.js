import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

const EachService = ({ service }) => {
  const { img, name } = service;
  return (
    <div className="service rounded-sm">
      <img src={img} alt="" />
      <br />
      <h1 className="text-3xl">{name}</h1>
      <Link to="booking">
        <button className="w-full h-12 rounded-lg bg-green-400 text-gray-200 uppercase font-semibold hover:bg-green-700 text-gray-100 transition mt-4">
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default EachService;
