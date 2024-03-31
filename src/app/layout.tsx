import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import StoreProvider from "./storeProvider";
import Footer from "./components/Footer";
import PaymentModal from "./components/PaymentModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home-HQ-Events",
  description: "Home Page of HQ-Events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <main className="main-container">
            <PaymentModal />
            <Navbar />
            {children}
            <Footer />
          </main>
        </StoreProvider>
      </body>
    </html>
  );
}
