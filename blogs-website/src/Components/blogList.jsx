import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://hmzdev-blogwebsite-api.glitch.me/Blogs"
      );
      const data = await response.json();
      setBlogs(data);
    }

    getData();
  }, []);

  return (
    <div className="blog-list">
      <h1>Blog List</h1>
      {blogs.length === 0 ? (
        <p>No blogs to display.</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <h2>{blog.title}</h2>
              <img
                src={`https://hmzdev-blogwebsite-api.glitch.me/${blog.coverImage}`}
                alt="Cover Image..."
              />
              <p>Author: {blog.author}</p>
              <p>Date: {blog.date}</p>
              {/* <div dangerouslySetInnerHTML={{ __html: blog.content }} /> */}
              <Link to={`/blog/${blog.Id}`}>
                <button>Read Blog</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
