"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session, status } = useSession();
  console.log({ session, status });

  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-red-500 px-5 py-3 font-semibold rounded-lg"
        onClick={() => signIn("google")}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
