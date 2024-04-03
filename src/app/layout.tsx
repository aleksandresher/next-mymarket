import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import MainProvider from "./providers/SessionProvider";
import { Toaster } from "../components/ui/toaster";
import Footer from "@components/Footer";
import Partners from "@components/Partners";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <MainProvider>
            {children}
            <Footer />
            <Partners />
            <Toaster />
          </MainProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

