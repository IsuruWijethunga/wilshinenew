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
                    className=" space-y-4 bg-white text-gray-800"
                  >
                    <h2 className="text-xl font-semibold">
                      Regular vs Deep Office Cleaning: What’s the Difference?
                    </h2>
                    <p>
                      When it comes to keeping your workplace clean, not all
                      cleaning is created equal. While regular office cleaning
                      is essential for day-to-day hygiene, deep cleaning goes
                      several steps further, targeting areas that often get
                      overlooked. At WillShine Cleaning, we offer both regular
                      and deep cleaning services to meet the unique needs of
                      Perth businesses. Here’s what sets them apart—and why both
                      are important.
                    </p>

                    <h3 className="font-semibold pt-4">
                      🧼 What Is Regular Office Cleaning?
                    </h3>
                    <p>
                      Regular office cleaning refers to the routine maintenance
                      of your workspace to ensure it remains neat, sanitary, and
                      presentable. This is usually done daily or several times a
                      week.
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Emptying bins</li>
                      <li>Vacuuming or mopping floors</li>
                      <li>Cleaning and sanitising bathrooms</li>
                      <li>Wiping down desks and common surfaces</li>
                      <li>Cleaning kitchenettes and break rooms</li>
                      <li>Dusting visible areas</li>
                      <li>Restocking soap, paper towels, and toilet paper</li>
                    </ul>
                    <p>
                      🟢 <strong>Purpose:</strong> Maintain cleanliness, reduce
                      germs, and keep the space pleasant for staff and visitors.
                      <br />
                      🕒 <strong>Frequency:</strong> Daily, 2–3 times weekly, or
                      based on office traffic
                    </p>

                    <h3 className="font-semibold pt-4">
                      🧽 What Is Deep Cleaning?
                    </h3>
                    <p>
                      Deep cleaning is a more intensive process that reaches
                      hidden, hard-to-reach, or neglected areas that regular
                      cleaning often misses. It’s a top-to-bottom refresh of
                      your entire workplace.
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Steam cleaning carpets and upholstered furniture</li>
                      <li>Strip & seal of vinyl floors</li>
                      <li>
                        Pressure washing outdoor areas like entrances and
                        walkways
                      </li>
                      <li>
                        Cleaning behind large furniture and office equipment
                      </li>
                      <li>Dusting vents, ceiling fans, and light fixtures</li>
                      <li>
                        Disinfecting keyboards, telephones, and shared
                        electronics
                      </li>
                      <li>
                        Detailed cleaning of skirting boards, corners, and grout
                        lines
                      </li>
                      <li>Interior window and blind cleaning</li>
                    </ul>
                    <p>
                      🔴 <strong>Purpose:</strong> Remove built-up dirt,
                      bacteria, allergens, and improve the long-term cleanliness
                      and hygiene of the office.
                      <br />
                      📆 <strong>Frequency:</strong> Recommended quarterly or at
                      least twice a year.
                    </p>

                    <h3 className="font-semibold pt-4">
                      🏢 Why Both Cleaning Types Matter
                    </h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>✅ Maintain a professional appearance</li>
                      <li>
                        ✅ Reduce staff sick days caused by germs or allergens
                      </li>
                      <li>
                        ✅ Extend the lifespan of flooring, carpets, and
                        furniture
                      </li>
                      <li>
                        ✅ Prepare for audits, inspections, or high-profile
                        client visits
                      </li>
                      <li>
                        ✅ Promote a healthier and more productive workspace
                      </li>
                    </ul>

                    <h3 className="font-semibold pt-4">
                      ✨ WillShine Cleaning Offers Both – Tailored for Your
                      Business
                    </h3>
                    <p>
                      At WillShine Cleaning, we create cleaning plans that
                      combine both regular and deep cleaning to suit your needs.
                      We also provide strip & seal, carpet cleaning, and
                      pressure washing services to give your business a total
                      refresh. 📍 Servicing commercial properties across Perth,
                      we’re proud to deliver consistent results with attention
                      to detail.
                    </p>
                    <p>
                      <strong>
                        📞 Get in touch today to discuss a custom cleaning
                        solution for your office.
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
