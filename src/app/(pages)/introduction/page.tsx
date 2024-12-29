import React from "react";

function Introduction() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      {/* Section: What is Cryptography? */}
      <header className="bg-white shadow-md p-4 mb-6">
        <h1 className="text-3xl font-bold text-center">Cryptography</h1>
      </header>
      {/*<hr className="border-t-2 border-slate-500 my-2" />*/}
      <main className="max-w-4xl mx-auto">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">What is Cryptography?</h2>
          <p className="mb-4">
            Cryptography involves concealing or encoding information to ensure
            that only the intended recipient of a message can comprehend it.
            This ancient practice has been employed for millennia and persists
            in applications such as bank cards, computer passwords, and
            e-commerce. Contemporary cryptographic methods utilize algorithms
            and ciphers, including encryption keys like 128-bit and 256-bit,
            facilitating the secure encoding and decoding of information.
            Advanced ciphers, like the Advanced Encryption Standard (AES), are
            widely regarded as nearly impervious to decryption attempts.
            Cryptography, often defined as encoding information to restrict
            access to the designated recipient, is a crucial aspect of
            cybersecurity known as cryptology. This interdisciplinary field
            combines computer science, engineering, and mathematics to craft
            intricate codes that obscure the true meaning of a message.
          </p>
        </section>

        {/* Section: Brief History of Cryptography */}
        <section className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Brief History of Cryptography
          </h2>
          <p className="mb-4">
            The history of cryptography spans thousands of years, dating back to
            ancient civilizations. Early techniques, such as substitution
            ciphers, were used for secret communication. Ancient Egyptians
            employed hieroglyphics, while ancient Greece utilized the scytale
            for military communication. In the Middle Ages, polyalphabetic
            ciphers emerged, with figures like Leon Battista Alberti
            contributing innovations. The 20th century introduced devices like
            the Enigma machine, and public-key cryptography in the 1970s
            revolutionized secure communication. Today, cryptography safeguards
            online transactions, sensitive data, and digital privacy. Its
            evolution continues as technology advances and new cybersecurity
            challenges arise.
          </p>
        </section>

        {/* Section: Importance of Cryptography */}
        <section className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Importance of Cryptography
          </h2>

          <ul className="mb-4">
            <li>
              <span className="font-semibold">
                1. Data Privacy and Security -{" "}
              </span>
              Cryptography ensures sensitive information remains private and
              protected through encryption.
            </li>
            <li>
              <span className="font-semibold">2. Secure Communication - </span>
              Enables safe communication across channels, protecting against
              interception and tampering.
            </li>
            <li>
              <span className="font-semibold">
                3. Financial Transactions -{" "}
              </span>
              Protects online banking, e-commerce, and credit card data from
              unauthorized access.
            </li>
            <li>
              <span className="font-semibold">4. Authentication - </span>
              Verifies digital messages, documents, or software using
              cryptographic techniques like digital signatures.
            </li>
            <li>
              <span className="font-semibold">5. Password Protection - </span>
              Secures user authentication systems and protects stored passwords.
            </li>
            <li>
              <span className="font-semibold">6. National Security - </span>
              Protects classified government information and military
              communication.
            </li>
            <li>
              <span className="font-semibold">7. Internet Security - </span>
              Cryptographic algorithms secure email, web browsing, and online
              messaging through protocols like HTTPS.
            </li>
            <li>
              <span className="font-semibold">8. Preventing Fraud - </span>
              Prevents unauthorized access, ensures integrity, and protects
              digital assets.
            </li>
            <li>
              <span className="font-semibold">9. Blockchain Technology - </span>
              Ensures the security and immutability of transactions in
              blockchain systems like Bitcoin.
            </li>
            <li>
              <span className="font-semibold">
                10. Digital Rights Management -
              </span>
              Protects intellectual property by controlling access to digital
              content and preventing unauthorized distribution.
            </li>
          </ul>
          <p className="text-lg mt-4">
            In essence, cryptography is a cornerstone of cybersecurity,
            providing tools to secure digital assets, maintain privacy, and
            enable trust in the increasingly interconnected world.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Introduction;
