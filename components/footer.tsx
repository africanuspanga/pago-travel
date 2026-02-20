import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-season text-white border-t-4 border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/pg/logo.png"
                alt="Pago Travel Experience"
                width={50}
                height={50}
                className="h-10 w-auto"
              />
              <div className="ml-3">
                <h3 className="text-lg font-display font-bold">Pago Travel Experience</h3>
                <p className="text-sm text-white/80">Personalized Safari and Zanzibar Excursions</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Your trusted partner for unforgettable Zanzibar adventures, Tanzania safaris, and Kilimanjaro climbing
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/itineraries" className="text-white/80 hover:text-white transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/zanzibar" className="text-white/80 hover:text-white transition-colors">
                  Zanzibar Tours
                </Link>
              </li>
              <li>
                <Link href="/safari" className="text-white/80 hover:text-white transition-colors">
                  Safari Adventures
                </Link>
              </li>
              <li>
                <Link href="/kilimanjaro" className="text-white/80 hover:text-white transition-colors">
                  Kilimanjaro Climbing
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/transfers" className="text-white/80 hover:text-white transition-colors">
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link href="/transfers" className="text-white/80 hover:text-white transition-colors">
                  Hotel Transfers
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                  Taxi Services
                </Link>
              </li>
              <li>
                <Link href="/itineraries" className="text-white/80 hover:text-white transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/safari" className="text-white/80 hover:text-white transition-colors">
                  Safari Adventures
                </Link>
              </li>
              <li>
                <Link href="/kilimanjaro" className="text-white/80 hover:text-white transition-colors">
                  Mountain Climbing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-golden" />
                <span className="text-white/80 text-sm">Stone Town, Zanzibar</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-golden" />
                <span className="text-white/80 text-sm">+255 614 363 504</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-golden" />
                <span className="text-white/80 text-sm">pagotravelexperience@gmail.com</span>
              </div>
              <a
                href="https://www.facebook.com/share/17Wn8GXrd8/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-golden transition-colors"
              >
                <Facebook className="w-4 h-4 text-golden" />
                <span className="text-white/80 text-sm">Follow us on Facebook</span>
              </a>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-golden" />
                <span className="text-white/80 text-sm">@pagotravelexperience</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/20 mt-8 pt-8 text-center">
          <a
            href="https://www.driftmark.co.tz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Driftmark"
            className="absolute inset-0 z-10"
          >
            <span className="sr-only">Driftmark</span>
          </a>
          <p className="relative z-0 text-white/80 text-sm">
            © 2026 Pago Travel Experience. All rights reserved. | Crafted with passion in Stone Town, Zanzibar
          </p>
        </div>
      </div>
    </footer>
  )
}
