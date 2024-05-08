import React from "react";
import Link from "next/link";
import { categories } from "@/constants/data";

const CategoryList = () => {
  return (
    <section className="my-10">
      <h1 className="font-bold text-3xl">Popular Categories</h1>
      <div className="flex gap-10 items-center my-10 overflow-x-auto">
        {categories.map((category) => (
          <Link
            href={"/blog/categoryName=style"}
            key={category}
            className="py-5 text-center border min-w-40 w-40 rounded-md capitalize ">
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
