import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid me-auto mb-2 mb-lg-0">
          <a className="navbar-brand" href="/">
            <h1>Pickleball</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>

              <li className="nav-item mx-5">
                <a className="nav-link" href="/">
                  Login
                </a>
              </li>
              <li className="nav-item mx-5 ">
                <a className="nav-link" href="/">
                  Join Us
                </a>
              </li>
              <div className="topnav-right ">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
