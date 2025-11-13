"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-blue-season text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden xs:inline">+255 773 929 583</span>
              <span className="xs:hidden">Call Us</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>zanzionetoursandtravel@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Shangani, Stone Town, Zanzibar</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-zanzione.png"
              alt="ZANZIONE TOURS & SAFARIS"
              width={60}
              height={60}
              className="h-8 sm:h-12 w-auto"
            />
            <div className="ml-2 sm:ml-3">
              <h1 className="text-lg sm:text-xl font-display font-bold text-blue-season">ZANZIONE TOURS</h1>
              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Premium Zanzibar Experience</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-season font-medium transition-colors duration-200">
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-season font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/zanzibar"
              className="text-gray-700 hover:text-blue-season font-medium transition-colors duration-200"
            >
              Zanzibar Tours
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-season font-medium transition-colors duration-200">
                Safari
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div
                className={`absolute top-full left-0 mt-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50 transition-all duration-200 ${isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <Link
                  href="/safari"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-season transition-colors duration-200"
                >
                  Safari Tours
                </Link>
                <Link
                  href="/kilimanjaro"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-season transition-colors duration-200"
                >
                  Kilimanjaro
                </Link>
              </div>
            </div>

            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-season font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link href="/contact">
              <Button className="bg-golden hover:bg-golden/90 text-white font-semibold px-6">Contact</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-blue-season">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-season font-medium py-3 px-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-season font-medium py-3 px-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/zanzibar"
                className="text-gray-700 hover:text-blue-season font-medium py-3 px-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Zanzibar Tours
              </Link>
              <Link
                href="/safari"
                className="text-gray-700 hover:text-blue-season font-medium py-3 px-2 pl-6 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Safari Tours
              </Link>
              <Link
                href="/kilimanjaro"
                className="text-gray-700 hover:text-blue-season font-medium py-3 px-2 pl-6 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kilimanjaro
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-season font-medium py-3 px-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="bg-golden hover:bg-golden/90 text-white font-semibold w-full mt-4 py-3 text-base">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
