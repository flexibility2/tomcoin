import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TomCoin",
  description:
    "The most memeable, memorable, ridiculous, and insane meme coin.",
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
