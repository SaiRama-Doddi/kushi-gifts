

import { useSearchParams } from "react-router-dom";

import {Link} from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { products } from "../lib/data"
import { ShoppingCart, Eye } from "lucide-react"
import { addToCart } from "../lib/store"
import { useState } from "react"

export function SearchResults() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") || ""
  const [addedToCart, setAddedToCart] = useState<string | null>(null)

  const searchQuery = query.toLowerCase()
  const searchResults = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery),
  )

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart(product)
    setAddedToCart(product.id)
    setTimeout(() => setAddedToCart(null), 2000)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Search Results</h1>
          <p className="text-muted-foreground">
            Found {searchResults.length} product{searchResults.length !== 1 ? "s" : ""} for "
            <span className="font-semibold text-foreground">{query}</span>"
          </p>
        </div>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg group"
              >
                <div className="relative overflow-hidden bg-muted aspect-square">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-accent text-accent-foreground p-3 rounded-full hover:bg-accent/90 transition-colors"
                      title="Add to Cart"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-deep-red-bg text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                      title="View Details"
                    >
                      <Eye className="w-5 h-5" />
                    </Link>
                  </div>

                  {addedToCart === product.id && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Added!
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <Link to={`/product/${product.id}`} className="block group/link">
                    <h3 className="font-semibold text-foreground group-hover/link:text-accent transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-sm text-muted-foreground my-2 line-clamp-1">{product.description}</p>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-bold text-accent">₹{product.price}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-6">No products found matching "{query}"</p>
            <Link
              to="/products/gold-idols"
              className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
