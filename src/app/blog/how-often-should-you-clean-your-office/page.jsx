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
                    <p className="text-xl font-semibold">
                      Maintaining a clean and hygienic office isn’t just about
                      appearances—it’s about health, productivity, and making
                      the right impression. At WillShine Cleaning, we often get
                      asked: “How often should we clean our office?” The answer
                      depends on several factors, including the size of your
                      workplace, the number of employees, and the type of work
                      you do. Here’s a practical guide to help you determine the
                      ideal office cleaning schedule:
                    </p>

                    <h3 className="font-semibold pt-4">
                      🧽 Daily Cleaning Tasks
                    </h3>
                    <p>
                      Daily cleaning is essential for high-traffic areas to
                      prevent the buildup of germs, dirt, and clutter. These
                      tasks should include:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Emptying bins</li>
                      <li>Wiping down desks and high-touch surfaces</li>
                      <li>Cleaning kitchens and break rooms</li>
                      <li>Disinfecting bathrooms</li>
                      <li>Vacuuming or mopping common areas</li>
                    </ul>
                    <p>✅ Recommended for all offices, regardless of size.</p>

                    <h3 className="font-semibold pt-4">
                      🧼 Weekly Cleaning Tasks
                    </h3>
                    <p>
                      Some deeper tasks can be done once a week to keep your
                      office looking fresh:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Deep cleaning floors and carpets in common areas</li>
                      <li>
                        Dusting blinds, light fixtures, and skirting boards
                      </li>
                      <li>Wiping down windows and glass partitions</li>
                      <li>
                        Sanitising shared equipment like printers or phones
                      </li>
                    </ul>
                    <p>
                      ✅ Especially important for offices with more than 10
                      staff.
                    </p>

                    <h3 className="font-semibold pt-4">
                      🧹 Monthly or Periodic Cleaning Tasks
                    </h3>
                    <p>
                      Monthly or seasonal cleaning helps maintain long-term
                      hygiene and presentation:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>
                        Strip & seal hard floors to restore shine and protection
                      </li>
                      <li>
                        Pressure washing entrances, sidewalks, and outdoor areas
                      </li>
                      <li>
                        Deep carpet cleaning to remove embedded dirt and
                        allergens
                      </li>
                      <li>Cleaning behind furniture and large equipment</li>
                    </ul>
                    <p>
                      ✅ Ideal for maintaining professional image and prolonging
                      asset life.
                    </p>

                    <h3 className="font-semibold pt-4">
                      🏢 Tailoring Your Office Cleaning Schedule
                    </h3>
                    <p>Every office is different. For example:</p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>
                        A medical office or childcare center may need
                        twice-daily cleaning.
                      </li>
                      <li>
                        A small admin office might get by with three cleanings
                        per week.
                      </li>
                      <li>
                        Businesses with regular foot traffic or client visits
                        should prioritise daily appearance upkeep.
                      </li>
                    </ul>
                    <p>
                      At WillShine Cleaning, we offer flexible and tailored
                      cleaning plans that suit your needs, budget, and
                      schedule—whether it's daily, weekly, or monthly services.
                    </p>

                    <h3 className="font-semibold pt-4">
                      ✅ Let WillShine Take the Guesswork Out of Cleaning
                    </h3>
                    <p>We specialise in:</p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Office cleaning</li>
                      <li>Strip & seal floor restoration</li>
                      <li>Pressure washing for exterior surfaces</li>
                      <li>Carpet cleaning for a healthier workspace</li>
                    </ul>
                    <p>
                      📍 Serving businesses across Perth with reliable,
                      professional cleaning that truly shines.
                    </p>

                    <p>
                      <strong>
                        📞 Need help creating the perfect cleaning schedule? Get
                        in touch with WillShine Cleaning for a free consultation
                        today.
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
