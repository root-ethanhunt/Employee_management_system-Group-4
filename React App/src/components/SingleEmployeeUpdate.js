import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams, NavLink } from "react-router-dom";
import employeeService from "../services/employee.service";
import img1 from "../images/ED2.jpeg";

const SingleEmployeeUpdate = () => {
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
  const [departmentTouched, setDepartmentTouched] = useState(false);
  const [projectTouched, setProjectTouched] = useState(false);
  // const [deptIdValid, setDeptIdValid] = useState(true);
  // const [projectIdValid, setProjectIdValid] = useState(true);

  //form handler
  const nameHandler = (e) => {
    setEname(e.target.value);

    if (e.target.value.trim() !== "") {
      setEnameValid(true);
    }
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);

    if (e.target.value.trim() !== "") {
      setUsernameValid(true);
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);

    if (e.target.value.trim() !== "") {
      setPasswordValid(true);
    }
  };

  const emailHandler = (e) => {
    setEmail_id(e.target.value);

    if (e.target.value.trim() !== "") {
      setEmail_idValid(true);
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

    if (e.target.value.trim() != "") {
      setEsalaryValid(true);
    }
  };

  const dobHandler = (e) => {
    setDob(e.target.value);

    if (e.target.value.trim() !== "") {
      setDobValid(true);
    }
  };

  // const changeProject = (id) => {
  //   setProject({ projectId: id });
  //   setPid(id);

  //   if (id.trim() !== "Select") {
  //     setProjectValid(true);
  //   }
  // };

  // const changeDepartment = (id) => {
  //   setDepartment({ deptId: id });
  //   setDid(id);

  //   if (id.trim() !== "Select") {
  //     setDepartmentValid(true);
  //   }
  // };

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

    if (username.trim() === "") {
      usernameTouched(true);
      setUsernameValid(false);
    }
  };

  const passwordBlurHandler = (e) => {
    // passwordTouched(true);
    if (password.trim() === "") {
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

  console.log(esalary.toString().length);
  const salaryBlurHandler = (e) => {
    // setEsalaryTouched(true);

    if (esalary.trim() == "") {
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

    if (project.trim() === "Select") {
      setProjectTouched(true);
      setProjectValid(false);
    }
  };

  const DepartmentBlur = (e) => {
    // setDepartmentTouched(true);

    if (department.trim() === "Select") {
      setDepartmentTouched(true);
      setDepartmentValid(false);
    }
  };

  //employee save
  const employeeInfo = () => {
    history.push(`/employeeInfo/${eid}`);
  };
  const saveEmployee = (e) => {
    e.preventDefault();

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
    setDepartmentTouched(true);
    setProjectTouched(true);

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

    console.log(esalary.toString().length);
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

    // if (department.trim() === "") {
    //   setDepartmentValid(false);
    //   return;
    // }
    // setDepartmentValid(true);

    // if (project.trim() === "") {
    //   setProjectValid(false);
    //   return;
    // }
    // setProjectValid(true);

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
      console.log(eid + " Employee Id");
      employeeService
        .update(employee)
        .then((response) => {
          console.log("It's Panda");
          console.log(employee);
          console.log("Employee data updated successfully", response.data);
          history.push(`/employeeInfo/${eid}`);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (eid) {
      console.log(eid);
      employeeService
        .get(eid)
        .then((employee) => {
          console.log("Its Samrat" + employee);
          setEname(employee.data.ename);
          setUsername(employee.data.username);
          setPassword(employee.data.password);
          setEmail_id(employee.data.email_id);
          setPhone_number(employee.data.phone_number);
          setLocation(employee.data.location);
          setEsalary(employee.data.esalary);
          setDob(employee.data.dob);
          setDepartment({ deptId: employee.data.department.deptId });
          setProject({ projectId: employee.data.project.projectId });
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
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
  const departmentInputValid = !departmentValid && departmentTouched;
  const projectInputValid = !projectValid && projectTouched;

  const nameStyle = enameInputValid
    ? " form-control col-8 border border-3 border-danger"
    : "";

  const usernameStyle = usernameValid
    ? " form-control col-8 border border-3 border-danger"
    : "";
  const passwordStyle = passwordValid
    ? " form-control col-8 border border-3 border-danger"
    : "";
  const email_idStyle = email_idInputValid
    ? " form-control col-8 border border-3 border-danger"
    : "";
  const phone_numberStyle = phone_numberInputValid
    ? " form-control col-8 border border-3 border-danger"
    : "";
  const locationStyle = locationInputValid
    ? " form-control col-8 border border-3 border-danger"
    : "";
  const esalaryStyle = esalaryInputValid
    ? " form-control col-8 border border-3 border-danger"
    : "";
  const dobStyle = dobInputValid
    ? " form-control col-8 border border-3 border-danger"
    : "";
  const departmentStyle = departmentInputValid
    ? " form-control col-8 border border-3 border-danger"
    : "";
  const projectStyle = projectInputValid
    ? " form-control col-8 border border-3 border-danger"
    : "";

  return (
    <div class="w3-light-grey">
      {/* <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: "4" }}>
        <button
          className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
          //onClick="w3_open();"
        >
          <i className="fa fa-bars"></i>Menu
        </button>
        <span className="w3-bar-item w3-left mt-2"> */}
      {/* <img src={img2} style={{width:"170px", hight:"40px"}} /> */}
      {/* EMS
        </span> */}
      {/* <span className="w3-bar-item w3-left mt-2">
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
            to={`/ChangePassword/${password}/${eid}`}
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
              <h5>Update Your Details</h5>
              <table className="w3-table-all w3-striped w3-hoverable w3-white">
                <div
                  className="container"
                  style={{
                    backgroundColor: "white",

                    paddingBottom: "60px",
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
                        <p className="text-danger text-center font-weight-bold">
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
                        <p className="text-danger text-center font-weight-bold">
                          Username must not be empty
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
                        <p className="text-danger text-center font-weight-bold">
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
                        <p className="text-danger text-center font-weight-bold">
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
                        <p className="text-danger text-center font-weight-bold">
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
                        <p className="text-danger text-center font-weight-bold">
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
                        <p className="text-danger text-center font-weight-bold">
                          Date of Birth must not be empty
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
                  <button
                    onClick={() => employeeInfo()}
                    className="btn btn-primary"
                  >
                    {" "}
                    Back to your profile
                  </button>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEmployeeUpdate;
