import type { Metadata } from "next";
import "./styles/tw.css";
import "./styles/colors.css";
import "./styles/globals.css";
import Navbar from "@/components/UiComponents/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Jobs Board",
  description: "Jobs Listing App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
