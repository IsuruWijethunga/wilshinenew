"use client";

import Banner from "../../Component/Banner";
import ContactForm from "@/Component/ContactForm";
import Script from "next/script";

const Contact = () => {
  return (
    <>
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
        title={"Contact Us"}
        path={"/contact"}
        pathName={"Contact"}
        path2={""}
        path2Name={""}
      />
      <section className="section-padding-12-10">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <iframe
                title="Laser Holdings (PVT) Ltd"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.259352667846!2d115.84987341151488!3d-31.9538600223318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bbd4286cd309%3A0xe14ca5cfb17c5dd3!2sWilShine%20Commercial%20Cleaning!5e0!3m2!1sen!2slk!4v1753164446577!5m2!1sen!2slk"
                // width="600" height="450"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
