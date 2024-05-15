import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {NextAuthProvider} from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Looper",
  description: "Looper App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
          <div>
              {/*header component*/}
              <Header/>
              <main>
                  {children}
              </main>
              {/*  footer component*/}
              <Footer/>
          </div>
      </NextAuthProvider>
      </body>
    </html>
  );
}
