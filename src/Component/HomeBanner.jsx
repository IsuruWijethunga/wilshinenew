import React from "react";

const HomeBanner = () => {
  return (
    <div>
      <section
        className="banner-wrap-layout1"
        data-bg-image="img/figure/banner-bg.jpg"
      >
        <div className="container">
          <div className="row d-flex justify-content-end">
            <div className="col-xl-6 col-12">
              <div className="banner-box-layout1">
                <h2 className="item-title">
                  Together <span>We'll Explore</span> New Things
                </h2>
                <a
                  href="/contact"
                  className="btn-fill-md btn-slide-hover bg-accent text-primarytext"
                >
                  Read More<i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
