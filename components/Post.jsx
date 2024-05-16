import React from "react";
import Image from "next/image";

const Post = () => {
  return (
    <article className="flex flex-col gap-5 xl:flex-row xl:gap-8 my-10">
      <div className="relative flex-1">
        <Image
          src="/assets/unsplash.jpg"
          width={500}
          height={500}
          layout="responsive"
          //   layout="fill"
          objectFit="cover"
          alt="article-image"
          className="rounded-lg"
        />
      </div>
      <article className="flex flex-col gap-5 justify-betsween items-start py-3 flex-1 ">
        <p className="text-gray-500">
          11.02.2023 - <span className="uppercase text-red-500">travel</span>{" "}
        </p>
        <h4 className="font-bold text-2xl ">
          Laborum ea veniam excepteur ex labore tempor et Lorem esse.
        </h4>
        <p className="line-clamp-3 md:line-clamp-4">
          Fugiat cupidatat amet nisi officia laborum sit adipisicing est.
          Ullamco exercitation eiusmod incididunt nostrud cillum cupidatat
          tempor anim veniam reprehenderit. Ut occaecat id cillum fugiat
          laboris. Dolor sunt magna officia laboris consectetur nulla voluptate
          aliquip et. Ullamco incididunt Lorem non aliqua ex sint aliqua
          deserunt. Tempor et pariatur fugiat dolore cupidatat laboris in aute
          deserunt incididunt veniam elit enim esse.
        </p>
        <button className="pb-2 border-b border-b-red-400 ">Read More</button>
      </article>
    </article>
  );
};

export default Post;
