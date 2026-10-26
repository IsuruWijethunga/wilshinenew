import Banner from "@/Component/Banner";
import ContactForm from "@/Component/ContactForm";
import FAQ from "@/Component/FAQ";
import PricingTable from "@/Component/PricingTable";
import RelatedBlogs from "@/Component/RelatedBlogs";
import AboutProcess from "@/Component/AboutProcess";
import React from "react";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "Professional Floor Striping & Sealing Services | Wilshine Cleaning",
  description:
    "Transform your floors with Wilshine Cleaning's professional striping and sealing services in Perth. Long lasting floor shine and protection. Contact us today!",
  keywords: [
    "floor striping and sealing services",
    "floor striping and sealing in perth",
  ],
};

const SingleService = () => {
  const stripAndSealFaqs = [
    {
      question: "How often do I need to strip & seal my floors?",
      answer:
        "The frequency depends on your floor's purpose, traffic levels, and type. For floors that require a consistently clean and glossy appearance or experience high traffic, we recommend strip and seal treatments every quarter or twice a year. For maintaining fair conditions with average traffic, annual treatments are suitable.",
    },
    {
      question: "How much does strip & seal cost?",
      answer:
        "Costs vary based on floor conditions, type, and specific requirements, making it impractical to provide a general quote. Rest assured, we prioritize competitive pricing without compromising on quality.",
    },
    {
      question: "How long before I can reuse the floor?",
      answer:
        "Ideally, floors should dry for 24 hours or overnight before reuse. However, we strive to minimize downtime while ensuring adequate drying time.",
    },
    {
      question: "How can I request a free quote?",
      answer:
        "Simply fill out the following details, and we'll contact you within 24 hours to schedule a free site visit and provide a quote.",
    },
  ];

  return (
    <div>
      <Head>
        <title>
          Professional Floor striping & sealing Services | Wilshine Cleaning
        </title>
        <meta
          name="description"
          content="Transform your floors with Wilshine Cleaning's professional striping and sealing services in Perth. Long lasting floor shine and protection. Contact us today!"
        />
        <meta
          name="keywords"
          content="floor striping and sealing services, floor striping and sealing in perth"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://wilshinecleaning.com.au/service/stripping-and-sealing"
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
        title={"Strip & Seal Service"}
        path={"/service"}
        pathName={"Services"}
        path2={"/service/stripping-and-sealing"}
        path2Name={"Stripping & Sealing"}
      />
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-1">
              <div className="single-service-box-layout1">
                <h2 className="service-title">Strip & Seal Service</h2>
                <p>
                  Strip & seal is the most effective method to revive your tile,
                  marble, and vinyl floors. Over time, heavy traffic and
                  continuous use can wear down any floor, causing it to lose its
                  original condition. Without proper treatment, this
                  deterioration could lead to costly replacements. However,
                  periodic strip and seal processes can maintain your floors’
                  original condition for many years.
                </p>
                <div className="main-img">
                  <img
                    src="/img/service/stripping.webp"
                    alt="Kitchen Cleaning"
                  />
                </div>
                <div className="service-content">
                  <p>
                    In simple terms, the process involves stripping away layers
                    of grime, cleaning film, or worn sealant from your flooring
                    and resealing the surface. Depending on your floor’s
                    condition and the last time it was treated, the process may
                    vary. If your floors haven’t been stripped and sealed in
                    over two years, they may require special attention,
                    including removing multiple layers of old sealant. We offer
                    instant consultations to assess your floor and determine the
                    necessary treatment.
                  </p>
                  <div className="why-choose">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h3 className="item-title">Restore Floor Beauty</h3>
                            <p>
                              Our strip and seal service brings your floors back
                              to life, restoring their original shine and
                              extending their lifespan with professional care.
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
                            <h3 className="item-title">Tailored Treatments</h3>
                            <p>
                              Every floor is unique. We assess and customize our
                              strip & seal approach based on the specific
                              material and condition of your floors.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Maintaining your floors through strip & seal is a
                    cost-effective alternative to full replacements. With our
                    professional care, your floors will continue to impress
                    guests and staff alike.
                  </p>
                  <div className="service-more-content">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="item-img">
                          <img src="/img/service/stripe.webp" alt="thumb" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="item-content">
                          <h3 className="item-title">
                            Why Strip & Seal Matters
                          </h3>
                          <p>
                            Strip and seal isn’t just about looks — it protects
                            your investment. Regular treatment prevents
                            long-term wear and enhances durability, keeping your
                            floors in peak condition year after year.
                          </p>
                          <ul className="item-feature">
                            <li>Revives worn-out floors</li>
                            <li>Protects against future damage</li>
                            <li>Cost-effective alternative to replacement</li>
                            <li>Enhances overall cleanliness and hygiene</li>
                            <li>Professional-grade materials and techniques</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 sidebar-break-md sidebar-widget-area">
              <RelatedBlogs category={"stripping-and-sealing"} />
              <ContactForm />
            </div>
          </div>
          <PricingTable
            details={{
              pack01: {
                title: "Gold",
                price: "$15.00",
                unit: "m²",
                desc: "Gold Service is our preferred & recommended service: This service offers the best long termresult providing eight coasts of quality sealer which will assist to preserve the viny; floor for longer.",
              },
              pack02: {
                title: "Silver",
                price: "$12.00",

                unit: "m²",
                desc: "Silver Service is an alternative service: This service offers a great result providing five coats of quality sealer which will assist to preserve the vinyl floor.",
              },
              pack03: {
                title: "Bronze",
                price: "$10.00",

                unit: "m²",
                desc: "Bronze Service is a basic service: This service provides a good result offering three coats of quality sealer which will assist to preserve the vinyl floor.",
              },
            }}
          />
          <AboutProcess />
          <FAQ faqs={stripAndSealFaqs} />
          <div className="single-service-box-layout1">
            <div className="service-content"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleService;
