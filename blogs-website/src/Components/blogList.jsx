import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function BlogList() {
  // Get the blogs from local storage (if any)
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

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
              <p>Author: {blog.author}</p>
              <p>Date: {blog.date}</p>
              {/* <div dangerouslySetInnerHTML={{ __html: blog.content }} /> */}
              <Link to={`/blog/${blog.id}`}>
                <button>Read Blog</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
