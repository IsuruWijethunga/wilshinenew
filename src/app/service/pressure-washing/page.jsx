import Banner from "@/Component/Banner";
import ContactForm from "@/Component/ContactForm";
import FAQ from "@/Component/FAQ";
import PricingTable from "@/Component/PricingTable";
import RelatedBlogs from "@/Component/RelatedBlogs";
import AboutProcess from "@/Component/AboutProcess";
import React from "react";
import { Button } from "antd";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "Best Pressure Washing Cleaning in Perth | Wilshine Cleaning",
  description:
    "Wilshine Cleaning offers best pressure washing cleaning services in Perth for residential, office & commercial properties. Deep Cleaning Services Contact Us!",
  keywords: ["pressure cleaning services in perth"],
};

const SingleService = () => {
  const pressureWashingFaqs = [
    {
      question: "How often should I pressure wash my home or driveway?",
      answer:
        "We recommend pressure washing your driveway and exterior surfaces at least once a year. However, if you notice heavy buildup of dirt, mold, or algae, more frequent cleaning may be needed to maintain appearance and safety.",
    },
    {
      question: "Is pressure washing safe for all surfaces?",
      answer:
        "Yes! We adjust the pressure and techniques based on the surface we’re cleaning. From concrete to siding, we use the proper methods to ensure thorough cleaning without causing any damage.",
    },
    {
      question: "Do I need to be home during the service?",
      answer:
        "Not necessarily. As long as we have access to the areas being cleaned and a water source, you do not have to be home. We’ll keep you updated and ensure everything is left spotless!",
    },
    {
      question: "What surfaces can you pressure wash?",
      answer:
        "We clean driveways, sidewalks, patios, decks, fences, and more. If you’re unsure about a specific surface, just ask — we’re happy to help!",
    },
    {
      question: "How long does pressure washing take?",
      answer:
        "It depends on the size and condition of the area, but most residential jobs are completed within a few hours. We’ll give you an accurate time estimate before we start.",
    },
    {
      question: "Is your cleaning process eco-friendly?",
      answer:
        "Absolutely! We use environmentally safe cleaning solutions whenever possible to protect your property, your family, and the environment.",
    },
    {
      question: "How should I prepare my home or driveway before you arrive?",
      answer:
        "Please move any vehicles, furniture, or fragile items from the areas to be cleaned. We’ll handle the rest!",
    },
    {
      question: "Do you offer free estimates?",
      answer:
        "Yes, we offer free, no-obligation estimates for all our services. Contact us today to schedule yours!",
    },
  ];

  return (
    <div>
      <Head>
        <title>
          Best Pressure Washing Cleaning in Perth | Wilshine Cleaning
        </title>
        <meta
          name="description"
          content="Wilshine Cleaning offers best pressure washing cleaning services in Perth for residential, office &
          commercial properties. Deep Cleaning Services Contact Us!"
        />
        <meta name="keywords" content="pressure cleaning services in perth" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://wilshinecleaning.com.au/service/pressure-washing"
        />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17199478404"
      />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17199478404');
          `}
      </Script>
      <Banner
        title={"Wilshine Pressure Washing Service"}
        path={"/service"}
        pathName={"Services"}
        path2={"/service/pressure-washing"}
        path2Name={"Pressure Washing"}
      />
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-1">
              <div className="single-service-box-layout1">
                <h2 className="service-title">
                  Wilshine Pressure Washing Services
                </h2>
                <p style={{ textAlign: "justify" }}>
                  At Wilshine Cleaning Services, we specialize in high-quality
                  pressure washing to bring new life to your home or business.
                  Whether it’s driveways, patios, siding, or walkways, our team
                  is committed to delivering outstanding results with care and
                  precision. Quality and customer service are our top priorities
                  — we’re not satisfied until you are!
                </p>
                <div className="main-img">
                  <img
                    src="/img/service/pressure.webp"
                    alt="Kitchen Cleaning"
                  />
                </div>
                <div className="service-content">
                  <div className="why-choose mt-4">
                    <h3 className="item-title mb-3">
                      Why Choose Wilshine Pressure Cleaning Services
                    </h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h4 className="item-title">
                              Quality Work Every Time
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                              We take pride in delivering top-notch pressure
                              cleaning results that make your property shine. No
                              shortcuts — just great work you can trust.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h4 className="item-title">
                              Customer Service First
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                              Your satisfaction is our priority. We listen,
                              care, and go the extra mile to make sure you’re
                              happy with every job.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h4 className="item-title">
                              Experienced and Reliable Team
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                              Our trained professionals use the best techniques
                              to safely and effectively clean your surfaces,
                              arriving on time and ready to work.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h4 className="item-title">
                              Eco-Friendly Solutions
                            </h4>
                            <p style={{ textAlign: "justify" }}>
                              We use safe, environmentally friendly cleaning
                              products whenever possible to protect your home,
                              family, and the planet.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h4 className="item-title">Competitive Pricing</h4>
                            <p style={{ textAlign: "justify" }}>
                              High-quality service doesn’t have to break the
                              bank. We offer fair, transparent pricing with no
                              hidden fees.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-more-content mt-5">
                    <h3 className="item-title">Our Services</h3>
                    <div className="row mt-4">
                      {/* Driveway Cleaning */}
                      <div className="col-md-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div
                            className="card-img-top"
                            style={{
                              height: "180px",
                              backgroundColor: "#f0f0f0",
                            }}
                          >
                            <img
                              src="/img/service/Driveway.webp"
                              alt="Driveway Cleaning"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="mt-3 p-2">
                            <h6 className="card-title text-primary font-weight-bold d-flex justify-content-center">
                              Driveway Cleaning
                            </h6>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              Remove years of grime, oil stains, and dirt from
                              your driveway. We restore curb appeal with deep
                              power washing.
                            </p>
                            <ul className="list-unstyled mb-0 d-flex flex-column justify-items-center align-items-center">
                              <li
                                className={
                                  "d-flex mb-0 flex-column justify-items-center align-items-center"
                                }
                              >
                                <strong>Small/Medium Driveway:</strong>
                                <span className={"item-currency2"}>
                                  $150 – $350
                                </span>
                              </li>
                              <li
                                className={
                                  "d-flex mb-0 flex-column justify-items-center align-items-center"
                                }
                              >
                                <strong>Large Driveway:</strong>
                                <span className={"item-currency2"}>
                                  $300 – $700
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div
                            style={{ height: "100%" }}
                            className="d-flex align-items-end"
                          >
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
                                margin: "5px",
                              }}
                            >
                              Enquire Now
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div
                            className="card-img-top"
                            style={{
                              height: "180px",
                              backgroundColor: "#f0f0f0",
                            }}
                          >
                            <img
                              src="/img/service/Patio.webp"
                              alt="Patio & Deck Cleaning"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="mt-3 p-2">
                            <h6 className="card-title text-primary font-weight-bold d-flex justify-content-center">
                              Patio & Deck Cleaning
                            </h6>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              Bring back the beauty of your patio or timber deck
                              with safe, effective cleaning that removes moss,
                              mildew, and discoloration.
                            </p>
                            <ul className="list-unstyled mb-0 d-flex flex-column justify-items-center align-items-center">
                              <li className="d-flex mb-0 flex-column justify-items-center align-items-center">
                                <strong>Patio Clean:</strong>
                                <span className="item-currency2">
                                  $150 – $350
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div
                            style={{ height: "100%" }}
                            className="d-flex align-items-end"
                          >
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
                                margin: "5px",
                              }}
                            >
                              Enquire Now
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Pool Area Cleaning */}
                      <div className="col-md-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div
                            className="card-img-top"
                            style={{
                              height: "180px",
                              backgroundColor: "#f0f0f0",
                            }}
                          >
                            <img
                              src="/img/service/pool.webp"
                              alt="Pool Area Cleaning"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="mt-3 p-2">
                            <h6 className="card-title text-primary font-weight-bold d-flex justify-content-center">
                              Pool Area Cleaning
                            </h6>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              Keep your poolside clean and slip-free with our
                              specialized surface treatments and pressure
                              washing.
                            </p>
                            <ul className="list-unstyled mb-0 d-flex flex-column justify-items-center align-items-center">
                              <li className="d-flex mb-0 flex-column justify-items-center align-items-center">
                                <strong>Pool Deck:</strong>
                                <span className="item-currency2">
                                  $150 – $350
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div
                            style={{ height: "100%" }}
                            className="d-flex align-items-end"
                          >
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
                                margin: "5px",
                              }}
                            >
                              Enquire Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <PricingTable
                    details={{
                      pack01: {
                        title: "Empty",
                        price: "$100",
                        unit: "Start From",
                        features: [
                          "1 Bedroom - $100",
                          "2 Bedroom - $120",
                          "3 Bedroom - $150",
                          "4 Bedroom - $175",
                        ],
                      },
                      pack02: {
                        title: "Furnished",
                        price: "$110",
                        unit: "Start From",
                        features: [
                          "1 Bedroom - $110",
                          "2 Bedroom - $130",
                          "3 Bedroom - $165",
                          "4 Bedroom - $180",
                        ],
                      },
                      pack03: {
                        title: "Furnished/ Unfurnished",
                        price: "$3.00",
                        unit: "per sqm",
                        features: [
                          "Upto 100sqm - $3/sqm",
                          "101-200sqm - $2.75/sqm",
                          "201-300sqm - $2.50/sqm",
                          "Over 300sqm - $2.25/sqm",
                        ],
                      },
                    }}
                  /> */}
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4 order-lg-2 sidebar-break-md sidebar-widget-area">
              <RelatedBlogs category={"pressure-washing"} />
              <ContactForm />
            </div>
            {/* END SIDEBAR */}
          </div>
          <AboutProcess />
          {/* <Testominals /> */}
          <FAQ faqs={pressureWashingFaqs} />
        </div>
      </section>
    </div>
  );
};

export default SingleService;
