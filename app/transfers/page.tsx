import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import BookingModal from "@/components/booking-modal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Airport & Hotel Transfers in Zanzibar - Reliable Transport | Pago Travel Experience",
  description:
    "Book reliable and comfortable transfer services across Zanzibar. Airport transfers, hotel transfers, and ferry connections to Stone Town, Nungwi, Paje, Jambiani, and all major destinations. Professional drivers and modern vehicles available 24/7.",
  keywords:
    "Zanzibar transfers, airport transfer, ferry transfer, hotel transfer, Zanzibar transportation, Stone Town transfer, Nungwi transfer",
}

interface TransferRoute {
  from: string
  to: string
  image: string
}

const transferRoutes: TransferRoute[] = [
  { from: "Airport / Ferry", to: "Stone Town", image: "/images/vehicles/alphard-gold.jpg" },
  { from: "Airport / Ferry", to: "Chuini", image: "/images/vehicles/alphard-white.png" },
  { from: "Airport / Ferry", to: "M/Pwani", image: "/images/vehicles/alphard-black.jpg" },
  { from: "Airport / Ferry", to: "Nungwi - Kendwa", image: "/images/vehicles/alphard-white-rear.jpg" },
  { from: "Airport / Ferry", to: "Kiwengwa", image: "/images/vehicles/alphard-black-2.jpg" },
  { from: "Airport / Ferry", to: "P/Mchangani", image: "/images/vehicles/alphard-white-van.jpg" },
  { from: "Airport / Ferry", to: "Matemwe", image: "/images/vehicles/coaster-bus.jpg" },
  { from: "Airport / Ferry", to: "Bwejuu", image: "/images/vehicles/alphard-gold.jpg" },
  { from: "Airport / Ferry", to: "Michamvi", image: "/images/vehicles/alphard-white.png" },
  { from: "Airport / Ferry", to: "Paje", image: "/images/vehicles/alphard-black.jpg" },
  { from: "Airport / Ferry", to: "Jambiani", image: "/images/vehicles/alphard-white-rear.jpg" },
  { from: "Airport / Ferry", to: "Makunduchi", image: "/images/vehicles/coaster-bus.jpg" },
  { from: "Airport / Ferry", to: "Kizimkazi", image: "/images/vehicles/alphard-black-2.jpg" },
  { from: "Airport / Ferry", to: "Pongwe", image: "/images/vehicles/alphard-white-van.jpg" },
  {
    from: "Airport / Ferry",
    to: "Uroa / Marumbi / Chwaka",
    image: "/images/vehicles/alphard-gold.jpg",
  },
  { from: "Jambiani", to: "Paje / Bwejuu / Dongwe", image: "/images/vehicles/alphard-white.png" },
  { from: "Jambiani", to: "Michamvi", image: "/images/vehicles/alphard-black.jpg" },
  { from: "Jambiani", to: "Makunduchi", image: "/images/vehicles/alphard-white-rear.jpg" },
  { from: "Jambiani", to: "Kizimkazi", image: "/images/vehicles/alphard-black-2.jpg" },
  { from: "Jambiani", to: "Stone Town", image: "/images/vehicles/coaster-bus.jpg" },
  { from: "Jambiani", to: "Uroa / Pongwe", image: "/images/vehicles/alphard-white-van.jpg" },
  { from: "Jambiani", to: "Kiwengwa / P'Mchangani", image: "/images/vehicles/alphard-gold.jpg" },
  { from: "Jambiani", to: "Nungwi / Kendwa", image: "/images/vehicles/alphard-white.png" },
  { from: "Jambiani", to: "Matemwe", image: "/images/vehicles/coaster-bus.jpg" },
]

export default function TransfersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f3f1] to-white">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/vehicles/alphard-gold.jpg"
          alt="Zanzibar Transfers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Zanzibar Transfer Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Reliable, comfortable, and affordable transfers across Zanzibar Island
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Comfortable Rides to Any Destination
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Experience hassle-free transportation with our professional transfer services. We offer reliable airport
            transfers, ferry connections, and hotel-to-hotel transfers across all of Zanzibar's popular destinations.
            Our modern fleet and experienced drivers ensure a smooth and comfortable journey.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-golden/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-golden" />
            </div>
            <h3 className="text-xl font-semibold mb-2">All Destinations</h3>
            <p className="text-gray-600">Covering every corner of Zanzibar Island</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-golden/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-golden" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick WhatsApp Quotes</h3>
            <p className="text-gray-600">Share your route and receive a fast quote</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-golden/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-golden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Available</h3>
            <p className="text-gray-600">Round-the-clock service for your convenience</p>
          </div>
        </div>
      </section>

      {/* Transfer Routes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8 text-center">
          Our Transfer Routes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transferRoutes.map((route, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={route.image || "/placeholder.svg"}
                  alt={`Transfer to ${route.to}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">From</p>
                    <p className="font-semibold text-gray-900">{route.from}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">To</p>
                    <p className="font-semibold text-gray-900">{route.to}</p>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-lg font-semibold text-blue-season">Quote on WhatsApp</p>
                    <p className="text-sm text-gray-500">Tell us your pickup and drop-off location</p>
                  </div>
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-golden hover:bg-golden/90 text-white">Get Quote & Book</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3d1a14] to-[#5a2a22] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Need a Custom Transfer Route?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us for custom transfer arrangements or multi-stop itineraries
          </p>
          <BookingModal
            tourName="Custom Transfer Route"
            trigger={
              <Button size="lg" className="bg-golden hover:bg-golden/90 text-white px-8 py-6 text-lg">
                BOOK A TRANSFER
              </Button>
            }
          />
        </div>
      </section>

      {/* Footer and WhatsAppFloat Components */}
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
