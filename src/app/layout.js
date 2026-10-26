import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

import "./styles/css/style.css";
import "./styles/css/main.css";
import "./styles/css/bootstrap.min.css";
import "./styles/css/meanmenu.min.css";
import "./styles/css/fontawesome-all.min.css";
import "./styles/css/animate.min.css";
import "./styles/font/flaticon.css";
import "./styles/vendor/slider/css/nivo-slider.css";
import "./styles/vendor/OwlCarousel/owl.carousel.min.css";
import "./styles/vendor/OwlCarousel/owl.theme.default.min.css";
import "./styles/css/select2.min.css";
import "./styles/css/jquery.datetimepicker.css";
import Script from "next/script";
import Preloader from "@/Component/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Wilshine Cleaning Services",
//   description:
//     "Wilshine Cleaning Services is a Perth-based cleaning company that offers a wide range of cleaning services, including residential and commercial cleaning, carpet cleaning, and end-of-lease cleaning. Our team of experienced cleaners is dedicated to providing high-quality service and customer satisfaction.",
//   themeColor: "#ffffff",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Why Choose a Local Cleaning Company | Wilshine Cleaning"
        />
        <meta
          name="twitter:description"
          content="Discover why choosing a local Perth-based cleaning company like Wilshine Cleaning gives you better service, pricing, and results."
        />
        <meta name="twitter:image" content="/img/blog/why.png" />
        <meta
          name="google-site-verification"
          content="vfj_coZU5FdJJkO9yxTrtFU5lXrexf3PjSlCSk5cp1I"
        />
        <link rel="icon" href="/favicon.ico" />


        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Z5XJBFL40X"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Z5XJBFL40X');
    `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Fonts & Layout */}
        <div>
          <Preloader />
          <a
            href="/contact"
            data-type="section-switch"
            className="scrollup mr-5"
          >
            <i className="fa fa-comments"></i>
            <em> Need a Quote?</em>
          </a>
          <a href="#wrapper" data-type="section-switch" className="scrollup">
            <i className="fas fa-angle-double-up"></i>
          </a>
          <div id="wrapper" className="wrapper">
            <Navbar />
            {children}
            <Footer />
          </div>

          {/* Scripts */}

          <Script src="/js/jquery-3.3.1.min.js" />
          <Script src="/js/plugins.js" />
          <Script src="/js/popper.min.js" />
          <Script src="/js/bootstrap.min.js" />
          <Script src="/js/jquery.meanmenu.min.js" />
          <Script src="/vendor/slider/js/jquery.nivo.slider.js" />
          <Script src="/vendor/slider/home.js" />
          <Script src="/vendor/OwlCarousel/owl.carousel.min.js" />
          <Script src="/js/jquery.counterup.min.js" />
          <Script src="/js/waypoints.min.js" />
          <Script src="/js/validator.min.js" />
          <Script src="/js/select2.min.js" />
          <Script src="/js/jquery.datetimepicker.full.min.js" />
          <Script src="/js/main.js" />
          {/* <Script
            src={`https://www.google.com/recaptcha/api.js?render=your_site_key`}
            strategy="beforeInteractive"
          /> */}
        </div>
      </body>
    </html>
  );
}
