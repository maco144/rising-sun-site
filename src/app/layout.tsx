import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rising Sun | Dev Portfolio",
  description:
    "A showcase of development projects with a minimal, techy ASCII aesthetic.",
  keywords: [
    "portfolio",
    "developer",
    "projects",
    "open source",
    "web development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-terminal-black text-terminal-white font-mono">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
