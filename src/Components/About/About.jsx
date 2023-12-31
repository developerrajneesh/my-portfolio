import React from "react";
import "./about.css";
import { AboutImg } from "../../assets";
function About() {
  return (
    <>
      <div className="row m-0 margin-top">
        <div className="col-12 col-lg-6  d-none d-md-flex d-flex justify-content-center align-items-center">
          <img src={AboutImg} height={"400px"} alt="AboutImg" />
        </div>
        <div className="col-12 col-lg-6">
          <div className="position-relative text-center">
            <h1 className="about-text text-center">About Me</h1>
            <h1 className="heading-about text-center ">About</h1>
          </div>
          <p className="mt-5">
            Passionate learner, creative problem solver, and tech enthusiast. Striving for growth and making a positive impact.
          </p>

          <ul className="about-items">
            <li className="d-flex">
              <span className="first-li-1">Name:</span>
              <span className="first-li-2">Rajneesh Shukla</span>
            </li>
            <li className="d-flex">
              <span className="first-li-1">Date of birth:</span>
              <span className="first-li-2">July 18, 2002</span>
            </li>
            <li className="d-flex">
              <span className="first-li-1">Address:</span>
              <span className="first-li-2">Mohali, Chandigarh</span>
            </li>
            <li className="d-flex">
              <span className="first-li-1">Zip code:</span>
              <span className="first-li-2">160071</span>
            </li>
            <li className="d-flex">
              <span className="first-li-1">Email:</span>
              <span className="first-li-2">rajneeshshukla606@gmail.com</span>
            </li>
            <li className="d-flex">
              <span className="first-li-1">Phone:</span>
              <span className="first-li-2">+91 9161422065</span>
            </li>
          </ul>
          <h3><span>120</span> Project complete</h3>

<div className="d-flex mt-3 justify-content-center "> 
<button className="btn hireme-btn">DOWNLOAD CV</button>

</div>
        </div>
      </div>
    </>
  );
}

export default About;
