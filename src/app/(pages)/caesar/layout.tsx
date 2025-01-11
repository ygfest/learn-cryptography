import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Cryptogrpahy | Caesar Cipher",
  description: "Built by Stefano",
};

export default function CaesarLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
