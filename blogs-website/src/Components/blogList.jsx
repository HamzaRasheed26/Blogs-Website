import React from "react";

export default function BlogList() {
  // Get the blogs from local storage (if any)
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  return (
    <div className="blog-list">
      <h2>Blog List</h2>
      {blogs.length === 0 ? (
        <p>No blogs to display.</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <h3>{blog.title}</h3>
              <p>Author: {blog.author}</p>
              <p>Date: {blog.date}</p>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
