"use client";

import React, { useEffect } from "react";
import HomePageSlider from "./HomePageSlider";
import HomeService from "./HomeService";
import CertificateSection from "./CertificateSection";
import Estimate from "./Estimate";
import ProjectsCount from "./ProjectsCount";
import Testominals from "./Testominals";
import HomeBlog from "./HomeBlog";

const Homepage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#estimate-section") {
        const el = document.getElementById("estimate-section");
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 1000);
        }
      }
    }
  }, []);

  return (
    <div>
      <HomePageSlider />
      <CertificateSection />
      <HomeService />
      <Estimate /> {/* Must have id="estimate-section" inside */}
      {/* <ProjectsCount /> */}
      <Testominals />
      <HomeBlog />
    </div>
  );
};

export default Homepage;
