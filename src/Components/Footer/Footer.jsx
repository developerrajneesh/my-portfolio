import React from "react";
import './footer.css'
import { ImLocation2 } from "react-icons/im";
import {  BsFillTelephoneFill} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <div className="margin-top">
      <div className="row m-0 mt-5">
       
        <div className="col-6 col-md-4 footer-items">
          <h2 className="li-hover">Links</h2>
          <li className="li-hover">Home</li>
          <li className="li-hover">About</li>
          <li className="li-hover">Services</li>
          <li className="li-hover">Projects</li>
          <li className="li-hover">Contact</li>
        </div>
        <div className="col-6 col-md-4 footer-items">
          <h2>Services</h2>
         
          <li className="li-hover">Softwere Testing</li>
          <li className="li-hover">React Application</li>
          <li className="li-hover">Node Application</li>
          <li className="li-hover">App Development</li>
          <li className="li-hover">Web Development</li>
        </div>
        <div className="col-12 col-md-4 footer-item mt-md-0  mt-5">
         <div>
         <h2>Have a Questions?</h2>
         <li className="li-hover"> <ImLocation2/> - Mohali, Chandigarh</li> 
          <li className="li-hover"><BsFillTelephoneFill/> - +91 9161422065 </li>
        <li className="li-hover">  <MdEmail/> - rajneeshshukla606@gmail.com</li>
         </div>
        </div>
      </div>
      <hr className="m-0 mt-5" />
      <div className="text-center p-2 bg-drk  ">
        Copyright ©2023 All rights reserved | Designed by Developer Rajneesh
      </div>
    </div>
  );
}

export default Footer;
