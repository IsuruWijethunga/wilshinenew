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
                  <section id="office-cleaning-section" className="space-y-4">
                    <p>
                      When your carpets start to look dull or smell musty, it’s
                      tempting to grab a rental machine or a store‑bought
                      cleaner and tackle the job yourself. While DIY carpet
                      cleaning might seem like a cost‑saving solution, the
                      results often don’t match what a trained professional can
                      deliver.
                    </p>

                    <p>
                      At Wilshine Cleaning, we’ve seen the difference firsthand.
                      Let’s break down the facts so you can make the best
                      decision for your home and your carpets.
                    </p>

                    <h4 className="font-semibold">
                      What DIY Carpet Cleaning Offers
                    </h4>
                    <ul className="list-disc ml-5">
                      <li>
                        <strong>Convenient:</strong> Rent or buy a machine to
                        use whenever you like.
                      </li>
                      <li>
                        <strong>Affordable up‑front:</strong> Lower initial cost
                        than hiring pros.
                      </li>
                      <li>
                        <strong>Good for spot cleaning:</strong> Handy for minor
                        stains or quick touch‑ups.
                      </li>
                    </ul>
                    <p>But DIY has drawbacks for full, deep cleans.</p>

                    <h4 className="font-semibold">
                      The Limitations of DIY Carpet Cleaning
                    </h4>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>
                        <strong>❌ Weaker Equipment = Weaker Results:</strong>{" "}
                        Rental units can’t reach deep‑down dirt, allergens, and
                        bacteria.
                      </li>
                      <li>
                        <strong>❌ Over‑wetting & Slow Drying:</strong> Extra
                        moisture can cause
                        <ul className="list-disc ml-5">
                          <li>Long dry times</li>
                          <li>Musty odours</li>
                          <li>Mould under the carpet</li>
                        </ul>
                      </li>
                      <li>
                        <strong>❌ Inconsistent Cleaning:</strong> Missed spots,
                        over‑soaking, or wrong solutions can damage fibres or
                        set stains.
                      </li>
                    </ul>

                    <h4 className="font-semibold">
                      The Wilshine Cleaning Difference
                    </h4>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>
                        <strong>✅ High‑Powered Equipment:</strong> Industrial
                        extractors remove embedded dirt and moisture.
                      </li>
                      <li>
                        <strong>✅ Trained Technicians:</strong> We match the
                        method to your carpet and treat stains correctly.
                      </li>
                      <li>
                        <strong>✅ Faster Dry Time:</strong> Superior suction
                        means carpets dry in 2–6 hours, not days.
                      </li>
                      <li>
                        <strong>✅ Longer‑Lasting Results:</strong> Professional
                        cleaning preserves colour, softness, and lifespan.
                      </li>
                    </ul>

                    <h4 className="font-semibold">
                      DIY vs. Professional Carpet Cleaning
                    </h4>
                    <table className="w-full border border-gray-300 text-left">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-2 border">Feature</th>
                          <th className="p-2 border">DIY</th>
                          <th className="p-2 border">Professional</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 border">Cleaning Power</td>
                          <td className="p-2 border">Low–Moderate</td>
                          <td className="p-2 border">High</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">Dry Time</td>
                          <td className="p-2 border">6–24 h+</td>
                          <td className="p-2 border">2–6 h</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">Stain Removal</td>
                          <td className="p-2 border">Inconsistent</td>
                          <td className="p-2 border">Effective</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">Risk of Mould</td>
                          <td className="p-2 border">Higher</td>
                          <td className="p-2 border">Very Low</td>
                        </tr>
                        <tr>
                          <td className="p-2 border">Cost</td>
                          <td className="p-2 border">Lower up‑front</td>
                          <td className="p-2 border">Better value long‑term</td>
                        </tr>
                      </tbody>
                    </table>

                    <h4 className="font-semibold">
                      Save Time, Get Results: Go&nbsp;Pro with
                      Wilshine&nbsp;Cleaning
                    </h4>
                    <p>
                      DIY works for quick spills, but it can’t match a
                      professional deep clean. Don’t risk mould, missed dirt, or
                      wasted effort—let Wilshine do it right.
                    </p>

                    <p>
                      <strong>
                        🧼 Ready to experience the Wilshine difference?
                      </strong>
                      <br />
                      Contact us today to book your professional carpet‑cleaning
                      appointment and enjoy fresher carpets—without the hassle.
                    </p>
                    <p>
                      <strong>
                        For a quote, visit Wilshine&nbsp;Cleaning&nbsp;Services
                        or call 0433&nbsp;691&nbsp;812.
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
