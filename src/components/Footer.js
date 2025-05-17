import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="row contactus ">
          <div className="col-md-5">
            <h1> A World where pickleball is our life</h1>
            <p className="text-justify mt-2">
              a clan for whom,pickleball is a passion ,a culture,a way of life
            </p>
            <p>pickle@gmail.com</p>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="container" style={{ alignItems: "center" }}>
                <h1>Contact US</h1>
                <button
                  className="btn btn-dark"
                  style={{ alignItems: "center" }}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
