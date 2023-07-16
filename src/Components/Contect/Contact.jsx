import React from "react";
import "./contact.css";
import { AboutImg } from "../../assets";
import { BsWhatsapp ,BsLinkedin, BsFillTelephoneFill} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function Contact() {
  return (
    <div className="margin-top">
      <div className="mt-5 mt-3 d-flex justify-content-center">
        <div className="position-relative">
          <h1 className="heading-resume ">Contact</h1>
          <h1 className=" about-text">Contact Me</h1>
        </div>
      </div>
      <p className="mt-5 text-center">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>
      <div className="row m-0 mt-5">
        <div className="col-6 col-md-3 icon-flex">
          <div className="contact-circle"><MdEmail  size={40}/></div> <h3>Email</h3>
        </div>
        <div className="col-6 col-md-3 icon-flex">
          <div className="contact-circle"><BsFillTelephoneFill  size={40}/></div>
          <h3>Phone</h3>
        </div>
        <div className="col-6 col-md-3 icon-flex">
          <div className="contact-circle"><BsLinkedin  size={40}/></div>
          <h3>LinkedIn</h3>
        </div>
        <div className="col-6 col-md-3 icon-flex">
          <div className="contact-circle"><BsWhatsapp  size={40}/></div>
          <h3>WhatsApp</h3>
        </div>
      </div>

      <div className="container">
        <div className="row m-0 mt-5">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center contact-img-card">
            <img src={AboutImg} height={'450px'} alt="AboutImg" />
          </div>
          <div className="col-12 col-md-6 bg-light ">
            <form className="p-5">
              <input
                type="text"
                className="form-control "
                placeholder="Your Name"
                name="name"
              />
              <input
                type="number"
                className="form-control mt-2"
                placeholder="Your Number"
                name="number"
              />
              <input
                type="email"
                className="form-control mt-2"
                placeholder="Your Email"
                name="email"
                required
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Subject"
                name="subject"
              />
              <textarea
                name="Masssge"
                className="form-control mt-2"
                placeholder="Message"
                id=""
                cols="15"
                rows="5"
              ></textarea>
              <button type="submit" className="mt-5 btn hireme-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
