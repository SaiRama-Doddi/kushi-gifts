
import type React from "react"

import { useState } from "react"
import type { CartItem } from "../lib/store"
import { getCart } from "../lib/store"

interface CheckoutFormProps {
  cartItems: CartItem[]
  total: number
}

export function CheckoutForm({  total }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipcode: "",
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleOrderViaWhatsApp = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in all required fields")
      return
    }

    const cart = getCart()
    const itemsText = cart
      .map((item) => `${item.name} x ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString()}`)
      .join("\n")

    const message = `Hi, I would like to place an order.\n\n*Customer Details:*\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nCity: ${formData.city}\nZipcode: ${formData.zipcode}\n\n*Order Items:*\n${itemsText}\n\n*Total: ₹${total.toLocaleString()}*\n\nPlease confirm this order.`

    const whatsappUrl = `https://wa.me/+917702522332?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setOrderPlaced(true)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Billing Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold mb-2">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">
            Phone <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="New York"
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold mb-2">
            Address <span className="text-destructive">*</span>
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main Street"
            rows={3}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Zipcode</label>
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            placeholder="10001"
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      <button
        onClick={handleOrderViaWhatsApp}
        className="w-full bg-accent text-popover py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
      >
        Place Order via WhatsApp
      </button>

      {orderPlaced && (
        <div className="bg-green-100 border border-green-500 text-green-700 px-4 py-3 rounded-lg">
          Order sent to WhatsApp! Our team will confirm your order shortly.
        </div>
      )}
    </div>
  )
}
