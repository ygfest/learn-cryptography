"use client";

import Image from "next/image";
import { useState } from "react";

const HillCipher = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Hill Cipher</h2>
        <p className="mt-2 text-gray-700">
          Hill Cipher is a polyalphabetic cipher created by extending the Affine
          cipher, using linear algebra and modular arithmetic via a numeric
          matrix that serves as an encryption and decryption key.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-center">Encryption</h3>
        <p className="text-gray-700 mt-2">
          Hill cipher encryption uses an alphabet and a square matrix M of size
          n made up of integer numbers, called the encryption matrix.
        </p>
        <div className="mt-4 bg-gray-300 p-4 text-center rounded-lg">
          <p className="text-gray-800 font-medium">
            Example: Encrypt the plain text DCODEZ with the Latin alphabet (A-Z)
            and the matrix M (size n=2):
          </p>
          <p className="mt-2 text-gray-800 font-bold">
            The encrypted message is now “MDLNFN”.
          </p>
          <div className="mt-4 flex justify-center">
            <Image
              src="/m.png"
              alt="Encryption Matrix"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-center">Decryption</h3>
        <p className="text-gray-700 mt-2">
          Hill cipher decryption requires the encryption matrix and the alphabet
          used. It involves matrix computations such as matrix inversion and
          modular arithmetic.
        </p>
        <p className="text-gray-700 mt-2">
          To decrypt Hill ciphertext, compute the matrix inverse modulo 26
          (where 26 is the alphabet length), ensuring the matrix is invertible.
        </p>
        <div className="mt-4 bg-gray-300 p-4 text-center rounded-lg">
          <p className="text-gray-800 font-medium">
            Example: Using the example matrix, compute the inverse matrix modulo
            26:
          </p>
          <div className="mt-4 flex justify-center">
            <Image
              src="/n.jpg"
              alt="Decryption Matrix"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HillCipher;
