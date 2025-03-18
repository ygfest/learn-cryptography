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
        className={`${
          isTabsOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row justify-between px-2 py-2`}
      >
        <Link href="introduction" className="flex-1">
          <li className="hover:bg-primary truncate px-2">Introduction</li>
        </Link>
        <Link href="affine" className="flex-1">
          <li className="hover:bg-primary truncate px-2">Affine Cipher</li>
        </Link>
        <Link href="caesar" className="flex-1">
          <li className="hover:bg-primary truncate px-2">Caesar Cipher</li>
        </Link>
        <Link href="autokey" className="flex-1">
          <li className="hover:bg-primary truncate px-2">Auto Key Cipher</li>
        </Link>
        <Link href="mono-alphabetic" className="flex-1">
          <li className="hover:bg-primary truncate px-2">
            Monoalphabetic Cipher
          </li>
        </Link>
        <Link href="playfair" className="flex-1">
          <li className="hover:bg-primary truncate px-2">Playfair Cipher</li>
        </Link>
        <Link href="homophonic" className="flex-1">
          <li className="hover:bg-primary truncate px-2">Homophonic Cipher</li>
        </Link>
        <Link href="vigenere" className="flex-1">
          <li className="hover:bg-primary truncate px-2">Vigenere Cipher</li>
        </Link>
        <Link href="polygram" className="flex-1">
          <li className="hover:bg-primary truncate px-2">
            Polygram Substitution Cipher
          </li>
        </Link>
        <Link href="hill" className="flex-1">
          <li className="hover:bg-primary truncate px-2">Hill Cipher</li>
        </Link>
        <Link href="polyalphabetic" className="flex-1">
          <li className="hover:bg-primary truncate px-2">
            Polyalphabetic Cipher
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Tabs;
