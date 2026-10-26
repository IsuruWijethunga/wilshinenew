import Image from "next/image";
import React from "react";
import BlogPost from "../utils/BlogPost";

const HomeBlog = () => {
  return (
    <section className="section-padding-lg section-bubble">
      <div className="container">
        <div className="heading-layout1">
          <h2>Our Latest Blogs</h2>
          <p>
            Stay updated with our latest news and insights. Explore our blog
            posts to discover valuable information and tips that can help you
            in your journey.
          </p>
        </div>
        <div className="row">
          {BlogPost.sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((post, index) =>
            index > 2 ? null : (
              <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="blog-box-layout1 bg-assh h-100 d-flex flex-column">
                  <div
                    className="item-img"
                    style={{ height: "220px", overflow: "hidden" }}
                  >
                    <a href={`/blog/${post.link}`}>
                      <Image
                        src={post.img}
                        alt="blog-thumb"
                        width={400}
                        height={220}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </a>
                  </div>
                  <div className="item-content flex-grow-1 d-flex flex-column justify-content-between">
                    {/* Top: Date */}
                    <div className="item-date mb-2">
                      <i className="fas fa-calendar-alt mr-1" />
                      {post.date}
                    </div>

                    {/* Middle: Title */}
                    <div className="my-2 text-center">
                      <h3 className="item-title mb-0">
                        <a href={`/blog/${post.link}`}>{post.title}</a>
                      </h3>
                    </div>

                    {/* Bottom: Author */}
                    <div className="item-author mt-2">
                      By {post.author}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
