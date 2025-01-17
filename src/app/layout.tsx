import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";
import GridFrame from "@/components/grid-frame";
import FrameFooter from "@/components/frame-footer";
import dynamic from "next/dynamic";
const Headers = dynamic(() => import('@/components/headers'), { ssr: false })

const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashirvad Satapthy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className}`}>
        <Headers />
        <GridFrame />

        {children}

        <FrameFooter />
      </body>
    </html>
  );
}
