import React from "react";
import "./about.css";
import img1 from "./images/RIDDHIMAN_PATRA.jpeg";
import img2 from "./images/RUPAM_HALDER.jpeg";
import img3 from "./images/SANKU_SAHA.jpeg";
import img4 from "./images/SAURABH_KUMAR.jpg";
import img5 from "./images/SUBHABRATA_PANDA.jpeg";
import img6 from "./images/SRIPRIYA_GHOSHAL.jpeg";
import img7 from "./images/SULAGNA_DEB.jpeg";
import img8 from "./images/VIKASH_KUMAR.jpeg";
import Header from "./Header";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      style={{
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      {/* <h1 className=" text-center fw-bold">About us</h1> */}

      <h1
        id="Team"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        Team Members
      </h1>

      <div className="message">
        <div className="container">
          <h2 className="text-center text-bg-opacity-10 mt-2 mb-2">
            For trainer, by trainee
          </h2>
          <div className="text-capitalize text-center">
            <p>
              We’re a small, tight-knit team focused on making our project
              user-friendly. We worked hard to build a project that implements
              everything a project needs.
              <br /> Thank you for your invaluable training. We really enjoyed
              it and appreciate that you made it fun! We feel ready to deal with
              an unpleasant problem or issues. Thank you for your wisdom,
              experience, and friendly presentation.
            </p>
          </div>
        </div>
      </div>

      <section>
        {/* <h1 id="Team">Team Members</h1> */}
        <div id="members">
          <div className="box">
            <img
              src={img1}
              className="img1 rounded mx-auto d-block"
              alt="RIDDHIMAN PATRA"
            />
            {/* <img id="image" src="RIDDHIMAN_PATRA.jpeg" alt="RIDDHIMAN PATRA" /> */}
            <Link to="/about/riddhi">
              <h3 className="h3">RIDDHIMAN PATRA</h3>
            </Link>
            <p className="text-center fw-bold">Serial No. - 32</p>
          </div>

          <div className="box">
            <img
              src={img2}
              className="img1 rounded mx-auto d-block"
              alt="RUPAM HALDER"
            />
            {/* <img id="image" src="RUPAM_HALDER_Copy.jpeg" alt="RUPAM HALDER" /> */}
            <Link to="/about/rupam">
              <h3 className="h3">RUPAM HALDER</h3>
            </Link>
            <p className="text-center fw-bold">Serial No. - 33</p>
          </div>

          <div className="box">
            <img
              src={img3}
              className="img1 rounded mx-auto d-block"
              alt="SANKU SAHA"
            />
            {/* <img id="image" src="SANKU_SAHA.jpeg" alt="SANKU SAHA" /> */}
            <Link to="/about/sanku">
              <h3 className="h3">SANKU SAHA</h3>
            </Link>
            <p className="text-center fw-bold">Serial No. - 34</p>
          </div>

          <div className="box">
            <img
              src={img4}
              className="img1 rounded mx-auto d-block"
              alt="SAURABH KUMAR"
            />
            {/* <img id="image" src="SAURABH_KUMAR_Copy.jpg" alt="SAURABH KUMAR" /> */}
            <Link to="/about/saurabh">
              <h3 className="h3">SAURABH KUMAR</h3>
            </Link>
            <p className="text-center fw-bold">Serial No. - 35</p>
          </div>
        </div>

        <div id="members">
          <div className="box">
            <img
              src={img5}
              className="img1 rounded mx-auto d-block"
              alt="SUBHABRATA PANDA"
            />
            {/* <img id="image" src="SUBHABRATA_PANDA.jpeg" alt="SUBHABRATA PANDA" /> */}
            <Link to="/about/panda">
              <h3 className="h3">SUBHABRATA PANDA (Leader)</h3>
            </Link>
            <p className="text-center fw-bold">Serial No. - 37</p>
          </div>

          <div className="box">
            <img
              src={img6}
              className="img1 rounded mx-auto d-block"
              alt="SRIPRIYA GHOSHAL"
            />
            {/* <img id="image" src="SRIPRIYA_GHOSHAL.jpeg" alt="SRIPRIYA GHOSHAL" /> */}
            <Link to="/about/sripriya">
              <h3 className="h3">SRIPRIYA GHOSHAL</h3>
            </Link>
            <p className="text-center fw-bold">Serial No. - 58</p>
          </div>

          <div className="box">
            <img
              src={img7}
              className="img1 rounded mx-auto d-block"
              alt="SULAGNA DEB"
            />
            {/* <img id="image" src="SULAGNA_DEB.jpeg" alt="SULAGNA DEB" /> */}
            <Link to="/about/sulu">
              <h3 className="h3">SULAGNA DEB</h3>
            </Link>
            <p className="text-center fw-bold">Serial No. - 60</p>
          </div>

          <div className="box">
            <img
              src={img8}
              className="img1 rounded mx-auto d-block"
              alt="VIKASH KUMAR"
            />
            {/* <img id="image" src="VIKASH_KUMAR.jpeg" alt="VIKASH KUMAR" /> */}
            <Link to="/about/vikash">
              <h3 className="h3">VIKASH KUMAR</h3>
            </Link>
            <p className="text-center fw-bold">Serial No. - 62</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
