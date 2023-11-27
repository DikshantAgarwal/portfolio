import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/app/providers";
const inter = Poppins({ subsets: ["latin"] ,display:'swap',weight:'400'});

export const metadata: Metadata = {
  title: "Dikshant Agarwal - Front-end Developer",
  description: "Developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="w-full">
          <Header />
          {children}
          <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
