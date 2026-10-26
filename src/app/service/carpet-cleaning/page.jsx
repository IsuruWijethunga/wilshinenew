import Banner from "@/Component/Banner";
import ContactForm from "@/Component/ContactForm";
import FAQ from "@/Component/FAQ";
import HowItWork from "@/Component/HowItWork";
import PricingTable from "@/Component/PricingTable";
import RelatedBlogs from "@/Component/RelatedBlogs";
import Head from "next/head";
import React from "react";
import Script from "next/script";

export const metadata = {
  title: "Carpet Cleaning Perth | Residential Office & Commercial Cleaners",
  description:
    "Wilshine Cleaning offers best carpet cleaning services in Perth for residential, office and commercial properties, ensuring your carpets are impeccably clean.",
  keywords: [
    "perth commercial carpet cleaning",
    "best office carpet cleaning services",
  ],
};
const SingleService = () => {
  const faqData = [
    {
      question: "How often should I have my carpets professionally cleaned?",
      answer:
        "We recommend professional carpet cleaning every 6 to 12 months, depending on foot traffic, pets, and allergies. Regular cleaning extends the life of your carpet and keeps your indoor environment healthy.",
    },
    {
      question: "How long does it take for carpets to dry after cleaning?",
      answer:
        "Typically, carpets take 4 to 8 hours to dry completely. Drying time can vary based on ventilation, carpet type, and weather. We advise keeping the area well-ventilated to speed up the process.",
    },
    {
      question: "Do you use eco-friendly or safe cleaning products?",
      answer:
        "Yes. At WillShine Cleaning, we use non-toxic, eco-friendly cleaning solutions that are safe for children, pets, and people with allergies.",
    },
    {
      question: "Can carpet cleaning remove all stains?",
      answer:
        "While we can remove most common stains (like coffee, dirt, and pet accidents), some permanent stains (like bleach or dye damage) may not be fully removable. We always do a pre-inspection and discuss stain removal possibilities upfront.",
    },
    {
      question: "Do I need to move furniture before the cleaners arrive?",
      answer:
        "We ask that you remove small and fragile items. Our team can help move light furniture (like chairs or small tables), but for larger items, please let us know in advance so we can plan accordingly.",
    },
  ];

  return (
    <div>
      <Head>
        <title>
          Carpet Cleaning Perth | Residential office & commercial Cleaners
        </title>
        <meta
          name="description"
          content="Wilshine Cleaning offers best carpet cleaning services in Perth for residential, office and commercial properties, ensuring your carpets are impeccably clean."
        />
        <meta
          name="keywords"
          content="perth commercial carpet cleaning, best office carpet cleaning services"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://wilshinecleaning.com.au/service/carpet-cleaning"
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
        title={"Professional Carpet Cleaning"}
        path={"/service"}
        pathName={"Services"}
        path2={"/service/carpet-cleaning"}
        path2Name={"Carpet Cleaning"}
      />
      <section className="mt-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 order-lg-1">
              <div className="single-service-box-layout1">
                <h2 className="service-title">Professional Carpet Cleaning</h2>
                <p>
                  At Wilshine Cleaning Services, we provide top-notch carpet
                  cleaning that leaves your carpets looking fresh and
                  revitalized. Our advanced equipment and non-toxic cleaning
                  solutions ensure a safe and effective clean.
                </p>
                <div className="main-img">
                  <img
                    src="/img/service/carpet-cleaning11.jpg"
                    alt="Carpet Cleaning"
                  />
                </div>
                <div className="service-content">
                  <p>
                    Our team is fully trained, insured, and committed to
                    delivering exceptional service tailored to your specific
                    needs. Whether it’s a cosy home, a busy office, or a
                    high-traffic commercial space, we offer flexible scheduling
                    and meticulous attention to detail.
                  </p>
                  <div className="why-choose">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h3 className="item-title">
                              Remove Allergens & Dust Mites
                            </h3>
                            <p>
                              Thorough cleaning eliminates trapped contaminants,
                              improving indoor health.
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
                            <h3 className="item-title">Improve Air Quality</h3>
                            <p>
                              Fresh carpets contribute to a cleaner and fresher
                              environment.
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
                            <h3 className="item-title">
                              Reduce the Risk of Mould
                            </h3>
                            <p>
                              Fast-drying professional methods help prevent
                              mould and mildew growth.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p>
                    Trust Wilshine Cleaning Services to create a healthier and
                    more inviting environment for your family, employees, and
                    clients.
                  </p>

                  <PricingTable
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
                  />
                  {/* <FAQ faqs={pressureWashingFaqs} /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 sidebar-break-md sidebar-widget-area">
              <RelatedBlogs category={"carpet-cleaning"} />
              <ContactForm />
            </div>
          </div>
          <HowItWork />
          <FAQ faqs={faqData} />
        </div>
      </section>
    </div>
  );
};

export default SingleService;
