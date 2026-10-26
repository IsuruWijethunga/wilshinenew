import Banner from "@/Component/Banner";
import RecentPost from "@/Component/RecentPost";
import React from "react";

const SingleBlog = () => {
  return (
    <div>
      <Banner
        title={"Cleaning Perth"}
        pathName={"Blog"}
        path={"/blog"}
        path2={"/blog/cleaning-perth"}
        path2Name={"Cleaning Perth"}
      />
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-blog-box-layout1">
                <div className="main-img">
                  <img src="/img/blog/perth.png" alt="blog" />
                </div>
                <div className="item-details">
                  <div className="item-date">
                    <i className="fas fa-calendar-alt" />
                    24 July, 2019
                  </div>
                  <h2>
                    Office Cleaning Services in Perth – Wilshine Property
                    Services
                  </h2>
                  <div className="entry-meta">
                    <ul>
                      <li className="item-author">
                        <img src="/img/figure/author.png" alt="author" />
                        By Chathura Sanka
                      </li>
                    </ul>
                  </div>
                  <p>
                    At Wilshine Cleaning Services, we understand the importance
                    of maintaining a clean and productive work environment. A
                    well-kept office not only enhances the appearance of your
                    workplace but also improves employee health, satisfaction,
                    and overall productivity. Whether you manage a small startup
                    or a large corporate office, our professional office
                    cleaning services in Perth are designed to meet the unique
                    needs of your business.
                  </p>

                  <h4>
                    Why Choose Wilshine Cleaning Services for Office Cleaning?
                  </h4>
                  <ul>
                    <li>
                      <strong>Tailored Cleaning Plans:</strong> Customized
                      cleaning schedules, from daily touch-ups to weekly deep
                      cleans.
                    </li>
                    <li>
                      <strong>Experienced and Trusted Staff:</strong> Trained
                      professionals using eco-friendly products and modern
                      equipment.
                    </li>
                    <li>
                      <strong>Comprehensive Cleaning Solutions:</strong>{" "}
                      Covering vacuuming, surface cleaning, disinfecting, and
                      more.
                    </li>
                    <li>
                      <strong>Flexible and Affordable:</strong> Services that
                      suit your schedule and budget, without disrupting
                      operations.
                    </li>
                  </ul>

                  <h4>Key Office Cleaning Services We Offer:</h4>
                  <ul>
                    <li>Daily, weekly, or one-time office cleaning</li>
                    <li>Dusting and wiping of surfaces</li>
                    <li>Carpet vacuuming and floor care</li>
                    <li>Restroom sanitation and supply replenishment</li>
                    <li>
                      Disinfection of high-touch areas (e.g., desks, phones,
                      door handles)
                    </li>
                    <li>Waste removal and recycling</li>
                    <li>Kitchen and breakroom cleaning</li>
                    <li>Window cleaning (interior and exterior)</li>
                  </ul>

                  <h4>Creating a Healthy Work Environment</h4>
                  <p>
                    In today’s world, cleanliness is more important than ever.
                    Regular office cleaning helps eliminate germs and bacteria,
                    ensuring a healthier workspace for your employees. With our
                    expert team, you can rest assured that your office will not
                    only look pristine but also promote better well-being for
                    everyone who enters.
                  </p>

                  <p>
                    If you’re looking for reliable, professional office cleaning
                    services in Perth, contact Wilshine Cleaning Services today.
                    Let us help you maintain a clean and productive office
                    environment.
                  </p>
                  <p>
                    <strong>
                      For more information or to request a quote, visit Wilshine
                      Cleaning Services or call us at 1300 757 015.
                    </strong>
                  </p>
                </div>

                <div className="blog-social-area">
                  <div className="row">
                    <div className="d-flex">
                      <div className="single-post-social">
                        <h5 className="item-title">Share :</h5>
                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/sharer/sharer.php?u=https://wilshinecleaning.com.au/blog/cleaning-perth"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/intent/tweet?url=https://wilshinecleaning.com.au/blog/cleaning-perth"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/shareArticle?mini=true&url=https://wilshinecleaning.com.au/blog/cleaning-perth"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://pinterest.com/pin/create/button/?url=https://wilshinecleaning.com.au/blog/cleaning-perth"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://vimeo.com/share?url=https://wilshinecleaning.com.au/blog/cleaning-perth"
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
