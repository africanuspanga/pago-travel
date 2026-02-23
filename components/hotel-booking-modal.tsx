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

interface HotelBookingModalProps {
  trigger?: React.ReactNode
  className?: string
}

export default function HotelBookingModal({ trigger, className }: HotelBookingModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    checkInDate: "",
    checkOutDate: "",
    adults: "",
    children: "",
    rooms: "",
    preferredArea: "",
    hotelCategory: "",
    mealPlan: "",
    budgetRange: "",
    specialRequests: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappNumber = "255614363504"
    const message = `*New Hotel Booking Request*
*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Country:* ${formData.country}
*Check-in:* ${formData.checkInDate}
*Check-out:* ${formData.checkOutDate}
*Adults:* ${formData.adults}
*Children:* ${formData.children || "0"}
*Rooms:* ${formData.rooms}
*Preferred Area:* ${formData.preferredArea}
*Hotel Category:* ${formData.hotelCategory}
*Meal Plan:* ${formData.mealPlan}
*Budget Range:* ${formData.budgetRange}
*Special Requests:* ${formData.specialRequests || "None"}`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            size="lg"
            className={`bg-blue-season hover:bg-blue-season/90 text-white font-semibold ${className}`}
          >
            Book Hotel
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[680px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-blue-season">
            Hotel Booking Request
          </DialogTitle>
          <DialogDescription>
            Share your details and we will confirm the best hotel options on WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone / WhatsApp *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkInDate">Check-in Date *</Label>
              <Input
                id="checkInDate"
                name="checkInDate"
                type="date"
                value={formData.checkInDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="checkOutDate">Check-out Date *</Label>
              <Input
                id="checkOutDate"
                name="checkOutDate"
                type="date"
                value={formData.checkOutDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="adults">Adults *</Label>
              <Input
                id="adults"
                name="adults"
                type="number"
                min="1"
                value={formData.adults}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="children">Children</Label>
              <Input
                id="children"
                name="children"
                type="number"
                min="0"
                value={formData.children}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rooms">Rooms *</Label>
              <Input
                id="rooms"
                name="rooms"
                type="number"
                min="1"
                value={formData.rooms}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredArea">Preferred Area in Zanzibar *</Label>
              <Input
                id="preferredArea"
                name="preferredArea"
                placeholder="Nungwi, Kendwa, Paje, Stone Town..."
                value={formData.preferredArea}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hotelCategory">Hotel Category *</Label>
              <select
                id="hotelCategory"
                name="hotelCategory"
                value={formData.hotelCategory}
                onChange={handleChange}
                required
                className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Select category</option>
                <option value="3 Star">3 Star</option>
                <option value="4 Star">4 Star</option>
                <option value="5 Star">5 Star</option>
                <option value="Boutique">Boutique</option>
                <option value="Luxury Villa">Luxury Villa</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="mealPlan">Meal Plan *</Label>
              <select
                id="mealPlan"
                name="mealPlan"
                value={formData.mealPlan}
                onChange={handleChange}
                required
                className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Select meal plan</option>
                <option value="Bed & Breakfast">Bed & Breakfast</option>
                <option value="Half Board">Half Board</option>
                <option value="Full Board">Full Board</option>
                <option value="All Inclusive">All Inclusive</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budgetRange">Budget Range (Per Night) *</Label>
              <Input
                id="budgetRange"
                name="budgetRange"
                placeholder="Example: USD 120 - 200"
                value={formData.budgetRange}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Honeymoon setup, airport transfer, sea view room, accessibility needs..."
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-season hover:bg-blue-season/90 text-white">
            Send Hotel Booking Request on WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
