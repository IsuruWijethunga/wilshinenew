"use client";

import React from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef();
  // const [captcha, setCaptcha] = useState(null);

  // const onChange = (value) => {
  //   setCaptcha(value);
  // };

  // const onExpired = () => {
  //   setCaptcha(null);
  // };

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        "service_gva54x5", // Replace with your actual service ID
        "template_c6fun0t", // Replace with your actual template ID
        form.current,
        "rtOHcdoMrBTsp_x3V" // Replace with your actual public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
          setCaptcha(null); // Reset captcha after success
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error.text);
        }
      );
  };
  return (
    <div className="col-lg-12 sidebar-break-md sidebar-widget-area">
      <div className="widget widget-contact-form">
        <div className="heading-layout4">
          <h4>Contact us for a Free Quotation</h4>
        </div>
        <form className="contact-form-box" ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-12 form-group">
              <div className="form-icon">
                <i className="fas fa-user" />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                required
              />
            </div>
            <div className="col-12 form-group">
              <div className="form-icon">
                <i className="far fa-envelope" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="E-mail Address"
                className="form-control"
                required
              />
            </div>
            <div className="col-12 form-group">
              <div className="form-icon">
                <i className="fas fa-phone-volume" />
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="form-control"
                required
              />
            </div>
            <div className="col-12 form-group">
              <div className="form-icon">
                <i className="fas fa-question" />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control"
                required
              />
            </div>
            <div className="col-12 form-group">
              <div className="form-icon">
                <i className="far fa-comments" />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                className="textarea form-control"
                rows={4}
                required
              />
            </div>
            {/* <div className="col-12 form-group">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onChange}
                onExpired={onExpired}
              />
            </div> */}
            <div className="col-12 form-group">
              <button
                type="submit"
                className="fw-btn-fill bg-accent text-primarytext"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="form-response" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
