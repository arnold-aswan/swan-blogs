import { navigation, socialIcons } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="my-10">
      <div className="flex flex-col  lg:flex-row lg:justify-between lg:gap-10">
        <div>
          <div className="flex flex-1 items-center gap-4">
            <Image
              src="/assets/swan.jpg"
              alt="logo"
              width={64}
              height={64}
              className="rounded-xl"
            />
            <span className="font-bold text-2xl">SwanBlogs</span>
          </div>
          <p className="my-5  lg:w-3/5">
            Laboris ut mollit ea et ex minim dolore exercitation id. Non officia
            eu aliquip cillum. Anim adipisicing aliquip ad id mollit magna
            laborum minim ullamco esse. Id laborum id laboris ea ullamco laborum
            veniam voluptate mollit anim enim id ex. Ex cillum culpa voluptate
            eiusmod amet non. Enim incididunt nisi cillum tempor sunt aliqua.
            Voluptate do enim est voluptate esse reprehenderit excepteur anim.
          </p>
        </div>

        <div className="flex-1">
          <div>
            <h4 className="font-bold text-2xl underline">Links</h4>
            {navigation.map((link) => (
              <Link key={link.href} href={link.href} className="block">
                {link.name}
              </Link>
            ))}
            <Link href={"/blog"}>Blog</Link>
          </div>

          {/* <div>
            <h4 className="font-bold text-2xl underline">Social</h4>
           
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
