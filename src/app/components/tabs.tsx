import Link from "next/link";
import React from "react";

const Tabs = () => {
  return (
    <div className="fixed z-50 w-full p-0 m-0 bg-secondary text-white">
      <ul className="flex flex-row justify-between px-2 py-2">
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
        <Link href="monoalphabetic">
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
