"use client"

import { Link } from "react-router-dom"
import type { Product } from "../lib/data"
import { Eye, ShoppingCart, Star } from "lucide-react"
import { useState } from "react"
import { addToCart } from "../lib/store"

interface ProductGridProps {
  filteredProducts: Product[]
}

export function ProductGrid({ filteredProducts }: ProductGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [addedToCart, setAddedToCart] = useState<string | null>(null)

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    setAddedToCart(product.id)
    setTimeout(() => setAddedToCart(null), 2000)
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-12">
        <p className="text-xl text-muted-foreground mb-4">No products found</p>
        <Link to="/products/gold-idols" className="text-accent hover:underline">
          View all products
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Product Image */}
          <div className="relative overflow-hidden aspect-square bg-muted">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Hover Actions */}
            {hoveredId === product.id && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4">
                <Link
                  to={`/product/${product.id}`}
                  className="bg-accent text-accent-foreground p-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  <Eye className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`p-3 rounded-full transition-all ${
                    addedToCart === product.id
                      ? "bg-green-500 text-white"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-4">
            <p className="text-sm text-muted-foreground mb-1">{product.category.toUpperCase()}</p>
            <Link to={`/product/${product.id}`} className="hover:text-accent transition-colors">
              <h3 className="font-bold text-lg mb-2 text-balance">{product.name}</h3>
            </Link>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <p className="text-lg font-bold gold-text">₹{product.price.toLocaleString()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
