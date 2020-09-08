/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import  BlogList from './BlogItems'

const Blog = () => {
    //post data
  const AllPost = [
    {
     id:1,
          title: "Introduction to React",
      author: "PreMest",
      content: "This ia introduction to React.",
    },
      {
        id:2,
      title: "Introduction to States",
      author: "PreMest",
      content: "This ia introduction to React.",
    },
      {
        id:3,
      title: "Introduction to Props",
      author: "PreMest",
      content: "This ia introduction to React.",
    },
      {
        id:4,
      title: "Introduction to Props",
      author: "PreMest",
      content: "This ia introduction to React.",
    },
    {
        id:5,
      title: "Introduction to Props",
      author: "PreMest",
      content: "This ia introduction to React.",
    },
  ];

  //save data to state
  const [post, setpost] = useState(AllPost);

  return (
    <div className="container">
      <h4>Blog</h4>
      <div className="row" >
        <div className="col-md-3">
          <BlogList post={post} />
        </div>
        
      </div>
    </div>
  );
};
export default Blog;
