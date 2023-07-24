import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="buttons-Blogs">
        <Link to="/NewBlog">
          <button>Add Blog</button>
        </Link>
        <Link>
          <button>View Blog</button>
        </Link>
      </div>
    </div>
  );
}
