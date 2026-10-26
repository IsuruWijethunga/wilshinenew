import React from "react";
import BlogPost from "../utils/BlogPost";

const RecentPost = () => {
  return (
    <div className="widget widget-recent-post">
      <div className="heading-layout4">
        <h4>Recent Posts</h4>
      </div>
      <ul className="recent-post-list">
        {BlogPost.sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 4)
          .map((post, index) => (
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
  );
};

export default RecentPost;
