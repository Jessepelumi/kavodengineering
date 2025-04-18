import type { Metadata } from "next";
import "../styles/app.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactBanner } from "@/components/layout/contactBanner";
import { Toaster } from "sonner";

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
