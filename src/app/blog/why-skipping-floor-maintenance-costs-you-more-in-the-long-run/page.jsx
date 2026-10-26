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
                      At first glance, floor maintenance might seem like an
                      optional task—something you can put off until it really
                      needs attention. But the truth is, neglecting routine
                      floor care can lead to costly consequences that go far
                      beyond aesthetics. At Wilshine Cleaning, we’ve seen what
                      happens when floors are ignored for too long—cracks,
                      stains, permanent damage, and even expensive replacements.
                      Here’s why regular floor maintenance (like strip & seal
                      services) is not only smart—it’s essential.
                    </p>

                    <h3 className="font-semibold pt-4">
                      1. Shortened Floor Lifespan
                    </h3>
                    <p>
                      Floors take a beating every day—from foot traffic,
                      furniture, spills, and dust. Without proper maintenance,
                      the protective seal wears away, leaving the surface
                      vulnerable to:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Scratches</li>
                      <li>Staining</li>
                      <li>Discoloration</li>
                      <li>Water damage</li>
                    </ul>
                    <p>
                      Over time, what could have been a simple resealing job
                      becomes a complete floor replacement—which can cost
                      thousands.
                    </p>

                    <h3 className="font-semibold pt-4">
                      2. Permanent Stains and Wear
                    </h3>
                    <p>
                      Dirt, oil, and spills don’t just sit on the surface—they
                      penetrate into unsealed or poorly maintained flooring.
                      Once they seep in, it becomes nearly impossible to remove
                      them without damaging the material. Regular strip & seal
                      creates a protective barrier that prevents this kind of
                      permanent damage.
                    </p>

                    <h3 className="font-semibold pt-4">
                      3. Higher Cleaning Costs Over Time
                    </h3>
                    <p>
                      Dirty, unsealed floors require more frequent deep cleans
                      and aggressive treatments just to look presentable. That
                      means:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>More labor</li>
                      <li>Harsher chemicals</li>
                      <li>More time and expense</li>
                    </ul>
                    <p>
                      Routine maintenance, on the other hand, makes daily
                      cleaning faster and easier—saving time and money in the
                      long run.
                    </p>

                    <h3 className="font-semibold pt-4">
                      4. Health and Safety Risks
                    </h3>
                    <p>
                      Dust, allergens, mold, and bacteria can build up in cracks
                      and worn-down areas, especially in high-traffic zones.
                      This affects not just how your space looks, but how
                      healthy it is. For commercial spaces, neglected floors
                      also become slip hazards—leading to potential injuries and
                      even liability claims.
                    </p>

                    <h3 className="font-semibold pt-4">
                      5. Poor First Impressions
                    </h3>
                    <p>
                      Whether it’s a client walking into your business or guests
                      visiting your home, dull, dirty floors send the wrong
                      message. Floors that look clean, polished, and
                      well-maintained help create a professional, welcoming
                      atmosphere—and they’re much cheaper than a full
                      renovation.
                    </p>

                    <h3 className="font-semibold pt-4">
                      A Small Investment with Big Returns
                    </h3>
                    <p>Here’s a quick comparison:</p>
                    <table className="table-auto w-full text-left border mt-2">
                      <thead>
                        <tr>
                          <th className="border px-4 py-2">Maintenance Type</th>
                          <th className="border px-4 py-2">Average Cost</th>
                          <th className="border px-4 py-2">Lifespan Impact</th>
                          <th className="border px-4 py-2">
                            Long-Term Benefit
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2">
                            Routine Strip & Seal
                          </td>
                          <td className="border px-4 py-2">$150–$500</td>
                          <td className="border px-4 py-2">Adds 5–10 years</td>
                          <td className="border px-4 py-2">High</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">
                            Floor Replacement
                          </td>
                          <td className="border px-4 py-2">$2,000+</td>
                          <td className="border px-4 py-2">Every 7–10 years</td>
                          <td className="border px-4 py-2">Expensive</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">
                            Emergency Repairs
                          </td>
                          <td className="border px-4 py-2">$500–$1,000</td>
                          <td className="border px-4 py-2">Short-term fix</td>
                          <td className="border px-4 py-2">Avoidable</td>
                        </tr>
                      </tbody>
                    </table>

                    <h3 className="font-semibold pt-4">
                      Don’t Wait Until It’s Too Late
                    </h3>
                    <p>
                      Just like your car or roof, your floors need regular care
                      to stay in top condition. By scheduling routine
                      maintenance like strip & seal with Wilshine Cleaning, you:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>✅ Extend the life of your flooring</li>
                      <li>✅ Improve safety and hygiene</li>
                      <li>✅ Save on expensive repairs</li>
                      <li>✅ Enhance your space instantly</li>
                    </ul>

                    <p className="font-semibold">
                      📞 Ready to Protect Your Floors and Your Budget?
                      <br />
                      Contact Wilshine Cleaning today for a no-obligation quote.
                      Let us help you protect your floors before small issues
                      become costly problems.
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
