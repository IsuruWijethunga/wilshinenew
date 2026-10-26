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
                      Keeping your home clean on the outside is just as
                      important as maintaining the inside. One of the best ways
                      to preserve your home's appearance and value is through
                      regular pressure washing. But when’s the best time to do
                      it? At WillShine Cleaning, we’ve put together this
                      seasonal guide for homeowners in Perth so you know exactly
                      when to book your next exterior clean.
                    </p>

                    <h3 className="font-semibold pt-4">
                      🌸 Spring (September – November): Best Time for a Deep
                      Clean
                    </h3>
                    <p>
                      Spring is the perfect time for a thorough pressure wash.
                      After a wet and windy winter, your exterior surfaces may
                      be covered in mould, moss, and dirt. Pressure washing in
                      spring:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Clears away winter grime</li>
                      <li>Prepares surfaces for summer entertaining</li>
                      <li>
                        Refreshes outdoor spaces like patios, decks, and
                        driveways
                      </li>
                    </ul>
                    <p>
                      <strong>Pro tip:</strong> Spring cleaning your home's
                      exterior improves curb appeal and makes your space more
                      welcoming.
                    </p>

                    <h3 className="font-semibold pt-4">
                      ☀️ Summer (December – February): Great for Regular
                      Maintenance
                    </h3>
                    <p>
                      Summer in Perth is dry and sunny—great weather for
                      pressure washing. Since surfaces dry quickly, this is a
                      good time for:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Driveway cleaning</li>
                      <li>Wall and fence washing</li>
                      <li>Patio and poolside cleaning</li>
                    </ul>
                    <p>
                      However, it’s important to avoid washing during peak heat
                      to prevent water stains or damage to painted surfaces.
                      Early mornings or cooler evenings are best.
                    </p>

                    <h3 className="font-semibold pt-4">
                      🍂 Autumn (March – May): Prep for Wet Weather
                    </h3>
                    <p>
                      As the rains start to return, pressure washing in autumn
                      helps prevent the build-up of slippery moss and algae that
                      thrive in moist conditions. Use this time to:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Clean gutters and pathways</li>
                      <li>Wash mould and mildew off external walls</li>
                      <li>Prepare surfaces for sealing, if needed</li>
                    </ul>
                    <p>
                      <strong>Safety note:</strong> Slippery driveways and paths
                      are a major hazard—regular cleaning helps prevent
                      accidents.
                    </p>

                    <h3 className="font-semibold pt-4">
                      🌧️ Winter (June – August): Clean with Care
                    </h3>
                    <p>
                      While winter isn’t the most popular time to pressure wash,
                      light cleaning can still be done on dry days. Winter is
                      ideal for:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Spot treatments</li>
                      <li>Cleaning under sheltered areas</li>
                      <li>Removing storm debris from walls and driveways</li>
                    </ul>
                    <p>
                      <strong>Caution:</strong> Avoid washing roofs or high
                      areas during heavy rain or storms.
                    </p>

                    <h3 className="font-semibold pt-4">
                      ✅ Why Schedule Pressure Washing Seasonally?
                    </h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Extends the life of your surfaces</li>
                      <li>Prevents damage from dirt, mould, and grime</li>
                      <li>Keeps your property looking fresh year-round</li>
                      <li>Reduces maintenance costs in the long term</li>
                    </ul>

                    <h3 className="font-semibold pt-4">
                      🧼 WillShine Cleaning: Perth’s Trusted Pressure Washing
                      Experts
                    </h3>
                    <p>
                      Whether it’s a spring clean, summer refresh, or pre-winter
                      prep, WillShine Cleaning has you covered. We offer:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Residential & commercial pressure washing</li>
                      <li>Driveway, wall, fence, and patio cleaning</li>
                      <li>Soft washing for delicate surfaces</li>
                      <li>
                        Office cleaning, carpet cleaning & strip & seal services
                      </li>
                    </ul>

                    <p className="font-semibold">
                      📞 Book your seasonal pressure wash today with WillShine
                      Cleaning – where your home’s shine is our priority.
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
