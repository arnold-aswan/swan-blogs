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
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={setValue}
        placeholder="Tell your story..."
      />
      <button className="mt-8 py-2 px-8 rounded-lg font-semibold bg-dark-soft-bg text-dark-text dark:bg-light-soft-bg dark:text-light-soft-text hover:drop-shadow-xl hover:scale-110 transition ease-out delay-250">
        Publish
      </button>
    </div>
  );
};

export default WritePage;
