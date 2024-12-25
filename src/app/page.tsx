import { useEffect, useRef, useState } from "react";
import { FiUser } from "react-icons/fi";
import { SiVite } from "react-icons/si";
import { FiHelpCircle } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link"

export default function Home() {
  


  return (
    <main className="bg-[#000000] font-poppins">
      {/* Hero Section */}
      <section className="relative flex h-[80vh] w-full items-center justify-center min-w-[400px]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4C0647,transparent_1px),linear-gradient(to_bottom,#300651,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_0%,#000_80%,transparent_110%)]" />
        <nav className="fixed left-1/2 top-4 z-40 w-[90%] max-w-[1200px] -translate-x-1/2 rounded-3xl border-2 border-[#300651] px-4 py-3 backdrop-blur-sm backdrop-saturate-150 bg-[#000000] md:px-8 md:py-4">
          <header className="flex w-full items-center justify-between">
            <img src="/st-logo.png" alt="logo" width={120} height={35} />
            <div className="flex gap-1 md:gap-4 items-center">
              <Link href="/sign-in">
                <button className="font-medium min-w-[60px] text-sm md:min-w-[100px] md:text-base p-2 rounded-lg text-primary hover:bg-zinc-200 flex-nowrap">
                  Get Started
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="hidden md:inline p-2 text-sm md:text-base font-medium text-white bg-secondary hover:bg-zinc-600 rounded-lg min-w-[150px] md:min-w-[120px] flex-nowrap">
                  Try now
                </button>
                <button className="md:hidden p-2 text-sm md:text-base font-medium text-white bg-secondary hover:bg-zinc-600 rounded-lg min-w-[120px] md:min-w-[120px] flex-nowrap">
                  Try now
                </button>
              </Link>
            </div>
          </header>
        </nav>
        <div className="z-30 w-[90%] max-w-[1200px] pt-4">
          <h1 className="text-center text-[2.3rem] font-bold leading-tight md:text-[3.2rem] md:leading-none lg:text-[4rem] 2xl:text-[4.5rem]">
            <span className="text-white">
              Learn Cryptography
            </span>
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
      <button
        className="fixed bottom-4 right-4 bg-gray-100 bg-opacity-50 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-gray-200 transition-all"
      >
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
  )
}