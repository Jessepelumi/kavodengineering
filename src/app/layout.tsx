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
  openGraph: {
    title: "Kavod Engineering",
    description: "Kavod Engineering Waitlist",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/favicon.png"],
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
