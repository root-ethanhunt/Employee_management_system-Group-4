import React from "react";
import { Link, NavLink } from "react-router-dom";
import img1 from "./images/ED2.jpeg";
import img2 from "./images/EMS.jpeg";

const EmpDashboard = () => {
  return (
    <div class="w3-light-grey">
      <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: "4" }}>
        <button
          className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
          //onClick="w3_open();"
        >
          <i className="fa fa-bars"></i>Menu
        </button>
        <span className="w3-bar-item w3-left mt-2">
          {/* <img src={img2} style={{width:"170px", hight:"40px"}} /> */}
          EMS
        </span>
        <span className="w3-bar-item w3-left mt-2">
          <NavLink className="nav-link" to="/">
            HOME
          </NavLink>
        </span>
        <div className="w3-bar-item w3-hover-white w3-right w3-margin-right">
          <i className="fa fa-bell" aria-hidden="true"></i>
        </div>
      </div>

      {/* <!-- Sidebar/menu --> */}
      <nav
        className="w3-sidebar w3-collapse w3-white w3-animate-left"
        style={{ zIndex: "3", width: "300px" }}
        id="mySidebar"
      >
        <br />
        <div className="w3-container w3-row">
          <div className="w3-col s4">
            <img
              src={img1}
              className="w3-circle w3-margin-right"
              style={{ width: "80px" }}
            />
          </div>
          <div className="w3-col s8 w3-bar">
            <span>
              Welcome
              <br />
              Employee
            </span>
            <br />
          </div>
        </div>
        <hr />
        <div className="w3-container">
          <h5>Dashboard</h5>
        </div>
        <div className="w3-bar-block">
          <a
            href="#"
            className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
            //onClick="w3_close()"
            title="close menu"
          >
            <i className="fa fa-remove fa-fw"></i> Close Menu
          </a>

          <a href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-bullseye fa-fw"></i> Overview
          </a>
          <Link
            to="/emp/password"
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-edit"></i> Change Password
          </Link>
          <Link
            to="/employee/login"
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-sign-out fa-fw"></i> Log Out
          </Link>
          <br />
          <br />
        </div>
      </nav>

      {/* <!-- Overlay effect when opening sidebar on small screens --> */}
      <div
        className="w3-overlay w3-hide-large w3-animate-opacity"
        style={{ cursor: "pointer" }}
        title="close side menu"
        id="myOverlay"
      ></div>

      {/* <!-- !PAGE CONTENT! --> */}
      <div
        className="w3-main"
        style={{ marginLeft: "300px", marginTop: "43px" }}
      >
        {/* <!-- Header --> */}
        <header className="w3-container" style={{ paddingTop: "22px" }}>
          <h5>
            <b>
              <i className="fa fa-dashboard"></i> My Dashboard
            </b>
          </h5>
        </header>

        <div className="w3-row-padding w3-margin-bottom">
          <a href="#">
            <div className="w3-quarter">
              <div className="w3-container w3-indigo w3-padding-16">
                <div className="w3-left">
                  <i className="fa fa-users w3-xxxlarge"></i>
                </div>
                <div className="w3-right"></div>
                <div className="w3-clear"></div>
                <h4>Details</h4>
              </div>
            </div>
          </a>
        </div>

        <div className="w3-panel" id="Admin">
          <div
            className="w3-row-padding w3-margin-top"
            style={{ margin: "0 -16px" }}
          >
            <div className="w3-twothird">
              <h5>My Details</h5>
              <table className="w3-table-all w3-striped w3-hoverable w3-white">
                <tbody>
                  <tr>
                    <th></th>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Employee Salary</th>
                    <th>Employee emailid</th>
                    <th>DOB</th>
                    <th>Location</th>
                    <th>Department</th>
                    <th>Project</th>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa fa-user w3-text-blue w3-large"></i>
                      <b />
                    </td>
                    <td> 1 </td>
                    <td>Riddhiman Patra</td>
                    <td>30000</td>
                    <td>
                      <i>riddhiman@gmail.com</i>
                    </td>
                    <td>28-02-1998</td>
                    <td>Bangalore</td>
                    <td>Developer</td>
                    <td>ReactJs</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa fa-user w3-text-blue w3-large"></i>
                      <b />
                    </td>
                    <td> 2 </td>
                    <td>Subhabrata Panda</td>
                    <td>40000</td>
                    <td>
                      <i>samrat@gmail.com</i>
                    </td>
                    <td>12-06-1999</td>
                    <td>kolkata</td>
                    <td>Analyst</td>
                    <td>AngularJs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDashboard;
