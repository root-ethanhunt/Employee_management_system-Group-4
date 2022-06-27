import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import employeeService from "../services/employee.service";
import img1 from "../images/AD2.jpeg";
import img2 from "../images/images (17).png";
import departmentService from "../services/department.service";
import projectService from "../services/project.service";

const AddEmployee = () => {
  const [empCount, setEmpCount] = useState("");
  const [deptCount, setDeptCount] = useState("");
  const [projectCount, setProjectCount] = useState("");
  const [ename, setEname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [location, setLocation] = useState("");
  const [esalary, setEsalary] = useState("");
  const [dob, setDob] = useState("");
  const [department, setDepartment] = useState({ depId: 0 });
  const [project, setProject] = useState({ projectId: 0 });
  const [deptId, setDeptId] = useState("");
  const [projectId, setProjectId] = useState("");
  const [did, setDid] = useState("");
  const [pid, setPid] = useState("");
  const [head, setHead] = useState("Add Employees");
  const history = useHistory();
  const { eid } = useParams();

  // for validation
  const [enameValid, setEnameValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [email_idValid, setEmail_idValid] = useState(false);
  const [phone_numberValid, setPhone_numberValid] = useState(false);
  const [locationValid, setLocationValid] = useState(false);
  const [esalaryValid, setEsalaryValid] = useState(false);
  const [dobValid, setDobValid] = useState(false);
  const [departmentValid, setDepartmentValid] = useState(false);
  const [projectValid, setProjectValid] = useState(false);

  //for touch validation
  const [enameTouched, setEnameTouched] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [email_idTouched, setEmail_idTouched] = useState(false);
  const [phone_numberTouched, setPhone_numberTouched] = useState(false);
  const [locationTouched, setLocationTouched] = useState(false);
  const [esalaryTouched, setEsalaryTouched] = useState(false);
  const [dobTouched, setDobTouched] = useState(false);
  const [departmentTouched, setDepartmentTouched] = useState(true);
  const [projectTouched, setProjectTouched] = useState(true);
  // const [deptIdValid, setDeptIdValid] = useState(true);
  // const [projectIdValid, setProjectIdValid] = useState(true);

  // email Validation
  const [email_idError, setEmail_idError] = useState("");
  const [msg, setMsg] = useState("Email must not be empty");

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

  //form handler
  const nameHandler = (e) => {
    setEname(e.target.value);

    if (e.target.value.trim() !== "") {
      setEnameValid(true);
    }
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);

    if (e.target.value.trim() != "") {
      setUsernameValid(true);
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);

    if (e.target.value.trim() != "") {
      setPasswordValid(true);
    }
  };

  const emailHandler = (e) => {
    setEmail_id(e.target.value);

    // if (regex.test(email_id) === false) {
    //   setEmail_idError("Please enter valid email address");
    // }
    if (e.target.value.trim() !== "") {
      setEmail_idValid(true);
      // if (regex.test(email_id) === false) {
      //   setEmail_idError("Please enter valid email address");
      // } else {
      //   setEmail_idError("");
      // }
    }
  };

  const phoneHandler = (e) => {
    setPhone_number(e.target.value);
    if (e.target.value.trim() !== "") {
      setPhone_numberValid(true);
    }
  };

  const locationHandler = (e) => {
    setLocation(e.target.value);
    if (e.target.value.trim() !== "") {
      setLocationValid(true);
    }
  };

  const salaryHandler = (e) => {
    setEsalary(e.target.value);

    if (e.target.value.trim() !== "") {
      setEsalaryValid(true);
    }
  };

  const dobHandler = (e) => {
    setDob(e.target.value);

    if (e.target.value.trim() !== "") {
      setDobValid(true);
    }
  };

  const changeProject = (id) => {
    setProject({ projectId: id });
    setPid(id);

    if (id != 0) {
      setProjectValid(true);
    }
  };

  const changeDepartment = (id) => {
    setDepartment({ deptId: id });
    setDid(id);

    if (id != 0) {
      setDepartmentValid(true);
    }
  };

  // Blur Handler
  const nameBlurHandler = (event) => {
    // setEnameTouched(true);

    if (ename.trim() === "") {
      setEnameTouched(true);
      setEnameValid(false);
    }
  };

  const usernameBlurHandler = (e) => {
    // usernameTouched(true);

    if (username.trim() == "") {
      usernameTouched(true);
      setUsernameValid(false);
    }
  };

  const passwordBlurHandler = (e) => {
    // passwordTouched(true);
    if (password.trim() == "") {
      passwordTouched(true);
      setPasswordValid(false);
    }
  };

  const emailBlurHandler = (e) => {
    // setEmail_idTouched(true);

    if (email_id.trim() === "") {
      setEmail_idTouched(true);
      setEmail_idValid(false);
    }
  };

  const phoneBlurHandler = (e) => {
    // setPhone_numberTouched(true);
    if (phone_number.trim() === "") {
      setPhone_numberTouched(true);
      setPhone_numberValid(false);
    }
  };

  const locationBlurHandler = (e) => {
    // setLocationTouched(true);
    if (location.trim() === "") {
      setLocationTouched(true);
      setLocationValid(false);
    }
  };

  const salaryBlurHandler = (e) => {
    // setEsalaryTouched(true);

    if (esalary.trim() === "") {
      setEsalaryTouched(true);
      setEsalaryValid(false);
    }
  };

  const dobBlurHandler = (e) => {
    // setDobTouched(true);

    if (dob.trim() === "") {
      setDobTouched(true);
      setDobValid(false);
    }
  };

  const changeProjectBlur = (e) => {
    // setProjectTouched(true);

    if (project.projectId == 0) {
      setProjectTouched(true);
      setProjectValid(false);
    }
  };

  const DepartmentBlur = (e) => {
    // setDepartmentTouched(true);

    if (department.depId === 0) {
      setDepartmentTouched(true);
      setDepartmentValid(false);
    }
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    console.log("No data saved " + e);

    // validation Part
    setEnameTouched(true);
    setUsernameTouched(true);
    setPasswordTouched(true);
    setEmail_idTouched(true);
    setPhone_numberTouched(true);
    setPhone_numberTouched(true);
    setLocationTouched(true);
    setEsalaryTouched(true);
    setDobTouched(true);
    setDepartmentTouched(false);
    setProjectTouched(false);

    if (ename.trim() === "") {
      setEnameValid(false);
      return;
    }
    setEnameValid(true);

    if (username.trim() === "") {
      setUsernameValid(false);
      return;
    }
    setUsernameValid(true);

    if (password.trim() === "") {
      setPasswordValid(false);
      return;
    }
    setPasswordValid(true);

    if (email_id.trim() === "") {
      setEmail_idValid(false);
      // setEmail_idError("Please enter valid email address");
      return;
    }
    setEmail_idValid(true);

    if (phone_number.trim() === "") {
      setPhone_numberValid(false);
      return;
    }
    setPhone_numberValid(true);

    if (location.trim() === "") {
      setLocationValid(false);
      return;
    }
    setLocationValid(true);

    if (esalary <= 0) {
      setEsalaryValid(false);
      return;
    }
    setEsalaryValid(true);

    if (dob.trim() === "") {
      setDobValid(false);
      return;
    }
    setDobValid(true);

    if (department.depId === 0) {
      setDepartmentValid(false);
      return;
    }
    setDepartmentValid(true);

    if (project.projectId === 0) {
      setProjectValid(false);
      return;
    }
    setProjectValid(true);

    const employee = {
      ename,
      username,
      password,
      email_id,
      phone_number,
      location,
      esalary,
      dob,
      department,
      project,
      eid,
    };

    if (eid) {
      //update
      console.log(eid, ename, department, deptId, project, projectId);
      employeeService
        .update(employee)
        .then((response) => {
          console.log(employee);
          console.log("Employee data updated successfully", response.data);
          history.push("/employeesList");
        })
        .catch((error) => {
          console.log("Something went wrong in data update", error);
        });
    } else {
      // create
      employeeService
        .create(employee)
        .then((response) => {
          console.log(employee);
          console.log("Empoyee added successfully", response.data);
          history.push("/employeesList");
        })
        .catch((error) => {
          console.log("Something went wrong in Data Create", error);
        });
    }
  };

  // const changeProject = (id) => {
  //   setProject({ projectId: id });
  //   setPid(id);
  // };

  // const changeDepartment = (id) => {
  //   setDepartment({ deptId: id });
  //   setDid(id);
  // };

  useEffect(() => {
    CountRow();
    if (eid) {
      console.log(eid);
      employeeService
        .get(eid)
        .then((employee) => {
          setEname(employee.data.ename);
          setUsername(employee.data.username);
          setPassword(employee.data.password);
          setEmail_id(employee.data.email_id);
          setPhone_number(employee.data.phone_number);
          setLocation(employee.data.location);
          setEsalary(employee.data.esalary);
          setDob(employee.data.dob);
          setDid(employee.data.department.deptId);
          setPid(employee.data.project.projectId);
          setHead("Update Employee");
          setDepartment({ deptId: employee.data.department.deptId });
          setProject({ projectId: employee.data.project.projectId });
        })
        .catch((error) => {
          console.log("Something went wrong in  useeffect", error);
        });
      // setDepartment({ deptId: " + deptId + " });
      // setProject({ projectId: " + projectId + " });
    }
  }, []);

  const enameInputValid = !enameValid && enameTouched;
  const usernameInputValid = !usernameValid && usernameTouched;
  const passwordInputValid = !passwordValid && passwordTouched;
  const email_idInputValid = !email_idValid && email_idTouched;
  const phone_numberInputValid = !phone_numberValid && phone_numberTouched;
  const locationInputValid = !locationValid && locationTouched;
  const esalaryInputValid = !esalaryValid && esalaryTouched;
  const dobInputValid = !dobValid && dobTouched;
  const departmentInputValid = !departmentValid && !departmentTouched;
  const projectInputValid = !projectValid && !projectTouched;

  const nameStyle = enameInputValid
    ? " form-control col-4 border border-3 border-danger"
    : "form-control col-4";

  const usernameStyle = usernameValid
    ? " form-control col-4 border border-3 border-danger"
    : "form-control col-4";
  const passwordStyle = passwordValid
    ? " form-control col-4 border border-3 border-danger"
    : "form-control col-4";
  const email_idStyle = email_idInputValid
    ? " form-control col-4 border border-3 border-danger"
    : "form-control col-4";
  const phone_numberStyle = phone_numberInputValid
    ? " form-control col-4 border border-3 border-danger"
    : "form-control col-4";
  const locationStyle = locationInputValid
    ? " form-control col-4 border border-3 border-danger"
    : "form-control col-4";
  const esalaryStyle = esalaryInputValid
    ? " form-control col-4 border border-3 border-danger"
    : "form-control col-4";
  const dobStyle = dobInputValid
    ? " form-control col-4 border border-3 border-danger"
    : "form-control col-4";
  const departmentStyle = departmentInputValid
    ? " form-control col-4 border border-3 border-danger"
    : "form-control col-4";
  const projectStyle = projectInputValid
    ? " form-control col-4 border border-3 border-danger"
    : "form-control col-4";

  const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  // let msg = "Email must not be empty";

  // if (email_idError.trim() !== "") {
  //   msg = email_idError;
  //   console.log(msg);
  // }

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
                      className={nameStyle}
                      id="name"
                      value={ename}
                      onChange={nameHandler}
                      onBlur={nameBlurHandler}
                      placeholder="Enter name"
                    />
                    {enameInputValid && (
                      <p
                        className="text-danger text-center font-weight-bold"
                        style={{ marginLeft: "-200px" }}
                      >
                        Name must not be empty
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={usernameStyle}
                      id="username"
                      value={username}
                      onChange={usernameHandler}
                      onBlur={usernameBlurHandler}
                      placeholder="Enter username"
                    />
                    {usernameInputValid && (
                      <p
                        className="text-danger text-center font-weight-bold"
                        style={{ marginLeft: "-200px" }}
                      >
                        Username must not be empty
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control col-4"
                      id="password"
                      value={password}
                      onChange={passwordHandler}
                      onBlur={passwordBlurHandler}
                      placeholder="Enter password"
                    />
                    {passwordInputValid && (
                      <p
                        className="text-danger text-center font-weight-bold"
                        style={{ marginLeft: "-200px" }}
                      >
                        Password must not be empty
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={email_idStyle}
                      id="email_id"
                      value={email_id}
                      onChange={emailHandler}
                      onBlur={emailBlurHandler}
                      placeholder="Enter Email Id"
                    />
                    {email_idInputValid && (
                      <p
                        className="text-danger text-center font-weight-bold"
                        style={{ marginLeft: "-200px" }}
                      >
                        Email must not be empty
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={phone_numberStyle}
                      id="phone_number"
                      value={phone_number}
                      onChange={phoneHandler}
                      onBlur={phoneBlurHandler}
                      placeholder="Enter Phone Number"
                    />
                    {phone_numberInputValid && (
                      <p
                        className="text-danger text-center font-weight-bold"
                        style={{ marginLeft: "-200px" }}
                      >
                        Phone Number must not be empty
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={locationStyle}
                      id="location"
                      value={location}
                      onChange={locationHandler}
                      onBlur={locationBlurHandler}
                      placeholder="Enter Location"
                    />
                    {locationInputValid && (
                      <p
                        className="text-danger text-center font-weight-bold"
                        style={{ marginLeft: "-200px" }}
                      >
                        Location must not be empty
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={esalaryStyle}
                      id="esalary"
                      value={esalary}
                      onChange={salaryHandler}
                      onBlur={salaryBlurHandler}
                      placeholder="Enter Salary"
                    />
                    {esalaryInputValid && (
                      <p
                        className="text-danger text-center font-weight-bold"
                        style={{ marginLeft: "-200px" }}
                      >
                        Salary must not be empty
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="Date"
                      className={dobStyle}
                      id="dob"
                      value={dob}
                      onChange={dobHandler}
                      onBlur={dobBlurHandler}
                      placeholder="Enter Date of Birth"
                    />
                    {dobInputValid && (
                      <p
                        className="text-danger text-center font-weight-bold"
                        style={{ marginLeft: "-200px" }}
                      >
                        Date of Birth must not be empty
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <select
                      className={departmentStyle}
                      id="department"
                      value={did}
                      onChange={(e) => changeDepartment(e.target.value)}
                      onBlur={DepartmentBlur}
                    >
                      <option value="0">Select</option>
                      <option value="11">Analyst</option>
                      <option value="12">Senior Analyst</option>
                      <option value="13">Managing</option>
                      <option value="14">HR</option>
                      <option value="15">Accounts and Finance</option>
                      <option value="16">Infrastructures</option>
                      <option value="17">Security</option>
                      <option value="18">Research and Development</option>
                      <option value="19">Sales and marketing</option>
                    </select>
                    {departmentInputValid && (
                      <p
                        className="text-danger text-center font-weight-bold"
                        style={{ marginLeft: "-200px" }}
                      >
                        Department must not be empty
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <select
                      className={projectStyle}
                      id="project"
                      value={pid}
                      onChange={(e) => changeProject(e.target.value)}
                      onBlur={changeProjectBlur}
                    >
                      <option value="0">Select</option>
                      <option value="11">SBI Software</option>
                      <option value="12">BOI Software</option>
                      <option value="13">PNB Software</option>
                      <option value="14">HDFC Software</option>
                      <option value="15">Aditya Birla Life Insurance</option>
                      <option value="16">Bajaj Life Insurance</option>
                      <option value="17">Kotak Mahindra Life Insurance</option>
                      <option value="18">Unilever</option>
                      <option value="19">Johnson and Johnson</option>
                      <option value="20">Bank Of Canada</option>
                      <option value="21">Teamlease</option>
                    </select>
                    {projectInputValid && (
                      <p
                        className="text-danger text-center font-weight-bold"
                        style={{ marginLeft: "-200px" }}
                      >
                        Project must not be empty
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={(e) => saveEmployee(e)}
                      className="btn btn-primary"
                    >
                      Save
                    </button>
                  </div>
                </form>
                <hr />
                <Link to="/employeesList">Back to List</Link>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>

    // <div
    //   className="container"
    //   style={{ backgroundColor: "white", width: "130%" }}
    // >
    //   <h3>{head}</h3>
    //   <hr />
    //   <form>
    //     <div className="form-group">
    //       <input
    //         type="text"
    //         className="form-control col-4"
    //         id="name"
    //         value={ename}
    //         onChange={(e) => setEname(e.target.value)}
    //         placeholder="Enter name"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <input
    //         type="text"
    //         className="form-control col-4"
    //         id="username"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //         placeholder="Enter username"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <input
    //         type="password"
    //         className="form-control col-4"
    //         id="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder="Enter password"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <input
    //         type="text"
    //         className="form-control col-4"
    //         id="email_id"
    //         value={email_id}
    //         onChange={(e) => setEmail_id(e.target.value)}
    //         placeholder="Enter Email Id"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <input
    //         type="text"
    //         className="form-control col-4"
    //         id="phone_number"
    //         value={phone_number}
    //         onChange={(e) => setPhone_number(e.target.value)}
    //         placeholder="Enter Phone Number"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <input
    //         type="text"
    //         className="form-control col-4"
    //         id="location"
    //         value={location}
    //         onChange={(e) => setLocation(e.target.value)}
    //         placeholder="Enter Location"
    //       />
    //     </div>

    //     <div className="form-group">
    //       <input
    //         type="text"
    //         className="form-control col-4"
    //         id="esalary"
    //         value={esalary}
    //         onChange={(e) => setEsalary(e.target.value)}
    //         placeholder="Enter Salary"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <input
    //         type="Date"
    //         className="form-control col-4"
    //         id="dob"
    //         value={dob}
    //         onChange={(e) => setDob(e.target.value)}
    //         placeholder="Enter Date of Birth"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <select
    //         className="form-control col-4"
    //         id="department"
    //         value={did}
    //         onChange={(e) => changeDepartment(e.target.value)}
    //       >
    //         <option value="0">Select</option>
    //         <option value="11">Analyst</option>
    //         <option value="12">Senior Analyst</option>
    //         <option value="13">Managing</option>
    //         <option value="14">HR</option>
    //         <option value="15">Accounts and Finance</option>
    //         <option value="16">Infrastructures</option>
    //         <option value="17">Security</option>
    //         <option value="18">Research and Development</option>
    //         <option value="19">Sales and marketing</option>
    //       </select>
    //     </div>
    //     <div className="form-group">
    //       <select
    //         className="form-control col-4"
    //         id="project"
    //         value={pid}
    //         onChange={(e) => changeProject(e.target.value)}
    //       >
    //         <option value="0">Select</option>
    //         <option value="11">SBI Software</option>
    //         <option value="12">BOI Software</option>
    //         <option value="13">PNB Software</option>
    //         <option value="14">HDFC Software</option>
    //         <option value="15">Aditya Birla Life Insurance</option>
    //         <option value="16">Bajaj Life Insurance</option>
    //         <option value="17">Kotak Mahindra Life Insurance</option>
    //         <option value="18">Unilever</option>
    //         <option value="19">Johnson and Johnson</option>
    //         <option value="20">Bank Of Canada</option>
    //         <option value="21">Teamlease</option>
    //       </select>
    //     </div>

    //     <div>
    //       <button onClick={(e) => saveEmployee(e)} className="btn btn-primary">
    //         Save
    //       </button>
    //     </div>
    //   </form>
    //   <hr />
    //   <Link to="/employeesList">Back to List</Link>
    //   <br></br>
    //   <br></br>
    // </div>
  );
};

export default AddEmployee;
