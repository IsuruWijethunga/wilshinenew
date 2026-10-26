import React from "react";
import EstimateForm from "./EstimateForm";

const Estimate = () => {
  return (
    <div id="estimate-section">
      <section className="section-padding-md-2 section-bubble">
        <div className="container">
        <div className="heading-layout1">
          <h2> Get a Customized Estimate</h2>
          <p>
            Fill out the form below to receive a personalized cleaning estimate tailored to your specific needs. Our team will get back to you as possible with a detailed quote.
          </p>
        </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="about-box-layout1">
                <h2 className="item-title">
                  Our Commitment is to Deliver Exceptional Cleanliness
                </h2>
                <div className="item-subtitle">
                  We understand the importance of a pristine space, and we aim
                  to exceed your expectations every time.
                </div>
                <p>
                  At Wilshine cleaning services, we pride ourselves on providing services that
                  not only meet but surpass customer expectations. Whether it's
                  residential or commercial, we believe every cleaning should be
                  thorough and leave a lasting impact. With our team, you can
                  always count on spotless results.
                </p>
                <div className="list-item">
                  <ul>
                    <li>
                      <h3>Customer-Centered Approach</h3>
                      <p>
                        We put our clients first, ensuring satisfaction through
                        customized cleaning solutions tailored to your needs.
                      </p>
                    </li>
                    <li>
                      <h3>Our Promise: Quality and Consistency</h3>
                      <p>
                        We are committed to providing consistent, top-quality
                        cleaning services, with a focus on detail and
                        reliability.
                      </p>
                    </li>
                    <li>
                      <h3>Flexible Cleaning Schedules</h3>
                      <p>
                        Whether it's a one-time service or regular upkeep, we
                        offer flexible cleaning schedules to fit your lifestyle.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <EstimateForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Estimate;
