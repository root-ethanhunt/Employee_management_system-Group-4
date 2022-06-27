import React from "react";
import "./emplogin.css";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import img1 from "./images/employee.png";
import employeeService from "./services/employee.service";
import img5 from "./images/Walk.gif";

const EmpLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [errAlert, setErrAlert] = useState(false);

  //handler
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

  // blur handler
  const usernameBlurHandler = (e) => {
    if (username.trim() == "") {
      setUsernameTouched(true);
      setUsernameValid(false);
      return;
    }
  };

  const passwordBlurHandler = (e) => {
    if (password.trim() == "") {
      setPasswordTouched(true);
      setPasswordValid(false);
      return;
    }
  };

  const saveEmployee = (e) => {
    setErrAlert(false);
    setUsernameTouched(true);
    setPasswordTouched(true);

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
    employeeService
      .login(username, password)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.ename);
        history.push(`/employeeInfo/${response.data.eid}`);
      })
      .catch((error) => {
        setErrAlert(true);

        // alert("Wrong UserName or Password");
      });
    console.log(username, password);
  };

  const addAlert = "Wrong UserName or Password";
  const usernameInputValid = !usernameValid && usernameTouched;
  const passwordInputValid = !passwordValid && passwordTouched;

  const usernameStyle = usernameInputValid
    ? " form-control col-8 border border-3 border-danger"
    : "";
  const passwordStyle = passwordInputValid
    ? " form-control col-8 border border-3 border-danger"
    : "";

  const sty = ``;
  return (
    <div style={{ paddingTop: "30px" }}>
      <div
        id="d1"
        style={{ paddingTop: "50px", border: "solid", height: "100%" }}
      >
        {errAlert && (
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>{addAlert}</strong>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                setErrAlert(false);
              }}
            ></button>
          </div>
        )}
        <img src={img1} className="img" path="/admin/login" />
        <p className="p7">EMPLOYEE LOGIN</p>
        <input
          className={usernameStyle}
          type="text"
          id="username"
          value={username}
          // onChange={(e) => setUsername(e.target.value)}
          onChange={usernameHandler}
          onBlur={usernameBlurHandler}
          placeholder="USERNAME"
          required
        />
        {usernameInputValid && (
          <p className="text-danger text-center font-weight-bold">
            Username must not be empty
          </p>
        )}
        <br />
        <br />
        <input
          className={passwordStyle}
          type="password"
          id="password"
          value={password}
          // onChange={(e) => setPassword(e.target.value)}
          onChange={passwordHandler}
          onBlur={passwordBlurHandler}
          placeholder="PASSWORD"
          required
        />
        {passwordInputValid && (
          <p className="text-danger text-center font-weight-bold">
            Password must not be empty
          </p>
        )}
        <br />
        <br />
        <br />
        <input
          type="submit"
          onClick={(e) => saveEmployee(e)}
          value="Login Now"
        />
        <br />
        <br />
        {/*  <p1>Remeber me </p1> */}
        <a href="#" className="a">
          Forget Password?
        </a>
        {/*  <br><br><br>
   <p1><center>not a member?</center></p1>
   <button>Create account</button>  */}
      </div>
      {/* <marquee direction="right">
        <div>
          <img
            src={img5}
            style={{ width: "140px", height: "120px", paddingBottom: "10px" }}
          />
        </div>
      </marquee> */}
    </div>
  );
};

export default EmpLogin;
