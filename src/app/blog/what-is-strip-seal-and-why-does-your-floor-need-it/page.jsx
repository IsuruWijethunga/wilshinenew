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
                      Your floors are one of the first things people notice when
                      they walk into your home or business. Over time, daily
                      foot traffic, spills, and wear and tear can leave them
                      looking dull, scratched, or stained. That’s where strip
                      and seal comes in—a powerful solution that restores the
                      shine and protection your floors once had. At Wilshine
                      Cleaning, we specialize in high-quality floor care
                      services, and strip and seal is one of the most effective
                      ways to revive tired flooring and protect it from future
                      damage. Here’s everything you need to know.
                    </p>

                    <h3 className="font-semibold pt-4">
                      What Is Strip & Seal?
                    </h3>
                    <p>
                      Strip and seal is a professional floor restoration process
                      that involves two key steps:
                    </p>
                    <ol className="list-decimal ml-5 space-y-1">
                      <li>
                        <strong>Stripping the Floor:</strong> We carefully
                        remove old layers of sealant, polish, wax, and dirt that
                        have built up over time. This process clears the surface
                        of any residue, revealing the raw floor underneath.
                      </li>
                      <li>
                        <strong>Sealing the Floor:</strong> After deep cleaning,
                        we apply a fresh layer of high-quality sealant to
                        protect the surface. This sealant adds shine, makes
                        cleaning easier, and creates a barrier against stains,
                        scratches, and moisture.
                      </li>
                    </ol>
                    <p>
                      🧼 <strong>The result?</strong> A floor that looks brand
                      new—glossy, clean, and long-lasting.
                    </p>

                    <h3 className="font-semibold pt-4">
                      What Types of Floors Need Strip & Seal?
                    </h3>
                    <p>
                      This service is ideal for hard flooring surfaces such as:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Vinyl (VCT)</li>
                      <li>Terrazzo</li>
                      <li>Slate</li>
                      <li>Concrete</li>
                      <li>Tiles with sealing finishes</li>
                      <li>Linoleum</li>
                    </ul>
                    <p>
                      Whether in your home, retail space, office, or commercial
                      building, strip & seal can give your floors a major
                      facelift.
                    </p>

                    <h3 className="font-semibold pt-4">
                      Why Your Floor Needs It
                    </h3>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>
                        <strong>✅ Restore the Shine:</strong> Strip & seal
                        removes grime and gives your floor a smooth, clean
                        finish that reflects light and looks polished.
                      </li>
                      <li>
                        <strong>✅ Protect Against Future Damage:</strong> The
                        sealing layer acts as a shield against spills, stains,
                        and traffic damage.
                      </li>
                      <li>
                        <strong>✅ Improve Hygiene:</strong> The smooth surface
                        prevents dirt and bacteria buildup—ideal for kitchens,
                        bathrooms, and commercial areas.
                      </li>
                      <li>
                        <strong>
                          ✅ Enhance the Appearance of Your Space:
                        </strong>{" "}
                        Clean, glossy floors instantly upgrade your environment
                        and make a lasting impression.
                      </li>
                      <li>
                        <strong>✅ Increase Floor Longevity:</strong> Routine
                        strip and seal extends the life of your flooring—saving
                        you money over time.
                      </li>
                    </ul>

                    <h3 className="font-semibold pt-4">
                      How Often Should You Strip & Seal?
                    </h3>
                    <p>
                      It depends on your flooring type and traffic levels.
                      General recommendations:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>High-traffic commercial areas: Every 6–12 months</li>
                      <li>Residential floors: Every 1–2 years</li>
                    </ul>
                    <p>
                      Wilshine Cleaning can assess your floors and create a
                      custom maintenance schedule to suit your needs and budget.
                    </p>

                    <h3 className="font-semibold pt-4">
                      Trust Wilshine Cleaning for Expert Floor Care
                    </h3>
                    <p>
                      Our experienced team uses top-grade products and equipment
                      to ensure a flawless, lasting finish. We handle the entire
                      process—safely, efficiently, and with minimal disruption.
                    </p>
                    <p className="font-semibold">
                      🧽 Want to restore your floors to like-new condition?
                      <br />
                      📞 Contact Wilshine Cleaning today for a free quote or to
                      book your professional strip and seal service.
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
