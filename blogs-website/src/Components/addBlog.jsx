import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function AddBlog() {
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
  return (
    <div className="addBlog">
      <div className="head-newblog">
        <h1>Write your Blog</h1>
      </div>
      <div className="blog-editor">
        <ReactQuill
          className="blog-editor-ReactQuill"
          modules={modeules}
          formats={quillformats}
          theme="snow"
        />
      </div>
      <button className="submitBlog">Add Blog</button>
    </div>
  );
}
