import React from "react";
// import { connect } from 'react-redux';
import { Link, NavLink, Redirect } from "react-router-dom";
import img1 from "./images/EMS.jpeg";
// import {Dropdown} from "react-bootstrap";

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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          {/* <img src={img1} style={{width:"170px", hight:"40px"}} /> */}
          EMS
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
            {/* <li className="nav-item">
              <NavLink
                className="nav-link fw-bold"
                activeStyle={activeStyle}
                to="/admin/dashboard" >
                ADMIN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link fw-bold"
                activeStyle={activeStyle}
                to="/employee/dashboard"
              >
                EMPLOYEE
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                className="nav-link fw-bold"
                activeStyle={activeStyle}
                to="/about"
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
            <li class="nav-item dropdown">
              {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              {/* <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                dataToggle="dropdown"
                ariaHaspopup="true"
                ariaExpanded="false"
              >
                Login
              </a>
              <div class="dropdown-menu" ariaLabelledby="navbarDropdown">
                <Link className="nav-link" to="/admin/login">
                  Admin Login
                </Link>
                <Link className="nav-link" to="/employee/login">
                  Employee Login
                </Link>
              </div> */}
            </li>
            <li className="nav-item">
              {!isLoggedIn ? (
                <div className="d-flex">
                  <Link className="nav-link" to="/admin/login">
                    Admin Login
                  </Link>
                  <Link className="nav-link" to="/employee/login">
                    Employee Login
                  </Link>
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
    </nav>
  );
};

export default Header;
