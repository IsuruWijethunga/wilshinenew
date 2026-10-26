"use client";

import Banner from "@/Component/Banner";
import RecentPost from "@/Component/RecentPost";
import BlogPost from "@/utils/BlogPost";
import React from "react";

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
                    src={item.img}
                    style={{ width: "100%", height: "auto" }}
                    alt="Office Floor Cleaning Perth"
                  />
                </div>
                <div className="item-details">
                  <div className="item-date">
                    <i className="fas fa-calendar-alt" /> {item.date}
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
                  <section className="space-y-4 bg-white text-gray-800">
                    <p>
                      When it comes to maintaining a professional and welcoming workplace, clean floors make all the difference. In fact, floor care is one of the biggest parts of daily office cleaning. That's why choosing the right <strong><a href="/service/office-cleaning">Office Cleaning Services in Perth</a></strong> is so important for your business.
                    </p>
                    <h3 className="font-semibold pt-4">Why Office Floor Cleaning Matters</h3>
                    <p>
                      A typical office cleaning routine includes vacuuming and mopping floors, cleaning kitchens and bathrooms, dusting desks, and emptying bins. But studies show that almost 40–50% of cleaning time is spent on floors alone. Since office floors carry the most dirt, dust, and foot traffic, they require the right techniques and equipment to keep them in top condition.
                    </p>
                    <h3 className="font-semibold pt-4">Carpet Floors in Offices</h3>
                    <p>
                      Carpet is one of the most common flooring choices in Australian office spaces. It provides comfort, reduces noise, and creates a professional look. Carpets also improve safety by reducing slips and trips. However, carpets trap dust and allergens and can wear out if not properly maintained. This is where <strong>Commercial Office Cleaning Services in Perth</strong> make a big difference.
                    </p>
                    <p>
                      At Wilshine Commercial Cleaning, we use advanced commercial-grade vacuum cleaners for daily carpet care and perform deep cleaning with specialized carpet machines on a monthly basis. This approach helps extend the life of your carpet while keeping it fresh, clean, and safe.
                    </p>
                    <h3 className="font-semibold pt-4">Tile and Vinyl Floors in Offices</h3>
                    <p>
                      Tile and vinyl are popular choices for office kitchens and bathrooms because they're durable and easier to clean. However, without proper care, they can quickly look dirty—especially the grout lines between tiles.
                    </p>
                    <p>
                      Our team at <a href="https://wilshinecleaning.com.au/" target="_blank" rel="noopener noreferrer">Wilshine Commercial Cleaning</a> goes beyond basic mopping. We provide detailed grout cleaning weekly, ensuring your floors remain spotless, hygienic, and professional-looking.
                    </p>
                    <h3 className="font-semibold pt-4">Why Choose the Best Office Cleaning Services in Perth</h3>
                    <p>
                      Not all cleaners deliver the same level of detail. By working with the <strong>Best Office Cleaning Services in Perth</strong>, you gain:
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Expert knowledge of different floor types</li>
                      <li>Advanced cleaning machines and eco-friendly products</li>
                      <li>Consistent, reliable results tailored to your office needs</li>
                      <li>Long-term cost savings through better floor maintenance</li>
                    </ul>
                    <p>
                      At Wilshine Commercial Cleaning, we pride ourselves on being trusted Perth commercial cleaners who go the extra mile. Our focus on detail, especially in floor cleaning, ensures your workplace always makes the right impression.
                    </p>
                    <h3 className="font-semibold pt-4">Final Thoughts</h3>
                    <p>
                      Clean floors are the foundation of a professional office environment. By choosing Wilshine, you're choosing the <strong>Best Office Cleaning Services in Perth</strong>—a team that understands the importance of detail, hygiene, and long-term care.
                    </p>
                    <p>
                      If you're ready to transform your office floors and workplace presentation, contact us today for tailored <strong>Office Cleaning Services in Perth</strong>.
                    </p>
                    
                    <h3 className="font-semibold pt-4">FAQ’s</h3>
                    <div className="faq-block">
                      <h4 className="pt-2">Q1: Why is professional floor cleaning so important for my Perth office?</h4>
                      <p>
                        Professional floor cleaning is vital because office floors, especially carpets, trap a large amount of dirt, dust, and allergens from daily foot traffic. Regular, professional cleaning ensures a healthier work environment by removing these pollutants, maintains a professional appearance for clients, and extends the lifespan of your flooring investment.
                      </p>
                      <h4 className="pt-2">Q2: What is the most common type of floor found in Perth offices, and how is it maintained?</h4>
                      <p>
                        Carpet is a very common choice for its comfort and professional appearance. At <a href="https://wilshinecleaning.com.au/" target="_blank" rel="noopener noreferrer">Wilshine Commercial Cleaning</a>, we maintain office carpets using advanced commercial-grade vacuums daily, supplemented by monthly deep cleaning with specialized carpet machines. This dual approach ensures both surface cleanliness and long-term fiber care.
                      </p>
                      <h4 className="pt-2">Q3: What are the main benefits of choosing Wilshine Commercial Cleaning over other Perth commercial cleaners?</h4>
                      <p>
                        Choosing Wilshine means partnering with trusted Perth commercial cleaners who offer more than just standard service. Our benefits include expert knowledge in cleaning different floor types, using advanced, eco-friendly equipment and products, providing consistent and reliable results, and delivering long-term cost savings through superior floor maintenance.
                      </p>
                    </div>
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