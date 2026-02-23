import type { Metadata } from "next"
import ContactClientPage from "./ContactClientPage"

export const metadata: Metadata = {
  title: "Contact Us - Book Your Zanzibar Tour or Tanzania Safari",
  description:
    "Contact Pago Travel Experience in Zanzibar. WhatsApp: +255 614 363 504, Call: +255 614 363 504, Email: pagotravelexperience@gmail.com. Available 24/7 for tour bookings and travel planning.",
  keywords:
    "contact Zanzibar tours, book Tanzania safari, Zanzibar travel agency, tour booking, safari inquiry",
  openGraph: {
    title: "Contact Pago Travel Experience",
    description: "Get in touch to plan your perfect East African adventure. Based in Zanzibar.",
    url: "https://www.pagotravelexperience.co.tz/contact",
  },
  alternates: {
    canonical: "https://www.pagotravelexperience.co.tz/contact",
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}
