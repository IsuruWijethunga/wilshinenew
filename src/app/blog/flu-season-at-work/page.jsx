"use client";

import Banner from "@/Component/Banner";
import RecentPost from "@/Component/RecentPost";
import React from "react";
import BlogPost from "../../../utils/BlogPost";

const SingleBlog = () => {
  const [currentPath, setCurrentPath] = React.useState("");
  const [item, setItem] = React.useState({});

  React.useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
    BlogPost.map((item) => {
      if (item.path === path) {
        setItem(item);
        return item;
      }
    });
  }, []);
  return (
    <div>
      <Banner
        title={item.shortName}
        pathName={"Blog"}
        path={"/blog"}
        path2={item.path}
        path2Name={item.shortName}
      />
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-blog-box-layout1">
                <div className="main-img">
                  <img src={item.img}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}  alt="blog" />
                </div>
                <div className="item-details">
                  <div className="item-date">
                    <i className="fas fa-calendar-alt" />
                    {item.date}
                  </div>
                  <h2>{item.title}</h2>
                  <div className="entry-meta">
                    <ul>
                      <li className="item-author">
                        <img src="/img/figure/author.png" alt="author" />
                        {item.author}
                      </li>
                    </ul>
                  </div>

                  <section
                    id="office-cleaning-section"
                    className="space-y-4 bg-white text-gray-800"
                  >
                    <p>
                      Winter months often bring a spike in colds, flu, and other
                      illnesses — and in a busy office, it doesn’t take long for
                      those germs to spread. Staff sick days can lead to lost
                      productivity, increased pressure on other team members,
                      and disruptions to your business operations. One of the
                      most effective ways to protect your team and keep your
                      workplace running smoothly during the colder months is by
                      investing in professional office cleaning. Here's how it
                      makes a difference:
                    </p>

                    <h3 className="font-semibold pt-4">
                      1. Thorough Disinfection of High-Touch Surfaces
                    </h3>
                    <p>
                      Germs can live on surfaces like keyboards, phones,
                      doorknobs, and light switches for hours — sometimes even
                      days. Professional cleaners know exactly where to focus
                      and use hospital-grade disinfectants to target these
                      hotspots, reducing the spread of viruses and bacteria in
                      your workplace.
                    </p>

                    <h3 className="font-semibold pt-4">
                      2. Improved Air Quality
                    </h3>
                    <p>
                      Dust, mold, and allergens can build up more easily during
                      winter when windows stay closed and ventilation is
                      limited. Regular vacuuming with HEPA filters and proper
                      dusting can significantly improve indoor air quality,
                      reducing respiratory issues and boosting employee comfort.
                    </p>

                    <h3 className="font-semibold pt-4">
                      3. A Cleaner Kitchen and Bathroom = Fewer Germs
                    </h3>
                    <p>
                      Shared kitchens and restrooms are prime breeding grounds
                      for winter germs. Professional cleaning ensures these
                      areas are sanitized daily, preventing cross-contamination
                      and lowering the risk of staff falling ill.
                    </p>

                    <h3 className="font-semibold pt-4">
                      4. Boosting Immune Systems with a Healthy Environment
                    </h3>
                    <p>
                      A clean workspace reduces stress and supports overall
                      well-being — both of which contribute to a stronger immune
                      system. When your team feels good, they’re more likely to
                      stay healthy and show up to work.
                    </p>

                    <h3 className="font-semibold pt-4">
                      5. Consistent Cleaning Schedule
                    </h3>
                    <p>
                      One-off cleanings don’t offer long-term protection. With a
                      regular professional cleaning schedule in place, you
                      maintain a consistently hygienic environment that keeps
                      illness at bay throughout the entire winter season.
                    </p>

                    <h3 className="font-semibold pt-4">Final Thoughts</h3>
                    <p>
                      Fewer sick days mean better productivity, smoother
                      workflow, and happier staff. By partnering with a reliable
                      commercial cleaning service, you're not just maintaining
                      appearances — you’re actively protecting your team’s
                      health and your business's bottom line. At WilShine
                      Cleaning, we specialise in thorough, reliable office
                      cleaning designed to keep your workplace healthy
                      year-round — especially during cold and flu season.
                    </p>

                    <p className="font-semibold">
                      Ready to protect your team this winter?
                      <br />
                      📞 Get in touch today for a free quote!
                      <br />
                      <a
                        href="https://wilshinecleaning.com.au"
                        className="text-blue-600 underline"
                      >
                        www.wilshinecleaning.com.au
                      </a>
                    </p>
                  </section>
                </div>

                <div className="blog-social-area">
                  <div className="row">
                    <div className="d-flex">
                      <div className="single-post-social">
                        <h5 className="item-title">Share :</h5>
                        <ul>
                          <li>
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=https://wilshinecleaning.com.au${item.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=https://wilshinecleaning.com.au${item.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://wilshinecleaning.com.au${item.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://pinterest.com/pin/create/button/?url=https://wilshinecleaning.com.au${item.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://vimeo.com/share?url=https://wilshinecleaning.com.au${item.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-vimeo-v" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar-break-md sidebar-widget-area">
              <RecentPost />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlog;
