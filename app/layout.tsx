import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CleaningA2.com - Professional Cleaning Services & Directory",
  description: "Find top-rated cleaning services in your area. Get instant quotes, compare local cleaners, and discover the best cleaning products.",
  keywords: "cleaning services, professional cleaners, house cleaning, commercial cleaning, cleaning directory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
