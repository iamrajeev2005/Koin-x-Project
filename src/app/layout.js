import { Inter } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" overflow-x-hidden">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
