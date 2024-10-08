import "@radix-ui/themes/styles.css";
import './theme-config.css'
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Theme accentColor="violet" grayColor="sand" panelBackground="solid">
          <NavBar />
          <main className="p-5"> {children} </main>
        </Theme>
      </body>
    </html>
  );
}
