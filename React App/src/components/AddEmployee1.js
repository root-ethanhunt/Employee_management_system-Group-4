import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import employeeService from "../services/employee.service";

const AddEmployee = () => {
  const [ename, setEname] = useState("");

  const [designation, setDesignation] = useState("");
  const [sal, setSal] = useState("");
  const [dob, setDob] = useState("");
  const history = useHistory();
  const { eid } = useParams();

  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = { ename, sal, dob, designation, eid };

    if (eid) {
      //update
      console.log(eid + " Employee Id");
      employeeService
        .update(employee)
        .then((response) => {
          console.log("Employee data updated successfully", response.data);
          history.push("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      employeeService
        .create(employee)
        .then((response) => {
          console.log("Empoyee added successfully", response.data);
          history.push("/");
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
          setEname(employee.data.ename);
          setSal(employee.data.sal);
          setDob(employee.data.dob);
          setDesignation(employee.data.designation);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <h3>Add Employeee</h3>
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="name"
            value={ename}
            onChange={(e) => setEname(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Enter Designation"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="sal"
            value={sal}
            onChange={(e) => setSal(e.target.value)}
            placeholder="Enter Salary"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="Enter Date of Birth"
          />
        </div>
        <div>
          <button onClick={(e) => saveEmployee(e)} className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
      <hr />
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default AddEmployee;
