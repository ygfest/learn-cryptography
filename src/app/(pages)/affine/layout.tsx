import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Cryptogrpahy | Affine",
  description: "Built by Stefano",
};

export default function AffineLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
