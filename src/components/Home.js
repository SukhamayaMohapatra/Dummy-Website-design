import React from "react";

const Home = () => {
  return (
    <div>
      <div className="row contactus ">
        <div className="col-md-4">
          <h1> A World where pickleball is our life</h1>
          <p className="text-justify mt-2">
            a clan for whom,pickleball is a passion ,a culture,a way of life
          </p>
        </div>
        <div className="col-md-6 " style={{ objectFit: "cover" }}>
          <div className="box">
            <img
              src="./image/pick.jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
