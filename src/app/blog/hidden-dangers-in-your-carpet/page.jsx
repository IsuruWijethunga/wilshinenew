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
                      What’s Hiding in Your Carpet?
                    </h2>
                    <p>
                      When you walk into your home, your carpet might look clean
                      on the surface—but what’s hiding beneath the fibers may
                      surprise you. Carpets can act like sponges, trapping dust,
                      allergens, bacteria, pet dander, and even mold spores.
                      While regular vacuuming helps with surface debris, it’s
                      not enough to remove what’s buried deep inside. At
                      Wilshine Cleaning, we believe that annual professional
                      carpet cleaning isn’t just a luxury—it’s a necessity for a
                      healthy and safe home. Here’s why.
                    </p>

                    <ul className="list-disc ml-5 space-y-1">
                      <li>
                        <strong>Dust mites and allergens:</strong> These
                        microscopic pests thrive in warm, humid environments and
                        can trigger allergies and asthma.
                      </li>
                      <li>
                        <strong>Pet dander and hair:</strong> Even if you don’t
                        allow pets on the carpet, their dander settles into the
                        fibers and sticks around.
                      </li>
                      <li>
                        <strong>Bacteria and germs:</strong> Food crumbs,
                        spills, and dirt tracked in from outside create the
                        perfect breeding ground for bacteria.
                      </li>
                      <li>
                        <strong>Mold and mildew:</strong> In humid or poorly
                        ventilated homes, carpets can trap moisture, leading to
                        mold growth beneath the surface.
                      </li>
                      <li>
                        <strong>Pollutants and toxins:</strong> Pesticides,
                        smoke particles, and other toxins from outside can cling
                        to carpet fibers.
                      </li>
                    </ul>

                    <h3 className="font-semibold pt-4">
                      Why Annual Professional Cleaning Matters
                    </h3>
                    <ol className="list-decimal ml-5 space-y-2">
                      <li>
                        <strong>Protects Your Family’s Health:</strong> Deep
                        steam cleaning or hot water extraction removes allergens
                        and bacteria that can trigger health problems.
                      </li>
                      <li>
                        <strong>Extends the Life of Your Carpet:</strong> Annual
                        cleaning lifts grit and helps maintain your carpet’s
                        texture and appearance.
                      </li>
                      <li>
                        <strong>Eliminates Odors:</strong> Professional-grade
                        equipment neutralizes deep odors—not just masks them.
                      </li>
                      <li>
                        <strong>Improves Indoor Air Quality:</strong> Removing
                        built-up particles reduces airborne pollutants, leading
                        to fresher, cleaner air.
                      </li>
                    </ol>

                    <h3 className="font-semibold pt-4">
                      Why Choose Professional Over DIY?
                    </h3>
                    <p>
                      While rental carpet cleaners or home machines might seem
                      like a budget-friendly option, they often lack the power
                      and efficiency of professional-grade equipment. DIY
                      methods can also leave excess moisture in the carpet,
                      which leads to mold or mildew issues. At Wilshine
                      Cleaning, our trained technicians use industry-leading
                      equipment and eco-friendly cleaning solutions to ensure a
                      deep, safe, and thorough clean—every time.
                    </p>

                    <h3 className="font-semibold pt-4">
                      Make It a Habit: Schedule Your Annual Cleaning
                    </h3>
                    <p>
                      Just like you schedule a yearly physical or car service,
                      make annual carpet cleaning part of your home maintenance
                      routine. It’s a small step that delivers big results in
                      cleanliness, health, and peace of mind.
                    </p>
                    <p>
                      <strong>
                        📞 Contact Wilshine Cleaning today to book your
                        professional carpet cleaning service.
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
