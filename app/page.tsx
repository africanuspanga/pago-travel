import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, Shield, Clock, MapPin, Plane, Car } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import BookingModal from "@/components/booking-modal"

export const metadata: Metadata = {
  title: "Home - Premium Zanzibar Tours, Tanzania Safari & Kilimanjaro Climbing",
  description:
    "Welcome to Pago Travel Experience, a Zanzibar based tour operator offering personalized Tanzania safaris and Zanzibar excursions with experienced guides, reliable vehicles, and carefully selected hotels and lodges.",
  openGraph: {
    title: "Pago Travel Experience - Your Gateway to East African Adventures",
    description:
      "Premium tours, authentic experiences, and unforgettable adventures in Zanzibar, Tanzania, and Mount Kilimanjaro.",
    url: "https://www.pagotravelexperience.co.tz",
    images: [
      {
        url: "/pg/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pago Travel Experience Hero",
      },
    ],
  },
  alternates: {
    canonical: "https://www.pagotravelexperience.co.tz",
  },
}

const travelerTestimonials = [
  {
    name: "Giulia Rossi",
    country: "Italy",
    flag: "🇮🇹",
    quote:
      "Everything was smooth from airport pickup to our final beach day. The team planned each detail and we felt fully supported throughout Zanzibar and safari days.",
  },
  {
    name: "Michael Johnson",
    country: "United States",
    flag: "🇺🇸",
    quote:
      "Our guide was knowledgeable, punctual, and genuinely friendly. We saw incredible wildlife and learned so much about local culture during every stop.",
  },
  {
    name: "Lars Nielsen",
    country: "Denmark",
    flag: "🇩🇰",
    quote:
      "The itinerary was well balanced and personalized. Transfers, hotels, and excursions were all coordinated perfectly, which made the trip stress free.",
  },
  {
    name: "Emma Andersson",
    country: "Sweden",
    flag: "🇸🇪",
    quote:
      "From Stone Town to the national parks, the experience was excellent. Communication was clear and the team adapted quickly when we changed plans.",
  },
  {
    name: "Sophie Tremblay",
    country: "Canada",
    flag: "🇨🇦",
    quote:
      "Professional service, great drivers, and fantastic guides. We loved the mix of wildlife, culture, and beach time. I would book with Pago again.",
  },
  {
    name: "Lukas Schneider",
    country: "Germany",
    flag: "🇩🇪",
    quote:
      "A very reliable operator with strong local expertise. The safari days were unforgettable and the Zanzibar excursions were exactly what we wanted.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/pg/hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold mb-4 sm:mb-6 leading-tight">
            Welcome to <span className="text-white">Pago Travel Experience</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed px-2">
            Personalized safari tours across Tanzania and unforgettable excursions in Zanzibar, planned by experienced
            local professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/itineraries">
              <Button
                size="lg"
                className="bg-golden hover:bg-golden/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-h-[48px]"
              >
                Explore Tours
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-season font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent min-h-[48px]"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Pago Travel Experience */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-blue-season mb-4 sm:mb-6">
              About Pago Travel Experience
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Pago Travel Experience is a Zanzibar based tour operator also operating in mainland Tanzania. We craft
              tailor made journeys around your travel goals, from wildlife and birding to culture and beach relaxation,
              with attentive consultants, dedicated guides, and reliable vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-golden" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-blue-season">Expert Local Guides</h3>
                <p className="text-gray-600">
                  Our consultants and guides deliver informed, personalized trips with deep local knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-golden" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-blue-season">Trusted & Reliable</h3>
                <p className="text-gray-600">
                  Years of experience and hundreds of satisfied travelers make us your trusted adventure partner.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-golden" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-blue-season">Premium Experience</h3>
                <p className="text-gray-600">
                  We craft unforgettable moments with attention to detail and personalized service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-blue-season mb-4 sm:mb-6">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              From the moment you arrive until your departure, we ensure every aspect of your journey is seamless and
              memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-season rounded-lg flex items-center justify-center mb-4">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-blue-season mb-3">
                Airport Transfers
              </h3>
              <p className="text-gray-600">
                Comfortable and reliable airport pickup and drop-off services to start your adventure stress-free.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-season rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-blue-season mb-3">Hotel Transfers</h3>
              <p className="text-gray-600">
                Seamless transportation between hotels and tour destinations with our professional drivers.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-season rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-blue-season mb-3">Taxi Services</h3>
              <p className="text-gray-600">
                Reliable taxi services for all your transportation needs throughout Zanzibar at competitive rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-blue-season mb-4 sm:mb-6">
              Featured Experiences
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Discover our most popular adventures that showcase the best of Zanzibar, Tanzania, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Zanzibar Tours */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div
                className="h-48 sm:h-64 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/zanzibar-beach.jpg)" }}
              >
                <div className="h-full bg-black/20 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-lg font-semibold">Pristine Zanzibar Beaches</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-3">
                  Zanzibar Island Tours
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Explore pristine beaches, spice farms, Stone Town's rich history, and incredible marine life in
                  crystal-clear waters.
                </p>
                <Link href="/zanzibar">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    Explore Zanzibar Tours
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Safari Tours */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div
                className="h-48 sm:h-64 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/safari-sunset.jpg)" }}
              >
                <div className="h-full bg-black/20 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-lg font-semibold">African Safari Adventure</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-3">Tanzania Safari</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Witness the Big Five in Serengeti, Ngorongoro Crater, and other world-renowned national parks with
                  expert guides.
                </p>
                <Link href="/safari">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    Discover Tanzania Safaris
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Kilimanjaro */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div
                className="h-48 sm:h-64 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/kilimanjaro-mountain.jpg)" }}
              >
                <div className="h-full bg-black/20 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-lg font-semibold">Mount Kilimanjaro Peak</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-3">
                  Kilimanjaro Climbing
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Conquer Africa's highest peak with our experienced mountain guides and comprehensive climbing
                  packages.
                </p>
                <Link href="/kilimanjaro">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    Kilimanjaro Climbing
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safari Highlights */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-blue-season mb-4 sm:mb-6">
              Safari Highlights
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Discover Tanzania's most iconic wildlife destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Serengeti National Park */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/images/safari/serengeti.jpg"
                  alt="Serengeti National Park"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-3">
                  Serengeti National Park
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Witness the Great Migration and endless plains teeming with wildlife. Home to the Big Five and one of
                  Africa's most iconic safari destinations.
                </p>
                <Link href="/safari">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    View More Destinations
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Ngorongoro Crater */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/images/safari/ngorongoro.jpg"
                  alt="Ngorongoro Crater"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-3">Ngorongoro Crater</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Explore the world's largest intact volcanic caldera, often called 'Africa's Eden' for its incredible
                  concentration of wildlife.
                </p>
                <Link href="/safari">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    View More Destinations
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Tarangire National Park */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/images/safari/tarangire.jpg"
                  alt="Tarangire National Park"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-3">
                  Tarangire National Park
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Famous for its massive elephant herds and iconic baobab trees. A photographer's paradise with diverse
                  landscapes and wildlife.
                </p>
                <Link href="/safari">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    View More Destinations
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tour Packages Highlights */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-blue-season mb-4 sm:mb-6">
              Featured Tour Packages
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              All-inclusive packages combining the best of Tanzania and Zanzibar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Mikumi Safari */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/images/packages/mikumi-safari.jpg"
                  alt="Mikumi Day Trip Safari"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-golden">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-2">
                  Mikumi Day Trip Safari
                </h3>
                <p className="text-lg font-semibold text-golden mb-3">From $410</p>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Full-day flying safari to Mikumi National Park. Experience incredible wildlife viewing including
                  elephants, giraffes, lions, and zebras.
                </p>
                <Link href="/itineraries/mikumi-safari">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    View Package Details
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Zanzibar Tour */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/images/packages/zanzibar-tour.jpg"
                  alt="Zanzibar 5-Day Tour Package"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-golden">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-2">
                  Zanzibar 5-Day Tour Package
                </h3>
                <p className="text-lg font-semibold text-golden mb-3">From $400</p>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Comprehensive exploration of Zanzibar's culture, nature, and beaches. Includes Safari Blue, Jozani
                  Forest, Stone Town, and more.
                </p>
                <Link href="/itineraries/zanzibar-tour">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    View Package Details
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Serengeti Safari */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/images/packages/serengeti-safari.jpg"
                  alt="Serengeti 2 Days Safari"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-golden">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-2">
                  Serengeti 2 Days 1 Night Safari
                </h3>
                <p className="text-lg font-semibold text-golden mb-3">From $1,686</p>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Experience the magic of Serengeti with a fly-in safari. Witness the Great Migration and spot the Big
                  Five across endless plains.
                </p>
                <Link href="/itineraries/serengeti-safari">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    View Package Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transfer Services Highlights */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-blue-season mb-4 sm:mb-6">
              Reliable Transfer Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Comfortable and affordable transportation across Zanzibar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Airport to Stone Town */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/20080512_01_01_2.jpg"
                  alt="Airport to Stone Town Transfer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-2">
                  Airport to Stone Town
                </h3>
                <p className="text-2xl font-bold text-golden mb-3">$15</p>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Quick and convenient transfer from the airport or ferry terminal to historic Stone Town. Perfect for
                  arrivals and departures.
                </p>
                <Link href="/transfers">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    View All Transfers
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Airport to Nungwi */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/11637336.jpg"
                  alt="Airport to Nungwi Transfer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-2">
                  Airport to Nungwi - Kendwa
                </h3>
                <p className="text-2xl font-bold text-golden mb-3">$45</p>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Direct transfer to the beautiful northern beaches of Nungwi and Kendwa. Enjoy a comfortable ride in
                  our modern vehicles.
                </p>
                <Link href="/transfers">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    View All Transfers
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Airport to East Coast */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/01_l3.jpg"
                  alt="Airport to Paje Transfer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-2">
                  Airport to Paje - Jambiani
                </h3>
                <p className="text-2xl font-bold text-golden mb-3">$45</p>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Travel to the stunning east coast beaches of Paje and Jambiani. Perfect for kitesurf enthusiasts and
                  beach lovers.
                </p>
                <Link href="/transfers">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    View All Transfers
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zanzibar Highlights */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-blue-season mb-4 sm:mb-6">
              Zanzibar Highlights
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Experience the best of Zanzibar with our most popular island adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Stone Town Tour */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/images/tours/stone-town-tour.jpg"
                  alt="Stone Town Tour"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-3">Stone Town Tour</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Explore the UNESCO World Heritage site with its narrow alleys, historic buildings, and vibrant
                  markets. Discover the cultural heart of Zanzibar.
                </p>
                <Link href="/zanzibar">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    Explore Zanzibar Tours
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Nakupenda Beach */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/images/tours/nakupenda-sandbank.jpg"
                  alt="Nakupenda Beach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-3">Nakupenda Beach</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Escape to a pristine white sand paradise in the middle of the ocean. Perfect for relaxation, swimming,
                  and enjoying fresh seafood.
                </p>
                <Link href="/zanzibar">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    Explore Zanzibar Tours
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Dolphins Tour */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/images/tours/kizimkazi-dolphin.jpg"
                  alt="Dolphins Tour"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-season mb-3">Kizimkazi Dolphins</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Swim with wild dolphins in their natural habitat at Kizimkazi. An unforgettable wildlife encounter in
                  the warm waters of the Indian Ocean.
                </p>
                <Link href="/zanzibar">
                  <Button className="w-full bg-golden hover:bg-golden/90 text-white min-h-[44px]">
                    Explore Zanzibar Tours
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Pago Travel Experience? */}
      <section className="py-12 sm:py-20 bg-blue-season text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
              Why Choose Pago Travel Experience?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-2">
              We do more than show destinations. We create meaningful experiences that connect you with East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3">Years of Experience</h3>
              <p className="text-white/80">
                Deep local knowledge and expertise built over years of guiding travelers through East Africa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3">Multilingual Team</h3>
              <p className="text-white/80">
                Our guides speak multiple languages, ensuring clear communication and cultural understanding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3">Safety First</h3>
              <p className="text-white/80">
                Your safety and comfort are our top priorities, with comprehensive insurance and safety protocols.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3">Authentic Experiences</h3>
              <p className="text-white/80">
                We provide genuine cultural encounters and off-the-beaten-path adventures you won't find elsewhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-blue-season mb-4 sm:mb-6">
              What Our Travelers Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Hear from travelers who explored Tanzania and Zanzibar with Pago Travel Experience.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-3 snap-x snap-mandatory">
            {travelerTestimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="p-6 sm:p-8 min-w-[290px] sm:min-w-[340px] max-w-[360px] flex-shrink-0 snap-start border border-[#e8dfdc]"
              >
                <CardContent className="space-y-4">
                  <div className="flex text-golden">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-blue-season">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.flag} {testimonial.country}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-20 bg-[#5a2a22]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
            Ready for Your Adventure?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
            Let us craft the perfect East African experience tailored to your dreams. Contact us today and start
            planning your unforgettable journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <BookingModal
              tourName="General Inquiry / Free Quote"
              trigger={
                <Button
                  size="lg"
                  className="bg-blue-season hover:bg-blue-season/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-h-[48px]"
                >
                  Get Free Quote
                </Button>
              }
            />
            <Link href="tel:+255614363504">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-golden font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent min-h-[48px]"
              >
                Call Us Now
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
