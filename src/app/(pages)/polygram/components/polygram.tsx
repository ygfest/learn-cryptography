"use client";

import React, { useState } from "react";

const polygramMap: Record<string, string> = {
  A: "XY",
  B: "ZQ",
  C: "LM",
  D: "PO",
  E: "RS",
  F: "TU",
  G: "VW",
  H: "AB",
  I: "CD",
  J: "EF",
  K: "GH",
  L: "IJ",
  M: "KL",
  N: "MN",
  O: "OP",
  P: "QR",
  Q: "ST",
  R: "UV",
  S: "WX",
  T: "YZ",
  U: "ZA",
  V: "BC",
  W: "DE",
  X: "FG",
  Y: "HI",
  Z: "JK",
};

const reverseMap = Object.fromEntries(
  Object.entries(polygramMap).map(([key, value]) => [value, key])
);

const PolygramCipher: React.FC = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("encrypt");

  const handleTransform = () => {
    if (mode === "encrypt") {
      setResult(
        text
          .toUpperCase()
          .split("")
          .map((char) => polygramMap[char] || char)
          .join(" ")
      );
    } else {
      setResult(
        text
          .split(" ")
          .map((pair) => reverseMap[pair] || pair)
          .join("")
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="bg-white shadow-md p-4 mb-6">
        <p className="text-3xl font-bold text-center">Polygram Cipher</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="text-2xl font-semibold mb-4">
            What is the Polygram Cipher?
          </p>
          <p className="mb-4">
            The Polygram Substitution Cipher is a type of substitution cipher in
            cryptography where groups of consecutive letters, called polygrams,
            are replaced with corresponding groups of letters based on a
            predefined key. It is an extension of the simple substitution
            cipher, where individual letters are replaced, allowing for more
            complex and varied transformations.
          </p>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="text-2xl font-semibold mb-4">Key Setup</p>
          <ul>
            <li>
              A key is created to define the substitutions for various
              polygrams.
            </li>
            <li>
              The key consists of mappings between specific polygrams in the
              plaintext and their corresponding replacements in the ciphertext.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="text-2xl font-semibold mb-4">Polygrams</p>
          <ul>
            <li>
              In the Polygram Substitution Cipher, a polygram is a sequence of
              consecutive letters in the plaintext.
            </li>
            <li>
              The length of the polygram can vary, and it depends on the
              specific design of the cipher.
            </li>
          </ul>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="text-2xl font-semibold mb-4">Encryption</p>
          <ul>
            <li>The plaintext is divided into non-overlapping polygrams.</li>
            <li>
              Each polygram is replaced with the corresponding polygram from the
              key.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="text-2xl font-semibold mb-4">Decryption</p>
          <ul>
            <li>The ciphertext is divided into non-overlapping polygrams.</li>
            <li>
              Each polygram is replaced with the inverse substitution from the
              key to retrieve the original plaintext.
            </li>
          </ul>
        </section>

        <section className="mt-8 bg-white p-6 rounded-lg shadow-md text-center flex justify-center flex-col items-center">
          <p className="text-2xl font-semibold mb-4">Try It Yourself</p>
          <div className="space-y-6 w-2/3">
            <div className="flex flex-col justify-center items-center">
              <label className="block font-medium mb-2" htmlFor="textToEncrypt">
                Enter Text:
              </label>
              <textarea
                id="textToEncrypt"
                className="w-full p-3 border rounded-md bg-white"
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here"
              ></textarea>
            </div>
            <select
              className="w-full p-3 border rounded-md bg-white"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="encrypt">Encrypt</option>
              <option value="decrypt">Decrypt</option>
            </select>
            <button
              onClick={handleTransform}
              className="w-full bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700"
            >
              {mode === "encrypt" ? "Encrypt" : "Decrypt"}
            </button>
            {result && (
              <div className="bg-gray-100 p-4 rounded-md">
                <p>{result}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PolygramCipher;
