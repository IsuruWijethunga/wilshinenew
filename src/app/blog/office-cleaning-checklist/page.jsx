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
                    <p className="text-xl font-semibold">
                      When you hire a professional office cleaning service like
                      WillShine Cleaning, you’re not just paying for someone to
                      take out the trash — you’re investing in a healthier, more
                      productive workspace.
                    </p>
                    <p>
                      But what exactly should be included in your office clean?
                      Whether it's a daily, weekly, or deep clean, here’s a
                      comprehensive checklist outlining what you should expect
                      from your commercial cleaner.
                    </p>

                    <h3 className="font-semibold pt-4">
                      ✅ Daily Office Cleaning Tasks
                    </h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Emptying rubbish bins and replacing liners</li>
                      <li>Wiping down desks and shared surfaces</li>
                      <li>
                        Sanitising door handles, light switches, and phones
                      </li>
                      <li>
                        Cleaning and disinfecting bathrooms (toilets, sinks,
                        mirrors, etc.)
                      </li>
                      <li>Wiping kitchen surfaces and cleaning up spills</li>
                      <li>Sweeping, vacuuming, or mopping all floors</li>
                      <li>Restocking toilet paper, hand towels, and soap</li>
                    </ul>

                    <h3 className="font-semibold pt-4">
                      🧼 Weekly Office Cleaning Tasks
                    </h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Dusting surfaces, blinds, and baseboards</li>
                      <li>Cleaning interior glass (windows, partitions)</li>
                      <li>Vacuuming upholstered furniture</li>
                      <li>
                        Sanitising shared equipment (printers, copiers,
                        telephones)
                      </li>
                      <li>Spot-cleaning walls and marks</li>
                      <li>
                        Emptying and cleaning kitchen appliances like microwaves
                        and fridges
                      </li>
                    </ul>

                    <h3 className="font-semibold pt-4">
                      🧽 Monthly or As-Needed Deep Cleaning Tasks
                    </h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Carpet steam cleaning for high-traffic zones</li>
                      <li>Strip & seal hard floors for shine and protection</li>
                      <li>
                        Pressure washing outdoor surfaces, entryways, and
                        signage
                      </li>
                      <li>Cleaning vents and air conditioning filters</li>
                      <li>
                        Washing exterior windows (if included in the service)
                      </li>
                      <li>
                        Pest control inspections (optional but recommended)
                      </li>
                    </ul>

                    <h3 className="font-semibold pt-4">
                      🏢 Tailored Cleaning for Your Workplace
                    </h3>
                    <p>
                      Every office is different. At WillShine Cleaning, we
                      customise our services based on:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Your industry (medical, corporate, retail, etc.)</li>
                      <li>The number of staff and foot traffic</li>
                      <li>Type of surfaces (carpet, vinyl, tile, etc.)</li>
                      <li>Frequency of client visits or presentations</li>
                    </ul>
                    <p>
                      Our cleaners are fully insured, police-checked, and
                      trained to deliver consistent, high-standard results.
                    </p>

                    <h3 className="font-semibold pt-4">
                      💡 What to Look for in a Professional Office Cleaner
                    </h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Punctuality and reliability</li>
                      <li>Use of eco-friendly and safe products</li>
                      <li>Open communication and regular feedback</li>
                      <li>Professional equipment for efficient cleaning</li>
                      <li>Flexibility to adjust to your schedule or needs</li>
                    </ul>

                    <h3 className="font-semibold pt-4">
                      🧼 Let Your Office Shine with WillShine
                    </h3>
                    <p>
                      Whether you need regular office cleaning, strip & seal
                      services, or pressure washing, we’ve got you covered.
                    </p>
                    <p>
                      📍 Proudly servicing businesses across Perth, we make sure
                      your office always leaves a great impression.
                    </p>
                    <p>
                      <strong>
                        📞 Contact WillShine Cleaning today to book a free quote
                        or customise a cleaning plan for your business!
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
