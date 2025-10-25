import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://cleaninga2.com'),
  title: {
    default: "CleaningA2.com - Professional Cleaning Services & Directory | Instant Quotes",
    template: "%s | CleaningA2.com"
  },
  description: "Find top-rated cleaning services in your area. Get instant quotes, compare local cleaners, read verified reviews, and discover the best cleaning products. Serving Ann Arbor, Detroit, and Michigan.",
  keywords: ["cleaning services", "professional cleaners", "house cleaning", "commercial cleaning", "cleaning directory", "ann arbor cleaners", "michigan cleaning services", "cleaning quotes", "maid service", "deep cleaning", "office cleaning"],
  authors: [{ name: "CleaningA2.com" }],
  creator: "CleaningA2.com",
  publisher: "CleaningA2.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cleaninga2.com",
    siteName: "CleaningA2.com",
    title: "Professional Cleaning Services Directory - Instant Quotes",
    description: "Find top-rated cleaning services in your area. Get instant quotes, compare local cleaners, and discover the best cleaning products.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CleaningA2.com - Professional Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Cleaning Services Directory - Instant Quotes",
    description: "Find top-rated cleaning services in your area. Get instant quotes, compare local cleaners, and discover the best cleaning products.",
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
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CleaningA2.com",
    "url": "https://cleaninga2.com",
    "description": "Professional cleaning services directory and instant quote platform",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cleaninga2.com/directory?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CleaningA2.com",
      "url": "https://cleaninga2.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cleaninga2.com/logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": ["en"]
      },
      "sameAs": [
        "https://facebook.com/cleaninga2",
        "https://twitter.com/cleaninga2",
        "https://instagram.com/cleaninga2"
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://cleaninga2.com" />
      </head>
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
