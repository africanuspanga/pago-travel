import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Check, Star, Utensils } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Rock Restaurant Zanzibar - Iconic Ocean Dining Experience | ZANZIONE TOURS",
  description:
    "Visit the world-famous Rock Restaurant built on a rock in the Indian Ocean. Enjoy fresh seafood, snorkeling at Michamvi Beach, and unforgettable dining with stunning ocean views. Book your Rock Restaurant tour today!",
  keywords: "Rock Restaurant Zanzibar, Michamvi Pingwe, ocean dining, seafood restaurant, Zanzibar restaurants, unique dining experience",
}

export default function TheRockRestaurantPage() {
  const whatsappNumber = "255710885320"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi, I'm interested in booking The Rock Restaurant tour. Can you provide more details?`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="absolute inset-0">
          <Image
            src="/images/tours/the-rock-restaurant.jpg"
            alt="The Rock Restaurant Zanzibar"
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
              <span className="text-sm font-semibold">Iconic Landmark</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">The Rock Restaurant</h1>
            <p className="text-2xl md:text-3xl font-light mb-6">Zanzibar's Most Photographed Dining Experience</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Half Day Tour</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>2-8 People</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5" />
                <span>Fresh Seafood</span>
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
                <h2 className="text-3xl font-display font-bold text-ocean mb-4">Experience Iconic Ocean Dining</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Book your visit to Zanzibar's most famous restaurant
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-12 py-6 w-full sm:w-auto">
                    BOOK VIA WHATSAPP
                  </Button>
                </a>
                <p className="text-sm text-gray-500 mt-4">✓ Best Price Guarantee | ✓ Instant Confirmation | ✓ Perfect for Couples & Families</p>
              </div>
            </CardContent>
          </Card>

          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                One of the most popular restaurants in Zanzibar, you have probably seen pictures on different social media of travelers 
                eating out or taking photos near <strong>The Rock Restaurant</strong>, built on top of a rock surrounded by the ocean during high tide.
              </p>
              <p>
                The Rock Restaurant, located on the <strong>southeast coast of Zanzibar at Michamvi Pingwe beach village</strong>, 
                is an ideal destination for couples, families, and friends. They offer a variety of fresh seafood like Octopus, Squid, Oysters, 
                Lobster & Prawns, and more.
              </p>
              <p>
                In this tour, you will start with <strong>snorkeling in Michamvi beach corals</strong> near The Rock Restaurant. 
                After you finish snorkeling, you will spend your time having lunch at the world-famous Rock Restaurant, 
                enjoying spectacular ocean views and fresh seafood cuisine.
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Experience Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Iconic restaurant built on a rock in the ocean",
                "Snorkeling in Michamvi Beach coral reefs",
                "Fresh seafood dining experience",
                "Stunning ocean views and photo opportunities",
                "Visit during high tide for the full experience",
                "Perfect for couples, families, and friends",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tour Pricing Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Tour Pricing</h2>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-ocean mb-4">Price per Person (Tour Only):</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-ocean text-white">
                        <th className="py-3 px-4 text-left font-semibold">Group Size</th>
                        <th className="py-3 px-4 text-right font-semibold">Price per Person</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-200">
                        <td className="py-3 px-4 text-gray-700">1 - 2 persons</td>
                        <td className="py-3 px-4 text-right font-semibold text-ocean">$45</td>
                      </tr>
                      <tr className="border-b border-blue-200 bg-blue-50/50">
                        <td className="py-3 px-4 text-gray-700">3 - 6 persons</td>
                        <td className="py-3 px-4 text-right font-semibold text-ocean">$40</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="py-3 px-4 text-gray-700">7 - 10 persons</td>
                        <td className="py-3 px-4 text-right font-semibold text-ocean">$37</td>
                      </tr>
                      <tr className="bg-blue-50/50">
                        <td className="py-3 px-4 text-gray-700">11 - 28 persons</td>
                        <td className="py-3 px-4 text-right font-semibold text-ocean">$35</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded">
                  <p className="text-sm text-gray-600">
                    <strong>Important:</strong> Restaurant meals are paid separately at The Rock Restaurant. The tour price includes transportation and snorkeling equipment only. Contact us for complete pricing based on your hotel location.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What to Expect */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">What to Expect</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-ocean text-xl mb-3 flex items-center gap-2">
                  <span className="bg-golden text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                  Snorkeling Adventure
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Begin your tour with snorkeling in the beautiful coral reefs of Michamvi Beach. 
                  Explore the underwater world and discover colorful tropical fish and marine life in crystal-clear waters.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-ocean text-xl mb-3 flex items-center gap-2">
                  <span className="bg-golden text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                  Iconic Dining Experience
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  After snorkeling, enjoy a memorable lunch at The Rock Restaurant. Choose from a variety of fresh seafood 
                  including Octopus, Squid, Oysters, Lobster, and Prawns, all while surrounded by the stunning Indian Ocean.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-ocean text-xl mb-3 flex items-center gap-2">
                  <span className="bg-golden text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                  Photography Paradise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Capture unforgettable photos of the restaurant perched on its rock, especially during high tide when 
                  it's completely surrounded by water. This is one of Zanzibar's most Instagram-worthy locations!
                </p>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-display font-bold text-ocean mb-6">Important Information</h2>
            <div className="space-y-4">
              <div className="p-4 bg-amber-50 border-l-4 border-golden rounded">
                <h3 className="font-bold text-ocean mb-2">Location</h3>
                <p className="text-gray-700">
                  The Rock Restaurant is located at <strong>Michamvi Pingwe beach village</strong> on the southeast coast of Zanzibar.
                </p>
              </div>

              <div className="p-4 bg-blue-50 border-l-4 border-ocean rounded">
                <h3 className="font-bold text-ocean mb-2">Best Time to Visit</h3>
                <p className="text-gray-700">
                  Visit during high tide for the full experience when the restaurant is completely surrounded by water. 
                  Check tide times when booking your tour.
                </p>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-600 rounded">
                <h3 className="font-bold text-ocean mb-2">What to Bring</h3>
                <p className="text-gray-700">
                  Swimwear, towel, sunscreen, camera, and cash for the restaurant (meals are not included in the tour price).
                </p>
              </div>

              <div className="p-4 bg-purple-50 border-l-4 border-purple-600 rounded">
                <h3 className="font-bold text-ocean mb-2">Pricing Note</h3>
                <p className="text-gray-700">
                  <strong>Restaurant meals are paid separately.</strong> The tour includes transportation and snorkeling equipment. 
                  Contact us via WhatsApp for complete pricing based on your hotel location.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <Card className="bg-gradient-to-r from-ocean to-blue-600 text-white shadow-2xl">
            <CardContent className="p-10 text-center">
              <h2 className="text-3xl font-display font-bold mb-4">Ready to Dine at Zanzibar's Most Famous Restaurant?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Book your unforgettable experience at The Rock Restaurant today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-12 py-6 w-full sm:w-auto">
                    BOOK VIA WHATSAPP
                  </Button>
                </a>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ocean font-semibold px-8 py-6 bg-transparent w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
