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
                  <img
                    src="/img/blog/ac.png"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="Affordable Commercial Cleaning Perth"
                  />
                </div>
                <div className="item-details">
                  <div className="item-date">
                    <i className="fas fa-calendar-alt" />
                    {/* You can set a static or dynamic date here */}
                    September 13, 2025
                  </div>
                  <h2>Where Can You Get Affordable Commercial Cleaning Services in Perth?</h2>
                  <div className="entry-meta">
                    <ul>
                      <li className="item-author">
                        <img src="/img/figure/author.png" alt="author" />
                        Wilshine Cleaning
                      </li>
                    </ul>
                  </div>

                  <section className="space-y-4 bg-white text-gray-800">
                    <p>
                      When it comes to choosing a cleaning company for your office or workplace, many people assume that all providers offer the same services. But the reality is very different. The commercial cleaning industry in Perth is highly competitive, and while some companies focus on low prices, the quality of service is often compromised.
                    </p>

                    <p>
                      If you’re looking for reliable and affordable <a href="https://wilshinecleaning.com.au/" target="_blank" rel="noopener noreferrer">Professional commercial cleaning in Perth</a>, it’s important to know how to strike the right balance between cost and quality.
                    </p>

                    <h3 className="font-semibold pt-4">Why Price Shouldn't Be Your Only Consideration</h3>
                    <p>
                      Some cleaning companies offer extremely low rates, but this often comes at the expense of service quality. For example, they may cut corners by allocating less time for their cleaners, which means important tasks get skipped. Over time, this can lead to bigger issues such as stained carpets, unhygienic work areas, or even costly repairs.
                    </p>

                    <p>
                      On the other hand, there are companies that deliver good results but charge premium prices, making them unaffordable for many businesses. That’s why it’s important to evaluate both price and value before making your decision.
                    </p>

                    <h3 className="font-semibold pt-4">How to Choose Affordable Yet Professional Commercial Cleaning in Perth</h3>
                    <p>Here are a few tips to help you find the right cleaning partner for your business:</p>

                    <h4 className="font-medium pt-3">Request a site visit and free quote</h4>
                    <p>
                      This is a great starting point. A professional company will visit your premises, understand your needs, and give you a clear breakdown of their services.
                    </p>

                    <h4 className="font-medium pt-3">Check if routine detail cleans are included</h4>
                    <p>
                      Daily cleaning (like vacuuming and wiping surfaces) is different from periodic deep cleaning (like carpet shampooing or grout scrubbing). Ask whether these detail cleans are part of their package and whether their team has the right training and equipment.
                    </p>

                    <h4 className="font-medium pt-3">Review their contract terms</h4>
                    <p>
                      Many providers of <a href="https://wilshinecleaning.com.au/service/office-cleaning" target="_blank" rel="noopener noreferrer">Commercial cleaning services in Perth</a> lock clients into long-term contracts. At Wilshine Commercial Cleaning, we don’t believe in binding clients to contracts. Instead, our service quality is our guarantee.
                    </p>

                    <h4 className="font-medium pt-3">Ask if they use subcontractors or their own staff</h4>
                    <p>
                      Large cleaning companies often rely on subcontractors, which can lead to inconsistent results. At Wilshine, we’re proud to have our own team of trained Perth commercial cleaners who uphold our high standards at every job.
                    </p>

                    <h3 className="font-semibold pt-4">Why Choose Wilshine Commercial Cleaning?</h3>
                    <p>
                      At Wilshine, we believe affordable pricing should never mean sacrificing quality. Our team delivers Professional commercial cleaning in Perth with attention to detail, advanced equipment, and a commitment to customer satisfaction. Whether it’s daily office cleaning or detailed floor care, we make sure your workplace stays spotless, hygienic, and welcoming.
                    </p>

                    <h3 className="font-semibold pt-4">Final Thoughts</h3>
                    <p>
                      Finding affordable Commercial cleaning services in Perth doesn’t have to mean compromising on quality. By asking the right questions and choosing a trusted provider like Wilshine, you can enjoy reliable service at a fair price.
                    </p>

                    <p>
                      If you’re looking for a cleaning partner who truly understands your needs, <a href="https://wilshinecleaning.com.au/" target="_blank" rel="noopener noreferrer">contact Wilshine today</a> — your local team of professional Perth commercial cleaners.
                    </p>

                    <h4 className="font-semibold pt-4">FAQ’s</h4>
                    <p>
                      <strong>What commercial cleaning services does Wilshine Cleaning offer in Perth?</strong><br />
                      Wilshine provides a full range of cleaning services including office cleaning, carpet cleaning, pressure washing, and floor strip &amp; seal. These services cover both small offices and larger commercial spaces.
                    </p>

                    <p>
                      <strong>How often should a business schedule commercial cleaning?</strong><br />
                      The frequency depends on factors like foot traffic, size of premises, and business type. Many clients prefer daily or weekly cleaning, and periodic deep cleans (e.g. carpets) monthly or quarterly.
                    </p>

                    <p>
                      <strong>Does Wilshine Cleaning use its own staff or subcontractors?</strong><br />
                      Wilshine emphasizes using their own trained in-house team rather than subcontractors to ensure consistent quality, reliability, and accountability.
                    </p>

                    <p>
                      <strong>Are your cleaning products eco-friendly and safe to use?</strong><br />
                      Absolutely. We use non-toxic, environmentally friendly cleaning solutions that meet strict health and safety standards—ensuring the well-being of both people and the planet.
                    </p>

                    <p className="font-semibold">
                      🧽 Ready for a cleaner, healthier workspace?<br />
                      📞 Contact Wilshine Cleaning today for a free quote or to book your commercial cleaning service.
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
                              href={`https://www.facebook.com/sharer/sharer.php?u=https://wilshinecleaning.com.au${currentPath}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=https://wilshinecleaning.com.au${currentPath}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://wilshinecleaning.com.au${currentPath}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://pinterest.com/pin/create/button/?url=https://wilshinecleaning.com.au${currentPath}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://vimeo.com/share?url=https://wilshinecleaning.com.au${currentPath}`}
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