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
                      Pavers add style, value, and function to your property —
                      whether they’re used on a driveway, patio, pathway, or
                      pool area. But like anything outdoors, they’re exposed to
                      the elements and require regular care to stay looking
                      their best. In this blog post, we’ll share some simple
                      paver maintenance tips and explain how professional
                      pressure washing can help extend their life and restore
                      their beauty.
                    </p>

                    <h3 className="font-semibold pt-4">
                      🧱 Why Paver Maintenance Matters
                    </h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Become stained with oil, dirt, or leaf matter</li>
                      <li>Grow moss, weeds, or algae between the joints</li>
                      <li>Fade or discolour from sun exposure</li>
                      <li>Shift, crack, or become uneven</li>
                    </ul>
                    <p>
                      By staying on top of cleaning and care, you’ll protect
                      your investment and keep your outdoor spaces safe and
                      visually appealing.
                    </p>

                    <h3 className="font-semibold pt-4">
                      🔧 Essential Paver Maintenance Tips
                    </h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>
                        <strong>Sweep Regularly:</strong> Keep your pavers free
                        of leaves, dirt, and debris. Regular sweeping prevents
                        stains and reduces organic growth.
                      </li>
                      <li>
                        <strong>Treat Weeds & Moss:</strong> Weeds and moss
                        between the joints aren’t just unsightly — they can
                        loosen the structure over time. Use a safe weed
                        treatment or manually remove growth to keep things tidy.
                      </li>
                      <li>
                        <strong>Rinse After Spills:</strong> If something spills
                        on your pavers (like oil, food, or drinks), rinse it off
                        immediately to prevent staining.
                      </li>
                      <li>
                        <strong>Reapply Joint Sand:</strong> Over time, joint
                        sand (the filler between pavers) can wash away.
                        Reapplying polymeric sand helps maintain the stability
                        and prevents weed growth.
                      </li>
                      <li>
                        <strong>Seal Your Pavers:</strong> Sealing protects
                        pavers from water, oil, and UV damage. It also enhances
                        colour and makes cleaning easier in the future.
                        Resealing is typically recommended every 2–3 years.
                      </li>
                    </ul>

                    <h3 className="font-semibold pt-4">
                      💦 How Pressure Washing Helps
                    </h3>
                    <p>
                      Pressure washing is one of the most effective ways to
                      clean pavers deeply and safely. Here's how it helps:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Removes years of built-up dirt, grime, and stains</li>
                      <li>Washes away moss, algae, and slippery growth</li>
                      <li>Prepares the surface for resealing or sanding</li>
                      <li>Restores the original colour and appearance</li>
                      <li>
                        Cleans hard-to-reach spots without harsh chemicals
                      </li>
                    </ul>
                    <p>
                      Using professional-grade equipment, we can safely clean
                      your pavers without damaging the surface or dislodging the
                      joints.
                    </p>

                    <h3 className="font-semibold pt-4">🧽 What We Offer</h3>
                    <p>
                      At WilShine Cleaning, we provide expert pressure washing
                      services for all types of pavers — brick, concrete, stone,
                      or tile. Our service includes:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>
                        Deep cleaning of paver driveways, patios, and paths
                      </li>
                      <li>Weed and moss removal</li>
                      <li>Optional re-sanding and surface sealing</li>
                      <li>Eco-friendly, safe solutions</li>
                      <li>Fast, reliable service with professional results</li>
                    </ul>

                    <p className="font-semibold">
                      🏡 Bring Your Pavers Back to Life
                      <br />
                      Don’t let dirty, stained pavers bring down the look of
                      your property. Let our pressure washing team refresh and
                      protect your outdoor spaces — quickly and affordably.
                      Contact us today for a free quote and see how clean your
                      pavers can really be!
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
