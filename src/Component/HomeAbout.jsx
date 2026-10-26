import React from "react";

const HomeAbout = () => {
  return (
    <div>
      <section className="section-bubble section-padding-md-2">
        <div className="container">
          <div className="row gutters-50 d-flex align-items-center">
            <div className="col-xl-7">
              <div className="about-box-layout3">
                <div className="item-icon shape1">
                  <img src="img/figure/icon-shape1.png" alt="shape" />
                </div>
                <div className="item-icon shape2">
                  <img src="img/figure/icon-shape2.png" alt="shape" />
                </div>
                <div className="item-icon shape3">
                  <img src="img/figure/icon-shape3.png" alt="shape" />
                </div>
                <div className="item-icon shape4">
                  <img src="img/figure/icon-shape4.png" alt="shape" />
                </div>
                <div className="item-img">
                  <img src="img/figure/figure5.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="about-box-layout4">
                <h2 className="item-title">
                  Making Your House <span>As Good As New</span>
                </h2>
                <p>
                  Spa isa newsimply dummy text of the printing and type
                  settingare industrLorem Ipsum has been the industry's standard
                  dummy text everty since the when an unknown centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially.
                </p>
                <div className="service-list">
                  <ul>
                    <li>Experienced Team</li>
                    <li>Keep the same cleaner for every visit</li>
                    <li>One-off, weekly or fortnightly visits</li>
                    <li>Book, manage &amp; pay online</li>
                  </ul>
                </div>
                <div className="action-area">
                  <a
                    href="#"
                    className="btn-fill-sm bg-accent text-primarytext btn-slide-hover"
                  >
                    Book a Service<i className="fas fa-angle-right"></i>
                  </a>
                  <div className="phone-number">
                    <i className="flaticon-phone-call"></i>+ 985 8844 000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
