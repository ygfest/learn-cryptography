"use client";

import React, { useState } from "react";

const PlayfairCipher: React.FC = () => {
  const [key, setKey] = useState("");
  const [text, setText] = useState("");
  const [operation, setOperation] = useState<"encrypt" | "decrypt">("encrypt");
  const [result, setResult] = useState("");

  const handleOperation = () => {
    if (!key || !text) {
      alert("Please provide both key and text.");
      return;
    }
    try {
      if (operation === "encrypt") {
        setResult(encryptPlayfair(text, key));
      } else {
        setResult(decryptPlayfair(text, key));
      }
    } catch (error) {
      alert("An error occurred during the process");
      console.log(error);
    }
  };

  const generateKeySquare = (key: string) => {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const uniqueKey = Array.from(
      new Set(key.toUpperCase().replace(/J/g, "I") + alphabet)
    );
    return uniqueKey.filter((letter) => /^[A-Z]$/.test(letter)).slice(0, 25);
  };

  const findPosition = (char: string, keySquare: string[]) => {
    const index = keySquare.indexOf(char.toUpperCase());
    return [Math.floor(index / 5), index % 5];
  };

  const encryptPlayfair = (text: string, key: string) => {
    const keySquare = generateKeySquare(key);
    const pairs = formatTextForPlayfair(text);
    return pairs.map(([a, b]) => encryptPair(a, b, keySquare)).join("");
  };

  const decryptPlayfair = (text: string, key: string) => {
    const keySquare = generateKeySquare(key);
    const pairs = formatTextForPlayfair(text);
    return pairs.map(([a, b]) => decryptPair(a, b, keySquare)).join("");
  };

  const formatTextForPlayfair = (text: string): [string, string][] => {
    text = text
      .toUpperCase()
      .replace(/J/g, "I")
      .replace(/[^A-Z]/g, "");
    const pairs: [string, string][] = [];
    for (let i = 0; i < text.length; i += 2) {
      const a = text[i];
      const b = text[i + 1] || "X";
      if (a === b) {
        pairs.push([a, "X"]);
        i--;
      } else {
        pairs.push([a, b]);
      }
    }
    return pairs;
  };

  const encryptPair = (a: string, b: string, keySquare: string[]) => {
    const [rowA, colA] = findPosition(a, keySquare);
    const [rowB, colB] = findPosition(b, keySquare);
    if (rowA === rowB)
      return (
        keySquare[rowA * 5 + ((colA + 1) % 5)] +
        keySquare[rowB * 5 + ((colB + 1) % 5)]
      );
    if (colA === colB)
      return (
        keySquare[((rowA + 1) % 5) * 5 + colA] +
        keySquare[((rowB + 1) % 5) * 5 + colB]
      );
    return keySquare[rowA * 5 + colB] + keySquare[rowB * 5 + colA];
  };

  const decryptPair = (a: string, b: string, keySquare: string[]) => {
    const [rowA, colA] = findPosition(a, keySquare);
    const [rowB, colB] = findPosition(b, keySquare);
    if (rowA === rowB)
      return (
        keySquare[rowA * 5 + ((colA + 4) % 5)] +
        keySquare[rowB * 5 + ((colB + 4) % 5)]
      );
    if (colA === colB)
      return (
        keySquare[((rowA + 4) % 5) * 5 + colA] +
        keySquare[((rowB + 4) % 5) * 5 + colB]
      );
    return keySquare[rowA * 5 + colB] + keySquare[rowB * 5 + colA];
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="bg-white shadow-md p-4 mb-6">
        <p className="text-3xl font-bold text-center">Playfair Cipher</p>
      </header>
      <main className="max-w-4xl mx-auto">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-2xl font-semibold mb-4">
            What is the Playfair Cipher?
          </p>
          <p className="text-base">
            The Playfair cipher was the first practical digraph substitution
            cipher. The scheme was invented in 1854 by Charles Wheatstone but
            was named after Lord Playfair, who promoted the use of the cipher.
            In the Playfair cipher, unlike traditional ciphers, we encrypt a
            pair of alphabets (digraphs) instead of a single alphabet.
            <br />
            <br />
            The ‘key’ for the Affine cipher consists of 2 numbers, we’ll call
            them `a` and `b`. The following discussion assumes the use of a
            26-character alphabet (m = 26). `a` should be chosen to be
            relatively prime to `m` (i.e., `a` should have no factors in common
            with `m`). It was used for tactical purposes by British forces in
            the Second Boer War and in World War I and for the same purpose by
            the Australians during World War II. This was because Playfair is
            reasonably fast to use and requires no special equipment.
            <br />
          </p>

          <h6 className="text-center font-semibold text-lg mt-6">Encryption</h6>
          <p className="text-base">
            For the encryption process, let us consider the following example:
          </p>

          <div className="card bg-gray-200 mx-auto my-4 p-4 text-center rounded-lg max-w-lg">
            <div>
              <span className="font-semibold">Key: monarchy</span>
              <br />
              <span>Plaintext: instruments</span>
              <br />
              <p className="text-base">
                • The key square is a 5×5 grid of alphabets that acts as the key
                for encrypting the plaintext. Each of the 25 alphabets must be
                unique, and one letter of the alphabet (usually J) is omitted
                from the table (as the table can hold only 25 alphabets). If the
                plaintext contains J, then it is replaced by I.
                <br />
              </p>
              <span>
                • The initial alphabets in the key square are the unique
                alphabets of the key in the order in which they appear, followed
                by the remaining letters of the alphabet in order.
              </span>
              <br />
              <span>
                The plaintext is split into pairs of two letters (digraphs). If
                there is an odd number of letters, a Z is added to the last
                letter.
                <br />
                For example:
              </span>
              <br />
              <span className="font-semibold">
                PlainText: "instruments" <br />
                After Split: 'in' 'st' 'ru' 'me' 'nt' 'sz'
              </span>
            </div>
          </div>

          <p className="text-base">
            1. A pair cannot be made with the same letter. Break the letter into
            single and add a bogus letter to the previous letter.
            <br />
            <span className="font-semibold">Plain Text: “hello”</span>
            <br />
            After Split: ‘he’ ‘lx’ ‘lo’
            <br />
            <span className="font-semibold">Here ‘x’ is the bogus letter.</span>
            <br />
            <br />
            2. If the letter is standing alone in the process of pairing, then
            add an extra bogus letter with the alone letter.
            <br />
            <span className="font-semibold">Plain Text: “helloe”</span>
            <br />
            After Split: ‘he’ ‘lx’ ‘lo’ ‘ez’
          </p>

          <h6 className="text-center font-semibold text-lg mt-6">Decryption</h6>
          <p className="text-base">
            Decrypting the Playfair cipher is as simple as doing the same
            process in reverse. The receiver has the same key and can create the
            same key table, and then decrypt any messages made using that key.
          </p>

          <div className="card bg-gray-200 mx-auto my-4 p-4 text-center rounded-lg max-w-lg">
            <div>
              <span className="font-semibold">Key: monarchy</span>
              <br />
              <span>Ciphertext: gatlmzclrqtx</span>
            </div>
          </div>

          <p className="text-base">
            Algorithm to decrypt the ciphertext: The ciphertext is split into
            pairs of two letters (digraphs).
            <br />
            Note: The ciphertext always has an even number of characters.
            <br />
            <br />
            For example:
            <br />
            CipherText: "gatlmzclrqtx"
            <br />
            After Split: 'ga' 'tl' 'mz' 'cl' 'rq' 'tx'
            <br />
            <br />
            Rules for Decryption:
            <br />
            If both the letters are in the same column: Take the letter above
            each one (going back to the bottom if at the top).
            <br />
            For example:
            <br />
            Digraph: "cl"
            <br />
            Decrypted Text: me
            <br />
            Decryption:
            <br />
            c → m <br />l → e
          </p>
        </section>

        <section className="mt-8 bg-white p-6 rounded-lg shadow-md text-center flex justify-center flex-col items-center">
          <p className="text-2xl font-semibold mb-4">Try It Yourself</p>
          <div className="space-y-6 w-2/3">
            <input
              type="text"
              placeholder="Enter Key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full p-3 border rounded-md bg-white"
            />
            <input
              type="text"
              placeholder="Enter Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-3 border rounded-md bg-white"
            />
            <select
              value={operation}
              onChange={(e) =>
                setOperation(e.target.value as "encrypt" | "decrypt")
              }
              className="w-full p-3 border rounded-md bg-white"
            >
              <option value="encrypt">Encrypt</option>
              <option value="decrypt">Decrypt</option>
            </select>
            <button
              onClick={handleOperation}
              className="w-full bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700"
            >
              See Result
            </button>
            <div className="p-4 bg-gray-100 rounded">
              <strong>Result:</strong> {result || "No result yet."}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PlayfairCipher;
