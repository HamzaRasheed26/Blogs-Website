import { useState, useRef } from "react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Blog from "./blog.js";

export default function AddBlog() {
  const blogs = [];
  const [blog, setblog] = useState(null);
  const [text, setText] = useState("");
  const quillref = useRef(null);

  const modeules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ List: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      ["clean"],
      [{ align: [] }],
    ],
  };

  const quillformats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "List",
    "bullet",
    "link",
    "image",
    "indent",
  ];

  const handleBlog = () => {
    if (quillref.current) {
      const editor = quillref.current.getEditor();
      const htmlCode = editor.root.innerHTML;
      console.log(htmlCode);
      setText(htmlCode);
    }
  };

  const handleBlogSubmit = () => {
    const blog = Blog(1, "ajn", text, "hamza", "29");
    console.log(blog);
    console.log(blog.author);
  };

  return (
    <div className="addBlog">
      <div className="head-newblog">
        <h1>Write your Blog</h1>
      </div>
      <div className="blog-editor">
        <ReactQuill
          ref={quillref}
          value={text}
          onChange={handleBlog}
          className="blog-editor-ReactQuill"
          modules={modeules}
          formats={quillformats}
          theme="snow"
        />
      </div>
      <input
        className="blogAuthor-input"
        type="text"
        placeholder="Author Name"
      />
      <button onClick={handleBlogSubmit} className="submitBlog">
        Add Blog
      </button>
    </div>
  );
}
