"use client"

import { useState } from "react"
import { Heart, Share2, Star } from "lucide-react"
import type { Product } from "../lib/data"
import { addToCart } from "../lib/store"

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const [liked, setLiked] = useState(false)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} on Divine Store!`,
        url: window.location.href,
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Product Title and Rating */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">{product.category.toUpperCase()}</p>
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "fill-muted text-muted"}`}
              />
            ))}
          </div>
          <span className="text-lg font-bold">{product.rating}</span>
          <span className="text-muted-foreground">(128 reviews)</span>
        </div>
      </div>

      {/* Price */}
      <div className="border-t border-b border-border py-4">
        <p className="text-5xl font-bold gold-text">₹{product.price.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground mt-2">Inclusive of all taxes</p>
      </div>

      {/* Description */}
      <p className="text-lg text-foreground/90">{product.description}</p>

      {/* Quantity Selector */}
      <div className="space-y-2">
        <label className="block text-sm font-bold">Quantity</label>
        <div className="flex items-center gap-3 border border-border rounded-lg w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 text-lg hover:bg-muted transition-colors"
          >
            −
          </button>
          <span className="px-4 py-2 text-lg font-bold">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 text-lg hover:bg-muted transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleAddToCart}
          className={`w-full py-3 rounded-lg font-bold text-lg transition-all ${
            addedToCart ? "bg-green-500 text-white" : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >
          {addedToCart ? "✓ Added to Cart" : `Add to Cart (₹${(product.price * quantity).toLocaleString()})`}
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setLiked(!liked)}
            className={`py-3 rounded-lg font-bold transition-all border ${
              liked ? "bg-accent text-accent-foreground border-accent" : "border-border hover:bg-muted"
            }`}
          >
            <Heart className={`w-5 h-5 mx-auto ${liked ? "fill-current" : ""}`} />
          </button>

          <button onClick={handleShare} className="py-3 rounded-lg font-bold border border-border hover:bg-muted">
            <Share2 className="w-5 h-5 mx-auto" />
          </button>
        </div>
      </div>

      {/* Product Details Highlights */}
      <div className="bg-muted p-6 rounded-lg space-y-3">
        <h3 className="font-bold text-lg">Key Features</h3>
        <div className="space-y-2 text-sm">
          {product.details.material && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Material</span>
              <span className="font-medium">{product.details.material}</span>
            </div>
          )}
          {product.details.weight && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Weight</span>
              <span className="font-medium">{product.details.weight}</span>
            </div>
          )}
          {product.details.size && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Size</span>
              <span className="font-medium">{product.details.size}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
