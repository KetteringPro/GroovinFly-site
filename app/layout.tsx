// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
    images: [{ url: "/social-share.jpg", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GroovinFly — Join the Groovers",
    description: "High-energy travel for fearless women.",
    images: ["/social-share.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#160e1d] text-white">
        {children}
      </body>
    </html>
  );
}
