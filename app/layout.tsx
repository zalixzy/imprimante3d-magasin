import type { Metadata } from "next";
import { Urbanist} from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-providers";



const urbanist = Urbanist({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Magasin",
  description: "Imprim3d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={urbanist.className}>
        <ModalProvider />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
