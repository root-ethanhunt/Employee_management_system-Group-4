import React from "react";
import { Link, NavLink } from "react-router-dom";
import img1 from "./images/RUPAM_HALDER.jpeg";
import img2 from "./images/facebook.png";
import img3 from "./images/linkedin.png";
import img4 from "./images/instagram.png";
import img6 from "./images/hrc.png";
import img7 from "./images/capge.png";
import "./Rupam.css";

const Rupam = () => {
  return (
    <div>
      <div id="Header">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <div className="container">
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#Navbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav ml-auto">
              <a href="#" className="navbar-brand">
                <h3>Portfolio</h3>
              </a>
              <li className="nav-item active mt-1">
                <NavLink className="nav-link fw-bold" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item active mt-1">
                <NavLink className="nav-link fw-bold" to="/aboutus">
                  About Us
                </NavLink>
              </li>
            </ul>
            {/* <div className="collapse navbar-collapse" id="Navbar"> */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#aboutup" className="nav-link fw-bold">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a href="#skillup" className="nav-link fw-bold">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#experienceup" className="nav-link fw-bold">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://drive.google.com/file/d/1yLIZtt5cWCE1GvRrL6aIsAnWr-djGAVN/view?usp=drivesdk"
                  target="blank"
                  className="nav-link fw-bold"
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a href="#Contact" className="nav-link fw-bold">
                  Contact
                </a>
              </li>
              {/* <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li> */}
            </ul>
          </div>
          {/* </div> */}
        </nav>
      </div>
      <div id="bg-img"></div>
      <div id="About">
        <div className="container">
          <div className="row">
            <div className="col">
              <div id="AboutData">
                <div className="card bg-white">
                  <div className="card-title my-5">
                    <div className="media d-flex">
                      <img
                        src={img1}
                        width="280"
                        height="250"
                        className="img-fluid rounded-top mx-5 d-none d-lg-block mt-5"
                        id="profile"
                      />
                      <div
                        className="media-body"
                        style={{ marginLeft: "60px", marginTop: "30px" }}
                      >
                        <h3 className="display-4 ml-5">I'm Rupam Halder</h3>
                        <p className="text-muted ml-5">
                          Programmer, Photographer and Footballer
                        </p>
                        <table className="table table-responsive ml-5">
                          <tbody>
                            <tr>
                              <td className="text-muted">Employee Id</td>
                              <td>:</td>
                              <td>1250734</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Age</td>
                              <td>:</td>
                              <td>22 Years Old</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Email</td>
                              <td>:</td>
                              <td>
                                <a
                                  href="mailto:rupamhalder2017@gmail.com?"
                                  target="blank"
                                >
                                  rupamhalder2017@gmail.com
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-muted">Phone</td>
                              <td>:</td>
                              <td>+91 6290749737</td>
                            </tr>
                            <tr>
                              <td className="text-muted">
                                Project Contribution
                              </td>
                              <td>:</td>
                              <td>Developed full front end part using react</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-danger" id="aboutup">
                    <a
                      href="https://www.facebook.com/rupam.halder.56232938"
                      target="blank"
                    >
                      <img src={img2} width="24" height="24" className="mx-3" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rupam-halder-a841591b7"
                      target="blank"
                    >
                      <img src={img3} width="24" height="24" className="mx-3" />
                    </a>
                    <a
                      href="https://instagram.com/it_s_rupam?igshid=YmMyMTA2M2Y="
                      target="blank"
                    >
                      <img src={img4} width="24" height="24" className="mx-3" />
                    </a>
                    {/* <a href="#"><img src="twitter.png" width="24" height="24" className="mx-3" /></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <span className="bg-danger text-white">About Me</span>
              <hr className="bg-danger" />
              <p className="lead text-justify" id="skillup">
                An aspiring, dedicated, and committed Computer Science
                Engineering Student, want to become associated with a company
                where I can succeed in an environment of growth and excellence
                to meet personal and organizational goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="Skills" className="mt-5">
        <div className="container">
          <span className="bg-primary text-white">MySkills</span>
          <hr className="bg-primary" />
          <h2 className="ml-3 my-3 fw-bold">Programming Languages</h2>
          <div className="row">
            <div className="col">
              <div className="card bg-white p-3">
                <h5 className="ml-3 my-3">C Programming</h5>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}>
                    95%
                  </div>
                </div>
                <h5 className="ml-3 my-3">C++ Programming</h5>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}>
                    90%
                  </div>
                </div>
                <h5 className="ml-3 my-3">Python</h5>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}>
                    85%
                  </div>
                </div>
                <h5 className="ml-3 my-3">Java Programming</h5>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "100%" }}>
                    100%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="ml-3 my-3 fw-bold">Web Technology</h2>
          <div className="row">
            <div className="col">
              <div className="card bg-white p-3">
                <h5 className="ml-3 my-3">HTML5 Language</h5>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}>
                    95%
                  </div>
                </div>
                <h5 className="ml-3 my-3">CSS3 Language</h5>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}>
                    95%
                  </div>
                </div>
                <h5 className="ml-3 my-3">JavaScript Language</h5>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}>
                    80%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="ml-3 my-3 fw-bold">Tools</h2>
          <div className="row">
            <div className="col">
              <div className="card bg-white p-3">
                <h5 className="ml-3 my-3">MS-Word</h5>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "100%" }}>
                    100%
                  </div>
                </div>
                <h5 className="ml-3 my-3">MS- Power Point</h5>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}>
                    90%
                  </div>
                </div>
                <h5 className="ml-3 my-3" id="experienceup">
                  {" "}
                  MS-Excel
                </h5>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "100%" }}>
                    100%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Experience">
        <div className="container mt-5">
          <span className="bg-success text-white">Experience</span>
          <hr className="bg-success" />
          <div className="row">
            <div className="col-lg-6">
              <div className="card bg-white">
                <img
                  src={img6}
                  width="190"
                  height="70"
                  className="img-fluid m-auto py-3"
                />
                <h3 className="text-center text-success fw-bold">
                  Former intern at HighRadius
                </h3>
                <p className="lead text-justify ml-4 mr-4 p-3" id="exlogo1">
                  One year Internship Experience at Highradius, worked with
                  product team of Babba, Domain AutoUI, Experienced in
                  Automation Testing.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card bg-white">
                <img
                  src={img7}
                  width="200"
                  height="80"
                  className="img-fluid m-auto py-3"
                />
                <h3 className="text-center text-success mt-3">
                  Trainee at Capgemini
                </h3>
                <p className="lead text-justify ml-4 mr-4 p-3" id="exlogo2">
                  Pursuing a Three month training in Capgemini, currently
                  working in React Domain.Done with spring MVC with front end
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Contact">
        <div className="container mt-5">
          <span className="bg-dark text-white">Conatct Me</span>
          <hr className="bg-dark" />
          <div className="row">
            <div className="col">
              <div className="card bg-white">
                <div className="card-header">
                  <h4 className="my-4">Contact me on Below</h4>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="User Name"
                      className="form-control "
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control "
                    />
                  </div>
                  <div className="form-group my-3">
                    <textarea
                      className="form-control"
                      placeholder="Write Something on Here........."
                    ></textarea>
                  </div>
                  <div className="form-group my-3">
                    <button className="btn btn-success test-white">
                      Submit Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container-fluid bg-success">
        <div class="row">
            <div class="col">
                <div class="container">
                    <p class="text-white pt-3 text-center">??Made By Group4</p>
                </div>
            </div>
        </div>
    </div> */}
    </div>
  );
};

export default Rupam;
