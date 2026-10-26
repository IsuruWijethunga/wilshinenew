import React from "react";
import BlogPost from "../utils/BlogPost";

const RelatedBlogs = ({ category }) => {
  // Filter related posts and get the latest 4
  const relatedPosts = BlogPost
    .filter(post => post.category.includes(category))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4); // Only take 4 posts

  return (
    <div>
      <div className="widget widget-recent-post">
        <div className="heading-layout4">
          <h4>Related Blogs</h4>
        </div>
        <ul className="recent-post-list">
          {relatedPosts.map((post, index) => (
            <li key={index}>
              <div className="item-img">
                <a href={`/blog/${post.link}`}>
                  <img src={post.img} alt="blog-thumb" />
                </a>
              </div>
              <div className="item-content">
                <h6 className="item-title">
                  <a href={`/blog/${post.link}`}>{post.title}</a>
                </h6>
                <div className="item-date">
                  <i className="fas fa-calendar-alt" /> {post.date}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RelatedBlogs;
