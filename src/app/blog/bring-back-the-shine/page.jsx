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
                      Have your floors lost their sparkle? Are they looking
                      dull, scratched, or worn no matter how often you clean
                      them? You’re not alone—and the good news is, there’s a
                      powerful solution. At Wilshine Cleaning, our{" "}
                      <strong>strip and seal</strong> service is designed to
                      revive tired, lifeless floors and restore their original
                      shine—quickly and professionally. Whether you have vinyl,
                      concrete, slate, or tile, this process transforms surfaces
                      and protects your investment for the long haul.
                    </p>

                    <h3 className="font-semibold pt-4">
                      What Causes Floors to Lose Their Shine?
                    </h3>
                    <p>
                      Even with regular mopping, over time, your floors
                      accumulate:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Dirt and grime buildup</li>
                      <li>Scuff marks and scratches</li>
                      <li>Worn-out sealant or polish</li>
                      <li>Stains from spills or cleaning products</li>
                    </ul>
                    <p>
                      These layers of wear and tear make your floors appear
                      flat, faded, and old—even if they’re structurally sound.
                    </p>

                    <h3 className="font-semibold pt-4">
                      How Strip &amp; Seal Works Its Magic
                    </h3>
                    <p>
                      ✨ <strong>Step 1: Stripping</strong>
                    </p>
                    <p>
                      We begin by removing old layers of sealant, wax, polish,
                      and deeply embedded dirt using high‑grade stripping
                      solutions and equipment. This step prepares the floor for
                      a fresh start.
                    </p>
                    <p>
                      ✨ <strong>Step 2: Sealing</strong>
                    </p>
                    <p>
                      Next, we apply new coats of premium floor sealant,
                      tailored to your specific floor type. This sealant
                      provides a glossy, smooth finish that reflects light,
                      resists stains, and makes ongoing maintenance easier.
                    </p>
                    <p>
                      <strong>The result?</strong> Floors that look brand new,
                      feel smooth underfoot, and shine beautifully.
                    </p>

                    <h3 className="font-semibold pt-4">
                      What Floors Can Be Stripped &amp; Sealed?
                    </h3>
                    <p>This service is ideal for:</p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Vinyl (VCT)</li>
                      <li>Linoleum</li>
                      <li>Slate</li>
                      <li>Terrazzo</li>
                      <li>Concrete</li>
                      <li>Sealed tiles</li>
                    </ul>
                    <p>
                      It’s commonly used in homes, offices, schools, showrooms,
                      and retail stores—anywhere floors need to look clean and
                      professional.
                    </p>

                    <h3 className="font-semibold pt-4">
                      The Benefits of a Strip &amp; Seal
                    </h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>
                        <strong>✅ Revives Appearance Instantly:</strong> Strip
                        &amp; seal restores colour, sheen, and vibrancy in just
                        a few hours.
                      </li>
                      <li>
                        <strong>✅ Protects Against Damage:</strong> The sealant
                        acts as a barrier against moisture, dirt, scratches, and
                        everyday wear.
                      </li>
                      <li>
                        <strong>✅ Improves Cleanability:</strong> Sealed floors
                        are smoother and less porous, making routine cleaning
                        faster and more effective.
                      </li>
                      <li>
                        <strong>✅ Saves Money:</strong> Restoring floors is far
                        more cost‑effective than replacing them.
                      </li>
                    </ul>

                    <h3 className="font-semibold pt-4">
                      Before &amp; After: The Wilshine Difference
                    </h3>
                    <p>
                      Our clients are amazed by how dramatic the transformation
                      can be. What was once dull and lifeless becomes sleek,
                      glossy, and fresh—often in just one visit.
                    </p>
                    <p>
                      Would you like to see the results for yourself? Ask us for
                      before‑and‑after photos from real Wilshine Cleaning
                      clients!
                    </p>

                    <h3 className="font-semibold pt-4">
                      Ready to Bring Back the Shine?
                    </h3>
                    <p className="font-semibold">
                      Your floors don’t need to stay dull. With professional
                      strip and seal from Wilshine Cleaning, you’ll see and feel
                      the difference immediately.
                      <br />
                      📞 Contact us today for a free consultation and quote.
                      <br />
                      <a
                        href="https://wilshinecleaning.com.au"
                        className="text-blue-600 underline"
                      >
                        www.wilshinecleaning.com.au
                      </a>
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
