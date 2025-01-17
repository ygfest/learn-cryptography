"use client";

import React, { useState } from "react";

const AutokeyCipher: React.FC = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const encrypt = (text: string, key: string): string => {
    text = text.toUpperCase();
    key = key.toUpperCase();
    let keyStream = key;
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
      const index =
        (alphabet.indexOf(text[i]) +
          alphabet.indexOf(keyStream[i % keyStream.length])) %
        26;
      encryptedText += alphabet[index];
      keyStream += text[i];
    }

    return encryptedText;
  };

  const decrypt = (text: string, key: string): string => {
    text = text.toUpperCase();
    key = key.toUpperCase();
    let keyStream = key;
    let decryptedText = "";

    for (let i = 0; i < text.length; i++) {
      const index =
        (alphabet.indexOf(text[i]) -
          alphabet.indexOf(keyStream[i % keyStream.length]) +
          26) %
        26;
      decryptedText += alphabet[index];
      keyStream += decryptedText[i];
    }

    return decryptedText;
  };

  const handleEncrypt = () => {
    setResult(encrypt(text, key));
  };

  const handleDecrypt = () => {
    setResult(decrypt(text, key));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="bg-white shadow-md p-4 mb-6">
        <h1 className="text-3xl font-bold text-center">Autokey Cipher</h1>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-2xl font-semibold mb-4">What is AutoKey Cipher</p>

          <p className="mb-4">
            Autokey Cipher is a polyalphabetic substitution cipher. It was
            invented by Blaise de Vigenère in 1586. It uses earlier letters in
            the message as part of the key, making it more secure than simple
            substitution ciphers.
          </p>
          <img
            className="mx-auto w-1/3 mb-4"
            src="Tabula Recta.jpg"
            alt="Tabula Recta"
          />
          <p className="text-center font-semibold mb-2">Tabula Recta</p>
        </section>

        <section className="bg-white p-6 shadow-md rounded-lg">
          <p className="text-center font-semibold mb-2">Encryption</p>

          <p className="text-gray-700 mb-4">
            Encryption using the Autokey Cipher involves using a keyword to
            generate a keystream and substituting letters accordingly.
          </p>
          <div className="bg-gray-200 p-4 rounded-md text-center mb-6">
            <span className="block font-semibold">Ci = (Pi + Ki) mod 26</span>
            <span className="block font-semibold">Plaintext: APPLE</span>
            <span>Autokey: M</span>
            <span className="block font-semibold">
              The Encrypted text is: MBBXQ
            </span>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-center font-semibold mb-2">Decryption</p>
          <p className="text-gray-700 mb-4">
            Decryption reverses the process, using the ciphertext and key to
            extract the plaintext.
          </p>
          <div className="bg-gray-200 p-4 rounded-md text-center mb-6">
            <span className="block font-semibold">Pi = (Ci - Ki) mod 26</span>
            <span>Encrypted text: MBBXQ</span>
            <span>Key: M</span>
            <span className="block">Decrypted Text: APPLE</span>
          </div>
        </section>
      </main>

      <section className="mt-10 bg-white p-6 rounded-lg shadow-md text-center flex  flex-col items-center">
        <p className="text-2xl font-semibold mb-4">Try it yourself</p>
        <div className="space-y-6 w-2/3">
          <label htmlFor="text" className="block font-medium mb-2">
            Enter Text:
          </label>
          <input
            id="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-3 border rounded-md bg-white"
          />
          <label htmlFor="key" className="block font-medium mb-2">
            Enter Key:
          </label>
          <input
            id="key"
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full p-3 border rounded-md bg-white"
          />

          <div className="flex space-x-4">
            <button
              onClick={handleEncrypt}
              className="w-full bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700"
            >
              Encrypt
            </button>
            <button
              onClick={handleDecrypt}
              className="w-full bg-gray-800 text-white p-3 rounded-md font-semibold hover:bg-gray-900"
            >
              Decrypt
            </button>
          </div>
        </div>
        {result && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">Result: {result}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default AutokeyCipher;
