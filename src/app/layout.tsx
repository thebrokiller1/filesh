import type { Metadata } from "next";
import "./globals.css";
import { lusitana } from '@/app/ui/fonts';
//Standard Font:
//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "ShareLib",
  description: "Teile deine Bildergalerie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lusitana.className}>{children}</body>
    </html>
  );
}
