"use client";

import React, { useState } from "react";

const MonoalphabeticCipher: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [key, setKey] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const isValidKey = (key: string): boolean => {
    return /^[A-Z]{26}$/.test(key);
  };

  const encryptMonoalphabetic = (
    plaintext: string,
    substitutionAlphabet: string
  ): string => {
    const uppercaseText = plaintext.toUpperCase();
    let cipherText = "";

    for (const char of uppercaseText) {
      if (/[A-Z]/.test(char)) {
        const index = char.charCodeAt(0) - "A".charCodeAt(0);
        cipherText += substitutionAlphabet[index];
      } else {
        cipherText += char;
      }
    }

    return cipherText;
  };

  const decryptMonoalphabetic = (
    cipherText: string,
    reciprocalAlphabet: string
  ): string => {
    const uppercaseText = cipherText.toUpperCase();
    let plainText = "";

    for (const char of uppercaseText) {
      if (/[A-Z]/.test(char)) {
        const index = reciprocalAlphabet.indexOf(char);
        plainText += String.fromCharCode("A".charCodeAt(0) + index);
      } else {
        plainText += char;
      }
    }

    return plainText;
  };

  const handleEncrypt = () => {
    if (isValidKey(key)) {
      setOutput(encryptMonoalphabetic(text, key));
    } else {
      setOutput(
        "Invalid key. The key must be a valid permutation of the alphabet."
      );
    }
  };

  const handleDecrypt = () => {
    if (isValidKey(key)) {
      const reciprocalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        .split("")
        .map((char) => key.indexOf(char))
        .map((index) => String.fromCharCode("A".charCodeAt(0) + index))
        .join("");

      setOutput(decryptMonoalphabetic(text, reciprocalAlphabet));
    } else {
      setOutput(
        "Invalid key. The key must be a valid permutation of the alphabet."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="bg-white shadow-md p-4 mb-6">
        <h1 className="text-3xl font-bold text-center">
          Monoalphabetic Cipher
        </h1>
      </header>

      <main className="max-w-4xl mx-aut">
        <div className="mb-8 w-full max-w-4xl bg-gray-200 p-6 rounded-lg">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Example</h2>
            <p className="text-gray-700 mb-4">
              Given plain text, the task is to implement the Monoalphabetic
              Cipher.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p>
                <strong>Text:</strong> Welcome
              </p>
              <p>
                <strong>Key:</strong> QWERTYUIOPASDFGHJKLZXCVBNM
              </p>
              <p>
                <strong>Encrypted message:</strong> VTSEGDT
              </p>
            </div>
          </section>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          <p className="mb-4 text-gray-700">
            Monoalphabetic Cipher is a cipher where the letters of the plain
            text are mapped to ciphertext letters based on a single alphabetic
            key. It is a one-to-one mapping.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="text"
                className="block font-medium text-gray-600 mb-1"
              >
                Enter Text:
              </label>
              <input
                type="text"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="key"
                className="block font-medium text-gray-600 mb-1"
              >
                Enter Key:
              </label>
              <input
                type="text"
                id="key"
                value={key}
                onChange={(e) => setKey(e.target.value.toUpperCase())}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleEncrypt}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Encrypt
            </button>
            <button
              onClick={handleDecrypt}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Decrypt
            </button>
          </div>

          {output && (
            <div className="mt-6 p-4 bg-gray-200 rounded-md">
              <p className="font-medium text-gray-700">{output}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MonoalphabeticCipher;
