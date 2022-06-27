import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="container">
      <h2>Welcome Admin</h2>
      <br></br>
      <Link to="/employeesList" className="btn btn-primary mb-2">
        Employee Table
      </Link>
      <br></br>
      <Link to="/departmentList" className="btn btn-primary mb-2">
        Department Table
      </Link>
      <br></br>
      <Link to="/projectList" className="btn btn-primary mb-2">
        Project Table
      </Link>
    </div>
  );
}
