import { FiUser } from "react-icons/fi";
import { SiVite } from "react-icons/si";
import { FiHelpCircle } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-white font-poppins">
      {/* Hero Section */}
      <section className="relative flex h-[80vh] w-full items-center justify-center min-w-[400px]">
        <div className="z-30 w-[90%] max-w-[1200px] pt-4">
          <h1 className="text-center text-[2.3rem] font-bold leading-tight md:text-[3.2rem] md:leading-none lg:text-[4rem] 2xl:text-[4.5rem]">
            <span className="text-black">Learn Cryptography</span>

            <Button />
            <br />
            <span className="bg-gradient-to-b from-[#32CD32] to-[#2E8B57] bg-clip-text text-transparent">
              in an easy and simple way
            </span>
          </h1>
        </div>
      </section>

      {/*<section className="relative mt-36 flex flex-col items-center min-w-[400px]">
        <p>Logos...</p>
        <div className="h-[32px] w-full flex justify-center">
          <img src="/ST-logo-with-name.png" className="h-full" />
        </div>
      </section>*/}

      {/* Help Button */}
      <button className="fixed bottom-4 right-4 bg-gray-100 bg-opacity-50 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-gray-200 transition-all">
        <FiHelpCircle className="text-secondary text-2xl" />
      </button>

      {/* Other Sections */}
      <section className="h-[500px] min-w-[400px]"></section>

      <footer className="w-full min-w-[400px] py-8 text-left bg-[#19191D] text-white">
        <div className="flex flex-wrap justify-between gap-8 h-auto px-4">
          {/* Logos Section */}
          <div className="flex flex-row justify-center w-full md:w-auto  gap-6">
            <div className="flex flex-wrap items-center justify-start gap-6">
              <a
                href="https://www.philsca.edu.ph/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/PhilSCA-Official-Logo.png"
                  className="h-24 w-24 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  alt="PhilSCA Logo"
                />
              </a>
              <a
                href="https://www.philsca.edu.ph/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/ics.svg"
                  className="h-24 w-24 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  alt="ICS Logo"
                />
              </a>
              <a
                href="https://secure-track-est.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/ST-with-name.svg"
                  className="h-24 w-24 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  alt="SecureTrack Logo"
                />
              </a>
            </div>
          </div>

          {/* Built By and Powered By Section */}
          <div className="text-sm md:text-base flex flex-col items-start gap-4">
            <p className="font-normal">
              BUILT BY <br />
              <a
                href="https://www.instagram.com/__sstefano/"
                className="text-gray-400 font-light hover:text-primary transition-colors flex items-center"
              >
                <img src="/ST.svg" alt="ST logo" className="h-6 opacity-69" />
                efano San Esteban
              </a>
            </p>
            <div className="flex items-center gap-2">
              <p>POWERED BY</p>
              <SiVite className="text-primary hover:text-primary text-3xl transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
