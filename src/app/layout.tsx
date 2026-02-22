import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAH. — Automated Sunscreen Booth | Don't Be #3",
  description:
    "Australia's first automated sunscreen booth. Full body SPF 50+ in 10 seconds for $4. Coming to Bondi. Join the waitlist.",
  keywords: [
    "sunscreen booth",
    "automated sunscreen",
    "SPF 50",
    "Bondi beach",
    "sun protection",
    "Australia",
    "NAH sunscreen",
  ],
  openGraph: {
    title: "NAH. — Mate, You're Cooked.",
    description:
      "2 in 3 Australians will get skin cancer. Full body SPF 50+ in 10 seconds. $4. No excuses.",
    url: "https://getnah.com.au",
    siteName: "NAH.",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAH. — Automated Sunscreen Booth",
    description:
      "Full body SPF 50+ in 10 seconds. $4. Coming to Bondi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className="antialiased">{children}</body>
    </html>
  );
}
