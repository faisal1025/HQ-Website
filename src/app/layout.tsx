import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import StoreProvider from "./storeProvider";
import Footer from "./components/Footer";
import PaymentModal from "./components/PaymentModal";
import Script from "next/script";
import ConfirmBookingModal from "./components/BookingPageComponents/ConfirmBookingModal";
import LoadingOutlay from "./components/HotelDetailPageComponents/Loading";
import SearchBar from "./components/SearchBar";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Hq Rooms | India',
    default: 'Hq Rooms | India',
  },
  description: "HQ Rooms is a hotel booking service provide you the best deals in all over the India on hotel rooms booking with the lowest price guaranty after comparing from the price from every where.",
  metadataBase: new URL('https://hqrooms.in')
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
            <SearchBar />
            <LoadingOutlay />
            <ConfirmBookingModal />
            {children}
          </main>
        </StoreProvider>
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      </body>
    </html>
  );
}
