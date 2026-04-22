import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Pinyon_Script, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const script = Pinyon_Script({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ezgi & Esat — Düğün Daveti",
  description:
    "Ezgi & Esat — 13 Haziran 2026. Sizi özel günümüze davet ediyoruz.",
};

export const viewport: Viewport = {
  themeColor: "#0b0907",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${serif.variable} ${script.variable} ${sans.variable}`}>
      <body className="grain font-serif">
        {children}
      </body>
    </html>
  );
}
