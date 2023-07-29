import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ViewBlog() {
  const { id } = useParams(); // Access the 'id' parameter from the URL

  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:4000/Blogs");
      const data = await response.json();
      setBlogs(data);

      // Find the selected blog by its id
      const selectedBlog = data.find((blog) => blog.Id === parseInt(id, 10));

      // Check if the blog is found
      if (selectedBlog) {
        setBlog(selectedBlog);
      }
    }

    getData();
  }, [id]);

  // Check if the blog is not found
  if (!blog.title) {
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
