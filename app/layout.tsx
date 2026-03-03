import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // Title Template: "Contact | Glacia Labs"
  title: {
    default: "Glacia Connection | Next-Gen Digital Solutions & eSports",
    template: "%s | Glacia Labs",
  },
  description: "Glacia Labs is a boutique development studio engineering high-performance Web Apps, eSports platforms, and E-commerce solutions in Pakistan.",
  keywords: ["Web Development Pakistan", "Next.js Developer Rawalpindi", "eSports Platform Design", "Glacia Labs", "Software Agency Pakistan"],
  authors: [{ name: "Glacia Labs" }],
  creator: "Glacia Labs",
  publisher: "Glacia Connection",
  metadataBase: new URL("https://glacialabs.com"),
  
  // Social Media Previews (OpenGraph)
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://glacialabs.com",
    siteName: "Glacia Connection",
    title: "Glacia Connection | Engineering Digital Excellence",
    description: "Specializing in high-performance Next.js architectures and digital products.",
    images: [
      {
        url: "/og-image.jpg", // Create an image in your /public folder for this
        width: 1200,
        height: 630,
        alt: "Glacia Labs Digital Solutions",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Glacia Labs | High-Performance Web Apps",
    description: "Boutique development studio crafting emerald-class digital products.",
    images: ["/og-image.jpg"],
  },

  // Search Engine Directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Google to recognize you as an Agency
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Glacia Labs",
    "image": "https://glacialabs.com/og-image.jpg",
    "url": "https://glacialabs.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rawalpindi",
      "addressCountry": "PK"
    },
    "description": "Premium Web Development and Digital Solutions Agency."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030712] text-white selection:bg-glacia-green/30 selection:text-glacia-green min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}