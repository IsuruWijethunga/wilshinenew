import Head from "next/head";
import Banner from "../../Component/Banner";
import BlogContent from "../../Component/BlogContent";
import Script from "next/script";

export const metadata = {
  title: "Blogs | Wilshine Residential Cleaning Services Perth",
  description:
    "Learn about tips of office cleaning, carpet cleaning, pressure washing, and more by experts at Wilshine Cleaning blog page. Read more here.",
  keywords: [
    "office cleaning tips",
    "carpet cleaning tips",
    "pressure washing tips",
    "residential cleaning tips",
  ],
};

const Blog = () => {
  return (
    <div>
      <Head>
        <title>Blogs | Wilshine Residential Cleaning Services Perth</title>
        <meta
          name="description"
          content="Learn about tips of office cleaning, carpet cleaning, pressure washing, and more by experts at Wilshine Cleaning blog page. Read more here."
        />
        <meta
          name="keywords"
          content="office cleaning, carpet cleaning, pressure washing, cleaning tips, Wilshine Cleaning blog"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wilshinecleaning.com.au/blog" />
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
        title={"Our Latest Blog"}
        path={"/blog"}
        pathName={"Blog"}
        path2={""}
        path2Name={""}
      />
      <BlogContent />
    </div>
  );
};

export default Blog;
