import React from "react";
import { HeroImg } from "../../assets";
import "./hero.css";
import Typewriter from "typewriter-effect";
function Hero() {
  return (
    <>
      <div className="row m-0">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <div>
            <h4>Hello !</h4>
           
              <h3 className="heading-text-main">
               I'm <span className="my-name">Rajneesh Shukla</span>
               <span className="typewrter-text-main">

                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                    .typeString("Full Stack Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Frontend Developer")
                    .pauseFor(1000)
                       .deleteAll()
                    .typeString("Backend Developer")
                    .pauseFor(1000)
                       .deleteAll()
                    .typeString("MERN Stack Developer")
                    .pauseFor(1000)
                       .deleteAll()
                    .typeString("React JS Developer")
                    .pauseFor(1000)
                       .deleteAll()
                    .typeString("Node JS Developer")
                    .pauseFor(1000)
                       .deleteAll()
                      .start();
                  }}
                  options={{
                    loop: true,
                    autoStart: true,
                  }}
                />
                    </span>
              </h3>
          
            <div className="d-flex position-relative gap-3 mt-5">
              <button className="btn hireme-btn">HIRE ME</button>
              <button className="btn mywork-btn">MY WORKS</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center ">
          <img src={HeroImg} alt="HeroImg" />
        </div>
      </div>
    </>
  );
}

export default Hero;
