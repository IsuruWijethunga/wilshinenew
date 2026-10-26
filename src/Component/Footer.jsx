"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const whiteText = { color: "white" };

  return (
    <div>
      <footer
        className="footer-wrap-layout1 section-shape1"
        style={{ color: "white" }}
      >
        <div className="container">
          <div className="footer-top-box">
            <div className="row">
              {/* About Section */}
              <div className="col-lg-3 col-sm-6">
                <div className="footer-box-layout1">
                  <div className="footer-title">
                    <h4 style={whiteText}>ABOUT US</h4>
                  </div>
                  <Image
                    src="/img/whitelogo.png"
                    alt="Logo"
                    width={200}
                    height={100}
                    style={{ marginBottom: "20px" }}
                  />
                  <p style={whiteText}>
                    Wilshine Property Services is a leading provider of
                    professional cleaning and property maintenance services.
                  </p>
                </div>
              </div>

              {/* Services Section */}
              <div className="col-lg-3 col-sm-6">
                <div className="footer-box-layout1">
                  <div className="footer-title">
                    <h4 style={whiteText}>SERVICES</h4>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: "10px" }}>
                      <a
                        href="about1.html"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontSize: "16px",
                        }}
                      >
                        Office Cleaning
                      </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <a
                        href="#"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontSize: "16px",
                        }}
                      >
                        Striping & Sealing
                      </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <a
                        href="#"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontSize: "16px",
                        }}
                      >
                        Carpet Cleaning
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontSize: "16px",
                        }}
                      >
                        Pressure Washing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="col-lg-3 col-sm-6">
                <div className="footer-box-layout1">
                  <div className="footer-title">
                    <h4 style={whiteText}>QUICK LINKS</h4>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: "10px" }}>
                      <a
                        href="/"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontSize: "16px",
                        }}
                      >
                        Home
                      </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <a
                        href="/about"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontSize: "16px",
                        }}
                      >
                        About Us
                      </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <a
                        href="/gallery"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontSize: "16px",
                        }}
                      >
                        Gallery
                      </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <a
                        href="/blog"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontSize: "16px",
                        }}
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontSize: "16px",
                        }}
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Section */}
              <div className="col-lg-3 col-sm-6">
                <div className="footer-box-layout1">
                  <div className="footer-title">
                    <h4 style={whiteText}>CONTACT US</h4>
                  </div>
                  <ul
                    className="footer-menu-list"
                    style={{ listStyle: "none", padding: 0 }}
                  >
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        marginBottom: "10px",
                      }}
                    >
                      <i
                        className="fas fa-phone"
                        style={{ marginRight: "10px", fontSize: "16px" }}
                      />
                      <span>1300 757 015</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        marginBottom: "10px",
                      }}
                    >
                      <i
                        className="fas fa-envelope"
                        style={{ marginRight: "10px", fontSize: "16px" }}
                      />
                      <a
                        href="mailto:info@wilshinecleaning.com.au"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        info@wilshinecleaning.com.au
                      </a>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        marginBottom: "10px",
                      }}
                    >
                      {/* facebook */}
                      <i
                        className="fab fa-facebook"
                        style={{ marginRight: "10px", fontSize: "16px" }}
                      />
                      <a
                        href="https://www.facebook.com/profile.php?id=61575956704632"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Wilshine Cleaning Services
                      </a>
                    </li>
                    {/* insta */}
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      <i
                        className="fab fa-instagram"
                        style={{ marginRight: "10px", fontSize: "16px" }}
                      />
                      <a
                        href="https://www.instagram.com/wilshinecleaning/"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        @wilshine_cleaning_services
                      </a>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      <i
                        className="fas fa-clock"
                        style={{ marginRight: "10px", fontSize: "16px" }}
                      />
                      <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom-box">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright" style={whiteText}>
                  © {currentYear} All rights reserved | Designed & Developed by
                  <a
                    href="https://buildzoneit.com/"
                    style={{ ...whiteText, fontWeight: "bold" }}
                  >
                    {" "}
                    BuildZone IT
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-bottom-menu">
                  <ul>
                    <li>
                      <button
                        className="btn btn-link p-0"
                        onClick={handleShow}
                        style={whiteText}
                      >
                        Privacy Policy
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: "pre-wrap" }}>
          <strong>Who we are</strong>
          {"\n"}Suggested text: Our website address is:
          https://wilshinepropertyservices.com.au.
          {"\n\n"}
          <strong>Comments</strong>
          {"\n"}Suggested text: When visitors leave comments on the site we
          collect the data shown in the comments form...
          {"\n\n"}
          <strong>Media</strong>
          {"\n"}Suggested text: If you upload images to the website, you should
          avoid uploading images with embedded location data...
          {"\n\n"}
          <strong>Cookies</strong>
          {"\n"}Suggested text: If you leave a comment on our site you may
          opt-in to saving your name, email...
          {"\n\n"}
          <strong>Embedded content from other websites</strong>
          {"\n"}Suggested text: Articles on this site may include embedded
          content...
          {"\n\n"}
          <strong>Who we share your data with</strong>
          {"\n"}Suggested text: If you request a password reset, your IP address
          will be included...
          {"\n\n"}
          <strong>How long we retain your data</strong>
          {"\n"}Suggested text: If you leave a comment, the comment and its
          metadata are retained indefinitely...
          {"\n\n"}
          <strong>What rights you have over your data</strong>
          {"\n"}Suggested text: If you have an account on this site, or have
          left comments...
          {"\n\n"}
          <strong>Where your data is sent</strong>
          {"\n"}Suggested text: Visitor comments may be checked through an
          automated spam detection service.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Footer;
