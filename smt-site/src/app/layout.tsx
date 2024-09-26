import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import SideNavbar from "./components/sidebar";
import Footbar from "./components/footbar";

export const metadata: Metadata = {
  description: "ม.4/5 - โรงเรียนหาดใหญวิทยาลัย",
  keywords: "ม.4/5 โรงเรียนหาดใหญ่วิทยาลัย (ญ.ว.),4/5 โรงเรียนหาดใหญ่วิทยาลัย,หาดใหญ่วิทยาลัย,4/5 ญ.ว.,ญ.ว. 4/5,4/5 ญ.ว,ญ.ว 4/5,4/5 ญว,hatyaiwit 4/5,4/5,ม.4/5,SMT,smt,โครงการ SMT,โครงการ smt",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <SideNavbar />
        {children}
        <Footbar />
      </body>
    </html>
  );
}
