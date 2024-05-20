import React from "react";
import Link from "next/link";
import Comment from "./Comment";
import { comments } from "@/constants/data";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className="my-5">
      <h1>Comments</h1>
      {status === "authenticated" ? (
        <div>
          <textarea
            placeholder="Leave a comment..."
            className="p-3 rounded-lg w-full h-[5rem] border-2 border-gray-200 outline-none "></textarea>
          <button className="px-8 text-white font-semibold py-4 mt-3 bg-dark-soft-bg dark:bg-light-soft-bg dark:text-light-text rounded-lg">
            Comment
          </button>
        </div>
      ) : (
        <Link href="/login">Login to leave a comment</Link>
      )}

      <div className="mt-10">
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
