"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const Tabs = () => {
  const [isTabsOpen, setIsTabsOpen] = useState(false);

  const toggleTabLinks = () => {
    setIsTabsOpen((prevState) => !prevState);
  };

  return (
    <div className="fixed left-0 z-50 w-full  mt-16 m-0 bg-secondary text-white items-center">
      <div className="flex items-center justify-between p-4 md:hidden ">
        <button onClick={toggleTabLinks} aria-label="Toggle menu">
          <CiMenuFries />
        </button>
      </div>

      <ul
        className={`${isTabsOpen ? "block" : "hidden"} md:flex flex-col md:flex-row justify-between px-2 py-2`}
      >
        <Link href="introduction">
          <li className="hover:bg-primary">Introduction</li>
        </Link>
        <Link href="affine">
          <li>Affine Cipher</li>
        </Link>
        <Link href="caesar">
          <li>Caesar Cipher</li>
        </Link>
        <Link href="autokey">
          <li>Auto Key Cipher</li>
        </Link>
        <Link href="mono-alphabetic">
          <li>Monoalphabetic Cipher</li>
        </Link>
        <Link href="playfair">
          <li>Playfair Cipher</li>
        </Link>
        <Link href="homophonic">
          <li>Homophonic Cipher</li>
        </Link>
        <Link href="vigenere">
          <li>Vigenere Cipher</li>
        </Link>
        <Link href="polygram">
          <li>Polygram Substitution Cipher</li>
        </Link>
        <Link href="hill">
          <li>Hill Cipher</li>
        </Link>
        <Link href="polyalphabetic">
          <li>Polyalphabetic Cipher</li>
        </Link>
      </ul>
    </div>
  );
};

export default Tabs;
