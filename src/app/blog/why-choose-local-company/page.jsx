import Banner from "@/Component/Banner";
import RecentPost from "@/Component/RecentPost";
import React from "react";

const SingleBlog = () => {
  return (
    <div>
      <Banner
        title={"Why Choose Local Company"}
        pathName={"Blog"}
        path={"/blog"}
        path2={"/blog/why-choose-local-company"}
        path2Name={"Why Choose Local Company"}
      />
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-blog-box-layout1">
                <div className="main-img">
                  <img src="/img/blog/why.png" alt="blog" />
                </div>
                <div className="item-details mt-5">
                  <div className="item-date">
                    <i className="fas fa-calendar-alt" />
                    24 July, 2019
                  </div>
                  <h2 className="item-title">
                    Why Choose a Local Cleaning Company Over Big Franchises
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
                    When searching for “office cleaning services near me” in
                    Perth, you have the option of large franchises or local
                    businesses. At <strong>Bossom Cleaning Services</strong>, we
                    believe smaller businesses offer a more personalized,
                    reliable, and affordable solution. Unlike big franchises
                    that treat clients as numbers, we provide tailored services
                    and local expertise to keep your office spotless.
                  </p>

                  <h4>Why Choose Bossom Cleaning Services?</h4>
                  <ul>
                    <li>
                      <strong>Personalized & Flexible Services:</strong> We
                      tailor our cleaning to your office’s needs, unlike large
                      franchises with one-size-fits-all checklists. Whether it’s
                      regular or deep cleaning, we adjust to your schedule and
                      budget.
                    </li>
                    <li>
                      <strong>Direct Communication:</strong> With us, you deal
                      directly with the owners and team, ensuring faster
                      response times and personalized service.
                    </li>
                    <li>
                      <strong>Affordable & Transparent Pricing:</strong> Our
                      costs are lower and more transparent compared to big
                      franchises, with no hidden fees or inflated rates.
                    </li>
                    <li>
                      <strong>Better Attention to Detail:</strong> Unlike large
                      teams with rushed schedules, our smaller team ensures
                      detailed, thorough cleaning every time.
                    </li>
                    <li>
                      <strong>Support Local Business:</strong> Choosing us
                      supports a Perth-based business committed to exceptional
                      service and building long-term relationships.
                    </li>
                  </ul>

                  <h4>Our Services Include:</h4>
                  <ul>
                    <li>Regular office cleaning</li>
                    <li>Carpet and floor care</li>
                    <li>Window and glass cleaning</li>
                    <li>Restroom sanitization</li>
                    <li>Deep cleaning</li>
                    <li>Disinfection services</li>
                  </ul>

                  <p>
                    When searching for “office cleaning services near me” in
                    Perth, don’t settle for the impersonal, generic services of
                    big franchises. Choose{" "}
                    <strong>Bossom Cleaning Services</strong> for personalized,
                    reliable, and affordable cleaning solutions. Our local,
                    small business approach ensures that you get the attention
                    and care your office deserves, with cleaning services
                    tailored specifically to your needs.
                  </p>

                  <p>
                    <strong>Contact us today</strong> for a free consultation
                    and let’s discuss how we can help keep your office in
                    pristine condition with the benefits of a trusted local
                    business.
                  </p>
                </div>
                <div className="blog-social-area">
                  <div className="row">
                    <div className=" d-flex ">
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
