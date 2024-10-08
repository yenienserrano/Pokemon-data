import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "../components/menu/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Pokemon World",
  description: "The best place to find pokemons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <Menu />
          <div className='w-screen bg-gray-300 p-4 flex justify-center'>
            {children}
          </div>
        </div>
        </body>
    </html>
  );
}
