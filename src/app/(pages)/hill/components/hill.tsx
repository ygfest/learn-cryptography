"use client";

import Image from "next/image";
import { useState } from "react";

const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const modInverse = (a: number, m: number): number | null => {
  a = ((a % m) + m) % m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) return x;
  }
  return null;
};

const multiplyMatrix = (
  keyMatrix: number[][],
  textVector: number[],
  mod: number
): number[] => {
  return keyMatrix.map(
    (row) => row.reduce((sum, val, j) => sum + val * textVector[j], 0) % mod
  );
};

const invertMatrixMod = (
  matrix: number[][],
  mod: number
): number[][] | null => {
  const det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  const detInv = modInverse(det, mod);
  if (detInv === null) return null;
  return [
    [(matrix[1][1] * detInv) % mod, (-matrix[0][1] * detInv) % mod],
    [(-matrix[1][0] * detInv) % mod, (matrix[0][0] * detInv) % mod],
  ].map((row) => row.map((num) => (num + mod) % mod));
};

const HillCipher: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [key, setKey] = useState<string>("17,17,5,21,18,21,2,2,19");
  const [result, setResult] = useState<string>("");

  const processText = (isEncrypt: boolean): void => {
    const keyNumbers: number[] = key.split(",").map(Number);
    const size: number = Math.sqrt(keyNumbers.length);
    if (size % 1 !== 0) {
      alert("Invalid key matrix size");
      return;
    }

    let keyMatrix: number[][] = [];
    for (let i = 0; i < size; i++) {
      keyMatrix.push(keyNumbers.slice(i * size, (i + 1) * size));
    }

    let processedTextVector: number[] | null = null;
    if (isEncrypt) {
      const textVector: number[] = text
        .toUpperCase()
        .split("")
        .map((c) => alphabet.indexOf(c));
      if (textVector.includes(-1)) {
        alert("Invalid character in input");
        return;
      }
      processedTextVector = multiplyMatrix(keyMatrix, textVector, 26);
    } else {
      const inverseMatrix = invertMatrixMod(keyMatrix, 26);
      if (!inverseMatrix) {
        alert("Key matrix is not invertible");
        return;
      }
      const textVector: number[] = text
        .toUpperCase()
        .split("")
        .map((c) => alphabet.indexOf(c));
      if (textVector.includes(-1)) {
        alert("Invalid character in input");
        return;
      }
      processedTextVector = multiplyMatrix(inverseMatrix, textVector, 26);
    }

    if (processedTextVector) {
      setResult(processedTextVector.map((i) => alphabet[i]).join(""));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="bg-white shadow-md p-4 mb-6">
        <p className="text-3xl font-bold text-center">Hill Cipher</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-2xl font-semibold mb-4">Encryption</p>
          <p className="mb-4">
            Hill cipher encryption uses an alphabet and a square matrix M of
            size n made up of integer numbers, called the encryption matrix.
          </p>

          <div className="bg-gray-100 p-4 rounded-md mb-6 text-center">
            <code className="text-lg font-semibold">
              Example: Encrypt the plain text DCODEZ with the Latin alphabet
              (A-Z) and the matrix M (size n=2):
            </code>
            <code className="text-lg font-semibold">
              The encrypted message is now “MDLNFN”.
            </code>
            <div className="mt-4 flex justify-center">
              <Image
                src="/m.png"
                alt="Encryption Matrix"
                width={200}
                height={200}
              />
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-2xl font-semibold mb-4">Decryption</p>
          <p className="mb-4">
            Hill cipher decryption requires the encryption matrix and the
            alphabet used. It involves matrix computations such as matrix
            inversion and modular arithmetic.
          </p>

          <p className="mb-4">
            To decrypt Hill ciphertext, compute the matrix inverse modulo 26
            (where 26 is the alphabet length), ensuring the matrix is
            invertible.
          </p>

          <div className="bg-gray-100 p-4 rounded-md mb-6 text-center">
            <code className="text-lg font-semibold">
              Example: Using the example matrix, compute the inverse matrix
              modulo 26:
            </code>
            <code className="text-lg font-semibold">
              The encrypted message is now “MDLNFN”.
            </code>
            <div className="mt-4 flex justify-center">
              <Image
                src="/n.jpg"
                alt="Decryption Matrix"
                width={200}
                height={200}
              />
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md text-center flex justify-center flex-col items-center">
          <p className="text-2xl font-semibold mb-4">Try It Yourself</p>
          <div className="space-y-6 w-2/3">
            <div className="flex flex-col justify-center items-center">
              <label className="block font-medium mb-2" htmlFor="text">
                Enter Text:
              </label>
              <input
                type="text"
                id="text"
                className="w-full p-3 border rounded-md bg-white"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="flex gap-4 w-full">
              <button
                onClick={() => processText(true)}
                className="w-1/2 bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700"
              >
                Encrypt
              </button>
              <button
                onClick={() => processText(false)}
                className="w-1/2 bg-gray-600 text-white p-3 rounded-md font-semibold hover:bg-gray-700"
              >
                Decrypt
              </button>
            </div>
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

export default HillCipher;
