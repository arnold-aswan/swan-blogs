"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaWindowClose } from "react-icons/fa";
import { navigation, socialIcons } from "@/constants/data";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="flex justify-between items-center my-5 ">
      {/* <nav className="hidden lg:flex gap-4 items-center">
        {socialIcons.map((socialIcon) => (
          <div key={socialIcon.name}>
            <socialIcon.icon color={socialIcon.color} size={socialIcon.size} />
          </div>
        ))}
      </nav> */}
      <div>
        <Image
          src="/assets/swan.jpg"
          width={64}
          height={64}
          alt="logo"
          priority
          className="rounded-md "
        />
      </div>
      <div className=" flex items-center gap-8 md:hidden z-20 cursor-pointer">
        <ThemeToggle />
        {mobileNav ? (
          <FaWindowClose
            size={34}
            className=""
            color="red"
            onClick={() => setMobileNav(!mobileNav)}
          />
        ) : (
          <RxHamburgerMenu
            size={34}
            className="dark:text-white text-black"
            onClick={() => setMobileNav(!mobileNav)}
          />
        )}
      </div>
      <nav className="hidden md:flex gap-4 ">
        <ThemeToggle />
        {navigation.map((nav) => (
          <Link href={nav.href} key={nav.name}>
            {nav.name}
          </Link>
        ))}
        <AuthLinks />
      </nav>

      {/* MOBILE NAV */}
      {mobileNav && (
        <nav className="flex flex-col gap-10 bg-dark-soft-bg/95 text-white  absolute h-screen w-screen mx-auto top-0 left-0 right-0 bottom-0 justify-center items-center md:hidden z-10">
          {/* <ThemeToggle /> */}
          {navigation.map((nav) => (
            <Link
              href={nav.href}
              key={nav.name}
              onClick={() => setMobileNav(!mobileNav)}
              className="text-2xl">
              {nav.name}
            </Link>
          ))}
          <AuthLinks />
        </nav>
      )}
    </header>
  );
};

export default Header;
