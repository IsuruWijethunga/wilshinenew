"use client";

import React, { useState } from "react";
import BlogSidebar from "./BlogSidebar";
import BlogPost from "../utils/BlogPost";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Tag, Tabs } from "antd";
import { FaTags } from "react-icons/fa";

const { TabPane } = Tabs;

const BlogContent = () => {
  const categoryMap = {
    All: "All",
    "office-cleaning": "Office Cleaning",
    "stripping-and-sealing": "Stripping and Sealing",
    "carpet-cleaning": "Carpet Cleaning",
    "pressure-washing": "Pressure Washing",
  };

  const categories = Object.keys(categoryMap);

  const [activeTab, setActiveTab] = useState("All");

  const filteredPosts =
    activeTab === "All"
      ? BlogPost
      : BlogPost.filter((post) => post.category.includes(activeTab));

  return (
    <div>
      <section className="mt-5">
        <div className="container">
          <Tabs
            defaultActiveKey="All"
            onChange={(key) => setActiveTab(key)}
            type="card"
            className="mb-4"
          >
            {categories.map((category) => (
              <TabPane tab={categoryMap[category]} key={category} />
            ))}
          </Tabs>

          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <AnimatePresence mode="wait">
                  {filteredPosts
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((post, index) => (
                      <motion.div
                        key={post.link} // use stable key
                        className="col-lg-4 col-md-6 col-12 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
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
                            <div className="item-date">
                              <div className="mb-2">
                                {post.category.map((cat, i) => (
                                  <Tag
                                    key={i}
                                    color="blue"
                                    className="mr-2"
                                    style={{
                                      fontSize: "12px",
                                      padding: "4px 7px",
                                      borderRadius: "5px",
                                    }}
                                  >
                                    <FaTags /> &nbsp;{categoryMap[cat] || cat}
                                  </Tag>
                                ))}
                              </div>
                              <i className="fas fa-calendar-alt mr-1" />
                              {post.date}
                            </div>
                            <div>
                              <h3 className="item-title mb-0">
                                <a href={`/blog/${post.link}`}>{post.title}</a>
                              </h3>
                            </div>
                            <div className="item-author">By {post.author}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogContent;
