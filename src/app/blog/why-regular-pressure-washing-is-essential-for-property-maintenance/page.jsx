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
                      When it comes to property maintenance, most people think
                      about landscaping, painting, or fixing gutters — but one
                      powerful, often-overlooked method to protect and enhance
                      your home or commercial property is pressure washing.
                      Whether you're a homeowner or a business owner, regular
                      pressure washing offers a fast, affordable way to keep
                      your property looking great and lasting longer. Here’s why
                      it should be part of your routine maintenance plan.
                    </p>

                    <h3 className="font-semibold pt-4">
                      🧼 1. Enhance Curb Appeal Instantly
                    </h3>
                    <p>
                      First impressions matter. A clean, fresh exterior makes
                      your property look more inviting — whether you're
                      welcoming guests, customers, or potential buyers. Pressure
                      washing removes years of built-up dirt, mould, stains, and
                      grime from:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Driveways and sidewalks</li>
                      <li>Exterior walls and facades</li>
                      <li>Fences and gates</li>
                      <li>Decks and patios</li>
                    </ul>

                    <h3 className="font-semibold pt-4">
                      🦠 2. Prevent Mould, Algae, and Mildew Buildup
                    </h3>
                    <p>
                      Mould and algae not only make surfaces slippery and
                      unattractive — they can also cause long-term damage.
                      Regular pressure washing prevents these from taking hold,
                      especially in damp or shaded areas, helping maintain both
                      safety and structural integrity.
                    </p>

                    <h3 className="font-semibold pt-4">
                      🛠️ 3. Extend the Life of Your Surfaces
                    </h3>
                    <p>
                      Over time, dirt and grime can degrade paint, wood, and
                      concrete. By cleaning these surfaces regularly, you’re not
                      just improving how they look — you’re also extending their
                      life and delaying costly repairs or replacements.
                    </p>

                    <h3 className="font-semibold pt-4">
                      🏠 4. Prepare Surfaces for Painting or Sealing
                    </h3>
                    <p>
                      Planning to paint or seal your home’s exterior, deck, or
                      driveway? Pressure washing is the best way to prepare the
                      surface. It ensures that paint and sealants adhere
                      properly and last longer, providing a smoother finish and
                      better protection.
                    </p>

                    <h3 className="font-semibold pt-4">
                      ♻️ 5. Eco-Friendly and Cost-Effective
                    </h3>
                    <p>
                      Professional pressure washing uses the power of water —
                      not harsh chemicals — to clean surfaces. It’s an
                      environmentally responsible solution that saves time,
                      reduces water waste, and avoids the need for expensive
                      cleaning agents or manual scrubbing.
                    </p>

                    <h3 className="font-semibold pt-4">💦 What We Offer</h3>
                    <p>
                      At WilShine Cleaning, we offer high-quality, affordable
                      pressure washing services for residential and commercial
                      properties. Our team is trained, insured, and equipped
                      with professional-grade equipment to deliver safe and
                      effective results. We clean:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Driveways, sidewalks & paths</li>
                      <li>House exteriors & fences</li>
                      <li>Patios, pavers & decks</li>
                      <li>Storefronts & commercial spaces</li>
                    </ul>

                    <p className="font-semibold">
                      📞 Ready to Give Your Property a Fresh Start?
                      <br />
                      Regular pressure washing is a small investment that
                      delivers big results. Contact WilShine Cleaning today for
                      a free quote and let us help you keep your property
                      looking its best, all year round.
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
