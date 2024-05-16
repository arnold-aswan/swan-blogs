import React from "react";
import Post from "./Post";

const CardList = () => {
  return (
    <section className="flex-[5_5_0%]">
      <h1 className="text-2xl font-bold mb-8">Recent Posts</h1>
      <Post />
      <Post />
      <Post />
    </section>
  );
};

export default CardList;
