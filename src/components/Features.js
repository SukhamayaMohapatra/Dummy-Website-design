import React from "react";
import { IoWarningOutline } from "react-icons/io5";

const Features = () => {
  return (
    <div>
      <div className="text-area" style={{ textAlign: "center" }}>
        <h1>
          <IoWarningOutline />
          Warning ! Pickleball may cause suden oubreaks of joy and a serious
          addiction to the game
        </h1>
        <h3>Boost Your Game,Torch some Tacos and high-five new budies </h3>
      </div>

      <div className="row contactus ">
        <div className="col-md-6">
          <h1> Find courts Across USA</h1>
          <p className="text-justify mt-2">
            explore courts across states and pick your next destination
          </p>
        </div>
        <div className="col-md-4 ">
          <div className="box">
            <img
              src="./image/map.jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="row contactus ">
        <div className="col-md-6">
          <div className="box">
            <img
              src="./image/chat.avif"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-md-4 ">
          <h1> Community and Chat</h1>
          <p className="text-justify mt-2">
            Every court has its own community,join he chat an meet new people
          </p>
        </div>
      </div>
      <div className="row contactus ">
        <div className="col-md-6">
          <h1> Coaching Sessions</h1>
          <p className="text-justify mt-2">
            book session with top coaches and improve your game
          </p>
        </div>
        <div className="col-md-4 ">
          <div className="box">
            <img
              src="./image/coaching.webp"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="row contactus ">
        <div className="col-md-4">
          <div className="box">
            <img
              src="./image/coaching.webp"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-md-4 ">
          <h1> Real time court traffic</h1>
          <p className="text-justify mt-2">
            explore courts across states and pick your next destination
          </p>
        </div>
      </div>

      <div className="row contactus ">
        <div className="col-md-6">
          <h1> Local Weather Insights</h1>
          <p className="text-justify mt-2">
            book session with top coaches and improve your game
          </p>
        </div>
        <div className="col-md-4 ">
          <div className="box">
            <img
              src="./image/weather.avif"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="row contactus ">
        <div className="col-md-6">
          <div className="box">
            <img
              src="./image/points.avif"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-md-4 ">
          <h1> Pickle Points</h1>
          <p className="text-justify mt-2">
            earn points everytime you showup and exchange them for reward
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
