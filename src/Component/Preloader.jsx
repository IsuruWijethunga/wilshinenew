"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFading(true);
      // Wait for fade animation to complete before removing from DOM
      setTimeout(() => {
        setIsVisible(false);
      }, 500); // Match this with the transition duration
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: isFading ? 0 : 1,
        transition: "opacity 0.5s ease-out",
      }}
    >
      <img
        src="/img/preloadnew.gif"
        alt="Loading..."
        style={{ width: "250px", height: "250px" }}
      />
    </div>
  );
};

export default Preloader;
