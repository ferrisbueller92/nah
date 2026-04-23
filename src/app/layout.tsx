import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-K0518ENWJN";

export const metadata: Metadata = {
  title: "NAH. — Automated Sunscreen Booth | Don't Be #3",
  description:
    "Australia's first automated sunscreen booth. Full body SPF 50+ in 30 seconds for less than a coffee. Coming to Sydney beaches. Join the waitlist — be first to know when we launch.",
  keywords: [
    "sunscreen booth",
    "automated sunscreen",
    "SPF 50",
    "Bondi beach",
    "sun protection",
    "Australia",
    "NAH sunscreen",
    "sunscreen spray booth",
    "automated sunscreen booth Sydney",
    "beach sunscreen station",
  ],
  alternates: {
    canonical: "https://getnah.com.au",
  },
  openGraph: {
    title: "NAH. — Mate, You're Cooked.",
    description:
      "2 in 3 Australians will get skin cancer. Full body SPF 50+ in 30 seconds. No excuses.",
    url: "https://getnah.com.au",
    siteName: "NAH.",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://getnah.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "NAH. — Mate, you're cooked. Automated sunscreen for Australian beaches.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAH. — Automated Sunscreen Booth",
    description:
      "Full body SPF 50+ in 30 seconds. Coming to Sydney beaches.",
    images: ["https://getnah.com.au/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "fb:app_id": "1411485070658883",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Need a Hand Sunscreen Pty Ltd",
  alternateName: "NAH",
  url: "https://getnah.com.au",
  logo: {
    "@type": "ImageObject",
    url: "https://getnah.com.au/og-image.png",
  },
  email: "hello@getnah.com.au",
  description:
    "Australia's first automated sunscreen booth. Full body SPF 50+ in 30 seconds at the beach.",
  foundingDate: "2025",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  sameAs: ["https://www.instagram.com/nahsunscreen"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Step into the booth. Tap your card. You get sprayed head-to-toe with SPF 50+ sunscreen in seconds. Quick dry. Walk out. That's literally it.",
      },
    },
    {
      "@type": "Question",
      name: "Is the sunscreen safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Broad-spectrum SPF 50+ sunscreen, designed to meet Australian TGA standards, made by an Australian contract lab. Full ingredient list will be displayed on the booth screen before you spray, with a sensitive skin warning.",
      },
    },
    {
      "@type": "Question",
      name: "Is it sticky?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dries quickly. It's a fine mist, not a cream. Way less sticky than the guilt of not wearing any.",
      },
    },
    {
      "@type": "Question",
      name: "What about my face and eyes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Close your eyes, hold your breath. There's a face shield option if you prefer. Most people just close their eyes.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Less than a flat white. We're keeping it affordable because the goal is to help you stay protected, not to make you broke. Family pricing available too.",
      },
    },
    {
      "@type": "Question",
      name: "Will it ruin my clothes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nah, it dries quickly. We recommend applying in your swimmers before getting dressed.",
      },
    },
    {
      "@type": "Question",
      name: "Can I bring the family?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yeah. Family pricing covers up to 4 people, one at a time through the booth. No more wrestling sunscreen onto kids who'd rather be in the water. Seconds each, done.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
