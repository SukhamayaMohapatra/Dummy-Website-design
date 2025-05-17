import React from "react";
import Queries from "./Queries";
import Message from "./Message";

const Contact = () => {
  return (
    <div className="container">
      <span
        style={{
          textAlign: "center",
        }}
      >
        <h1>A World Where Pickleball is our Life</h1>
        <p>A clan for whom,pickleball is a passion,a culture,a way of life</p>
        <div className="container">
          <button className="btn btn-dark">Contact</button>
        </div>
      </span>
      <span>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                style={{ width: "100rem", height: "40rem" }}
                src="./image/games.avif"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </span>
      <Message />
      <Queries />
    </div>
  );
};

export default Contact;
