import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Check, Star } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Zanzibar Safari Blue Trip - Full Day Snorkeling & Seafood BBQ Tour | Pago Travel Experience",
  description:
    "Experience Zanzibar's best marine adventure! Safari Blue full-day tour in Menai Bay with snorkeling, sandbanks, Kwale Island lagoon, seafood BBQ lunch, and traditional dhow sailing. Book now with expert local guides.",
  keywords: "Safari Blue Zanzibar, Menai Bay tour, Zanzibar snorkeling, sandbank trip, seafood BBQ, dhow sailing, Kwale Island, marine safari",
}

export default function SafariBlueTourPage() {
  const whatsappNumber = "255614363504"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi, I'm interested in booking the Safari Blue Trip tour. Can you provide more details?`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-[#3d1a14] to-[#5a2a22]">
        <div className="absolute inset-0">
          <Image
            src="/images/tours/safari-blue-day.jpg"
            alt="Safari Blue Trip - Menai Bay Zanzibar"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-golden text-golden" />
                ))}
              </div>
              <span className="text-sm font-semibold">5-Star Rated</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Zanzibar Safari Blue Trip</h1>
            <p className="text-2xl md:text-3xl font-light mb-6">Full Day Marine Adventure in Menai Bay</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Full Day Tour</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>4-20 People</span>
              </div>
              <div className="bg-golden px-4 py-2 rounded-full font-bold">
                WhatsApp Quote Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Booking Card */}
          <Card className="mb-12 shadow-2xl border-t-4 border-golden">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-display font-bold text-blue-season mb-4">Book Your Safari Blue Adventure</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Secure your spot for Zanzibar's most popular marine tour
                </p>
                <BookingModal tourName="Safari Blue Trip" />
                <p className="text-sm text-gray-500 mt-4">✓ Fast WhatsApp Support | ✓ Easy Online Booking | ✓ Book Now & Pay Later</p>
              </div>
            </CardContent>
          </Card>

          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-blue-season mb-6">Overview & Experience</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Safari Blue trip is a <strong>full day tour along Menai Bay</strong>, which is one of the best coral reefs in Zanzibar. 
                Main activities in the tour include visits to naturally occurring sandbanks, swimming & snorkeling in the crystal clear waters, 
                visiting Kwale Island with its natural green lagoon, and climbing the old Baobab tree for spectacular views of the Island.
              </p>
              <p>
                If you love the ocean, this tour is for you. You will witness <strong>countless colorful fishes and other sea creatures</strong> that 
                survive among the coral reefs and underwater plants which together form the barrier reef ecosystem in the bay.
              </p>
              <p>
                During the tour, enjoy the <strong>fresh seafood barbecue</strong>: Octopus, Lobsters, Squids, Calamari, and Fish. 
                Plus exotic fresh fruit tasting like Banana, Watermelon, Pineapple, and Mangoes. 
                This will be the best adventurous day of your stay in Zanzibar Islands, and you will understand why we call this <em>"Blue Safari"</em>.
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-blue-season mb-6">Tour Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Swimming and Snorkeling around Menai Bay area",
                "Seafood BBQ Lunch: Octopus, Lobsters, Squids, Prawns, etc.",
                "Tropical Fruits: Mangoes, Bananas, Pineapple, Watermelon etc.",
                "Sailing with Traditional Dhow Boat",
                "Visit Kwale Island Natural Lagoon & Sandbank",
                "Explore the Barrier Reef Ecosystem",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-[#f8f3f1] rounded-lg">
                  <Check className="w-6 h-6 text-blue-season flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-blue-season mb-6">Quote Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-season text-white">
                    <th className="py-4 px-6 text-left font-semibold">Group Size</th>
                    <th className="py-4 px-6 text-left font-semibold">Quote via WhatsApp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-[#f8f3f1] transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-700">1 - 2 persons</td>
                    <td className="py-4 px-6 text-gray-900 font-bold">Quote on WhatsApp </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-[#f8f3f1] transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-700">3 - 5 persons</td>
                    <td className="py-4 px-6 text-gray-900 font-bold">Quote on WhatsApp </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-[#f8f3f1] transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-700">6 - 10 persons</td>
                    <td className="py-4 px-6 text-gray-900 font-bold">Quote on WhatsApp </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-[#f8f3f1] transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-700">11 - 25 persons</td>
                    <td className="py-4 px-6 text-gray-900 font-bold">Quote on WhatsApp </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-amber-50 p-4 rounded-lg border-l-4 border-golden">
              <p className="text-gray-700 text-sm">
                <strong>Note:</strong> Transport costs are excluded from the details shown above. 
                The final quote will depend on your hotel location. Please contact us via WhatsApp for a complete quote including transfers.
              </p>
            </div>
          </div>

          {/* Inclusions Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-blue-season mb-6">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  "English Speaking Guide",
                  "Traditional Sailing Boat (Dhow)",
                  "Snorkeling Equipment",
                  "Lunch (Seafood BBQ, Chicken, or Vegetarian options)",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-golden">
                <h3 className="font-bold text-blue-season mb-3">Important Note on Quotes</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>TRANSPORT IS EXCLUDED:</strong> The final quote depends on your hotel location. 
                  Please contact us via WhatsApp and we will provide you with the full quote including hotel transfers.
                </p>
              </div>
            </div>
          </div>

          {/* About Menai Bay */}
          <div className="bg-gradient-to-br from-[#f8f3f1] to-[#f3ebe8] rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-blue-season mb-6">About Menai Bay Conservation Area</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Safari Blue is one of the most enjoyable things you can do during your Zanzibar vacation. 
                It is called "Blue Safari" because of the <strong>ocean blueness</strong> that you experience during the tour. 
                It's a whole day of playing with the ocean in the Menai Bay Conservation Area.
              </p>
              <p>
                The Menai Bay Conservation Area is located in Menai Bay, on the west-south coast of Unguja, Zanzibar. 
                This is the <strong>largest marine conserved area</strong> covering 470 square kilometres (180 sq mi), 
                comprising extensive coral reefs, colorful tropical fish, abundant sea creatures, and mangrove forests.
              </p>
              <p>
                All together, they create the best tourist experience when visiting Zanzibar islands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-blue-season text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready for the Best Day of Your Zanzibar Trip?</h2>
          <p className="text-xl text-white mb-8">
            Join us for an unforgettable marine adventure in Menai Bay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookingModal tourName="Safari Blue Trip" />
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#3d1a14] font-semibold px-8 py-6 bg-transparent w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
