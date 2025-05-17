import React from "react";

const About = () => {
  return (
    <div>
      <div className="row contactus ">
        <div className="col-md-5">
          <img src="./image/map.jpg" className="rounded-float-left" alt="..." />
          <img
            src="./image/map.jpg"
            className="rounded-float-right"
            alt="..."
          />
        </div>
        <div className="col-md-4 ">
          <h3>ABOUT US</h3>
          <h1>Our Mission</h1>
          <div className="box">
            <p>
              a beautiful lady went to the hill to get some water from the well
              situated at the hill top an when she got back,she saw that her cat
              was missing ,then she ran to her neighbour to ask whether they saw
              it or not
            </p>
          </div>
          <div className="container">
            <button className="btn btn-dark">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
