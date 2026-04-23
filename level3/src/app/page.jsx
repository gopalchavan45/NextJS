"use client";
import React from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const goToAbout = () => {
    router.push("/about");
  };
  return (
    // <div>
    //     <Link href="/"><li>Home</li></Link>
    //     <Link href="/about"><li>about</li></Link>
    //     <Link href="/contact"><li>contact</li></Link>
    // </div>
    <div>
      <h1>Home page</h1>
      <button onClick={goToAbout}>Go to about</button>
    </div>
  );
};

export default page;
