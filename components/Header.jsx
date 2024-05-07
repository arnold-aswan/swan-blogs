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
    <header className="flex justify-between items-center px-5 py-5 h-[100px] relative">
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
      <div
        onClick={() => setMobileNav(!mobileNav)}
        className="md:hidden z-20 cursor-pointer">
        {mobileNav ? (
          <FaWindowClose size={34} color="red" />
        ) : (
          <RxHamburgerMenu size={34} color="white" />
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
        <nav className="flex flex-col gap-10 bg-inherit h-screen w-screen mt-7 absolute right-0 left-0 top-0 bottom-0 justify-center items-center md:hidden">
          <ThemeToggle />
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
