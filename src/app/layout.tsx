import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello World App",
  description: "A simple Hello World page built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}