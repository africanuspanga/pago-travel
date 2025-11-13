import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Safari & Tour Packages - Serengeti, Zanzibar & Mikumi | ZANZIONE TOURS",
  description:
    "Explore our curated tour packages including 2-day Serengeti safari with the Great Migration, 5-day Zanzibar beach and culture tour, and Mikumi day trip safari. All-inclusive itineraries with expert guides, accommodation, meals, and unforgettable wildlife experiences in Tanzania.",
  openGraph: {
    title: "Complete Tour Packages - ZANZIONE TOURS & SAFARIS",
    description:
      "Choose from our carefully crafted safari and beach tour packages. From the Serengeti plains to Zanzibar beaches.",
    url: "https://www.zanzionetours.com/itineraries",
  },
  alternates: {
    canonical: "https://www.zanzionetours.com/itineraries",
  },
}

const packages = [
  {
    id: "mikumi-safari",
    title: "Mikumi Day Trip Safari",
    price: "$400",
    priceNote: "Per Person",
    duration: "1 Day",
    image: "/images/packages/mikumi-safari.jpg",
    description:
      "Full-day flying safari to Mikumi National Park. Experience incredible wildlife viewing including elephants, giraffes, lions, zebras, and more in this accessible Tanzania park.",
    highlights: [
      "Round-trip flights included",
      "Full-day guided game drive",
      "Bush lunch in the park",
      "Perfect for day trippers",
    ],
  },
  {
    id: "zanzibar-tour",
    title: "Zanzibar 5-Day Tour Package",
    price: "$390",
    priceNote: "Per Person",
    duration: "5 Days / 4 Nights",
    image: "/images/packages/zanzibar-tour.jpg",
    description:
      "Comprehensive exploration of Zanzibar's culture, nature, and beaches. Includes Safari Blue, Jozani Forest, Stone Town tour, Prison Island, spice farms, and The Rock Restaurant.",
    highlights: ["Safari Blue adventure", "Jozani Forest & monkeys", "Stone Town UNESCO site", "Beach relaxation time"],
  },
  {
    id: "serengeti-safari",
    title: "Serengeti 2 Days 1 Night Safari Package",
    price: "$1,676",
    priceNote: "Per Adult",
    duration: "2 Days / 1 Night",
    image: "/images/packages/serengeti-safari.jpg",
    description:
      "Experience the magic of Serengeti with a fly-in safari. Witness the Great Migration, spot the Big Five, and enjoy game drives across endless plains. Includes flights from Zanzibar.",
    highlights: [
      "Fly-in/Fly-out from Zanzibar",
      "Game drives in Serengeti",
      "Possible Big Five sightings",
      "Accommodation included",
    ],
  },
]

export default function ItinerariesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/safari-sunset.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-4 leading-tight">
            Tour & Safari Packages
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            Carefully curated experiences combining the best of Tanzania and Zanzibar
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-season mb-4">Choose Your Adventure</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              All-inclusive packages designed for unforgettable East African experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-golden">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(4.0)</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-3">{pkg.title}</h3>

                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{pkg.priceNote}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-2xl font-bold text-golden mb-1">{pkg.price}</p>
                    <p className="text-sm text-gray-500">{pkg.priceNote}</p>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{pkg.description}</p>

                  <div className="border-t pt-4 mb-4">
                    <p className="text-sm font-semibold text-blue-season mb-2">Package Highlights:</p>
                    <ul className="space-y-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-golden mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <Link href={`/itineraries/${pkg.id}`}>
                      <Button className="w-full bg-blue-season hover:bg-blue-season/90 text-white">
                        View Full Itinerary
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button className="w-full bg-golden hover:bg-golden/90 text-white">BOOK THIS TRIP</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-blue-season text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">Need a Custom Package?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Can't find exactly what you're looking for? Let us create a personalized itinerary tailored to your
            preferences, budget, and schedule.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-golden hover:bg-golden/90 text-white font-semibold px-8 py-4">
              Contact Us for Custom Package
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
