import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <section className="my-8">
      <h1 className="text-3xl leading-[40px] font-bold md:text-5xl md:leading-[80px] ">
        Hey, Swan here! Discover my stories and creative ideas.
      </h1>
      <article className="flex flex-col lg:flex lg:flex-row items-center justify-center gap-8 my-6">
        <div className="flex-1 w-full md:w-1/2 relative">
          <Image
            src="/assets/swan.jpg"
            width={500}
            height={500}
            layout="responsive"
            alt="article-image"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-5 items-start flex-1">
          <h1 className="text-4xl">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-2xl font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="py-4 px-5 dark:bg-light-soft-bg dark:text-light-text bg-dark-soft-bg text-white rounded-md">
            Read More
          </button>
        </div>
      </article>
    </section>
  );
};

export default Featured;
