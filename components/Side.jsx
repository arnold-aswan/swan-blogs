import Image from "next/image";
import Link from "next/link";
import React from "react";

const Side = () => {
  return (
    <section className="hidden lg:flex-[2_2_0%] lg:flex lg:flex-col">
      <h6>{"What's Hot"}</h6>
      <h1 className="my-4 font-bold text-2xl">Most Popular</h1>
      <div className="flex flex-col gap-6">
        <Link href={"/"} className="flex  gap-4  items-start ">
          <div className="flex flex-col gap-1 ">
            <span className="capitalize w-fit bg-yellow-600 text-[12px] font-bold py-[2px] px-3 rounded-full">
              travel
            </span>
            <p className="line-clamp-2 text-[14px] ">
              Est sint cupidatat labore nostrud voluptate dolor ullamco Lorem.
            </p>
            <p className="text-xs">
              John Doe - <span className="text-gray-500"> 01.09.2023</span>
            </p>
          </div>
        </Link>
        <Link href={"/"} className="flex  gap-4 justify-between items-start ">
          <div className="flex flex-col gap-1  ">
            <span className="capitalize w-fit bg-yellow-600 text-[12px] font-bold py-[2px] px-3 rounded-full">
              travel
            </span>
            <p className="line-clamp-2 text-[14px] ">
              Est sint cupidatat labore nostrud voluptate dolor ullamco Lorem.
            </p>
            <p className="text-xs">
              John Doe - <span className="text-gray-500"> 01.09.2023</span>
            </p>
          </div>
        </Link>
        <Link href={"/"} className="flex  gap-4 justify-between items-start ">
          <div className="flex flex-col gap-1  ">
            <span className="capitalize w-fit bg-yellow-600 text-[12px] font-bold py-[2px] px-3 rounded-full">
              travel
            </span>
            <p className="line-clamp-2 text-[14px] ">
              Est sint cupidatat labore nostrud voluptate dolor ullamco Lorem.
            </p>
            <p className="text-xs">
              John Doe - <span className="text-gray-500"> 01.09.2023</span>
            </p>
          </div>
        </Link>

        <h2 className="my-4 font-bold text-2xl">Editor's Choice</h2>
        <Link href={"/"} className="flex  gap-4 justify-between  ">
          <div className="relative" style={{ width: "44px", height: "44px" }}>
            <Image
              src="/assets/unsplash.jpg"
              alt="cv"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1  ">
            <span className="capitalize w-fit bg-yellow-600 text-[12px] font-bold py-[2px] px-3 rounded-full">
              travel
            </span>
            <p className="line-clamp-2 text-[14px] ">
              Est sint cupidatat labore nostrud voluptate dolor ullamco Lorem.
            </p>
            <p className="text-xs">
              John Doe - <span className="text-gray-500"> 01.09.2023</span>
            </p>
          </div>
        </Link>
        <Link href={"/"} className="flex  gap-4 justify-between items-start ">
          <div className="relative" style={{ width: "44px", height: "44px" }}>
            <Image
              src="/assets/unsplash.jpg"
              alt="cv"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1  ">
            <span className="capitalize w-fit bg-yellow-600 text-[12px] font-bold py-[2px] px-3 rounded-full">
              travel
            </span>
            <p className="line-clamp-2 text-[14px] ">
              Est sint cupidatat labore nostrud voluptate dolor ullamco Lorem.
            </p>
            <p className="text-xs">
              John Doe - <span className="text-gray-500"> 01.09.2023</span>
            </p>
          </div>
        </Link>
        <Link href={"/"} className="flex  gap-4 justify-between items-start ">
          <div className="relative" style={{ width: "44px", height: "44px" }}>
            <Image
              src="/assets/unsplash.jpg"
              alt="cv"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1  ">
            <span className="capitalize w-fit bg-yellow-600 text-[12px] font-bold py-[2px] px-3 rounded-full">
              travel
            </span>
            <p className="line-clamp-2 text-[14px] ">
              Est sint cupidatat labore nostrud voluptate dolor ullamco Lorem.
            </p>
            <p className="text-xs">
              John Doe - <span className="text-gray-500"> 01.09.2023</span>
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Side;
