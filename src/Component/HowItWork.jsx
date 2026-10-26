import React from "react";

const HowItWork = () => {
  return (
    <section className="section-padding-lg-1" style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="heading-layout1">
          <h2>How It Works</h2>
          <p>
            Our streamlined process ensures your workspace is cleaned
            professionally, efficiently, and with attention to every detail—from
            first contact to ongoing quality assurance.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 single-process">
            <div className="process-box-layout1">
              <div className="item-bg">
                <img src="/img/figure/bubble5.png" alt="Contact Us" />
                <div className="item-icon">
                  <i className="fas fa-phone" />
                </div>
              </div>
              <div className="item-content">
                <h3 className="item-title">Contact Us</h3>
                <p>
                  Reach out via our website, email, or phone. We'll visit your
                  premises to assess the work and provide a free, instant quote.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 single-process">
            <div className="process-box-layout1">
              <div className="item-bg">
                <img src="/img/figure/bubble5.png" alt="Confirm & Schedule" />
                <div className="item-icon">
                  <i className="fas fa-calendar-check" />
                </div>
              </div>
              <div className="item-content">
                <h3 className="item-title">Confirm & Schedule</h3>
                <p>
                  Once you accept the quote, we’ll book a convenient date to
                  perform the job. Our process involves applying a
                  dirt-neutralizing solution, scrubbing, and steam cleaning your
                  carpets for a deep clean.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 single-process">
            <div className="process-box-layout1">
              <div className="item-bg">
                <img src="/img/figure/bubble5.png" alt="Satisfaction Guaranteed" />
                <div className="item-icon">
                  <i className="fas fa-smile" />
                </div>
              </div>
              <div className="item-content">
                <h3 className="item-title">Satisfaction Guaranteed</h3>
                <p style={{ textAlign: "justify" }}>
                  After completing the job, we’ll invite you to inspect the work
                  to ensure you’re 100% satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
