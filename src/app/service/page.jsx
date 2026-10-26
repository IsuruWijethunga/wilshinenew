import React from "react";
import Banner from "../../Component/Banner";
import Script from "next/script";
import ServiceContent from "../../Component/ServiceContent";
import ServiceBanner from "@/Component/ServiceBanner";

const Service = () => {
  return (
    <div>
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
        title={"Our Services"}
        pathName={"Services"}
        path={"/service"}
        path2={""}
        path2Name={""}
      />
      <ServiceContent />
      <ServiceBanner />
    </div>
  );
};

export default Service;
