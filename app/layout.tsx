import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
        url: "https://groovinfly.com/images/og/og-banner.png",
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
    title: "GroovinFly – Curated Trips & Festival Experiences",
    description: "Book your vibe: Coachella, Ultra Miami, Salem Halloween & more.",
    images: ["https://groovinfly.com/images/og/og-banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
