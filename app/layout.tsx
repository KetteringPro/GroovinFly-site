// components/NavBar.tsx
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { CartBadge } from "@/components/CartBadge";


export const metadata: Metadata = {
  title: "GroovinFly — Age gracefully. Party joyfully.",
  description: "High-energy, small-group trips for fearless women.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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