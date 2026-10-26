import React from "react";
import "./CertificateSection.css";

const CertificateSection = () => {
  return (
    <div>
      <section className="brand-wrap-layout2 section-bubble-5">
        <div className="container">
          <div className="heading-layout1">
            <h2>Certifications You Can Trust</h2>
            <p>
              Our team is fully certified, trained, and insured to meet the
              highest industry standards. With recognized accreditations, we
              guarantee safety, reliability, and consistent excellence in every
              service we provide.
            </p>
          </div>
          <div
            className="rc-carousel nav-control-layout1"
            data-loop="true"
            data-items={10}
            data-margin={30}
            data-autoplay="false"
            data-autoplay-timeout={3000}
            data-smart-speed={1000}
            data-dots="false"
            data-nav="true"
            data-nav-speed="false"
            data-r-x-small={1}
            data-r-x-small-nav="true"
            data-r-x-small-dots="false"
            data-r-x-medium={2}
            data-r-x-medium-nav="true"
            data-r-x-medium-dots="false"
            data-r-small={2}
            data-r-small-nav="true"
            data-r-small-dots="false"
            data-r-medium={3}
            data-r-medium-nav="true"
            data-r-medium-dots="false"
            data-r-large={4}
            data-r-large-nav="true"
            data-r-large-dots="false"
            data-r-extra-large={4}
            data-r-extra-large-nav="true"
            data-r-extra-large-dots="false"
          >
            <div className="brand-box-layout2">
              <div className="item-img">
                <a href="#">
                  <img src="img/brand/certificate1.png" alt="brand"/>
                </a>
              </div>
            </div>
            <div className="brand-box-layout2">
              <div className="item-img">
                <a href="#">
                  <img src="img/brand/brand7.png" alt="brand" />
                </a>
              </div>
            </div>
            <div className="brand-box-layout2">
              <div className="item-img">
                <a href="#">
                  <img src="img/brand/brand8.png" alt="brand" />
                </a>
              </div>
            </div>
            <div className="brand-box-layout2">
              <div className="item-img">
                <a href="#">
                  <img src="img/brand/brand9.png" alt="brand" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateSection;
