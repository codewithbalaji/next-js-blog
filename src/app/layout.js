import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next App",
    template: "%s | Next App",
  },
  description: "Generated by Next.js",
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
