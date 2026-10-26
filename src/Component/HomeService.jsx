import Link from "next/link";
import React from "react";

const HomeService = () => {
  return (
    <section
      className="section-padding-lg bg-common bg-aash  "
      data-bg-image="img/figure/bg-shape1.png"
    >
      <div>
        <div className="heading-layout1">
          <h2>Our Cleaning Services</h2>
          <p>
            Wilshine Cleaning Services offers top-quality office cleaning, as
            well as pressure washing and carpet cleaning, to both commercial and
            residential clients across Perth.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="row"
            style={{
              width: "95%",
            }}
          >
            <div className="col-lg-3 col-md-6 col-12">
              <div className="service-box-layout1">
                <div className="item-img">
                  <img
                    src="img/service/officeClean.jpg"
                    alt="Office Cleaning"
                  />
                </div>
                <div className="item-middle-content">
                  <div className="item-icon">
                    <div className="home-icon">
                      <i className="fas fa-briefcase" />
                    </div>
                  </div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="/service/office-cleaning">Office Cleaning</a>
                  </h3>
                  <div className="serivce-list">
                    <ul>
                      <li>Desk & Cubicle Cleaning</li>
                      <li>Breakroom Sanitation</li>
                      <li>Restroom Detailing</li>
                      <li>Trash Removal</li>
                      <li>Vacuuming & Mopping</li>
                      <li>Window Cleaning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="service-box-layout1">
                <div className="item-img">
                  <img
                    src="img/service/stripping.webp"
                    alt="Stripping & Sealing"
                  />
                </div>
                <div className="item-middle-content">
                  <div className="item-icon">
                    <div className="home-icon">
                      <i className="fas fa-layer-group" />
                    </div>
                  </div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="/service/stripping-and-sealing">
                      Stripping & Sealing
                    </a>
                  </h3>
                  <div className="serivce-list">
                    <ul>
                      <li>Floor Wax Removal</li>
                      <li>Surface Buffing</li>
                      <li>Sealer Application</li>
                      <li>Slip-Resistant Finish</li>
                      <li>Stain Protection</li>
                      <li>Shine Restoration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 d-block d-md-none d-lg-block col-12">
              <div className="service-box-layout1">
                <div className="item-img">
                  <img
                    src="img/service/carpet-cleaning11.jpg"
                    alt="Carpet Cleaning"
                  />
                </div>
                <div className="item-middle-content">
                  <div className="item-icon">
                    <div className="home-icon">
                      <i className="fas fa-shower" />
                    </div>
                  </div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="/service/carpet-cleaning">Carpet Cleaning</a>
                  </h3>
                  <div className="serivce-list">
                    <ul>
                      <li>Steam Cleaning</li>
                      <li>Stain Removal</li>
                      <li>Odor Neutralizing</li>
                      <li>Dry Carpet Options</li>
                      <li>High-Traffic Area Focus</li>
                      <li>Allergy-Friendly Methods</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 d-block d-md-none d-lg-block col-12">
              <div className="service-box-layout1">
                <div className="item-img">
                  <img src="img/service/pressure.webp" alt="Pressure Washing" />
                </div>
                <div className="item-middle-content">
                  <div className="item-icon">
                    <div className="home-icon">
                      <i className="fas fa-water" />
                    </div>
                  </div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="/service/pressure-washing">Pressure Washing</a>
                  </h3>
                  <div className="serivce-list">
                    <ul>
                      <li>Driveways & Pathways</li>
                      <li>Building Facades</li>
                      <li>Decks & Patios</li>
                      <li>Moss & Algae Removal</li>
                      <li>Graffiti Cleanup</li>
                      <li>Eco-Friendly Options</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeService;
