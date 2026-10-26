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
                    className="p-4 space-y-4 bg-white text-gray-800"
                  >
                    <h2 className="text-xl font-semibold">
                      Professional Carpet Cleaning: A Smart Investment
                    </h2>
                    <p>
                      Many homeowners see carpet cleaning as just another
                      household expense. But what if we told you that
                      professional carpet cleaning isn’t just a cost—it’s an
                      investment? At Wilshine Cleaning, we’ve helped countless
                      clients not only restore the look and feel of their
                      carpets but also save money over time by preventing costly
                      repairs and replacements. Here's how professional carpet
                      cleaning pays off in the long run.
                    </p>

                    <ol className="list-decimal ml-5 space-y-2">
                      <li>
                        <strong>Extends the Life of Your Carpet:</strong> Dirt,
                        dust, and debris act like sandpaper. Professional
                        cleaning removes these particles, preserving your
                        carpet’s appearance.
                        <div className="text-sm">
                          🧼 A well-maintained carpet can last 2–3 times longer
                          than a neglected one.
                        </div>
                      </li>
                      <li>
                        <strong>Prevents Permanent Stains and Damage:</strong>{" "}
                        Professionals treat stains safely and effectively,
                        avoiding permanent damage.
                      </li>
                      <li>
                        <strong>Improves Indoor Air Quality:</strong> Cleaning
                        removes allergens and dust mites, improving
                        health—especially for those with allergies.
                      </li>
                      <li>
                        <strong>Reduces the Risk of Mold and Mildew:</strong>{" "}
                        High-powered machines ensure carpets dry completely,
                        preventing mold growth.
                      </li>
                      <li>
                        <strong>Saves You Time and Effort:</strong> Let the pros
                        handle it quickly and efficiently, giving you back your
                        valuable time.
                      </li>
                      <li>
                        <strong>Boosts Property Value and Appeal:</strong> Clean
                        carpets enhance your home's look, smell, and
                        appeal—great for selling or renting.
                      </li>
                    </ol>

                    <h3 className="font-semibold pt-4">
                      Real Value, Real Results
                    </h3>
                    <table className="w-full border border-gray-300 text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border p-2">Carpet Maintenance</th>
                          <th className="border p-2">Approximate Cost</th>
                          <th className="border p-2">Lifespan Impact</th>
                          <th className="border p-2">Long-Term Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">
                            Professional Cleaning (Annually)
                          </td>
                          <td className="border p-2">$150–$500</td>
                          <td className="border p-2">
                            Extends life by 5–10 years
                          </td>
                          <td className="border p-2">High</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Carpet Replacement</td>
                          <td className="border p-2">$1,500–$5,000</td>
                          <td className="border p-2">
                            Every 7–10 years (without care)
                          </td>
                          <td className="border p-2">Costly</td>
                        </tr>
                        <tr>
                          <td className="border p-2">
                            DIY Cleaning (frequent)
                          </td>
                          <td className="border p-2">$50–$100/rental</td>
                          <td className="border p-2">Minimal impact</td>
                          <td className="border p-2">Risk of damage</td>
                        </tr>
                      </tbody>
                    </table>

                    <h3 className="font-semibold pt-4">
                      Invest in Clean, Save in the Long Run
                    </h3>
                    <p>
                      Whether you’re protecting your carpet, your health, or
                      your time, professional carpet cleaning from Wilshine
                      Cleaning pays for itself over and over again. It’s not
                      just about a clean floor—it’s about smart home care.
                    </p>
                    <p>
                      <strong>
                        📞 Contact Wilshine Cleaning today and schedule your
                        next deep carpet clean.
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
