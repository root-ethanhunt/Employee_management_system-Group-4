import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import DepartmentList from "./components/DepartmentList";
import ProjectList from "./components/ProjectList";
import MainPage from "./components/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import AddEmployee from "./components/AddEmployee";
import NotFound from "./components/NotFound";
import AddDepartment from "./components/AddDepartment";
import AddProject from "./components/AddProject";
import Header from "./Header";
import Homepage from "./Homepage";
import EmpLogin from "./EmpLogin";
import AdminLogin from "./AdminLogin";
import EmployeeInfo from "./components/EmployeeInfo";
import SingleEmployeeUpdate from "./components/SingleEmployeeUpdate";
import AllEmpFindByDept from "./components/AllEmpFindByDept";
import AllEmpFindByProject from "./components/AllEmpFindByProject";
import ManagerInfo from "./components/ManagerInfo";
import ChangePassword from "./components/ChangePassword";

import About from "./About";
import AdminDashboard from "./AdminDashboard";
import EmpDashboard from "./components/EmployeeInfo";

import Sulu from "./AboutUs/Sulu";
import Rupam from "./AboutUs/Rupam";
import Riddhi from "./AboutUs/Riddhi";
import Panda from "./AboutUs/Panda";
import Sripriya from "./AboutUs/Sripriya";
import Sanku from "./AboutUs/Sanku";
import Saurabh from "./AboutUs/Saurabh";
import Vikash from "./AboutUs/Vikash";
import FAQ from "./FAQ";
// import Sulu from "./Sulu";
// import Rupam from "./Rupam";
// import Riddhi from "./Riddhi";
// import Panda from "./Panda";
// import Sripriya from "./Sripriya";
// import Sanku from "./Sanku";
// import Saurabh from "./Saurabh";
// import Vikash from "./Vikash";

import CPAdmin from "./CPAdmin";
import Admin from "./Admin";
import FindEmployee from "./components/FindEmployee";
import img1 from "./images/Walk.gif";
import SendMsgByAdmin from "./components/SendMsgByAdmin";
import RcvMsgByAdmin from "./components/RcvMsgFromAdmin";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/employeesList" component={EmployeeList} />
            <Route path="/addEmployee" component={AddEmployee} />
            <Route path="/allEmployee/edit/:eid" component={AddEmployee} />
            <Route path="/adminHomepage" component={AdminDashboard} />
            <Route path="/projectList" component={ProjectList} />
            <Route path="/addProject" component={AddProject} />
            <Route path="/allProject/edit/:projectId" component={AddProject} />

            <Route path="/employeeInfo/:eid" component={EmployeeInfo} />

            <Route
              path="/AllEmpFindByDept/:deptId"
              component={AllEmpFindByDept}
            />

            <Route path="/admin1" component={Admin} />

            <Route
              path="/AllEmpFindByProject/:projectId"
              component={AllEmpFindByProject}
            />

            <Route
              path="/ChangePassword/:password/:eid"
              component={ChangePassword}
            />

            <Route path="/ManagerInfo/:eid" component={ManagerInfo} />

            <Route path="/FindEmp/:eid" component={FindEmployee} />

            <Route
              path="/singleEmployeeUpdate/edit/:eid"
              component={SingleEmployeeUpdate}
            ></Route>

            <Route path="/addDepartment" component={AddDepartment} />
            <Route
              path="/allDepartment/edit/:deptId"
              component={AddDepartment}
            />
            <Route path="/departmentList" component={DepartmentList} />

            {/* Auth Routes */}
            <Route path="/admin/login" component={AdminLogin} />
            <Route path="/employee/login" component={EmpLogin} />

            <Route path="/admin/dashboard" component={AdminDashboard} />
            <Route path="/employee/dashboard" component={EmpDashboard} />
            <Route path="/aboutus" component={About} />

            <Route exact path="/faq" component={FAQ} />

            <Route path="/about/sulu" component={Sulu} />
            <Route path="/about/rupam" component={Rupam} />
            <Route path="/about/riddhi" component={Riddhi} />
            <Route path="/about/panda" component={Panda} />
            <Route path="/about/sripriya" component={Sripriya} />
            <Route path="/about/sanku" component={Sanku} />
            <Route path="/about/saurabh" component={Saurabh} />
            <Route path="/about/vikash" component={Vikash} />

            <Route path="/sendMsgByAdmin" component={SendMsgByAdmin} />

            <Route path="/rcvMsgByAdmin" component={RcvMsgByAdmin} />

            <Route path="/admin/password" component={CPAdmin} />

            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
        {/* footer */}

        <div
          className="navbar navbar-expand-sm  navbar-dark fixed-bottom "
          style={{
            backgroundColor: "#bdb76b",
            textAlign: "center",
            maxHeight: "40px",
          }}
        >
          <nav className="navbar">
            <p
              style={{
                textAlign: "center",
                paddingLeft: "450px",
                paddingTop: "15px",
              }}
            >
              &#169;2022,All Rights Reserved to Team-4 &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; @Made by Group4
            </p>
          </nav>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
