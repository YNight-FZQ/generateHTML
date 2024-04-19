/*
 * @Author: YNight
 * @Date: 2024-04-10 23:06:31
 * @LastEditors: YNight
 * @LastEditTime: 2024-04-10 23:55:37
 * @Description: 
 */

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HTML GENERATE",
  description: "html code generate",
};

export const fetchCache = 'force-no-store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
