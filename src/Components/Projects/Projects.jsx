import React from "react";
import { HepptogoImg, JobportalImg, JusnestImg, SlickdealsImg } from "../../assets";

function Projects() {
  return (
    <div className="margin-top">
      <div className="mt-5">
        <div className="mt-5 mt-3 d-flex justify-content-center">
          <div className="position-relative">
            <h1 className="heading-resume ">Our Projects</h1>
            <h1 className="about-text"> Projects</h1>
          </div>
        </div>
        <p className="mt-5 text-center">
                          Innovating the future, one idea at a time. Empowering change through <br/>
               creativity. Transforming possibilities into reality. Together, we build a better tomorrow.

        </p>
      </div>
      <div className="row m-0 mt-5">
        <div className="col-12 col-lg-4">
          <div className="custom-card">
            <img src={JusnestImg} className="img-fluid" alt="" />
            <h5>Just Nests</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi quisquam excepturi consectetur facilis odio veniam qui vel cumque dicta maxime itaque, possimus nemo quibusdam quidem perspiciatis. Iure, commodi consequatur!</p>

          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="custom-card">
            <img src={SlickdealsImg} className="img-fluid" alt="" />
            <h5>Slickdeals</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi quisquam excepturi consectetur facilis odio veniam qui vel cumque dicta maxime itaque, possimus nemo quibusdam quidem perspiciatis. Iure, commodi consequatur!</p>

          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="custom-card">
            <img src={JobportalImg} className="img-fluid" alt="" />
            <h5>Jobportal</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi quisquam excepturi consectetur facilis odio veniam qui vel cumque dicta maxime itaque, possimus nemo quibusdam quidem perspiciatis. Iure, commodi consequatur!</p>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="custom-card">
            <img src={HepptogoImg} className="img-fluid" alt="" />
            <h5>Hep To Go</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi quisquam excepturi consectetur facilis odio veniam qui vel cumque dicta maxime itaque, possimus nemo quibusdam quidem perspiciatis. Iure, commodi consequatur!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
