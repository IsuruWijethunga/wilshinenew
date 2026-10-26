import React from "react";
import AboutContent from "../../Component/AboutContent";
import Banner from "../../Component/Banner";
import Team from "../../Component/Team";
import MiddleBanner from "../../Component/MiddleBanner";
import AboutProcess from "../../Component/AboutProcess";
import BrandArea from "@/Component/BrandArea";
import AimVision from "@/Component/Aim&Vision";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "About | Wilshine Cleaning Deep Cleaning Commercial Services",
  description:
    "Wilshine Cleaning company offers a wide range of cleaning services, including residential, commercial, carpet cleaning and more. Get in touch with us.",
};

const About = () => {
  return (
    <div>
      <Head>
        <title>
          About Us | Wilshine Cleaning - Professional Cleaning Services
        </title>
        <meta
          name="description"
          content="Wilshine Cleaning company offers a wide range of cleaning services, including residential, commercial, carpet cleaning and more. Get in touch with us."
        />
        <meta
          name="keywords"
          content="Wilshine Cleaning, about us, professional cleaning services, residential cleaning, commercial cleaning"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wilshinecleaning.com.au/about" />
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
        pathName={"About"}
        title={"About Us"}
        path={"/about"}
        path2={""}
        path2Name={""}
      />
      <AboutContent />
      {/* <Team /> */}
      <AimVision />
      <AboutProcess />
      <MiddleBanner />
      <BrandArea />
    </div>
  );
};

export default About;
