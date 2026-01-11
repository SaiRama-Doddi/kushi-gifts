import type { Product } from "./data"

export interface CartItem extends Product {
  quantity: number
}

let cart: CartItem[] = []

export function addToCart(product: Product) {
  const existingItem = cart.find((item) => item.id === product.id)
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }
  updateCart()
}

export function removeFromCart(productId: string) {
  cart = cart.filter((item) => item.id !== productId)
  updateCart()
}

export function updateCartQuantity(productId: string, quantity: number) {
  const item = cart.find((item) => item.id === productId)
  if (item) {
    item.quantity = Math.max(1, quantity)
  }
  updateCart()
}

export function getCart() {
  return [...cart]
}

function updateCart() {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart))
    window.dispatchEvent(new Event("cartUpdated"))
  }
}

export function loadCart() {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("cart")
    if (stored) {
      cart = JSON.parse(stored)
    }
  }
}
