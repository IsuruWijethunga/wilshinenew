import React from "react";

const MiddleBanner = () => {
  return (
    <div>
      <section className="banner-wrap-layout3 bg-lightprimary">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="banner-box-layout2">
                <h2 className="item-title">
                  Experience <span>Spotless Results</span> Every Time
                </h2>
                <p>
                  At Wilshine Cleaning Services, we go beyond cleaning — we
                  create healthier, more productive environments. Backed by
                  certified professionals and thorough quality checks, our
                  service is one you can trust.
                </p>
                <a
                  href="/#estimate-section"
                  className="btn-fill-sm btn-slide-hover bg-accent text-primarytext"
                >
                  Request a Free Assessment
                  <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="banner-box-layout3">
                <div className="item-img">
                  <img src="img/figure/figure9.png" alt="Banner-thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddleBanner;
