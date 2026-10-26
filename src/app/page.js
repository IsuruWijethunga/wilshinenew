import Head from "next/head";
import Homepage from "../Component/Homepage";
import Script from "next/script";

export const metadata = {
  title: "Top Commercial & Residential Cleaning Services in Perth",
  description:
    "Discover Wilshine Cleaning best commercial and residential cleaning services in Perth. Enjoy a spotless environment with our expert team. Get a Quote today!",
  keywords: [
    "commercial cleaning services in perth",
    "residential cleaning services in perth",
  ],
};

export default function Home() {
  return (
    <>
      {/* add meta tag */}
      <Head>
        <title>Top Commercial & Residential Cleaning Services in Perth</title>
        <meta
          name="description"
          content="Discover Wilshine Cleaning best commercial and residential cleaning services in Perth. Enjoy a spotless environment with our expert team. Get a Quote today!"
        />
        <meta
          name="keywords"
          content="commercial cleaning services in perth, residential cleaning services in perth"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wilshinecleaning.com.au/" />
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
      <Homepage />
    </>
  );
}
