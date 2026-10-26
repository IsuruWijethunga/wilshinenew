import { Button, Divider } from "antd";
import React from "react";

const PricingTable = ({ details }) => {
  return (
    <div>
      <section className="section-padding-xl  ">
        <div className="container">
          <div className="heading-layout1 mt-5">
            <h2>Pricing Plans</h2>
          </div>
          <div className="row d-flex" style={{ alignItems: "stretch" }}>
            {Object.entries(details).map(([key, pack], index) => (
              <div className="col-lg-4 d-flex" key={key}>
                <div
                  className="pricing-box-layout1 py-3 w-100"
                  style={{
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                    padding: "5px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Content that fills available space */}
                  <div style={{ flexGrow: 1 }}>
                    <div className="item-icon">
                      <i
                        className={`flaticon-clean${
                          index > 0 ? `-${index + 1}` : ""
                        }`}
                        style={{
                          fontSize: "50px",
                          color: "#287ff9",
                        }}
                      ></i>
                    </div>
                    <h5 className="item-title ml-2" style={{ fontSize: "18px" }}>
                      {pack.title}
                    </h5>
                    <Divider />
                    <div className="item-feature">
                      <ul>
                        {pack.features?.map((feature, i) => (
                          <li
                            key={i}
                            style={{
                              textAlign: "left",
                              paddingLeft: "5px",
                              paddingRight: "3px",
                            }}
                            className="text-black-50"
                          >
                            <i className="fas fa-check text-black-50"></i>{" "}
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {pack.desc && <div className="container"  style={{
                        textAlign: "justify",
                      }}>{pack.desc}</div>}
                    </div>
                  </div>
                  <Divider />

                  {/* Price and Button pinned to the bottom */}
                  <div>
                    <div className="item-price">
                      <span className="item-currency">{pack.price}</span>
                      <span className="item-duration">/{pack.unit}</span>
                    </div>
                    <Button
                      href="/contact"
                      type="default"
                      style={{
                        color: "#007bff", // Blue text
                        borderColor: "#007bff",
                        backgroundColor: "#ffffff",
                        borderRadius: "0px",
                        padding: "6px 16px",
                        fontWeight: "500",
                        width: "100%",
                      }}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingTable;
