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
                      First impressions matter—especially in business. Whether
                      you're welcoming clients, customers, or employees, the
                      exterior of your building says a lot about your
                      professionalism. Over time, dirt, oil, mould, and stains
                      can build up on driveways, footpaths, walls, and signage,
                      leaving your property looking tired and neglected. The
                      good news? With professional pressure washing services,
                      you can dramatically improve your business’s curb appeal
                      in just minutes. At WillShine Cleaning, we help Perth
                      businesses restore their exteriors quickly, safely, and
                      effectively.
                    </p>

                    <h3 className="font-semibold pt-4">
                      💦 What Is Pressure Washing?
                    </h3>
                    <p>
                      Pressure washing (also known as power washing) uses
                      high-powered water jets to remove stubborn grime, dirt,
                      algae, and stains from outdoor surfaces. It’s one of the
                      fastest and most effective ways to restore the look of
                      concrete, brick, asphalt, and more.
                    </p>

                    <h3 className="font-semibold pt-4">
                      🧱 What Can Be Pressure Washed?
                    </h3>
                    <p>
                      Pressure washing is ideal for a wide range of business
                      exteriors and surfaces, including:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Car parks & driveways</li>
                      <li>Footpaths & entryways</li>
                      <li>Exterior walls & signage</li>
                      <li>Loading bays & service areas</li>
                      <li>Outdoor seating areas</li>
                      <li>Dumpster zones</li>
                      <li>Shopfronts & awnings</li>
                    </ul>

                    <h3 className="font-semibold pt-4">
                      ✨ How Pressure Washing Boosts Your Business Image
                    </h3>
                    <ul className="list-disc ml-5 space-y-2">
                      <li>
                        <strong>✅ Instant Curb Appeal:</strong> Clean surfaces
                        make your property look newer, more inviting, and better
                        maintained. This is especially important for retail
                        stores, office buildings, and hospitality businesses.
                      </li>
                      <li>
                        <strong>✅ Protects Your Property:</strong> Built-up
                        dirt, mould, and algae don’t just look bad—they can
                        erode materials over time. Regular pressure washing
                        helps extend the lifespan of concrete, brick, and
                        painted surfaces.
                      </li>
                      <li>
                        <strong>✅ Improves Safety:</strong> Removing slippery
                        moss, oil stains, and debris reduces the risk of slips
                        and falls for staff and visitors.
                      </li>
                      <li>
                        <strong>
                          ✅ Prepares Surfaces for Painting or Sealing:
                        </strong>{" "}
                        If you're planning to paint, reseal, or resurface your
                        exteriors, pressure washing is the essential first step
                        for a smooth, long-lasting finish.
                      </li>
                    </ul>

                    <h3 className="font-semibold pt-4">
                      🧼 Why Choose WillShine Cleaning for Your Pressure
                      Washing?
                    </h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>✅ Commercial-grade pressure washing equipment</li>
                      <li>
                        ✅ Eco-friendly methods that are safe for your surfaces
                        and the environment
                      </li>
                      <li>
                        ✅ Flexible scheduling to minimise disruption to your
                        business
                      </li>
                      <li>
                        ✅ Reliable service across Perth for commercial and
                        industrial clients
                      </li>
                    </ul>
                    <p>
                      We also offer office cleaning, carpet cleaning, and strip
                      & seal services, making us your one-stop solution for
                      workplace cleanliness and presentation.
                    </p>

                    <h3 className="font-semibold pt-4">
                      📍 Serving All Business Types
                    </h3>
                    <p>
                      From small storefronts to large corporate buildings, we
                      work with:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Offices</li>
                      <li>Medical centres</li>
                      <li>Retail shops</li>
                      <li>Warehouses</li>
                      <li>Educational facilities</li>
                      <li>Strata & property managers</li>
                    </ul>

                    <p className="font-semibold pt-4">
                      📞 Ready to refresh your business exterior?
                      <br />
                      Contact WillShine Cleaning today for a fast, affordable
                      quote on professional pressure washing.
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
