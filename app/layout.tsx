import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Inter, Inconsolata,Unica_One, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });


const unicaOne = Unica_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unica",
});({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Next Store",
  description: "A simple e-commerce store built with Next.js",
  keywords: ["next.js", "e-commerce", "store", "react", "typescript"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={unicaOne.className }
      >
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
       
      </body>
    </html>
  );
}
