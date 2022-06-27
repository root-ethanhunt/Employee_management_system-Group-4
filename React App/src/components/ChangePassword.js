import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import employeeService from "../services/employee.service";
import "./CPEmp.css";
import Header from "../Header";
import img1 from "../images/password1.png";

const ChangePassword = () => {
  const { password } = useParams();
  const { eid } = useParams();
  const [newpassword, setNewPassword] = useState("");
  const [oldpassword, setOldPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const history = useHistory();

  const [errAlert1, setErrAlert1] = useState(false);
  const [errAlert2, setErrAlert2] = useState(false);
  const [errAlert3, setErrAlert3] = useState(false);

  const updatePassword = () => {
    setErrAlert1(false);
    setErrAlert2(false);
    setErrAlert3(false);
    if (password != oldpassword) {
      setErrAlert1(true);

      // alert("Incorrect old password");
    } else if (newpassword != repassword) {
      setErrAlert2(true);
      // alert("Please give same password on retype password");
    } else {
      employeeService
        .updatePassword(newpassword, eid)
        .then(() => {
          console.log("Password Update Succefully");
          console.log(
            "oldpassword: " +
              oldpassword +
              " newpassword: " +
              newpassword +
              " re-pass: " +
              repassword
          );
          history.goBack();
        })
        .catch(() => {
          setErrAlert3(true);
          // console.log("password not changed");
        });
    }
  };

  useEffect(() => {});

  let errAlert = false;
  let addAlert = "";
  if (errAlert1 === true) {
    addAlert = "Incorrect old password";
    errAlert = true;
  } else if (errAlert2 === true) {
    addAlert = "Please give same password on retype password";
    errAlert = true;
  } else if (errAlert3 === true) {
    addAlert = "password not changed";
    errAlert = true;
  } else {
    errAlert = false;
  }

  return (
    <div>
      <div style={{ paddingTop: "30px" }}>
        <div id="d1" style={{ border: "solid", height: "100%" }}>
          {errAlert && (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>{addAlert}</strong>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => {
                  setErrAlert1(false);
                  setErrAlert2(false);
                  setErrAlert3(false);
                }}
              ></button>
            </div>
          )}
          <img src={img1} className="img" path="/emp/password" />
          <p className="p"> Password </p>
          <input
            className="input"
            type="text"
            value={oldpassword}
            onChange={(p) => setOldPassword(p.target.value)}
            placeholder="Old Password"
            required
          />
          <br />
          <br />
          <input
            className="input"
            type="password"
            value={newpassword}
            onChange={(p) => setNewPassword(p.target.value)}
            placeholder="New Password"
            required
          />
          <br />
          <br />
          <input
            className="input2"
            type="text"
            value={repassword}
            onChange={(p) => setRePassword(p.target.value)}
            placeholder="Retype New Password"
            required
          />
          <br />
          <br />
          <button
            onClick={() => updatePassword()}
            className="input1"
            style={{ backgroundColor: "#4db8ff" }}
          >
            Save
          </button>
          <br />
          <br />
          {/*  <p1>Remeber me </p1>   */}
          {/* &nbsp; <a href="#" className="a text-center">Forget Password?</a> */}
          {/*  <br><br><br>
   <p1><center>not a member?</center></p1>
   <button>Create account</button>  */}
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
