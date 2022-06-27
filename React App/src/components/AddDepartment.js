import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import departmentService from "../services/department.service";
import employeeService from "../services/employee.service";
import img1 from "../images/AD2.jpeg";
import img2 from "../images/images (17).png";
import projectService from "../services/project.service";

const AddDepartment = () => {
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

  const [managers, setManagers] = useState([]);
  const [deptName, setDeptName] = useState("");

  const [deptManager, setDeptManager] = useState("");
  const [totalEmpInDept, setTotalEmpInDept] = useState("");
  const [head, setHead] = useState("Add Department");
  const history = useHistory();
  const { deptId } = useParams();

  const [deptNameValid, setDeptNameValid] = useState(false);
  const [deptManagerValid, setDeptManagerValid] = useState(false);
  const [totalEmpInDeptValid, setTotalEmpInDeptValid] = useState(false);

  const [deptNameTouched, setDeptNameTouched] = useState(false);
  const [deptManagerTouched, setDeptManagerTouched] = useState(false);
  const [totalEmpInDeptTouched, setTotalEmpInDeptTouched] = useState(false);

  const init = () => {
    employeeService
      .findByDept(13)
      .then((response) => {
        console.log("Printing employees data", response.data);
        setManagers(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
    console.log(managers);
  };

  // touch
  const DeptNameHandler = (e) => {
    setDeptName(e.target.value);
    if (e.target.value.trim() !== "") {
      setDeptNameValid(true);
    }
  };

  const DeptManagerHandler = (e) => {
    setDeptManager(e.target.value);

    if (e.target.value.trim() !== "") {
      setDeptManagerValid(true);
    }
  };

  const totalHandler = (e) => {
    setTotalEmpInDept(e.target.value);

    if (e.target.value.trim() != "") {
      setTotalEmpInDeptValid(true);
    }
  };

  // Blur
  const DeptNameBlurHandler = (e) => {
    if (deptName.trim() === "") {
      setDeptNameTouched(true);
      setDeptNameValid(false);
      return;
    }
  };

  const DeptManagerBlurHandler = (e) => {
    // setDeptManagerTouched(true);

    if (deptManager.trim() === "") {
      setDeptManagerTouched(true);
      setDeptManagerValid(false);
      return;
    }
  };

  const totalBlurHandler = (e) => {
    // setTotalEmpInDeptTouched(true);

    if (totalEmpInDept.trim() == "") {
      setTotalEmpInDeptTouched(true);
      setTotalEmpInDeptValid(false);
      return;
    }
  };

  const saveDepartment = (d) => {
    d.preventDefault();

    setDeptNameTouched(true);
    setDeptManagerTouched(true);
    setTotalEmpInDeptTouched(true);

    if (deptName.trim() === "") {
      setDeptNameValid(false);
      return;
    }
    setDeptNameValid(true);

    // if (deptManager.trim() === "") {
    //   setDeptManagerValid(false);
    //   return;
    // }
    // setDeptManagerValid(true);

    // if (totalEmpInDept <= 0) {
    //   setTotalEmpInDeptValid(false);
    //   return;
    // }
    // setTotalEmpInDeptValid(true);

    const department = { deptName, deptManager, totalEmpInDept, deptId };

    if (deptId) {
      //update
      console.log(deptId + " Dept Id");
      departmentService
        .update(department)
        .then((response) => {
          console.log(department);
          console.log("Employee data updated successfully", response.data);
          history.push("/departmentList");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      console.log("Department Save start");
      departmentService
        .create(department)
        .then((response) => {
          console.log(department);
          console.log(deptManager);
          console.log("Empoyee added successfully", response.data);
          history.push("/departmentList");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    CountRow();
    init();
    if (deptId) {
      console.log(deptId);
      departmentService
        .get(deptId)
        .then((department) => {
          setDeptName(department.data.deptName);
          setDeptManager(department.data.deptManager);
          setTotalEmpInDept(department.data.totalEmpInDept);
          setHead("Update Department");
        })
        .catch((error) => {
          console.log("Something went wrong.", error);
        });
    }
  }, []);

  const deptNameInputValid = !deptNameValid && deptNameTouched;
  const deptManagerInputValid = !deptManagerValid && deptManagerTouched;
  const totalEmpInDeptInputValid =
    !totalEmpInDeptValid && totalEmpInDeptTouched;

  const deptNameStyle = deptNameInputValid
    ? " form-control col-4 border border-3 border-danger "
    : "form-control col-4";
  const deptManagerStyle = deptManagerInputValid
    ? " form-control col-4 border border-3 border-danger"
    : "form-control col-4";
  const totalEmpInDeptStyle = totalEmpInDeptInputValid
    ? " form-control col-4 border border-3 border-danger"
    : "form-control col-4";

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
              <h3>{head}</h3>
              {/* write your code here */}
              <div
                className="container"
                style={{
                  backgroundColor: "white",
                  width: "130%",
                  paddingBottom: "30px",
                }}
              >
                <hr />
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className={deptNameStyle}
                      id="name"
                      value={deptName}
                      onChange={DeptNameHandler}
                      onBlur={DeptNameBlurHandler}
                      placeholder="Enter Department name"
                    />
                    {deptNameInputValid && (
                      <p
                        className="text-danger font-weight-bold d-flex justify-content-around"
                        style={{ marginLeft: "-200px" }}
                      >
                        Department must not be empty
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control col-4"
                      id="deptManager"
                      value={deptManager}
                      onChange={(d) => setDeptManager(d.target.value)}
                      placeholder="Enter Department Manager"
                    >
                      {managers.map((manager) => (
                        <option value={manager.ename}>{manager.ename}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <button
                      onClick={(d) => saveDepartment(d)}
                      className="btn btn-primary"
                    >
                      Save
                    </button>
                    <div style={{ paddingBottom: "80px" }}>
                      <hr />
                      <Link to="/departmentList">Back to List</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>

    // <div
    //   className="container"
    //   style={{ backgroundColor: "white", width: "110%" }}
    // >
    //   <h3>{head}</h3>
    //   <hr />
    //   <form>
    //     <div className="form-group">
    //       <input
    //         type="text"
    //         className="form-control col-4"
    //         id="name"
    //         value={deptName}
    //         onChange={(d) => setDeptName(d.target.value)}
    //         placeholder="Enter Department name"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <select
    //         className="form-control col-4"
    //         id="deptManager"
    //         value={deptManager}
    //         onChange={(d) => setDeptManager(d.target.value)}
    //         placeholder="Enter Department Manager"
    //       >
    //         {managers.map((manager) => (
    //           <option value={manager.ename}>{manager.ename}</option>
    //         ))}
    //       </select>
    //     </div>

    //     <div>
    //       <button
    //         onClick={(d) => saveDepartment(d)}
    //         className="btn btn-primary"
    //       >
    //         Save
    //       </button>
    //     </div>
    //   </form>
    //   <hr />
    //   <Link to="/departmentList">Back to List</Link>
    // </div>
  );
};

export default AddDepartment;
