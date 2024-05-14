import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

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
      <div>
        {/*header component*/}
        <main>
          {children}
        </main>
      {/*  footer component*/}
      </div>
      </body>
    </html>
  );
}
