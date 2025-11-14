import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { CartBadge } from "@/components/CartBadge";
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL("https://www.groovinfly.com"),
  title: "GroovinFly — Age gracefully. Party joyfully.",
  description: "High-energy, small-group trips for fearless women.",
  openGraph: {
    title: "GroovinFly — Age gracefully. Party joyfully.",
    description:
      "Festival & yacht adventures designed for women who love to travel, dance, and live free.",
    url: "https://groovinfly.com/",
    siteName: "GroovinFly",
    type: "website",
    images: [
      {
        url: "https://www.groovinfly.com/images/og/Groovin-Fly.jpg",
        width: 1200,
        height: 630,
        alt: "GroovinFly women dancing under festival lights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GroovinFly — Age gracefully. Party joyfully.",
    description:
      "Festival & yacht adventures designed for women who love to travel, dance, and live free.",
    images: ["https://www.groovinfly.com/images/og/Groovin-Fly.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-3PSHQHLERD"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3PSHQHLERD');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-[#160e1d] text-white">
        <div className="fixed top-3 right-3 z-50 flex gap-2 items-center">
          {/* <UserPortalButton />  Hidden until customer portal is live */}
          <CartBadge />
        </div>

        {/* Global NavBar */}
        <NavBar />

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}