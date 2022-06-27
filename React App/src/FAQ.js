import React, { useEffect } from "react";
import "./FAQ.css";
import Header from "./Header";
const FAQ = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle("show");
        icon.classList.toggle("rotate");
      });
    });
  }, []);

  return (
    <div>
      <Header />

      <section>
        <h1 className="title">FAQ's</h1>

        <div className="questions-container">
          <div className="question" style={{ paddingRight: "200px" }}>
            <button>
              <span style={{ paddingLeft: "100px" }}>What's our motto?</span>
              <i className="fas fa-chevron-down d-arrow"></i>
            </button>
            <p style={{ paddingLeft: "180px" }}>
              To provide with the best resources along with our services
              rendering extreme satisfaction
            </p>
          </div>

          <div className="question" style={{ paddingRight: "200px" }}>
            <button>
              <span style={{ paddingLeft: "80px" }}>
                Our biggest achievement?
              </span>
              <i className="fas fa-chevron-down d-arrow"></i>
            </button>
            <p style={{ paddingLeft: "180px" }}>
              The company's success on account of employee cooperation and
              dedication
            </p>
          </div>

          <div className="question" style={{ paddingRight: "200px" }}>
            <button>
              <span>How do you develop an employee management system?</span>
              <i className="fas fa-chevron-down d-arrow"></i>
            </button>
            <p style={{ paddingLeft: "180px" }}>
              Hire the employees with the right skill set for your tasks. Easily
              monitor their activities to ensure things are moving well.
              Effectively communicate with them to ensure that they understand
              project demands. Congratulate and encourage them on the good work
              they've done to motivate them further.
            </p>
          </div>

          <div className="question" style={{ paddingRight: "200px" }}>
            <button>
              <span>What are the features of employee management system?</span>
              <i className="fas fa-chevron-down d-arrow"></i>
            </button>
            <p style={{ paddingLeft: "180px" }}>
              {" "}
              1 Time and Attendance Management. 2 Mobile Workforce Management. 3
              Absence and Leave Management. 4 Employee Database Management. 5
              Online Backup Facility.{" "}
            </p>
          </div>
        </div>
      </section>
      <div style={{ height: "300px" }}></div>
    </div>
  );
};

export default FAQ;
