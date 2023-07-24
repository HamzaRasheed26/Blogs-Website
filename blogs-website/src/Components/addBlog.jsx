import { useState, useRef } from "react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class Blog {
  constructor(id, title, content, author, date) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.date = date;
  }
}

export default function AddBlog() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
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
      setText(htmlCode);
    }
  };

  const handleBlogSubmit = () => {
    if (!title) {
      alert("Please provide the blog title.");
      return;
    }
    if (!author) {
      alert("Please provide the author's name.");
      return;
    }

    const blog = new Blog(
      1,
      title,
      text,
      author,
      new Date().toLocaleDateString()
    );

    // Get existing blogs from local storage (if any)
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Add the new blog to the existing blogs array
    const updatedBlogs = [...existingBlogs, blog];
    console.log(updatedBlogs);

    // Save the updated blogs array to local storage
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    // Optionally, you can clear the editor's content and author input after submitting the blog
    setText("");
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="addBlog">
      <div className="head-newblog">
        <h1>Write your Blog</h1>
      </div>

      <input
        className="blog-input"
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="blog-input"
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

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

      <button onClick={handleBlogSubmit} className="submitBlog">
        Add Blog
      </button>
    </div>
  );
}
