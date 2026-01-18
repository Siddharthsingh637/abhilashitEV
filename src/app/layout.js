import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import NavHeightProvider from "@/components/NavHeightProvider/NavHeightProvider";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://abhilashit.in"),
  title: "Abhilashit Automobiles - Premium Electric Mobility",
  description: "Discover high-performance EV scooters built for reliability and sustainability.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://abhilashit.in",
  },
  openGraph: {
    title: "Abhilashit Automobiles - Premium Electric Mobility",
    description: "Stylish and sustainable electric scooters for future mobility.",
    url: "https://abhilashit.in",
    siteName: "Abhilashit Automobiles",
    images: [
      {
        url: "https://ik.imagekit.io/siddharth637/abhilashit/WhatsApp%20Image%202026-01-08%20at%2001.14.42.jpeg", // 👈 PUBLIC hosted image
        width: 1200,
        height: 630,
        alt: "Heraldebike EV Scooter",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Heraldebike - Premium Electric Mobility",
  //   description: "Stylish and sustainable electric scooters for future mobility.",
  //   images: ["https://ik.imagekit.io/siddharth637/abhilashit/evimg.png"],
  // },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}>
        <Navbar />
        {/* NavHeightProvider sets --navbar-height CSS variable based on the rendered navbar */}
        <div id="nav-height-provider-root" />
        <NavHeightProvider />
        {children}
        <div className="p-4">
          <Footer />
        </div>
      </body>
    </html>
  );
}
