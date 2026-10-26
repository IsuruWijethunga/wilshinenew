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
                  <img
                    src={item.img}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="blog"
                  />
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
                      When it comes to keeping spaces clean and healthy, not all
                      cleaning jobs are the same. Office cleaning and
                      residential cleaning may seem similar at first glance, but
                      they are actually two very different services, each with
                      its own unique requirements, challenges, and goals.
                      Understanding the differences can help you choose the
                      right service for your needs — whether you’re managing a
                      busy office or maintaining a home.
                    </p>

                    <h3 className="font-semibold pt-4">
                      1. Purpose and Priorities
                    </h3>
                    <p>
                      <strong>Office Cleaning:</strong> Focuses on maintaining a
                      professional, healthy environment for employees, clients,
                      and visitors. It targets high-traffic areas and shared
                      spaces like desks, conference rooms, kitchens, and
                      restrooms.
                    </p>
                    <p>
                      <strong>Residential Cleaning:</strong> Centers around
                      comfort and lifestyle, with more attention to personal
                      items, furniture, bedrooms, and personalized details.
                    </p>

                    <h3 className="font-semibold pt-4">
                      2. Cleaning Equipment and Products
                    </h3>
                    <p>
                      <strong>Office Cleaning:</strong> Uses commercial-grade
                      equipment for efficiency, such as large vacuums, floor
                      polishers, eco-friendly disinfectants, and specialized
                      carpet cleaners.
                    </p>
                    <p>
                      <strong>Residential Cleaning:</strong> Involves lighter,
                      more delicate products to protect furnishings, often
                      accommodating preferences for natural or specific cleaning
                      brands.
                    </p>

                    <h3 className="font-semibold pt-4">
                      3. Frequency and Scheduling
                    </h3>
                    <p>
                      <strong>Office Cleaning:</strong> Typically performed
                      daily or weekly due to high foot traffic, often scheduled
                      after business hours to minimize disruption.
                    </p>
                    <p>
                      <strong>Residential Cleaning:</strong> Usually weekly,
                      bi-weekly, or monthly depending on the homeowner's
                      lifestyle and preferences, with more flexible scheduling.
                    </p>

                    <h3 className="font-semibold pt-4">4. Specific Tasks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold">
                          Office Cleaning typically includes:
                        </p>
                        <ul className="list-disc ml-5 space-y-1">
                          <li>Emptying bins</li>
                          <li>Wiping desks and office equipment</li>
                          <li>Cleaning and sanitizing restrooms</li>
                          <li>Mopping and vacuuming floors</li>
                          <li>Cleaning breakrooms and kitchens</li>
                          <li>
                            Restocking supplies like soap and paper towels
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">
                          Residential Cleaning typically includes:
                        </p>
                        <ul className="list-disc ml-5 space-y-1">
                          <li>Dusting furniture and decor</li>
                          <li>Making beds and changing linens</li>
                          <li>Deep-cleaning kitchens and bathrooms</li>
                          <li>Vacuuming and mopping</li>
                          <li>Laundry services (sometimes)</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="font-semibold pt-4">
                      5. Different Expectations
                    </h3>
                    <p>
                      In an office, the focus is on speed, efficiency, and
                      sanitization — it’s about creating a safe, productive
                      environment. In a home, it’s more personal: attention to
                      detail, organization, and comfort are often key.
                    </p>

                    <h3 className="font-semibold pt-4">Conclusion</h3>
                    <p>
                      Both office and residential cleaning have their own
                      important roles, but they require different approaches. At
                      WilShine Cleaning, we specialize in professional office
                      cleaning tailored to your unique business needs. We
                      understand the importance of a clean, organized workspace
                      — and we’re here to help you make a great impression every
                      day.
                    </p>
                    <p>
                      <strong>
                        📞 Looking for a reliable office cleaning partner?
                        Contact us today for a free quote!
                      </strong>
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
