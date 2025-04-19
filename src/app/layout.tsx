import type { Metadata } from "next";
import "../styles/app.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactBanner } from "@/components/layout/contactBanner";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Kavod Engineering",
  description: "Kavod Engineering Services",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Kavod Engineering",
    description: "Kavod Engineering Services",
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
          <ContactBanner />
          <Navbar />
        </header>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
