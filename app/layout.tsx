import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// TypeScript may complain about side-effect CSS imports when no
// CSS module declarations are present. Suppress the error here since
// Next.js supports global CSS imports in the root layout.
// @ts-ignore: Implicitly imported for global styles
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Mohamed Fazil | Full Stack Developer | Java, Spring Boot, React & Node.js",
  description:
    "Full Stack Developer specializing in Java, Spring Boot, React, Node.js, TypeScript, PostgreSQL, and cloud-native applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
