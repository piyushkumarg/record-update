import React from "react";
import "./home.css";

const Details = ({ name, email, index }) => {
  return (
    <div className="detail_cont">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <button>Delete</button>
    </div>
  );
};

export default Details;
