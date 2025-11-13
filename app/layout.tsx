import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zanzionetours.com"),
  title: {
    default: "ZANZIONE TOURS & SAFARIS - Premium Zanzibar Tours, Tanzania Safari & Kilimanjaro Climbing",
    template: "%s | ZANZIONE TOURS & SAFARIS",
  },
  description:
    "Experience authentic East African adventures with ZANZIONE TOURS & SAFARIS. Based in Stone Town, Zanzibar, we offer premium island tours, Tanzania safaris, and Kilimanjaro climbing expeditions. Expert local guides, personalized service, and unforgettable memories.",
  keywords:
    "Zanzibar tours, Tanzania safari, Kilimanjaro climbing, Stone Town tours, Shangani, spice tours, Safari Blue, Serengeti safari, Ngorongoro crater, beach tours, dolphin tours, Zanzibar travel, East Africa adventures",
  authors: [{ name: "ZANZIONE TOURS & SAFARIS" }],
  creator: "ZANZIONE TOURS & SAFARIS",
  publisher: "ZANZIONE TOURS & SAFARIS",
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
    url: "https://www.zanzionetours.com",
    siteName: "ZANZIONE TOURS & SAFARIS",
    title: "ZANZIONE TOURS & SAFARIS - Premium Zanzibar Tours & Tanzania Safari",
    description:
      "Experience authentic East African adventures with expert local guides. Zanzibar tours, Tanzania safaris, and Kilimanjaro climbing expeditions.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "ZANZIONE TOURS & SAFARIS - Zanzibar Beach Paradise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZANZIONE TOURS & SAFARIS - Premium Zanzibar Tours & Tanzania Safari",
    description: "Experience authentic East African adventures with expert local guides based in Stone Town, Zanzibar.",
    images: ["/images/hero-bg.jpg"],
  },
  alternates: {
    canonical: "https://www.zanzionetours.com",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
