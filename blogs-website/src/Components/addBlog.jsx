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

  return (
    <div className="addBlog">
      <div className="head-newblog">
        <h1>Write your Blog</h1>
      </div>

      <form
        action={`http://localhost:4000/newBlog?text=${text}`}
        method="post"
        encType="multipart/form-data"
      >
        <input
          className="blog-input"
          type="text"
          placeholder="Blog Title"
          name="blogTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="blog-input"
          type="text"
          placeholder="Author Name"
          name="authorName"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <label
          className="blog-input"
          for="fileInput"
          style={{ textAlign: "center" }}
        >
          Upload Cover Image
          <input
            style={{ marginLeft: "5px" }}
            type="file"
            name="blogCoverImage"
            id="blogCoverImage"
            required
          />
        </label>

        <div className="blog-editor">
          <ReactQuill
            ref={quillref}
            value={text}
            onChange={handleBlog}
            className="blog-editor-ReactQuill"
            modules={modeules}
            formats={quillformats}
            name="blogContent"
            theme="snow"
            required
          />
        </div>

        <button className="submitBlog">Add Blog</button>
      </form>
    </div>
  );
}
