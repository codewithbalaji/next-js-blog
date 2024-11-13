import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Code Blog Hub",
    template: "%s | Code Blog Hub",
  },
  description:
    "Welcome to Code Blog Hub, where coding knowledge meets creativity! Discover tutorials, debugging tips, and programming insights crafted to enhance your coding journey and fuel your passion for tech.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          
          <Footer />
        </div>
      </body>
    </html>
  );
}
