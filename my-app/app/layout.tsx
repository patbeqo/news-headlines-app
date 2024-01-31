import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "News App"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <Header />
        <div className="flex-grow bg-gray-200 text-black">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
