"use client";
import React, { useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ = ({ faqs }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const contentRefs = useRef([]);

  useEffect(() => {
    console.log("Active index:", selectedIndex);
  }, [selectedIndex]);

  const handleToggle = (i) => {
    setSelectedIndex((prevIndex) => (prevIndex === i ? -1 : i));
  };

  return (
    <div className="service-faq mb-3">
      <h3 className="item-title ">Frequently Asked Questions (FAQs)</h3>
      <div className="faq-box" style={{ marginTop: "20px" }}>
        <div id="accordion" className="accordion">
          {faqs.map((faq, index) => {
            const isActive = index === selectedIndex;
            const contentRef = contentRefs.current[index];

            return (
              <div key={index} className="card">
                <div className="card-header" id={`heading${index}`}>
                  <h5
                    className="heading-title"
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    onClick={() => handleToggle(index)}
                  >
                    <span>{faq.question}</span>
                    <FiChevronDown
                      style={{
                        transition: "transform 0.3s ease",
                        transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </h5>
                </div>
                <div
                  id={`collapse${index}`}
                  ref={(el) => (contentRefs.current[index] = el)}
                  className={`collapse-wrapper`}
                  style={{
                    maxHeight: isActive
                      ? `${contentRef?.scrollHeight || 0}px`
                      : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                  aria-labelledby={`heading${index}`}
                >
                  <div className="card-body">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
