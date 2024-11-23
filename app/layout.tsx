import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TomCoin - The Most Memeable Cryptocurrency",
  description:
    "TomCoin (TOM) is a meme coin operating on the Ethereum blockchain, created as a tribute to the Supreme Leader of the Tom Cult.",
  openGraph: {
    // ... Open Graph 配置
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
