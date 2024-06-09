import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alameda Quiz Game",
  description: "Alameda Quiz Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
