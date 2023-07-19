import React, { useState, useEffect } from "react";
import "./resume.css";
import { Document, Page, pdfjs } from "react-pdf";

import MyResume from "../../assets/RJ.pdf";
function Resume() {
  return (
    <div className="margin-top">
      <div className="mt-5 d-flex justify-content-center">
        <div className="position-relative">
          <h1 className="heading-resume ">Resume</h1>
          <h1 className=" about-text">Resume</h1>
        </div>
      </div>

      <p className="mt-5 text-center">
          Dedicated and adaptable professional with a strong track record in web development.  Combining <br/>
  technical expertise, communication skills, and a drive for excellence to deliver impactful results and drive organizational success.
      </p>
      <div className="row m-0 mt-5">
        <div className="col-12 col-lg-6">
          <div className="custom-card">
            <h3>2023-Pursuing</h3>
            <h3>Master of Computer Application</h3>
            <h5>Lovely Professional University</h5>
            <h6> Phagwara, Punjab</h6>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="custom-card">
            <h3>2019-2022</h3>
            <h3> Bachelor of Computer Applications</h3>
            <h5>M L K (PG) College</h5>
            <h6>Balrampur, Uttar Pradesh </h6>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="custom-card">
            <h3>2018-2019</h3>
            <h3> Intermediate</h3>
            <h5>M D B Singh Inter College</h5>
            <h6>Balrampur, Uttar Pradesh </h6>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="custom-card">
            <h3>2016-2017</h3>
            <h3>M D B Singh Inter College</h3>
            <h5>MLK (PG) College</h5>
            <h6>Balrampur, Uttar Pradesh </h6>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn hireme-btn text-center">Download CV</button>
      </div>
    </div>
  );
}

export default Resume;
