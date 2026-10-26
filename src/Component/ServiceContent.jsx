import React from "react";

const ServiceContent = () => {
  return (
    <div>
      <section
        className="section-padding-12-9 bg-assh bg-common"
        data-bg-image="img/figure/bg-shape1.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="service-box-layout2 white-shadow">
                <div className="item-img">
                  <img
                    src="img/service/officeClean1.jpg"
                    alt="Office Cleaning"
                  />
                </div>
                <div className="item-content">
                  <div className="item-icon">
                    <div className="icon-bg">
                      <i className="flaticon-tower" />
                    </div>
                  </div>
                  <h3 className="item-title">
                    <a href="single-service1.html">Office Cleaning</a>
                  </h3>
                  <div className="hover-content">
                    <p>
                      We provide thorough office cleaning to keep your workspace
                      fresh, clean, and productive.
                    </p>
                    <a
                      href="/service/office-cleaning"
                      className="btn-fill-xs bg-accent text-primarytext"
                    >
                      View Details
                      <i className="fas fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="service-box-layout2 white-shadow">
                <div className="item-img">
                  <img
                    src="img/service/stripping (1).png"
                    alt="Stripping and Sealing"
                  />
                </div>
                <div className="item-content">
                  <div className="item-icon">
                    <div className="icon-bg">
                      <i className="flaticon-vacuum" />
                    </div>
                  </div>
                  <h3 className="item-title">
                    <a href="single-service2.html">Stripping & Sealing</a>
                  </h3>
                  <div className="hover-content">
                    <p>
                      Restore the look of your floors with our professional
                      stripping and sealing services.
                    </p>
                    <a
                      href="/service/stripping-and-sealing"
                      className="btn-fill-xs bg-accent text-primarytext"
                    >
                      Read More
                      <i className="fas fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="service-box-layout2 white-shadow">
                <div className="item-img">
                  <img src="img/service/carpet1.jpg" alt="Carpet Cleaning" />
                </div>
                <div className="item-content">
                  <div className="item-icon">
                    <div className="icon-bg">
                      <i className="flaticon-clean-3" />
                    </div>
                  </div>
                  <h3 className="item-title">
                    <a href="single-service3.html">Carpet Cleaning</a>
                  </h3>
                  <div className="hover-content">
                    <p>
                      Deep carpet cleaning to remove dirt, stains, and
                      allergens, leaving your carpets fresh and vibrant.
                    </p>
                    <a
                      href="/service/carpet-cleaning"
                      className="btn-fill-xs bg-accent text-primarytext"
                    >
                      Read More
                      <i className="fas fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="service-box-layout2 white-shadow">
                <div className="item-img">
                  <img
                    src="img/service/pressure (1).png"
                    alt="Pressure Washing"
                  />
                </div>
                <div className="item-content">
                  <div className="item-icon">
                    <div className="icon-bg">
                      <i className="flaticon-dishwasher" />
                    </div>
                  </div>
                  <h3 className="item-title">
                    <a href="single-service4.html">Pressure Washing</a>
                  </h3>
                  <div className="hover-content">
                    <p>
                      High-pressure cleaning to remove grime, mold, and dirt
                      from outdoor surfaces.
                    </p>
                    <a
                      href="/service/pressure-washing"
                      className="btn-fill-xs bg-accent text-primarytext"
                    >
                      Read More
                      <i className="fas fa-angle-right" />
                    </a>
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

export default ServiceContent;
