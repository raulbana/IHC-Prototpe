import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarMenu from "./components/Navbar/SidebarMenu";
import Footer from "./components/Footer/Footer";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Header from "./components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEaDIP",
  description: "Protótipo de site do SEaDIP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}
      >
        <SidebarMenu>
          <Header />
          <Breadcrumb className="mx-24 my-4" />
          {children}
          <Footer />
        </SidebarMenu>
      </body>
    </html>
  );
}
