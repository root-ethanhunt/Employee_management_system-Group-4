import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import departmentService from "../services/department.service";
import employeeService from "../services/employee.service";
import img1 from "../images/AD2.jpeg";
import img2 from "../images/images (17).png";
import projectService from "../services/project.service";

const DepartmentList = () => {
  const [allDepartent, setDepartments] = useState([]);
  const [eid, setEid] = useState("");
  const history = useHistory();
  const [empCount, setEmpCount] = useState("");
  const [deptCount, setDeptCount] = useState("");
  const [projectCount, setProjectCount] = useState("");

  const CountRow = () => {
    employeeService
      .totalCount()
      .then((response) => {
        setEmpCount(response.data);
      })
      .catch(() => {
        console.log("not find the row, something went wrong");
      });

    departmentService
      .totalCount()
      .then((response) => {
        setDeptCount(response.data);
      })
      .catch(() => {
        console.log("not find the row, something went wrong");
      });

    projectService
      .totalCount()
      .then((response) => {
        setProjectCount(response.data);
      })
      .catch(() => {
        console.log("not find the row, something went wrong");
      });
  };

  const init = () => {
    departmentService
      .getAll()
      .then((response) => {
        console.log("Printing Department data", response.data);
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
    console.log(allDepartent);
  };

  const findManager = (name) => {
    employeeService
      .findIdByName(name)
      .then((response) => {
        console.log(response.data);
        history.push(`/ManagerInfo/${response.data}`);
      })
      .catch(() => {
        console.log("Not Fount Id by this name " + name);
      });
  };

  const temp = () => {
    {
      console.log("temp is called");
      console.log(allDepartent);
      {
        allDepartent.map((department) => {
          employeeService
            .countDept(department.deptId)
            .then((response) => {
              departmentService
                .updateEmpCount(response.data, department.deptId)
                .then(() => {})
                .catch(() => {});
            })
            .catch(() => {
              console.log("Faild to count the Employee");
            });

          window.location.reload(false);
        });
      }
    }
  };

  useEffect(() => {
    CountRow();
    init();
  }, []);

  const handleDelete = (deptId) => {
    console.log("Printing id", deptId);
    departmentService
      .remove(deptId)
      .then((response) => {
        console.log("employee deleted successfully", response.data);
        // init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="w3-light-grey">
      {/* <!-- Top container --> */}
      {/* <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: "4" }}>
        <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey">
          <i className="fa fa-bars"></i>Menu
        </button>
        <span className="w3-bar-item w3-left mt-1">
          <img src={img2} style={{ width: "40px", hight: "10px" }} />
          {/* EMS */}
      {/* </span> */}
      {/* <span className="w3-bar-item w3-left mt-1">
          <NavLink className="nav-link" to="/">
            HOME
          </NavLink>
        </span>
        <div className="w3-bar-item w3-hover-white w3-right w3-margin-right">
          <i className="fa fa-bell" aria-hidden="true"></i>
        </div>
      </div> */}
      <header></header>
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
              style={{ width: "46px" }}
            />
          </div>
          <div className="w3-col s8 w3-bar">
            <span>Welcome Admin</span>
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
          >
            <i className="fa fa-remove fa-fw"></i>Close Menu
          </a>

          <a href="adminHomepage" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-bullseye fa-fw"></i> Overview
          </a>
          <a href="/admin1" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-bullseye fa-fw"></i> Admin
          </a>
          {/* <Link to="/admin/password"
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-edit"></i> Change Password
          </Link> */}
          <a href="/employeesList" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-users fa-fw"></i> Employees
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-comment"></i> Feedback
          </a>
          <Link to="/admin/login" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-sign-out fa-fw"></i> Log Out
          </Link>
          <br />
          <br />
        </div>
      </nav>

      {/* <!-- Overlay effect when opening sidebar on small screens --> */}
      <div
        className="w3-overlay w3-hide-large w3-animate-opacity"
        // onClick={w3_close}
        style={{ cursor: "pointer" }}
        title="close side menu"
        id="myOverlay"
      ></div>

      {/* <!-- !PAGE CONTENT! --> */}
      <div
        className="w3-main"
        style={{ marginLeft: "300px !important", marginTop: "43px" }}
      />

      {/* <!-- Header --> */}
      <header
        className="w3-container"
        style={{ paddingTop: "22px", marginLeft: "300px" }}
      >
        <h5>
          <b>
            <i className="fa fa-dashboard"></i> &nbsp; My Dashboard
          </b>
        </h5>
      </header>

      <div className="w3-row-padding " style={{ marginLeft: "300px" }}>
        {/* <!--Admin div--> */}
        <a href="/admin1">
          <div className="w3-quarter">
            <div className="w3-container w3-teal w3-padding-16">
              <div className="w3-left">
                <i className="fa fa-users w3-xxxlarge"></i>
              </div>
              <div className="w3-right"></div>
              <div className="w3-clear"></div>
              <h4>Admins</h4>
              <h5>3</h5>
            </div>
          </div>
        </a>

        {/* <!--User div--> */}
        <a href="/employeesList">
          <div className="w3-quarter w3-margin-left">
            <div className="w3-container w3-red w3-padding-16">
              <div className="w3-left">
                <i className="fa fa-users w3-xxxlarge"></i>
              </div>
              <div className="w3-right"></div>
              <div className="w3-clear"></div>
              <h4>Employees</h4>
              <h5>{empCount}</h5>
            </div>
          </div>
        </a>

        <a href="/departmentList">
          {" "}
          <div className="w3-quarter w3-margin-left">
            <div className="w3-container w3-pink w3-padding-16">
              <div className="w3-left">
                <i className="fa fa-building-o w3-xxxlarge"></i>
              </div>
              <div className="w3-right"></div>
              <div className="w3-clear"></div>
              <h4>Departments</h4>
              <h5>{deptCount}</h5>
            </div>
          </div>
        </a>

        <a href="/projectList">
          <div className="w3-quarter w3-margin-top">
            <div className="w3-container w3-purple w3-padding-16">
              <div className="w3-left">
                <i className="fa fa-sticky-note w3-xxxlarge"></i>
              </div>
              <div className="w3-right"></div>
              <div className="w3-clear"></div>
              <h4>Projects</h4>
              <h5>{projectCount}</h5>
            </div>
          </div>
        </a>

        <div className="w3-panel" id="Admin">
          <div
            className="w3-row-padding w3-margin-top"
            style={{ margin: "0 -16px" }}
          >
            <div className="w3-twothird">
              <h3>List of Departments</h3>
              {/* write your code here */}
              <div className="container">
                <hr />
                <div>
                  <Link to="/addDepartment" className="btn btn-primary mb-2">
                    Add Department
                  </Link>
                  <br></br>
                  <button
                    className="btn btn-primary mb-2"
                    onClick={() => {
                      temp();
                    }}
                  >
                    Update Employee Number
                  </button>
                  <br></br>
                  <table
                    className="table table-bordered table-striped"
                    style={{ backgroundColor: "white", width: "150%" }}
                  >
                    <thead className="thead-dark">
                      <tr>
                        <th> Id</th>
                        <th> Name</th>
                        <th> HOD</th>
                        <th> Total Employees</th>
                        <th> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allDepartent.map((department) => (
                        <tr key={department.deptId}>
                          <td>{department.deptId}</td>
                          <td>{department.deptName}</td>
                          <td>
                            <button
                              className="btn btn-primary mb-2"
                              onClick={() => {
                                findManager(department.deptManager);
                              }}
                            >
                              {department.deptManager}
                            </button>
                          </td>
                          <td>
                            <Link
                              to={`/AllEmpFindByDept/${department.deptId}`}
                              className="btn btn-primary mb-2"
                            >
                              {department.totalEmpInDept}
                            </Link>
                          </td>
                          <td>
                            <Link
                              className="btn btn-info"
                              to={`/allDepartment/edit/${department.deptId}`}
                            >
                              Update
                            </Link>

                            <button
                              className="btn btn-danger ml-2"
                              onClick={() => {
                                handleDelete(department.deptId);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <br></br>
                <Link to="/adminHomepage" className="btn btn-primary mb-2">
                  Back To Main Page
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>

    // <div className="container">
    //   <h3>List of Departments</h3>
    //   <hr />
    //   <div>
    //     <Link to="/addDepartment" className="btn btn-primary mb-2">
    //       Add Department
    //     </Link>
    //     <br></br>
    //     <button
    //       className="btn btn-primary mb-2"
    //       onClick={() => {
    //         temp();
    //       }}
    //     >
    //       Update Employee Number
    //     </button>
    //     <br></br>
    //     <table className="table table-bordered table-striped">
    //       <thead className="thead-dark">
    //         <tr>
    //           <th> Id</th>
    //           <th> Name</th>
    //           <th> HOD</th>
    //           <th> Total Employees</th>
    //           <th> Actions</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {allDepartent.map((department) => (
    //           <tr key={department.deptId}>
    //             <td>{department.deptId}</td>
    //             <td>{department.deptName}</td>
    //             <td>
    //               <button
    //                 className="btn btn-primary mb-2"
    //                 onClick={() => {
    //                   findManager(department.deptManager);
    //                 }}
    //               >
    //                 {department.deptManager}
    //               </button>
    //             </td>
    //             <td>
    //               <Link
    //                 to={`/AllEmpFindByDept/${department.deptId}`}
    //                 className="btn btn-primary mb-2"
    //               >
    //                 {department.totalEmpInDept}
    //               </Link>
    //             </td>
    //             <td>
    //               <Link
    //                 className="btn btn-info"
    //                 to={`/allDepartment/edit/${department.deptId}`}
    //               >
    //                 Update
    //               </Link>

    //               <button
    //                 className="btn btn-danger ml-2"
    //                 onClick={() => {
    //                   handleDelete(department.deptId);
    //                 }}
    //               >
    //                 Delete
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    //   <br></br>
    //   <Link to="/adminHomepage" className="btn btn-primary mb-2">
    //     Back To Main Page
    //   </Link>
    // </div>
  );
};

export default DepartmentList;
