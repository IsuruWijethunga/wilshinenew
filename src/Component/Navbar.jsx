"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { MdAccessTime, MdCall, MdOutlineEmail } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const placeholderRef = useRef(null);
  const menuRef = useRef(null);
  const topbarRef = useRef(null);
  const middlebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!menuRef.current || !placeholderRef.current) return;

      const topbarHeight = topbarRef.current?.offsetHeight || 0;
      const middlebarHeight = middlebarRef.current?.offsetHeight || 0;
      const targetScroll = topbarHeight + middlebarHeight;
      const scrollY = window.scrollY;

      if (scrollY > targetScroll) {
        if (!isSticky) setIsSticky(true);
        placeholderRef.current.style.height = `${menuRef.current.offsetHeight}px`;
      } else {
        if (isSticky) setIsSticky(false);
        placeholderRef.current.style.height = "0px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky]);
  return (
    <header className="header" style={{ zIndex: 999 }}>
      <div
        id="header-middlebar"
        ref={middlebarRef}
        className="header-middlebar-layout1"
      >
        <div style={{ width: "95%", margin: "0 auto" }}>
          <div className="row d-flex align-items-center">
            <div className="col-lg-3">
              <div className="logo-area">
                <a href="/" className="temp-logo">
                  <img
                    src="/img/wilshinelogohorizontal.png"
                    style={{ height: "80px", width: "auto" }}
                    alt="logo"
                    // className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-9 d-flex justify-content-end">
              <div className="middlebar-content">
                <ul style={{ marginBottom: "0px" }}>
                  <li>
                    <div className="item-icon">
                      <FaLinkedinIn size={42} color="#287FF9" />
                    </div>
                    <div className="item-content">
                      <div className="item-title">LinkedIn</div>
                      <div className="item-subtitle">
                        <a
                          href="https://www.linkedin.com/company/106749387/admin/dashboard/"
                          target="_blank"
                        >
                          Wilshine Cleaning Service
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-icon">
                      <RiFacebookCircleLine size={45} color="#287FF9" />
                    </div>
                    <div className="item-content">
                      <div className="item-title">Facebook</div>
                      <div className="item-subtitle">
                        <a
                          href="https://www.facebook.com/profile.php?id=61575956704632"
                          target="_blank"
                        >
                          Wilshine Cleaning Service
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-icon">
                      {/* <i className="fa fa-envelope-o" /> */}
                      <MdOutlineEmail size={45} color="#287FF9" />
                    </div>
                    <div className="item-content">
                      <div className="item-title">E-mail Us</div>
                      <div className="item-subtitle">
                        <a href="mailto:info@wilshinecleaning.com.au">
                          info@wilshinecleaning.com.au
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-icon">
                      <MdCall size={45} color="#287FF9" />
                    </div>
                    <div className="item-content">
                      <div className="item-title">Quick Contact</div>
                      <div className="item-subtitle">
                        <a href="tel:1300757015">1300 757 015</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rt-sticky-placeholder" ref={placeholderRef} />
      <div
        id="header-menu"
        ref={menuRef}
        className={`header-menu menu-layout3 ${isSticky ? "rt-sticky" : ""}`}
      >
        <div
          className="bg-Primary "
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ width: "80%" }}
          >
            <div className="col-lg-9 d-flex justify-content-start position-static">
              <nav id="dropdown" className="template-main-menu">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/service/office-cleaning">Office Cleaning</a>
                  </li>
                  <li>
                    <a href="/service">Services</a>
                    <ul className="dropdown-menu-col-1">
                      <li>
                        <a href="/service/office-cleaning">Office Cleaning</a>
                        <a href="/service/stripping-and-sealing">
                          Stripping & Sealing
                        </a>
                        <a href="/service/carpet-cleaning">Carpet Cleaning</a>
                        <a href="/service/pressure-washing">Pressure Washing</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="/blog">Blogs</a>
                    {/* <ul className="dropdown-menu-col-1">
                        <li>
                          <a href="/blog/cleaning-hacks">Cleaning Hacks</a>
                        </li>
                        <li>
                          <a href="/blog/why-choose-local-company">
                            Why Choose Local Company
                          </a>
                        </li>
                        <li>
                          <a href="/blog/cleaning-perth">Cleaning Perth</a>
                        </li>
                      </ul> */}
                  </li>

                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 d-flex justify-content-end align-items-center">
              <div className="header-action-layout1">
                <ul>
                  <li className="header-action-btn">
                    <a href="/#estimate-section" className="item-btn">
                      <i className="fas fa-bell" />
                      Get A Quote
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
