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
                    id="office-productivity-benefits"
                    className=" bg-white text-gray-800 space-y-4"
                  >
                    <p className="text-xl font-semibold">
                      In today’s fast-paced business world, every little
                      advantage counts — and something as simple as a clean,
                      well-organized workspace can make a big difference.
                    </p>
                    <p>
                      While it might seem like a small detail, a clean and
                      organised workplace can directly impact how employees
                      feel, focus, and perform. Here’s how keeping your
                      workplace clean can boost both efficiency and
                      productivity:
                    </p>

                    <h3 className="font-semibold">
                      1. Fewer Distractions = More Focus
                    </h3>
                    <p>
                      A cluttered, messy workspace can lead to mental clutter.
                      When desks are buried under paperwork or common areas are
                      disorganized, it’s harder for employees to concentrate. A
                      clean and tidy office creates a clear, calm environment
                      where staff can focus better and work more efficiently.
                    </p>

                    <h3 className="font-semibold">
                      2. Better Health, Fewer Sick Days
                    </h3>
                    <p>
                      Dust, bacteria, and allergens build up quickly in shared
                      spaces, especially in high-touch areas like doorknobs,
                      keyboards, and kitchens. Regular office cleaning reduces
                      the spread of germs and helps keep your team healthier.
                      Fewer sick days mean more consistent work output and less
                      disruption to your operations.
                    </p>

                    <h3 className="font-semibold">
                      3. Boosts Morale and Motivation
                    </h3>
                    <p>
                      A fresh, organized workspace creates a more pleasant
                      atmosphere. Employees are more likely to feel motivated
                      and take pride in their work when the environment around
                      them feels cared for. Clean spaces can also improve mood
                      and lower stress levels — both essential for productivity.
                    </p>

                    <h3 className="font-semibold">
                      4. Saves Time and Improves Efficiency
                    </h3>
                    <p>
                      Time spent looking for misplaced items, documents, or
                      supplies is time wasted. A tidy workplace ensures that
                      everything is where it should be, allowing employees to
                      work faster and more efficiently without unnecessary
                      interruptions or frustration.
                    </p>

                    <h3 className="font-semibold">
                      5. Leaves a Positive Impression on Clients
                    </h3>
                    <p>
                      Your office is a reflection of your business. A clean,
                      professional-looking space builds trust and confidence
                      with clients, customers, and business partners. First
                      impressions matter — and a tidy office shows that you’re
                      organized, detail-oriented, and serious about your work.
                    </p>

                    <h3 className="font-semibold">
                      6. Supports Better Organization and Workflow
                    </h3>
                    <p>
                      Regular cleaning goes hand-in-hand with good organization.
                      A well-maintained office naturally encourages better
                      workflow, where files are in order, equipment is
                      functioning, and spaces are optimized for productivity.
                      It’s easier for teams to collaborate and get things done
                      efficiently.
                    </p>

                    <h3 className="font-semibold pt-4">Final Thoughts</h3>
                    <p>
                      Investing in professional office cleaning services isn’t
                      just about appearance — it’s about creating a healthy,
                      efficient, and motivating environment for your team. At
                      WilShine Cleaning, we specialize in commercial cleaning
                      for offices & we can offer tailored office cleaning
                      services designed to support your business goals.
                    </p>

                    <p className="font-semibold">
                      Ready to create a cleaner, more productive workspace?
                      <br />
                      Contact us today for a free quote and let’s make your
                      office shine!
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
