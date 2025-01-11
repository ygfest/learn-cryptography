"use client";

import { useState } from "react";

const CaesarCipher = () => {
  const [encryptPlainText, setEncryptPlainText] = useState("");
  const [encryptCaesarShift, setEncryptCaesarShift] = useState<number | "">("");
  const [decryptEncryptedText, setDecryptEncryptedText] = useState("");
  const [decryptCaesarShift, setDecryptCaesarShift] = useState<number | "">("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleEncrypt = () => {
    if (encryptPlainText && typeof encryptCaesarShift === "number") {
      const shift = encryptCaesarShift % 26;
      const result = encryptPlainText
        .toUpperCase()
        .split("")
        .map((char) => {
          if (/[A-Z]/.test(char)) {
            return String.fromCharCode(
              ((char.charCodeAt(0) - 65 + shift) % 26) + 65
            );
          }
          return char;
        })
        .join("");
      setEncryptedText(result);
    }
  };

  const handleDecrypt = () => {
    if (decryptEncryptedText && typeof decryptCaesarShift === "number") {
      const shift = decryptCaesarShift % 26;
      const result = decryptEncryptedText
        .toUpperCase()
        .split("")
        .map((char) => {
          if (/[A-Z]/.test(char)) {
            return String.fromCharCode(
              ((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65
            );
          }
          return char;
        })
        .join("");
      setDecryptedText(result);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="bg-white shadow-md p-4 mb-6">
        <h1 className="text-3xl font-bold text-center">Caesar Cipher</h1>
      </header>

      <main className="mx-w-4xl mx-auto">
        <section className="bg-white p-6 rounded-lg shadow-md mt-8">
          <p className="text-2xl font-semibold mb-4">
            Importance of Cryptography
          </p>

          <ul className="mb-4">
            <li>
              <span>
                The Caesar cipher is a simple encryption technique that was used
                by Julius Caesar to send secret messages to his allies. It works
                by shifting the letters in the plaintext message by a certain
                number of positions, known as the “shift” or “key”.
              </span>
            </li>
            <li>
              <span>
                The Caesar Cipher technique is one of the earliest and simplest
                methods of encryption technique. It’s simply a type of
                substitution cipher, i.e., each letter of a given text is
                replaced by a letter with a fixed number of positions down the
                alphabet. For example with a shift of 1, A would be replaced by
                B, B would become C, and so on. The method is apparently named
                after Julius Caesar, who apparently used it to communicate with
                his officials.
              </span>
            </li>
            <li>
              <span>
                Thus to cipher a given text we need an integer value, known as a
                shift which indicates the number of positions each letter of the
                text has been moved down.
              </span>
            </li>
            <li>
              <span>
                The encryption can be represented using modular arithmetic by
                first transforming the letters into numbers, according to the
                scheme, A = 0, B = 1,…, Z = 25. Encryption of a letter by a
                shift n can be described mathematically as.
              </span>
            </li>
            <li>
              <span>
                For example, if the shift is 3, then the letter A would be
                replaced by the letter D, B would become E, C would become F,
                and so on. The alphabet is wrapped around so that after Z, it
                starts back at A.
              </span>
            </li>
            <li>
              <span>
                Here is an example of how to use the Caesar cipher to encrypt
                the message “HELLO” with a shift of 3: <br />
                1. Write down the plaintext message: HELLO
                <br />
                2. Choose a shift value. In this case, we will use a shift of 3.
                <br />
                3. Replace each letter in the plaintext message with the letter
                that is three positions to the right in the alphabet.
                <br />
              </span>
            </li>
          </ul>

          <div className="bg-gray-100 p-4 rounded-md mb-6 text-center">
            <code className="text-lg font-semibold">
              H becomes K (shift 3 from H)
              <br />
              E becomes H (shift 3 from E)
              <br />
              L becomes O (shift 3 from L)
              <br />
              L becomes O (shift 3 from L)
              <br />
              O becomes R (shift 3 from O)
              <br />
            </code>
          </div>

          <div className="card=text">
            4. The encrypted message is now “KHOOR”.
          </div>

          <ul>
            <li>
              <span>
                To decrypt the message, you simply need to shift each letter
                back by the same number of positions. In this case, you would
                shift each letter in “KHOOR” back by 3 positions to get the
                original message, “HELLO”.
              </span>
            </li>
          </ul>

          <div className="bg-gray-100 rounded-md p-4 mb-6 text-center">
            <code className="text-lg font-semibold">En(x) = (x+n)mod 26</code>
            <br />
            <code className="text-lg font-semibold">
              (Encryption Phase with shift n)
            </code>
            <br />
            <br />
            <code className="text-lg font-semibold">Dn(x)=(x-n)mod 26</code>
            <br />
            <code className="text-lg font-semibold">
              (Decryption Phase with shift n)
            </code>
            <br />
          </div>

          <img
            className="mx-auto my-6 w-[400px]"
            src="caesar.svg"
            alt="Caesar Image"
          />
          <p className="text-xl font-semibold">Examples:</p>
          <div className="bg-gray-100 rounded-md p-4 items-center">
            <code className="text-xl font-semibold">
              <br />
              <span>Text : ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
              <br />
              <span>Shift : 23</span>
              <br />
              <span>Cipher : XYZABCDEFGHIJKLMNOPQRSTUVW</span>
              <br />
              <br />
              <span>Cipher : XYZABCDEFGHIJKLMNOPQRSTUVW</span>
              <br />
              <span>Shift: 4</span>
              <br />
              <span>Cipher: EXXEGOEXSRGI</span>
              <br />
              <br />
            </code>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mt-8 ">
          <h6 className="text-xl font-semibold">Advantages</h6>
          <ul className="mt-4">
            <li>
              <span>
                Easy to implement and use thus, making suitable for beginners to
                learn about encryption.
              </span>
            </li>
            <li>
              <span>
                Can be physically implemented, such as with a set of rotating
                disks or a set of cards, known as a scytale, which can be useful
                in certain situations.
              </span>
            </li>
            <li>
              <span>Requires only a small set of pre-shared information.</span>
            </li>
            <li>
              <span>
                Can be modified easily to create a more secure variant, such as
                by using a multiple shift values or keywords.
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h6 className="text-xl font-semibold">Disadvantages</h6>
          <ul className="mt-4">
            <li>
              <span>It is not secure against modern decryption methods.</span>
            </li>
            <li>
              <span>
                Vulnerable to known-plaintext attacks, where an attacker has
                access to both the encrypted and unencrypted versions of the
                same messages.
              </span>
            </li>
            <li>
              <span>
                The small number of possible keys means that an attacker can
                easily try all possible keys until the correct one is found,
                making it vulnerable to a brute force attack.
              </span>
            </li>
            <li>
              <span>
                It is not suitable for long text encryption as it would be easy
                to crack.
              </span>
            </li>
            <li>
              <span>
                It is not suitable for secure communication as it is easily
                broken.
              </span>
            </li>
            <li>
              <span>
                Does not provide confidentiality, integrity, and authenticity in
                a message.{" "}
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mt-8">
          <p className="text-xl font-semibold">Features of caesar cipher:</p>
          <span>
            1. Substitution cipher: The Caesar cipher is a type of substitution
            cipher, where each letter in the plaintext is replaced by a letter
            some fixed number of positions down the alphabet.
          </span>
          <br />
          <span>
            2. Fixed key: The Caesar cipher uses a fixed key, which is the
            number of positions by which the letters are shifted. This key is
            known to both the sender and the receiver.
          </span>
          <br />
          <span>
            3. Symmetric encryption: The Caesar cipher is a symmetric encryption
            technique, meaning that the same key is used for both encryption and
            decryption.
          </span>
          <br />
          <span>
            4. Limited keyspace: The Caesar cipher has a very limited keyspace
            of only 26 possible keys, as there are only 26 letters in the
            English alphabet.
          </span>
          <br />
          <span>
            5. Vulnerable to brute force attacks: The Caesar cipher is
            vulnerable to brute force attacks, as there are only 26 possible
            keys to try.
          </span>
          <br />
          <span>
            6. Easy to implement: The Caesar cipher is very easy to implement
            and requires only simple arithmetic operations, making it a popular
            choice for simple encryption tasks.{" "}
          </span>
          <br />
          <br />
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mt-8">
          <p className="text-xl font-semibold">Rules for the Caesar Cipher:</p>
          <span>
            1. Choose a number between 1 and 25. This will be your “shift”
            value.
          </span>
          <br />
          <span>
            2. Write down the letters of the alphabet in order, from A to Z.
          </span>
          <br />
          <span>
            3. Shift each letter of the alphabet by the “shift” value. For
            example, if the shift value is 3, A would become D, B would become
            E, C would become F, and so on.
          </span>
          <br />
          <span>
            4. Encrypt your message by replacing each letter with the
            corresponding shifted letter. For example, if the shift value is 3,
            the word “hello” would become “khoor”.
          </span>
          <br />
          <span>
            5. o decrypt the message, simply reverse the process by shifting
            each letter back by the same amount. For example, if the shift value
            is 3, the encrypted message “khoor” would become “hello”.
          </span>
          <br />
          <br />
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mt-8">
          <p className="text-xl font-semibold">
            <span>Algorithm for Caesar Cipher:</span>
            <br />
            Input:{" "}
          </p>
          <span>1. Choose a shift value between 1 and 25.</span>
          <br />
          <span>2.Write down the alphabet in order from A to Z.</span>
          <br />
          <span>
            3. Create a new alphabet by shifting each letter of the original
            alphabet by the shift value. For example, if the shift value is 3,
            the new alphabet would be:
          </span>
          <br />
          <span>
            4. A B C D E F G H I J K L M N O P Q R S T U V W X Y Z D E F G H I J
            K L M N O P Q R S T U V W X Y Z A B C
          </span>
          <br />
          <span>
            5. Replace each letter of the message with the corresponding letter
            from the new alphabet. For example, if the shift value is 3, the
            word “hello” would become “khoor”.
          </span>
          <br />
          <span>
            6. To decrypt the message, shift each letter back by the same
            amount. For example, if the shift value is 3, the encrypted message
            “khoor” would become “hello”.
          </span>
          <br />
          <br />
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md mt-8 ">
          <p className="text-xl font-semibold">Procedure: </p>
          <ul>
            <li>
              <span>Traverse the given text one character at a time .</span>
            </li>
            <li>
              <span>
                For each character, transform the given character as per the
                rule, depending on whether we’re encrypting or decrypting the
                text.
              </span>
            </li>
            <li>
              <span>Return the new string generated.</span>
            </li>
          </ul>
        </section>
        <p className="text-md py-6 font-semibold">
          A program that receives a Text (string) and Shift value( integer) and
          returns the encrypted text.{" "}
        </p>
        <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Try It Yourself
          </h2>
          <div className="space-y-6">
            <div>
              <label
                className="block font-medium mb-2"
                htmlFor="encryptPlainText"
              >
                Enter Text to Encrypt:
              </label>
              <input
                type="text"
                id="encryptPlainText"
                className="w-full p-3 border rounded-md"
                value={encryptPlainText}
                onChange={(e) => setEncryptPlainText(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block font-medium mb-2"
                htmlFor="encryptCaesarShift"
              >
                Enter Caesar Shift Value:
              </label>
              <input
                type="number"
                id="encryptCaesarShift"
                className="w-full p-3 border rounded-md"
                value={encryptCaesarShift}
                onChange={(e) =>
                  setEncryptCaesarShift(parseInt(e.target.value))
                }
              />
            </div>
            <button
              onClick={handleEncrypt}
              className="w-full bg-green-600 text-white p-3 rounded-md font-semibold hover:bg-green-700"
            >
              Encrypt
            </button>
            {encryptedText && (
              <div className="bg-gray-100 p-4 rounded-md mt-4">
                <p>{encryptedText}</p>
              </div>
            )}
          </div>

          <div className="space-y-6 mt-8">
            <div>
              <label
                className="block font-medium mb-2"
                htmlFor="decryptEncryptedText"
              >
                Enter Text to Decrypt:
              </label>
              <input
                type="text"
                id="decryptEncryptedText"
                className="w-full p-3 border rounded-md"
                value={decryptEncryptedText}
                onChange={(e) => setDecryptEncryptedText(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block font-medium mb-2"
                htmlFor="decryptCaesarShift"
              >
                Enter Caesar Shift Value:
              </label>
              <input
                type="number"
                id="decryptCaesarShift"
                className="w-full p-3 border rounded-md"
                value={decryptCaesarShift}
                onChange={(e) =>
                  setDecryptCaesarShift(parseInt(e.target.value))
                }
              />
            </div>
            <button
              onClick={handleDecrypt}
              className="w-full bg-gray-800 text-white p-3 rounded-md font-semibold hover:bg-gray-900"
            >
              Decrypt
            </button>
            {decryptedText && (
              <div className="bg-gray-100 p-4 rounded-md mt-4">
                <p>{decryptedText}</p>
              </div>
            )}
          </div>

          <div className="flex justify-center items-center mt-8">
            <img src="caesar.svg" alt="Caesar Image" className="w-1/2" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default CaesarCipher;
