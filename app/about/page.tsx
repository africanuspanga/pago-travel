import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Heart } from "lucide-react"
import BookingModal from "@/components/booking-modal"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#3d1a14] to-[#5a2a22] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">About Pago Travel Experience</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Personalized Tanzania safaris and Zanzibar excursions designed around your travel goals
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-blue-season mb-6">About The Brand</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Welcome to Pago Travel Experience. We are dedicated to providing personalized safari tours of Tanzania
                  and excursions in Zanzibar. Explore world class destinations and plan a safari beyond belief with our
                  professional team.
                </p>
                <p>
                  Pago Travel Experience is a Zanzibar based tour operator also operating in mainland Tanzania. The
                  company is privately owned and managed by experienced travel professionals.
                </p>
                <p>
                  Our knowledgeable tour consultants provide personalized service with close attention to detail. We
                  design culturally informative, historical, botanical, and ornithological journeys that are also fun
                  and memorable. Our goal is to showcase the richness of Tanzania’s flora, fauna, and culture through
                  efficient office support, dedicated guides, and well maintained vehicles.
                </p>
                <p>
                  Kenya and Tanzania, each with bird lists of more than one thousand species, are among Africa’s top
                  birding destinations. Alongside exceptional birding, our tours also place you close to one of the
                  finest mammal viewing experiences on the planet.
                </p>
                <p>
                  After the wild landscapes of Tanzania, Zanzibar offers white beaches and clear blue water. End your
                  safari by exploring historic Stone Town and relaxing by the Indian Ocean.
                </p>
              </div>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: "url(/images/aerial-zanzibar.jpg)" }}
            >
              <div className="h-full bg-black/20 rounded-lg flex items-end">
                <div className="p-6 text-white">
                  <p className="text-lg font-semibold">Aerial View of Beautiful Zanzibar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-blue-season mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from planning your itinerary to ensuring your safety and
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-golden" />
                </div>
                <h3 className="text-xl font-display font-semibold text-blue-season">Authenticity</h3>
                <p className="text-gray-600 text-sm">
                  We create genuine experiences that showcase the real East Africa, not tourist facades.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-golden" />
                </div>
                <h3 className="text-xl font-display font-semibold text-blue-season">Community</h3>
                <p className="text-gray-600 text-sm">
                  We support local communities and ensure tourism benefits the people who call this region home.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-golden" />
                </div>
                <h3 className="text-xl font-display font-semibold text-blue-season">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We strive for perfection in every detail, from planning to execution of your adventure.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-golden" />
                </div>
                <h3 className="text-xl font-display font-semibold text-blue-season">Sustainability</h3>
                <p className="text-gray-600 text-sm">
                  We're committed to responsible tourism that preserves the environment for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 bg-[#2f140f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Certifications & Partnerships</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We maintain the highest standards through official certifications and partnerships with leading
              organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">Licensed Tour Operator</h3>
              <p className="text-white/80 text-sm">Fully licensed by Tanzania Tourism Authority</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">TATO Member</h3>
              <p className="text-white/80 text-sm">Tanzania Association of Tour Operators</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">Safety Certified</h3>
              <p className="text-white/80 text-sm">Wilderness first aid and safety protocols</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">Eco-Tourism</h3>
              <p className="text-white/80 text-sm">Committed to sustainable tourism practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#5a2a22]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-white mb-6">Ready to Experience East Africa?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let our passionate team create an unforgettable adventure tailored to your dreams and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal
              tourName="General Inquiry / Custom Tour"
              trigger={
                <Button size="lg" className="bg-blue-season hover:bg-blue-season/90 text-white font-semibold px-8 py-4">
                  BOOK A TOUR
                </Button>
              }
            />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
