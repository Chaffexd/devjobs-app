import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Devjobs - Frontend Mentor',
  description: 'Frontend Mentor challenge',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100 dark:bg-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
