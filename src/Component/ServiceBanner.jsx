import React from "react";

const ServiceBanner = () => {
  return (
    <div>
      <section
        className="banner-wrap-layout2"
        data-bg-image="img/figure/banner-bg1.jpg"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-12">
              <div className="banner-box-layout4">
                <h2 className="item-title text-Primary">
                  Together <span>We'll Explore</span> New Things
                </h2>
                <a
                  href="/contact"
                  className="btn-fill-md bg-accent btn-slide-hover text-primarytext"
                >
                  Book an Appointment
                  <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="banner-box-layout5">
                <div className="item-icon shape1">
                  <img src="img/figure/icon-shape4.png" alt="shape" />
                </div>
                <div className="item-icon shape2">
                  <img src="img/figure/icon-shape3.png" alt="shape" />
                </div>
                <div className="item-icon shape3">
                  <img src="img/figure/icon-shape2.png" alt="shape" />
                </div>
                <div className="item-icon shape4">
                  <img src="img/figure/icon-shape1.png" alt="shape" />
                </div>
                <div className="item-img">
                  <img src="img/figure/banner-figure.png" alt="figure" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceBanner;
