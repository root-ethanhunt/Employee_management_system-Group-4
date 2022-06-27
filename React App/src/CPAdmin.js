import React from "react";
import "./CPAdmin.css";
import Header from "./Header";
import img1 from "./images/password.png";

const CPEmp = () => {
  return (
    <div>
      <div>
        <Header />
        <div id="d1">
          <img src={img1} className="img" path="/emp/password" />
          <p className="p"> Password </p>
          <input
            className="input"
            type="text"
            placeholder="Old Password"
            required
          />
          <br />
          <br />
          <input
            className="input"
            type="password"
            placeholder="New Password"
            required
          />
          <br />
          <br />
          <input
            className="input"
            type="password"
            placeholder="Retype New Password"
            required
          />
          <br />
          <br />
          <input className="input1" type="submit" value="Login Now" />
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

export default CPEmp;
