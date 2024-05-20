import React from "react";
import Image from "next/image";

const Comment = ({ name, comment, date }) => {
  return (
    <div className="mb-8">
      <div className="relative flex gap-4 my-4">
        <Image
          src="/assets/turtle.jpg"
          width={50}
          height={50}
          alt="dp"
          className="rounded-lg "
        />
        <div>
          <p>{name}</p>
          <span>{date}</span>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default Comment;
