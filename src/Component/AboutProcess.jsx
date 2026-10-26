import React from "react";

const AboutProcess = () => {
  return (
    <div >
      <section className="section-padding-lg-1 container">
        <div style={{ marginTop: "100px" }} >
          <div className="heading-layout1">
            <h2>How It Works</h2>
            <p>
              Our streamlined process ensures your workspace is cleaned
              professionally, efficiently, and with attention to every
              detail—from first contact to ongoing quality assurance.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 single-process">
              <div className="process-box-layout1">
                <div className="item-bg">
                  <img src="/img/figure/bubble5.png" alt="Consultation" />
                  <div className="item-icon">
                    <i className="fas fa-handshake" />
                  </div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">Consultation</h3>
                  <p>
                    Schedule a free on-site consultation where we assess your
                    needs and create a personalized cleaning plan.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 single-process">
              <div className="process-box-layout1">
                <div className="item-bg">
                  <img src="/img/figure/bubble5.png" alt="Tailored Proposal" />
                  <div className="item-icon">
                    <i className="fas fa-file-alt" />
                  </div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">Tailored Proposal</h3>
                  <p>
                    Receive a detailed, transparent proposal outlining our
                    services, schedule, and pricing.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 single-process">
              <div className="process-box-layout1">
                <div className="item-bg">
                  <img src="/img/figure/bubble5.png" alt="Execution" />
                  <div className="item-icon">
                    <i className="fas fa-broom" />
                  </div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">Execution & Ongoing Support</h3>
                  <p>
                    Our reliable team gets to work, and we regularly check in to
                    adapt our services to your changing needs and ensure your
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutProcess;
