import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pagotravelexperience.co.tz"),
  title: {
    default: "Pago Travel Experience - Premium Zanzibar Tours, Tanzania Safari & Kilimanjaro Climbing",
    template: "%s | Pago Travel Experience",
  },
  description:
    "Experience authentic East African adventures with Pago Travel Experience. Based in Stone Town, Zanzibar, we offer premium island tours, Tanzania safaris, and Kilimanjaro climbing expeditions. Expert local guides, personalized service, and unforgettable memories.",
  keywords:
    "Zanzibar tours, Tanzania safari, Kilimanjaro climbing, Stone Town tours, spice tours, Safari Blue, Serengeti safari, Ngorongoro crater, beach tours, dolphin tours, Zanzibar travel, East Africa adventures",
  authors: [{ name: "Pago Travel Experience" }],
  creator: "Pago Travel Experience",
  publisher: "Pago Travel Experience",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pagotravelexperience.co.tz",
    siteName: "Pago Travel Experience",
    title: "Pago Travel Experience - Premium Zanzibar Tours & Tanzania Safari",
    description:
      "Experience authentic East African adventures with expert local guides. Zanzibar tours, Tanzania safaris, and Kilimanjaro climbing expeditions.",
    images: [
      {
        url: "/pg/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pago Travel Experience - Zanzibar Beach Paradise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pago Travel Experience - Premium Zanzibar Tours & Tanzania Safari",
    description: "Experience authentic East African adventures with expert local guides based in Stone Town, Zanzibar.",
    images: ["/pg/hero.jpg"],
  },
  alternates: {
    canonical: "https://www.pagotravelexperience.co.tz",
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/pg/favicon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
