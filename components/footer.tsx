import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/images/logo-zanzione.png"
                alt="ZANZIONE TOURS"
                width={50}
                height={50}
                className="h-10 w-auto"
              />
              <div className="ml-3">
                <h3 className="text-lg font-display font-bold">ZANZIONE TOURS</h3>
                <p className="text-sm text-blue-100">Premium Zanzibar Experience</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Your trusted partner for unforgettable Zanzibar adventures, Tanzania safaris, and Kilimanjaro climbing
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/zanzibar" className="text-blue-100 hover:text-white transition-colors">
                  Zanzibar Tours
                </Link>
              </li>
              <li>
                <Link href="/safari" className="text-blue-100 hover:text-white transition-colors">
                  Safari Adventures
                </Link>
              </li>
              <li>
                <Link href="/kilimanjaro" className="text-blue-100 hover:text-white transition-colors">
                  Kilimanjaro Climbing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>Airport Transfers</li>
              <li>Hotel Transfers</li>
              <li>Travel Insurance</li>
              <li>Tour Packages</li>
              <li>Safari Adventures</li>
              <li>Mountain Climbing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-golden" />
                <span className="text-blue-100 text-sm">Shangani, Stone Town, Zanzibar</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-golden" />
                <span className="text-blue-100 text-sm">+255 773 929 583</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-golden" />
                <span className="text-blue-100 text-sm">zanzionetoursandtravel@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-golden" />
                <span className="text-blue-100 text-sm">@zanzione_tours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100 text-sm">
            © 2025 ZANZIONE TOURS. All rights reserved. | Crafted with passion in Stone Town, Zanzibar
          </p>
        </div>
      </div>
    </footer>
  )
}
