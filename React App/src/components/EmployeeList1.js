import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import employeeService from "../services/employee.service";

const EmployeeList = () => {
  const [allEmployee, setEmployees] = useState([]);

  const init = () => {
    employeeService
      .getAll()
      .then((response) => {
        console.log("Printing employees data", response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (eid) => {
    console.log("Printing id", eid);
    employeeService
      .remove(eid)
      .then((response) => {
        console.log("employee deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container">
      <h3>List of Employees</h3>
      <hr />
      <div>
        <Link to="/add" className="btn btn-primary mb-2">
          Add Employee
        </Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th> Name</th>
              <th> Designation</th>
              <th> Salary</th>
              <th> D-O-B</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {allEmployee.map((employee) => (
              <tr key={employee.eid}>
                <td>{employee.ename}</td>
                <td>{employee.designation}</td>
                <td>{employee.sal}</td>
                <td>{employee.dob}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/allEmployee/edit/${employee.eid}`}
                  >
                    Update
                  </Link>

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(employee.eid);
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
    </div>
  );
};

export default EmployeeList;
