import type { Metadata } from "next";
import "./app.css";
import { Navbar } from "@/components/views/navbar";
import { Footer } from "@/components/views/footer";
import { ContactBanner } from "@/components/custom/contactBanner";

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
      </body>
    </html>
  );
}
