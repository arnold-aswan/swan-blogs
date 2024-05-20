"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WritePage = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      //   [{ font: ["sans-serif", "Roboto"] }],
      ["clean"],
    ],
  };
  return (
    <div>
      WritePage
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default WritePage;
