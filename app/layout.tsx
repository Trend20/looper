"use client";

import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {NextAuthProvider} from "@/app/providers";
import {useEffect, useState} from "react";
import Loader from "@/components/common/Loader";
import {usePathname} from "next/navigation";
import Toast from "@/components/common/Toast";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [loading, setLoading] = useState<boolean>(true);
    const pathname = usePathname();
    const isAuth = pathname === "/auth";
    const isBookmark = pathname === "/bookmarks";
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
          {
              loading ? <Loader/> : <div className="min-h-screen">
                  {/*header component*/}
                  {!isAuth && <Header/>}
                  <main>
                      {children}
                  </main>
                  {/*  footer component*/}
                  {(!isAuth && !isBookmark) && <Footer/>}
                  <Toast />
              </div>
          }
      </NextAuthProvider>
      <Analytics />
      </body>
    </html>
    );
}
