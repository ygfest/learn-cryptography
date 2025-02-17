import { Metadata } from "next";
import "../globals.css";
import SideBarSection from "../components/sidebar-section";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Learn Cryptography | Introduction",
  description: "Built by Estepano",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Toaster />
      <main className="max-w-6xl mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <SideBarSection />
          </div>
          {/* Main Content */}
          <div className="lg:col-span-9">{children}</div>
        </div>
      </main>
    </div>
  );
}
