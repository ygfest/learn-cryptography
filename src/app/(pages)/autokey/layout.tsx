import Footer from "@/app/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Cryptogrpahy | Autokey Cipher",
  description: "Built by Stefano",
};

export default function AffineLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
