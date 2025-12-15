// app/layout.js
// "use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../Context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

// FIX: metadata must be lowercase
export const metadata = {
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    other: [
      {
        rel: "icon",
        url: "/favicon.svg",
        sizes: "192x192",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>FinIPO Hub - Simplify Your Investing Journey</title>
        <meta name="description" content="Curated financial blogs, in-depth IPO reviews, GMP trends, and market updates." />
        {/* Add manifest, icons, etc. here */}
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
