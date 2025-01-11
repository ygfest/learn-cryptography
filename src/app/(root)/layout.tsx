import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import NavigationBar from "../components/nav-bar";
//import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Learn Cryptography",
  description: "Built by Stefano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
