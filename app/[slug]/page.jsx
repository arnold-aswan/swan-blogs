import Side from "@/components/Side";
import Image from "next/image";
import React from "react";
import Comments from "@/components/Comments";

const SinglePage = () => {
  return (
    <section>
      <article className="flex flex-col-reverse xl:flex-row gap-4 justify-between relative">
        <div className="flex-1">
          <div className="relative flex gap-4 my-4">
            <Image
              src="/assets/turtle.jpg"
              width={50}
              height={50}
              alt="dp"
              className="rounded-lg "
            />
            <div>
              <p>John Doe</p>
              <span>25 Apr 2023</span>
            </div>
          </div>
          <h1 className="text-3xl leading-[2.5rem] lg:text-6xl lg:leading-[5rem] font-bold flex-1 ">
            Laboris cupidatat labore nisi mollit labore nostrud amet sit sit
            elit minim.
          </h1>
        </div>

        <div className="relative flex-1">
          <Image
            src="/assets/unsplash.jpg"
            alt="blog-image"
            layout="responsive"
            width={500}
            height={250}
            className="rounded-lg"
          />
        </div>
      </article>

      <section className="mt-[3rem] xl:flex xl:gap-10">
        <article className="flex flex-col gap-5 xl:flex-[5_5_0%]">
          <p className="text-2xl">
            Excepteur aute sint in id deserunt excepteur aliquip voluptate ad
            elit ex sit consectetur veniam. Dolore ipsum sint veniam deserunt
            nisi. Irure reprehenderit ad aliquip sit sint sit nulla
            exercitation. Voluptate mollit excepteur sint minim magna amet culpa
            exercitation officia qui dolore. Qui magna aliqua magna dolor minim
            laboris elit Lorem do commodo sint consectetur ea. Irure velit eu
            non velit nisi non culpa ullamco pariatur proident mollit sunt
            laborum. Ipsum occaecat irure non ullamco eu ut.
          </p>
          <p className="text-2xl">
            Excepteur aute sint in id deserunt excepteur aliquip voluptate ad
            elit ex sit consectetur veniam. Dolore ipsum sint veniam deserunt
            nisi. Irure reprehenderit ad aliquip sit sint sit nulla
            exercitation. Voluptate mollit excepteur sint minim magna amet culpa
            exercitation officia qui dolore. Qui magna aliqua magna dolor minim
            laboris elit Lorem do commodo sint consectetur ea. Irure velit eu
            non velit nisi non culpa ullamco pariatur proident mollit sunt
            laborum. Ipsum occaecat irure non ullamco eu ut.
          </p>
          <p className="text-2xl">
            Excepteur aute sint in id deserunt excepteur aliquip voluptate ad
            elit ex sit consectetur veniam. Dolore ipsum sint veniam deserunt
            nisi. Irure reprehenderit ad aliquip sit sint sit nulla
            exercitation. Voluptate mollit excepteur sint minim magna amet culpa
            exercitation officia qui dolore. Qui magna aliqua magna dolor minim
            laboris elit Lorem do commodo sint consectetur ea. Irure velit eu
            non velit nisi non culpa ullamco pariatur proident mollit sunt
            laborum. Ipsum occaecat irure non ullamco eu ut.
          </p>
          <Comments />
        </article>
        <aside className="xl:flex-[2_2_0%]">
          <Side />
        </aside>
      </section>
    </section>
  );
};

export default SinglePage;
