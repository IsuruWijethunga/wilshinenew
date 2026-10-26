import React from "react";

const AboutContent = () => {
  return (
    <div>
      <section className="section-padding-md-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-box-layout7">
                {/* <div className="top-left-item">
                  <div className="item-tagline">Know About Us</div>
                  <h2 className="item-title">
                    Trusted Office Cleaning Experts in Western Australia
                  </h2>
                </div> */}
                <div className="heading-layout1">
                  <h2>Who we are</h2>
                  <p>Trusted Office Cleaning Experts in Western Australia</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="about-box-layout7">
                <div
                  className="item-popup-img"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/eZO113S8Hso"
                    title="WilShine Cleaning"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="about-box-layout7">
                <div className="top-right-item">
                  <p>
                    Wilshine Cleaning Services is proudly Western Australia
                    owned and operated, delivering exceptional office cleaning
                    and hygiene services. Backed by years of industry
                    experience, our professional team uses proven methods to
                    achieve outstanding results. We prioritize quality through
                    regular supervision, creating clean, healthy environments
                    that promote productivity and peace of mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-box-layout7 pr-5">
                <div className="feature-list">
                  <ul>
                    <li>
                      <h3>100% Cleaning Satisfaction</h3>
                      <p>
                        Your satisfaction is our priority. We ensure each space
                        is thoroughly cleaned, leaving nothing less than a
                        spotless finish with every visit.
                      </p>
                    </li>
                    <li>
                      <h3>Daily & Monthly Cleaning Options</h3>
                      <p>
                        Whether your office needs daily upkeep or periodic deep
                        cleaning, our flexible plans are designed to suit your
                        schedule and requirements.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-box-layout7">
                <div className="feature-list">
                  <ul>
                    <li>
                      <h3>Thorough Supervision After Work Completion</h3>
                      <p>
                        Every job is reviewed by our experienced supervisors to
                        guarantee quality control and maintain our high
                        standards—no spot left unchecked.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
