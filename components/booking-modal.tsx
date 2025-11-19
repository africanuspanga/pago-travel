"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon } from 'lucide-react'

interface BookingModalProps {
  tourName: string
  trigger?: React.ReactNode
  className?: string
}

export default function BookingModal({ tourName, trigger, className }: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    country: "",
    specialRequests: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const whatsappNumber = "255710885320"
    const message = `*New Booking Request*
*Tour:* ${tourName}
*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Date:* ${formData.date}
*Country:* ${formData.country}
*Guests:* ${formData.guests}
*Special Requests:* ${formData.specialRequests || "None"}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className={`bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-12 py-6 w-full sm:w-auto ${className}`}>
            BOOK VIA WHATSAPP
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display font-bold text-center text-[#103968]">Book This Tour</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-600">
            {tourName}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-base font-semibold">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Your full name"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="h-12 text-lg bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-semibold">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="h-12 text-lg bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              required
              value={formData.phone}
              onChange={handleChange}
              className="h-12 text-lg bg-gray-50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-base font-semibold">
                Number of People <span className="text-red-500">*</span>
              </Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                placeholder="2"
                required
                value={formData.guests}
                onChange={handleChange}
                className="h-12 text-lg bg-gray-50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-base font-semibold">
                Preferred Date <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="h-12 text-lg bg-gray-50"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-base font-semibold">
              Country <span className="text-red-500">*</span>
            </Label>
            <Input
              id="country"
              name="country"
              placeholder="Your country of residence"
              required
              value={formData.country}
              onChange={handleChange}
              className="h-12 text-lg bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequests" className="text-base font-semibold">
              Special Requests or Questions
            </Label>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              placeholder="Any dietary restrictions, accessibility needs, or special requests..."
              value={formData.specialRequests}
              onChange={handleChange}
              className="min-h-[100px] text-lg bg-gray-50 resize-y"
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-lg py-6 mt-4"
          >
            Submit Booking Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
