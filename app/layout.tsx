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
  themeColor: "#064e3b", 
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Glacia Labs | Architectural Software Studio Islamabad",
    template: "%s | Glacia Labs",
  },
  description: "Islamabad's boutique software engineering studio. We architect high-performance Next.js sites, FastAPI backends, and luxury digital experiences for elite brands.",
  
  keywords: [
    "Software House Islamabad",
    "Next.js Expert Islamabad", 
    "Web Development Islamabad",
    "FastAPI Backend Developer Pakistan", 
    "Luxury E-commerce Development",
    "Boutique Digital Agency Islamabad",
    "Glacia Labs Engineering"
  ],
  
  authors: [{ name: "Glacia Labs" }],
  creator: "Glacia Labs",
  publisher: "Glacia Labs",
  metadataBase: new URL("https://glacialabs.com"),
  
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',

  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://glacialabs.com",
    siteName: "Glacia Labs",
    title: "Glacia Labs | Engineering Digital Excellence in Islamabad",
    description: "Architecting high-performance digital products for the hospitality, retail, and enterprise sectors of Islamabad.",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Glacia Labs - Islamabad Software Architecture",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Glacia Labs | Islamabad Software Studio",
    description: "Premium Next.js & FastAPI engineering for high-end digital brands.",
    images: ["/og-image.jpg"],
  },

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Glacia Labs",
    "alternateName": "Glacia Labs Islamabad",
    "url": "https://glacialabs.com",
    "logo": "https://glacialabs.com/icon.png",
    "image": "https://glacialabs.com/og-image.jpg",
    "description": "High-performance software studio in Islamabad specializing in Next.js, FastAPI, and bespoke digital infrastructure.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "author": {
      "@type": "Organization",
      "name": "Glacia Labs",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Islamabad",
        "addressRegion": "Islamabad Capital Territory",
        "addressCountry": "PK"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-316-9030178",
        "contactType": "technical support",
        "areaServed": "PK",
        "availableLanguage": ["English", "Urdu"]
      }
    }
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FDFBF7] text-stone-800 selection:bg-emerald-700/10 selection:text-emerald-800 min-h-screen flex flex-col`}
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