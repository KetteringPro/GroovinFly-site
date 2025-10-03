// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import MerchLink from "@/components/MerchLink";

import { CartBadge } from "@/components/CartBadge";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "GroovinFly — Age gracefully. Party joyfully.",
    description: "High-energy, small-group trips for fearless women.",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/icon-192.png" }],
    },
    manifest: "/manifest.json",
    openGraph: {
      title: "GroovinFly — Join the Groovers",
      description: "High-energy travel for fearless women.",
      url: "https://groovinfly.com",
      siteName: "GroovinFly",
      images: [{ url: "/social-share.png", width: 1200, height: 630 }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "GroovinFly — Join the Groovers",
      description: "High-energy travel for fearless women.",
      images: ["/social-share.png"],
    },
  };
}

// Example for app/layout.tsx (Next.js App Router)

export const metadata = {
  title: "GroovinFly – Curated Trips & Festival Experiences",
  description: "Join us for unforgettable trips: Coachella, Ultra Miami, Salem Halloween & more. Book your vibe at GroovinFly.com ✈️🎶",
  metadataBase: new URL("https://groovinfly.com"),
  openGraph: {
    title: "GroovinFly – Curated Trips & Festival Experiences",
    description: "Epic festival trips and curated getaways. Secure your spot today.",
    url: "https://groovinfly.com",
    siteName: "GroovinFly",
    images: [
      {
        url: "https://groovinfly.com/images/og/og-banner.png", // ← add a strong banner image to /public/images/og/
        width: 1200,
        height: 630,
        alt: "GroovinFly Trips Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GroovinFly", // if you set one up later
    title: "GroovinFly – Curated Trips & Festival Experiences",
    description: "Book your vibe: Coachella, Ultra Miami, Salem Halloween & more.",
    images: ["https://groovinfly.com/images/og/og-banner.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#160e1d] text-white">
        {/* Fixed header controls (always visible) */}
        <div className="fixed top-4 right-4 z-50 flex gap-2 items-center">
          
          <MerchLink />
          <CartBadge />
        </div>

        {children}
      </body>
    </html>
  );
}
