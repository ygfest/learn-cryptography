"use client";

import React, { useState } from "react";

const HomophonicCipher: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const getHomophonicKey = (): Record<string, number[]> => ({
    A: [21, 27, 31, 40],
    B: [15],
    C: [1, 33],
    D: [20, 34],
    E: [22, 28, 32, 36, 37],
    F: [5],
    G: [17],
    H: [14],
    I: [2, 29, 38, 41],
    J: [19],
    K: [3],
    L: [7, 39, 42],
    M: [9, 43],
    N: [12, 48, 97],
    O: [18, 60, 85],
    P: [26, 44],
    Q: [25],
    R: [24, 49],
    S: [10, 30, 45, 99],
    T: [6, 96, 55],
    U: [16, 94],
    V: [23],
    W: [13],
    X: [11],
    Y: [8],
    Z: [4],
  });

  const homophonicEncrypt = (plaintext: string): string => {
    const homophonicKey = getHomophonicKey();
    return plaintext
      .toUpperCase()
      .split("")
      .map((char) => {
        const key = homophonicKey[char];
        if (key) {
          const randomIndex = Math.floor(Math.random() * key.length);
          return key[randomIndex];
        }
        return char;
      })
      .join(" ");
  };

  const homophonicDecrypt = (ciphertext: string): string => {
    const homophonicKey = getHomophonicKey();
    const reverseKey = Object.entries(homophonicKey).reduce(
      (acc, [char, values]) => {
        values.forEach((value) => {
          acc[value] = char;
        });
        return acc;
      },
      {} as Record<number, string>
    );

    return ciphertext
      .split(" ")
      .map((code) => {
        const num = parseInt(code, 10);
        return reverseKey[num] || code;
      })
      .join("");
  };

  const handleEncrypt = () => {
    setResult(homophonicEncrypt(text));
  };

  const handleDecrypt = () => {
    setResult(homophonicDecrypt(text));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="bg-white shadow-md p-4 mb-6">
        <p className="text-3xl font-bold text-center">
          Homophonic Substitution Cipher
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-2xl font-semibold mb-4">What is this Cipher?</p>
          <p className="mb-4">
            Homophonic substitution ciphers map plaintext letters to multiple
            ciphertext values to obscure patterns. They're less secure compared
            to modern encryption methods.
          </p>
          <p className="mb-4">
            Homophonic ciphers are historical and have been used in various
            encryption methods. However, as with any cryptographic system, the
            security of a homophonic cipher depends on the secrecy of the key
            and the strength of the algorithm. In modern cryptography, more
            advanced techniques, such as public-key cryptography and
            symmetric-key algorithms, are commonly employed for secure
            communication.
          </p>

          <div className="bg-gray-200 p-4 rounded-md text-center mb-6">
            <p className="block font-semibold">Example Key:</p>
            <p className="block font-semibold">A: [21, 27, 31, 40]</p>
            <p className="block font-semibold">B: [15]</p>
            <p className="block font-semibold">C: [1, 33]</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-center font-semibold mb-2">Encryption</p>
          <p className="text-gray-700 mb-4">
            A homophonic cipher is a type of substitution cipher used in
            cryptography, where each plaintext element (usually a letter or a
            group of letters) is replaced by multiple possible ciphertext
            elements. This contrasts with a simple substitution cipher, where
            each plaintext element is consistently replaced by a single
            ciphertext element.
          </p>
          <div className="bg-gray-200 p-4 rounded-md text-center mb-6">
            <span className="block font-semibold">A: 21, 27, 31, 40</span>
            <span className="block font-semibold">B: 15</span>
            <span className="block font-semibold">C: 1, 33</span>
            <span className="block font-semibold">Plaintext: ABC</span>
            <span className="block font-semibold">Encryption: </span>
            <span className="block font-semibold">
              -----------------------------------------
            </span>
            <span className="block font-semibold">
              The Encrypted text is: 21, 15, 1
            </span>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-center font-semibold mb-2">Decryption</p>
          <p className="text-gray-700 mb-4">
            Decryption of a homophonic cipher involves reversing the process of
            encryption, where each ciphertext element is mapped back to one or
            more possible plaintext elements. Since homophonic ciphers introduce
            ambiguity by allowing multiple substitutions for each plaintext
            element, the decryption process requires making educated guesses
            and, in some cases, statistical analysis.
          </p>
          <div className="bg-gray-200 p-4 rounded-md text-center mb-6">
            <span className="block font-semibold">
              The Encrypted text is: 21, 15, 1
            </span>
            <span className="block font-semibold">A: 21, 27, 31, 40</span>
            <span className="block font-semibold">B: 15</span>
            <span className="block font-semibold">C: 1, 33</span>
            <span className="block font-semibold">Decryption: </span>
            <span className="block font-semibold">
              -----------------------------------------
            </span>
            <span className="block font-semibold">
              The Decryption text is: ABC
            </span>
          </div>
        </section>

        <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <p className="text-2xl font-semibold mb-4 text-center">
            Try It Yourself
          </p>
          <div className="space-y-6">
            <div>
              <label className="block font-medium mb-2" htmlFor="text">
                Enter Text:
              </label>
              <input
                type="text"
                id="text"
                className="w-full p-3 border rounded-md bg-inherit"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleEncrypt}
                className="bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700 w-1/2"
              >
                Encrypt
              </button>
              <button
                onClick={handleDecrypt}
                className="bg-gray-800 text-white p-3 rounded-md font-semibold hover:bg-gray-900 w-1/2"
              >
                Decrypt
              </button>
            </div>
            {result && (
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <p className="font-semibold">{result}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomophonicCipher;
