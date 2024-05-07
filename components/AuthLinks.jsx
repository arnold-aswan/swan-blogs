"use client";
import Link from "next/link";
import React from "react";

const AuthLinks = () => {
  const auth = true;
  return (
    <>
      {auth ? (
        <>
          <Link href="/write" className="text-2xl md:text-base ">
            Write
          </Link>
          <span className="cursor-pointer text-2xl md:text-base">Logout</span>
        </>
      ) : (
        <>
          <Link href={"/login"} className="text-2xl md:text-base">
            Login
          </Link>
        </>
      )}
    </>
  );
};

export default AuthLinks;
