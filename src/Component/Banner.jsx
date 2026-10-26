"use client";
import React, { useEffect, useState } from "react";

const Banner = ({ title, path, pathName, path2, path2Name }) => {
  useEffect(() => {
    // Manually set background-image if needed
    const section = document.querySelector(".inner-page-banner.bg-common");
    if (section && section.dataset.bgImage) {
      section.style.backgroundImage = `url(${section.dataset.bgImage})`;
    }
  }, []);
  const [bgImage, setBgImage] = useState("/img/figure/breadcumba.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgImage("/img/figure/bsmobile.png");
      } else {
        setBgImage("/img/figure/newbanner_lg2.png");
      }
    };

    handleResize(); // Set initial image
    window.addEventListener("resize", handleResize); // Update on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section
        className="inner-page-banner bg-common"
        style={{
          width: "100%",
          height: "50px",
          backgroundSize: "cover",
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area d-flex flex-column align-items-center justify-content-center">
                <h1 className="banner-title">{title}</h1>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  {path && (
                    <li>
                      <a href={path}>&nbsp;{pathName}</a>
                    </li>
                  )}
                  {path2 && (
                    <li>
                      <a href={path2}>&nbsp;{path2Name}</a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
