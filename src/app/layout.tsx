import type { Metadata } from "next";
import "./app.css";
import { WaitlistBanner } from "@/components/custom/waitlistBanner";
import { Navbar } from "@/components/custom/navbar";
import { Footer } from "@/components/custom/footer";

export const metadata: Metadata = {
  title: "Kavod Engineering",
  description: "Kavod Engineering Waitlist",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overscroll-none">
        <header className="w-full fixed top-0 right-0 left-0 z-50">
          <WaitlistBanner />
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
