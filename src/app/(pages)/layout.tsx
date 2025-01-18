import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Learn Cryptography | Introduction",
  description: "Buit by Estepano",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <main className="flex-1 mx-auto max-w-4xl">{children}</main>
    </div>
  );
}
