import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import { ModalProvider } from "@/components/context/ModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Northface",
  description: "Nortface clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <ModalProvider>
            <div className="container">
              <div className="wrapper">{children}</div>
          </div>
          </ModalProvider>
        </body>
    </html>
  );
}
