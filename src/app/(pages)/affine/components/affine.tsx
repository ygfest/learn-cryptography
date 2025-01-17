"use client";

import React, { useState } from "react";
import Image from "next/image";

const AffineCipher: React.FC = () => {
  const [textToEncrypt, setTextToEncrypt] = useState<string>("");
  const [textToDecrypt, setTextToDecrypt] = useState<string>("");
  const [encryptedText, setEncryptedText] = useState<string>("");
  const [decryptedText, setDecryptedText] = useState<string>("");

  const modInverse = (a: number, m: number): number | null => {
    let m0 = m,
      t,
      q;
    let x0 = 0,
      x1 = 1;

    if (m === 1) return null;

    while (a > 1) {
      q = Math.floor(a / m);
      t = m;
      m = a % m;
      a = t;
      t = x0;
      x0 = x1 - q * x0;
      x1 = t;
    }

    return x1 < 0 ? x1 + m0 : x1;
  };

  const affineEncrypt = (text: string, key: [number, number]): string => {
    const [a, b] = key;
    return text
      .split("")
      .map((char) => {
        if (/[a-zA-Z]/.test(char)) {
          const offset = char >= "a" ? 97 : 65;
          return String.fromCharCode(
            ((a * (char.charCodeAt(0) - offset) + b) % 26) + offset
          );
        }
        return char;
      })
      .join("");
  };

  const affineDecrypt = (cipher: string, key: [number, number]): string => {
    const [a, b] = key;
    const aInverse = modInverse(a, 26);
    if (aInverse === null) return "Invalid key";

    return cipher
      .split("")
      .map((char) => {
        if (/[a-zA-Z]/.test(char)) {
          const offset = char >= "a" ? 97 : 65;
          return String.fromCharCode(
            ((aInverse * (char.charCodeAt(0) - offset - b + 26)) % 26) + offset
          );
        }
        return char;
      })
      .join("");
  };

  const handleEncrypt = () => {
    const key: [number, number] = [17, 20];
    setEncryptedText(affineEncrypt(textToEncrypt, key));
  };

  const handleDecrypt = () => {
    const key: [number, number] = [17, 20];
    setDecryptedText(affineDecrypt(textToDecrypt, key));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="bg-white shadow-md p-4 mb-6">
        <p className="text-3xl font-bold text-center">Affine Cipher</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-2xl font-semibold mb-4">
            What is the Affine Cipher?
          </p>
          <p className="mb-4">
            The Affine cipher is a monoalphabetic substitution cipher that maps
            each letter in an alphabet to its numeric equivalent, encrypts it
            using a simple mathematical function, and converts it back to a
            letter.
          </p>
          <p className="mb-4">
            The key consists of two numbers, <strong>a</strong> and{" "}
            <strong>b</strong>. Encryption is performed using the formula:
          </p>
          <div className="bg-gray-100 p-4 rounded-md mb-6 text-center">
            <code className="text-lg font-semibold">
              E(x) = (a * x + b) mod m
            </code>
          </div>
          <p className="mb-4">Decryption is performed using the formula:</p>
          <div className="bg-gray-100 p-4 rounded-md text-center">
            <code className="text-lg font-semibold">
              D(x) = a⁻¹(x - b) mod m
            </code>
          </div>
          <img
            className="mx-auto my-6"
            src="/affine-cipher.svg"
            alt="Affine Cipher Diagram"
          />
        </section>

        <section className="mt-8 bg-white p-6 rounded-lg shadow-md text-center flex justify-center flex-col items-center">
          <p className="text-2xl font-semibold mb-4">Try It Yourself</p>
          <div className="space-y-6 w-2/3">
            <div className="flex flex-col justify-center items-center">
              <label className="block font-medium mb-2" htmlFor="textToEncrypt">
                Enter Text to Encrypt:
              </label>
              <input
                type="text"
                id="textToEncrypt"
                className="w-full p-3 border rounded-md bg-white "
                value={textToEncrypt}
                onChange={(e) => setTextToEncrypt(e.target.value)}
              />
            </div>
            <button
              onClick={handleEncrypt}
              className="w-full bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700"
            >
              Encrypt
            </button>
            {encryptedText && (
              <div className="bg-gray-100 p-4 rounded-md">
                <p>{encryptedText}</p>
              </div>
            )}
          </div>

          <div className="space-y-6 mt-8 w-2/3">
            <div>
              <label className="block font-medium mb-2" htmlFor="textToDecrypt">
                Enter Text to Decrypt:
              </label>
              <input
                type="text"
                id="textToDecrypt"
                className="w-full p-3 border rounded-md bg-white"
                value={textToDecrypt}
                onChange={(e) => setTextToDecrypt(e.target.value)}
              />
            </div>
            <button
              onClick={handleDecrypt}
              className="w-full bg-gray-800 text-white p-3 rounded-md font-semibold hover:bg-gray-900"
            >
              Decrypt
            </button>
            {decryptedText && (
              <div className="bg-gray-100 p-4 rounded-md">
                <p>{decryptedText}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AffineCipher;
