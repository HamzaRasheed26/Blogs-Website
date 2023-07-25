import React from "react";
import { useParams } from "react-router-dom";

export default function ViewBlog() {
  const { id } = useParams(); // Access the 'id' parameter from the URL

  // Assuming you have the list of blogs fetched from local storage (similar to BlogDetails component)
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  // Find the selected blog by its id
  const blog = blogs.find((blog) => blog.id === parseInt(id, 10));

  // Check if the blog is found
  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="blog-details">
      <div className="details">
        <h1>{blog.title}</h1>
        <p>
          Author: <span> {blog.author}</span>
        </p>
        <p>
          Date:<span> {blog.date}</span>
        </p>
      </div>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
