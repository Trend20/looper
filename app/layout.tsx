"use client";

import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {NextAuthProvider} from "@/app/providers";
import {useEffect, useState} from "react";
import Loader from "@/components/common/Loader";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
          {
              loading ? <Loader/> : <div className="min-h-screen">
                  {/*header component*/}
                  <Header/>
                  <main>
                      {children}
                  </main>
                  {/*  footer component*/}
                  <Footer/>
              </div>
          }
      </NextAuthProvider>
      </body>
    </html>
    );
}
