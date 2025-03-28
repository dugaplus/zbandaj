import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Zbandaj Villas | Luxury Living in Croatia",
  description: "Discover our exclusive collection of luxury villas in Croatia. Experience the perfect blend of modern design and Mediterranean charm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <NavigationWrapper />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
} 