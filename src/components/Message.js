import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";
const Message = () => {
  return (
    <div
      className="container"
      style={{ textAlign: "center", marginBottom: "40px", marginTop: "50px" }}
    >
      <h1>A World Where Pickleball is our life </h1>
      <h3>A clan for whom pickleball is a passion,a culture,a way of life</h3>
      <div className="d-inline-flex">
        <div className="container">
          <FaGooglePlay />
        </div>
        <div className="container">
          <FaApplePay />
        </div>
        <div className="container">
          <TiVendorMicrosoft />
        </div>
      </div>
    </div>
  );
};

export default Message;
