"use client";

import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

const EstimateForm = () => {
  const form = useRef();
  const [captcha, setCaptcha] = useState(null);

  const onChange = (value) => {
    setCaptcha(value);
  };

  const onExpired = () => {
    setCaptcha(null);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gva54x5",
        "template_2jmf2ms",
        form.current,
        "rtOHcdoMrBTsp_x3V"
      )
      .then(
        () => {
          alert("Estimate request sent successfully!");
          e.target.reset();
          setCaptcha(null);
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send estimate request. Please try again later.");
        }
      );
  };

  return (
    <div className="col-xl-6 col-lg-6 col-12">
      <div className="about-box-layout2 p-4 bg-light border rounded">
        <div className="about-box-layout1">
          <div className="item-title">
            <h3>
              <b>Request an Estimate</b>
            </h3>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            {/* <div className="form-group col-md-6 mb-3">
              <label>Type of Property</label>
              <select name="propertyCategory" required className="form-control">
                <option value="">-- Choose --</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="plot">Plot</option>
                <option value="apartment">Apartment</option>
              </select>
            </div> */}
            <div className="form-group col-md-6 mb-3">
              <label>Select Service Type</label>
              <select name="propertyType" required className="form-control">
                <option value="">-- Choose --</option>
                <option value="office">Office Cleaning</option>
                <option value="strip-seal">Stripping and Sealing</option>
                <option value="carpet">Carpet Cleaning</option>
                <option value="pressure">Pressure Washing</option>
              </select>
            </div>
            <div className="form-group col-md-6 mb-3">
              <label>Cleaning Frequency</label>
              <select name="frequency" required className="form-control">
                <option value="">-- Choose --</option>
                <option value="one-time">One-time</option>
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6 mb-3">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="form-control"
                placeholder="John Doe"
              />
            </div>

            <div className="form-group col-md-6 mb-3">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                required
                className="form-control"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="form-control"
              placeholder="email@example.com"
            />
          </div>

          <div className="form-group mb-4">
            <label>Additional Details</label>
            <textarea
              name="message"
              required
              rows={4}
              className="form-control"
              placeholder="Enter any additional information here..."
            />
          </div>

          {/* <div className="form-group mb-4">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onChange}
              onExpired={onExpired}
            />
          </div> */}

          <div className="form-group mb-0">
            <button
              type="submit"
              className="btn btn-primary btn-block font-weight-bold"
            >
              Get My Estimate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EstimateForm;
