"use client";

import React, { useState } from "react";

const VigenereCipher: React.FC = () => {
  const [plaintext, setPlaintext] = useState<string>("");
  const [key, setKey] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [operation, setOperation] = useState<"encrypt" | "decrypt" | null>(
    null
  );

  const vigenereEncrypt = (text: string, key: string): string => {
    key = key.toUpperCase();
    const keyLength = key.length;
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === " ") {
        encryptedText += " ";
        continue;
      }

      const isUpperCase = char === char.toUpperCase();
      const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
      const keyChar = key[i % keyLength];
      const encryptedChar = String.fromCharCode(
        ((char.charCodeAt(0) -
          base +
          (keyChar.charCodeAt(0) - "A".charCodeAt(0))) %
          26) +
          base
      );

      encryptedText += encryptedChar;
    }

    return encryptedText;
  };

  const vigenereDecrypt = (text: string, key: string): string => {
    key = key.toUpperCase();
    const keyLength = key.length;
    let decryptedText = "";

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === " ") {
        decryptedText += " ";
        continue;
      }

      const isUpperCase = char === char.toUpperCase();
      const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
      const keyChar = key[i % keyLength];
      const decryptedChar = String.fromCharCode(
        ((char.charCodeAt(0) -
          base -
          (keyChar.charCodeAt(0) - "A".charCodeAt(0)) +
          26) %
          26) +
          base
      );

      decryptedText += decryptedChar;
    }

    return decryptedText;
  };

  const handleEncrypt = () => {
    setResult(vigenereEncrypt(plaintext, key));
    setOperation("encrypt");
  };

  const handleDecrypt = () => {
    setResult(vigenereDecrypt(plaintext, key));
    setOperation("decrypt");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="bg-white shadow-md p-4 mb-6">
        <p className="text-3xl font-bold text-center">Vigenère Cipher</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            What is the Vigenère Cipher?
          </h2>
          <p className="mb-4">
            A polyalphabetic cipher is a substitution, using multiple
            substitution alphabets. The Vigenère cipher is probably the
            best-known example of a polyalphabetic cipher, though it is a
            simplified special case. The Enigma machine is more complex but is
            still fundamental. Polyalphabetic Substitution Ciphers was the
            cryptographers answer to Frequency Analysis. The first known
            polyalphabetic cipher was the Alberti Cipher invented by Leon
            Battista Alberti in around 1467. He used a mixed alphabet to encrypt
            the plaintext, but at random points he would change to a different
            mixed alphabet, indicating the change with an uppercase letter in
            the ciphertext.
          </p>

          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <strong>Encryption Formula:</strong> E(x) = (P + K) mod 26 <br />
            <strong>Decryption Formula:</strong> D(x) = (E - K + 26) mod 26
          </div>
        </section>

        <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Try It Yourself
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block font-medium mb-2" htmlFor="plaintext">
                Enter Text:
              </label>
              <input
                type="text"
                id="plaintext"
                className="w-full p-3 border rounded-md"
                value={plaintext}
                onChange={(e) => setPlaintext(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="key">
                Enter Key:
              </label>
              <input
                type="text"
                id="key"
                className="w-full p-3 border rounded-md"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleEncrypt}
                className="w-1/2 bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700"
              >
                Encrypt
              </button>
              <button
                onClick={handleDecrypt}
                className="w-1/2 bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700"
              >
                Decrypt
              </button>
            </div>
            {result && (
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <p className="font-semibold">
                  {operation === "encrypt"
                    ? "Encrypted Text:"
                    : "Decrypted Text:"}
                </p>
                <p>{result}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default VigenereCipher;
