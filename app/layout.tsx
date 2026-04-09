import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";


const ramillas = localFont({
  variable: "--font-ramillas",
  src: [
    { path: '../public/fonts/ramillas.woff', style: 'normal'}
  ]
})


export const metadata: Metadata = {
  title: "Felix portfolio",
  description: "fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ramillas.variable} h-full antialiased`} >
      <body className="min-h-full flex flex-col">
        {/* navbar */}
          {children}
        {/* footer */}
      </body>
    </html>
  );
}
