import React from "react";
import img1 from "./images/Admin.jpeg";
// import img from './images/Employee.jpeg';
import img2 from "./images/employee1.png";
import Header from "./Header";
import img5 from "./images/Walk.gif";

import LinkCard from "./LinkCard";

const Homepage = () => {
  return (
    <>
      <div
        className="mt-2 px-5 pb-4 pt-1 bg-primary text-white rounded"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "white",
        }}
      >
        <h1
          className="display-4 text-center pb-3"
          style={{
            paddingTop: "40px",
            paddingBottom: "30px",
          }}
        >
          Employee Management System
        </h1>
        An employee management system is a software, that helps your employees
        to give their best efforts every day to achieve the goals of your
        organization. It guides and manages employees efforts in the right
        direction. It also securely stores and manages personal and other
        work-related details for your employees.
      </div>
      <div
        className="home-page"
        // style={{
        //   backgroundColor: "#ededed",
        //   height: "510px",
        // }}
      >
        <p className="display-6 text-center text-primary my-2 ">
          Explore sections
        </p>
        <div className="d-flex justify-content-center">
          <div className="row">
            <LinkCard
              imgsrc={img1}
              path="/admin/login"
              title="Admin"
              para="Admin section"
            />
            <LinkCard
              imgsrc={img2}
              path="/employee/login"
              title="Employee"
              para="Employee section"
            />
            {/* <LinkCard imgsrc={img3} path="/supplier/login" title="Supplier" para="Explore Supplier section" /> */}
          </div>
        </div>
        <marquee direction="right">
          <div>
            <img
              src={img5}
              style={{ width: "180px", height: "150px", paddingTop: "10px" }}
            />
          </div>
        </marquee>
      </div>
    </>
  );
};

export default Homepage;
