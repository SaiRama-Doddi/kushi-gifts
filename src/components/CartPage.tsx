"use client"

import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { CartItemComponent } from "../pages/CartIemComponent"
import { CheckoutForm } from "../pages/CheckOutForm"
import { getCart, loadCart } from "../lib/store"
import type { CartItem } from "../lib/store"
import { ShoppingBag } from "lucide-react"

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    loadCart()
    setCartItems(getCart())
    setIsLoaded(true)

    const handleCartUpdate = () => {
      setCartItems(getCart())
    }

    window.addEventListener("cartUpdated", handleCartUpdate)
    return () => window.removeEventListener("cartUpdated", handleCartUpdate)
  }, [])

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (!isLoaded) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">Loading...</div>
        <Footer />
      </main>
    )
  }

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto w-full px-4">
          <ShoppingBag className="w-24 h-24 text-muted-foreground mb-4" />
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8 text-center">
            Explore our collection and add some amazing products to your cart.
          </p>
          <Link to="/" className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-bold hover:opacity-90">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col">
 

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <CartItemComponent key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-card border border-border rounded-lg p-6 h-fit sticky top-20">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6 pb-6 border-b border-border">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="font-bold">₹{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold">₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-border">
                <span className="font-bold">Total</span>
                <span className="text-2xl font-bold gold-text">₹{total.toLocaleString()}</span>
              </div>
            </div>

            <Link to="/" className="block text-center text-accent hover:underline text-sm mb-4">
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="mt-12 pt-12 border-t border-border">
          <CheckoutForm cartItems={cartItems} total={total} />
        </div>
      </div>

  
    </main>
  )
}
