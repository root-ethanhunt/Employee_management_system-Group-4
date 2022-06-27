import React from "react";
// import { connect } from 'react-redux';
import { Link, NavLink, Redirect } from "react-router-dom";
import img1 from "./images/EMS.jpeg";
import img2 from "./images/images (17).png";
import Timer from "./Timer";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "#0b0040",
  };

  let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      // style={{ position: "fixed" }}
    >
      <div
        className="navbar navbar-expand-sm  navbar-dark fixed-top"
        style={{
          backgroundColor: "#008b8b",
          paddingTop: "0px",
          paddingBottom: "0px",
          height: "50px",
        }}
      >
        <div className="container-fluid">
          <div className="navbar-brand">
            <span className="w3-bar-item w3-left mt-1">
              <img src={img2} style={{ width: "40px", hight: "10px" }} />
              EMS
            </span>
            {/* <img src={img1} style={{width:"170px", hight:"40px"}} /> */}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link fw-bold" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  activeStyle={activeStyle}
                  to="/admin/login"
                >
                  ADMIN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  activeStyle={activeStyle}
                  to="/employee/login"
                >
                  EMPLOYEE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  activeStyle={activeStyle}
                  to="/aboutus"
                >
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  activeStyle={activeStyle}
                  to="/faq"
                >
                  FAQ
                </NavLink>
              </li>
              {/* <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={activeStyle}
                to="/tracking"
              >
                Tracking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={activeStyle}
                to="/product"
              >
                Products
              </NavLink>
            </li> */}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                {!isLoggedIn ? (
                  <div className="d-flex">
                    <Timer></Timer>
                    {/* <Link className="nav-link" to="/admin/login">
                    Admin Login
                  </Link>
                  <Link className="nav-link" to="/employee/login">
                    Employee Login
                  </Link> */}
                  </div>
                ) : (
                  <button onClick={handleLogout} className="btn nav-link">
                    Logout
                  </button>
                )}
              </li>
            </ul>
            {/* {auths === true ? <Redirect to='/' /> : null} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
