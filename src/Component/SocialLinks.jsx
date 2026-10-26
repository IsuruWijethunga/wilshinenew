import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div
      className="slider-social-icons"
      style={{ display: "flex", gap: "10px" }}
    >
      <a
        href="https://www.facebook.com/profile.php?id=61575956704632"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#003366", fontSize: "24px" }}
      >
        <FaFacebookSquare />
      </a>

      <a
        href="https://www.instagram.com/wilshinecleaning/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#003366", fontSize: "24px" }}
      >
        <FaInstagramSquare />
      </a>
      <a
        href="https://www.linkedin.com/company/106749387/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#003366", fontSize: "24px" }}
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialLinks;
