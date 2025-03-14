import type { Metadata } from "next";
import "./app.css";

export const metadata: Metadata = {
  title: "Kavod Engineering",
  description: "Kavod Engineering Waitlist",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overscroll-none">{children}</body>
    </html>
  );
}
