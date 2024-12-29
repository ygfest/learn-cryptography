import NavigationBar from "../components/nav-bar";
import Tabs from "../components/tabs";
import "../globals.css";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <NavigationBar />
        <div className="mt-[72px]">
          <Tabs />
        </div>
        <main className="flex-1 mx-auto max-w-4xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
