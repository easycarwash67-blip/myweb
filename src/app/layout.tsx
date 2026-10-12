import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import Sidebar from "@/components/sidebar";
import "./globals.css";

const thaiFont = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ระบบติดตามคำสั่งซื้อ | สำนักพิมพ์อมตะ",
  description: "บันทึกและติดตามคำสั่งซื้อหนังสือจากร้านค้า",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${thaiFont.variable} h-full antialiased`}>
      <body className="min-h-full font-sans md:flex">
        <Sidebar />
        <main className="flex-1 px-4 py-6 md:px-10 md:py-10">{children}</main>
      </body>
    </html>
  );
}
