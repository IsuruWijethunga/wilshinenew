import React from "react";

const HomeCallForm = () => {
  return (
    <div>
      <section className="action-wrap-layout1">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="action-box-layout1">
                <h2 className="item-title">
                  Get started with your free estimate
                </h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="action-box-layout1">
                <div className="item-img bottom-bubble">
                  <img src="img/figure/figure4.png" alt="img" />
                </div>
                <a
                  href="#"
                  className="btn-fill-md hover-textprimary bg-accent text-primarytext"
                >
                  Get an Estimate<i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding-md-2 section-bubble">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-12">
              <div className="about-box-layout1">
                <h2 className="item-title">
                  Our Goal is to Wow With Every Clean
                </h2>
                <div className="item-subtitle">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. some form, by injected humour, some
                  form, by injected humour.
                </p>
                <div className="list-item">
                  <ul>
                    <li>
                      <h3>Customer Focused Reviews</h3>
                      <p>
                        Aorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </li>
                    <li>
                      <h3>We Are Committed</h3>
                      <p>
                        Aorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </li>
                    <li>
                      <h3>Regular &amp; Monthly Cleaning</h3>
                      <p>
                        Aorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-12">
              <div className="about-box-layout2">
                <h3 className="item-title">Request An Estimate</h3>
                <form className="contact-form-box" id="contact-form">
                  <div className="row gutters-10">
                    <div className="col-12 form-group">
                      <select className="select2">
                        <option value="0">Residential</option>
                        <option value="1">Residential</option>
                        <option value="2">Commercial</option>
                        <option value="3">Plot</option>
                        <option value="4">Apartment</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <select className="select2">
                        <option value="0">Property Type</option>
                        <option value="1">Residential</option>
                        <option value="2">Commercial</option>
                        <option value="3">Plot</option>
                        <option value="4">Apartment</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <select className="select2">
                        <option value="0">-- Approx SF --</option>
                        <option value="1">400</option>
                        <option value="2">200</option>
                        <option value="3">600</option>
                        <option value="4">300</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <select className="select2">
                        <option value="0">-- Bedrooms --</option>
                        <option value="1">Residential</option>
                        <option value="2">Commercial</option>
                        <option value="3">Plot</option>
                        <option value="4">Apartment</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <select className="select2">
                        <option value="0">-- Bathrooms --</option>
                        <option value="1">Residential</option>
                        <option value="2">Commercial</option>
                        <option value="3">Plot</option>
                        <option value="4">Apartment</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <select className="select2">
                        <option value="0">-- Frequency --</option>
                        <option value="1">Residential</option>
                        <option value="2">Commercial</option>
                        <option value="3">Plot</option>
                        <option value="4">Apartment</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        className="form-control"
                        name="name"
                        data-error="zip code field is required"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 col-12 form-group datetime-picker">
                      <i className="far fa-calendar-alt"></i>
                      <input
                        type="text"
                        className="form-control rt-date"
                        placeholder="dd/mm/yy"
                        name="date"
                        id="form-date"
                        data-error="Subject field is required"
                        required
                      />
                    </div>
                    <div className="col-md-6 col-12 form-group datetime-picker">
                      <i className="far fa-clock"></i>
                      <input
                        type="text"
                        className="form-control rt-time"
                        placeholder="Time"
                        name="time"
                        id="form-time"
                        data-error="Subject field is required"
                        required
                      />
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        name="name"
                        data-error="Name field is required"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <input
                        type="text"
                        placeholder="Phone"
                        className="form-control"
                        name="phone"
                        data-error="Phone field is required"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-12 form-group">
                      <input
                        type="email"
                        placeholder="E-mail Address"
                        className="form-control"
                        name="email"
                        data-error="email field is required"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-12 form-group mg-b-20">
                      <textarea
                        placeholder="Address"
                        className="textarea form-control"
                        name="message"
                        id="form-message"
                        rows="2"
                        cols="20"
                        data-error="Message field is required"
                        required
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-12 form-group">
                      <button
                        type="submit"
                        className="fw-btn-fill bg-accent text-primarytext"
                      >
                        Book Now<i className="fas fa-angle-right"></i>
                      </button>
                    </div>
                  </div>
                  <div className="form-response"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCallForm;
