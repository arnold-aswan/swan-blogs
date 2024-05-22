"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const { status } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <>
          <Link href="/write" className="text-2xl md:text-base ">
            Write
          </Link>
          <span
            onClick={() => signOut()}
            className="cursor-pointer text-2xl md:text-base">
            Logout
          </span>
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
