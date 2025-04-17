import "./globals.css";
import { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${outfit.variable} ${roboto.variable}`}>
      <body className="relative min-h-screen text-black bg-white font-roboto">
        <Header />
        {children}
        <MobileNav />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Sonia Tlev - Top Body challenge",
  description: "Transformez votre corps et votre vie avec les programmes de fitness de Sonia Tlev",
  openGraph: {
    title: "Sonia Tlev - Top Body challenge",
    description: "Transformez votre corps et votre vie avec les programmes de fitness de Sonia Tlev",
    images: ["/images/og-image.png"],
  },
};
