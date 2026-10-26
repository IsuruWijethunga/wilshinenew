import AboutProcess from "@/Component/AboutProcess";
import Banner from "@/Component/Banner";
import ContactForm from "@/Component/ContactForm";
import FAQ from "@/Component/FAQ";
import BrandArea from "@/Component/BrandArea";
import PricingTable from "@/Component/PricingTable";
import RelatedBlogs from "@/Component/RelatedBlogs";
import React from "react";
import Script from "next/script";
import {
  FaLockOpen,
  FaBroom,
  FaUserShield,
  FaCheckCircle,
  FaUserCheck,
  FaTools,
  FaRegFileAlt,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import Head from "next/head";

export const metadata = {
  title: "Office Cleaning Perth | Office Cleaners | Wilshine Cleaning",
  description:
    "Wilshine Cleaning is a top-rated office cleaning company providing exceptional office cleaning services in Perth, ensuring your workspace is spotless.",
  keywords: ["Office Cleaning Services in perth"],
};
const SingleService = () => {
  const faqData = [
    {
      question: "What types of office cleaning services do you offer?",
      answer:
        "We provide comprehensive office cleaning services, including daily general cleaning, deep cleaning, sanitization, office hygiene services, and common area cleaning such as lobbies and car parks.",
    },
    {
      question: "Do you require long-term contracts?",
      answer:
        "No, we don’t require long-term contracts. We believe our exceptional service quality will retain your trust without binding agreements.",
    },
    {
      question: "Can you create a customized cleaning plan for my office?",
      answer:
        "Yes! We tailor our cleaning services to meet your specific needs. After assessing your workspace, we develop a personalized plan that ensures minimal disruption to your operations.",
    },
    {
      question: "What if we don’t like your service?",
      answer:
        "We conduct regular supervision and inspections after each cleaning session to ensure the highest standards are maintained. If any issues arise, we address them immediately.",
    },
    {
      question: "What are your cleaning hours?",
      answer:
        "We offer flexible scheduling, including after-hours and weekend services, to accommodate your business operations.",
    },
    {
      question: "Are your cleaners insured and trained?",
      answer:
        "Yes, all our staff are fully insured, trained, and experienced to deliver professional cleaning services safely and effectively.",
    },
  ];

  return (
    <div>
      <Head>
        <title>
          Office Cleaning Perth | Office Cleaners | Wilshine Cleaning
        </title>
        <meta
          name="description"
          content="Wilshine Cleaning is a top-rated office cleaning company providing exceptional office cleaning services in Perth, ensuring your workspace is spotless."
        />
        <meta name="keywords" content="Office Cleaning Services in perth" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://wilshinecleaning.com.au/service/office-cleaning"
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
        title={"Office Cleaning Service"}
        path={"/service"}
        pathName={"Services"}
        path2={"/service/office-cleaning"}
        path2Name={"Office Cleaning"}
      />
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-1">
              <div className="single-service-box-layout1">
                <h2 className="service-title">Office Cleaning Service</h2>
                <div className="main-img">
                  <img
                    src="/img/service/officeClean.jpg"
                    alt="Office Cleaning"
                  />
                </div>
                <p>
                  At Wilshine Cleaning Services, we specialize in providing
                  top-notch cleaning solutions exclusively for office buildings.
                  With our unwavering focus on this niche, we’ve mastered the
                  art of maintaining a pristine, professional workspace. Our
                  innovative cleaning techniques, modern equipment, and
                  dedicated team ensure that your workplace stays clean, safe,
                  and welcoming.
                </p>

                <PricingTable
                  details={{
                    pack01: {
                      title: "Small Office Building",
                      price: "$50",
                      unit: "+ GST Per Hour",
                      features: [
                        "Single-story building",
                        "Small warehouse or factory",
                        "Less than 20 employees",
                        "1–3 hours Estimated Time Required",
                      ],
                    },
                    pack02: {
                      title: "Medium Office Building",
                      price: "$50",
                      unit: "+ GST Per Hour",
                      features: [
                        "One or two-story building",
                        "Warehouse and/or factory",
                        "Fewer than 200 employees",
                        "3–6 hours Estimated Time Required",
                      ],
                    },
                    pack03: {
                      title: "Large Office Building",
                      price: "$50",
                      unit: "+ GST Per Hour",
                      features: [
                        "Multi-story building",
                        "With or without a warehouse/factory",
                        "Over 200 employees",
                        "6+ hours Estimated Time Required",
                      ],
                    },
                  }}
                />
                <div className="service-content">
                  <h3>
                    Why Do So Many Companies Choose Our Office Cleaning Service?
                  </h3>
                  <div className="row">
                    {[
                      {
                        icon: <FaLockOpen size={40} color="#287ff9" />,
                        title: "No Lock-In Contracts",
                        desc: "Enjoy complete flexibility—our results earn your trust, not binding agreements.",
                      },
                      {
                        icon: <FaBroom size={40} color="#287ff9" />,
                        title: "Specialized Office Cleaning",
                        desc: "Office cleaning is all we do, so we do it better—no distractions, no dilution.",
                      },
                      {
                        icon: <FaUserShield size={40} color="#287ff9" />,
                        title: "Not a Franchise",
                        desc: "We don’t outsource. Our own vetted staff ensures consistent quality service.",
                      },
                      {
                        icon: <FaCheckCircle size={40} color="#287ff9" />,
                        title: "Quality Checks & Standards",
                        desc: "Daily and fortnightly inspections ensure top-tier cleaning at all times.",
                      },
                      {
                        icon: <FaUserCheck size={40} color="#287ff9" />,
                        title: "Trusted, Police-Cleared Team",
                        desc: "All cleaners are carefully screened and trained for professionalism and trust.",
                      },
                      {
                        icon: <FaTools size={40} color="#287ff9" />,
                        title: "Advanced Equipment",
                        desc: "We use modern, eco-conscious tools for safe and thorough cleaning.",
                      },
                      {
                        icon: <FaRegFileAlt size={40} color="#287ff9" />,
                        title: "Customized Plans",
                        desc: "Every office is different. We create schedules tailored to your needs.",
                      },
                      {
                        icon: <FaUsers size={40} color="#287ff9" />,
                        title: "Reliable, Trained Team",
                        desc: "Our insured professionals show up on time and exceed expectations.",
                      },
                      {
                        icon: <FaShieldAlt size={40} color="#287ff9" />,
                        title: "Health & Safety First",
                        desc: "We prioritize hygiene to reduce germs, allergens, and other hazards.",
                      },
                    ].map((item, index) => (
                      <div className="col-lg-6 col-md-6 mb-4" key={index}>
                        <div className="media align-items-start">
                          <div className="mr-3">{item.icon}</div>
                          <div>
                            <h5 className="mt-0">{item.title}</h5>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 sidebar-break-md sidebar-widget-area">
              <RelatedBlogs category={"office-cleaning"} />
              <ContactForm />
            </div>
          </div>
          <AboutProcess />
          <BrandArea />
          <FAQ faqs={faqData} />
        </div>
      </section>
    </div>
  );
};

export default SingleService;
