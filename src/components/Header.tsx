
import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { products } from "../lib/data"
import { useNavigate } from "react-router-dom";

import { getCart, loadCart } from "../lib/store"


export function Header() {
    const [cartCount, setCartCount] = useState(0)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof products>([])
  const [showResults, setShowResults] = useState(false)

  const searcto = useRef<HTMLDivElement>(null)
  const router = useNavigate();



  useEffect(() => {
  // Load cart from localStorage on first render
  loadCart()

  const updateCartCount = () => {
    const cart = getCart()
    const count = cart.reduce((sum, item) => sum + item.quantity, 0)
    setCartCount(count)
  }

  updateCartCount()

  window.addEventListener("cartUpdated", updateCartCount)
  return () => window.removeEventListener("cartUpdated", updateCartCount)
}, [])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      setShowResults(false)
      return
    }

    const query = searchQuery.toLowerCase()
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query),
    )

    setSearchResults(results)
    setShowResults(true)
  }, [searchQuery])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searcto.current && !searcto.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowResults(false)
      setSearchQuery("")
    }
  }

  const handleResultClick = (productId: string) => {
    router(`/product/${productId}`)
    setSearchQuery("")
    setShowResults(false)
  }

  return (
    <div className="sticky top-0 z-40">
      {/* Top Header */}
      <div className="bg-primary text-primary-foreground py-2 px-4 md:px-8 flex justify-center text-sm">
        <p>Welcome to Luxury Divine Store - Premium Quality Products</p>
      </div>

      {/* Main Header */}
      <header className=" bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
   <Link to="/" className="flex items-center gap-2 flex-shrink-0">
  <img
    src="/kushi-logo.png"
    alt="Divine Store Logo"
    className="h-16 w-auto md:h-20 lg:h-24 object-contain"
  />
</Link>


            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="relative group">
                <button className="text-foreground hover:text-accent transition-colors font-medium flex items-center gap-1">
                  Gold Idols
                  <span className="text-xs">▼</span>
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/products/gold-idols" className="block px-4 py-2 hover:bg-muted first:rounded-t-lg">
                    Gold Idols
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <button className="text-foreground hover:text-accent transition-colors font-medium flex items-center gap-1">
                  Gifting
                  <span className="text-xs">▼</span>
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/products/gifting" className="block px-4 py-2 hover:bg-muted first:rounded-t-lg">
                    Gifting Collections
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <button className="text-foreground hover:text-accent transition-colors font-medium flex items-center gap-1">
                  Pooja Items
                  <span className="text-xs">▼</span>
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/products/pooja-items" className="block px-4 py-2 hover:bg-muted first:rounded-t-lg">
                    Pooja Items
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <button className="text-foreground hover:text-accent transition-colors font-medium flex items-center gap-1">
                  Home Decor
                  <span className="text-xs">▼</span>
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/products/home-decor" className="block px-4 py-2 hover:bg-muted first:rounded-t-lg">
                    Home Decor
                  </Link>
                </div>
              </div>

              <Link to="/about" className="text-foreground hover:text-accent transition-colors font-medium">
                About Us
              </Link>

              <Link to="/contact" className="text-foreground hover:text-accent transition-colors font-medium">
                Contact Us
              </Link>
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center gap-4">
              <form onSubmit={handleSearch} className="hidden md:block">
                <div ref={searcto} className="relative">
                  <div className="flex items-center bg-muted rounded-lg px-3 py-2 border border-border focus-within:border-accent transition-colors">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent outline-none text-sm flex-1"
                    />
                    <button type="submit" className="text-muted-foreground hover:text-accent transition-colors">
                      <Search className="w-4 h-4" />
                    </button>
                  </div>

                  {showResults && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                      {searchResults.slice(0, 8).map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleResultClick(product.id)}
                          className="w-full text-left px-4 py-3 hover:bg-warm-cream-bg transition-colors border-b border-border last:border-b-0 flex items-center gap-3"
                        >
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-xs text-muted-foreground">₹{product.price}</p>
                          </div>
                        </button>
                      ))}
                      {searchResults.length > 8 && (
                        <div className="px-4 py-3 text-center text-sm text-muted-foreground">
                          +{searchResults.length - 8} more results
                        </div>
                      )}
                    </div>
                  )}

                  {showResults && searchResults.length === 0 && searchQuery.trim() !== "" && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-4 text-center text-sm text-muted-foreground z-50">
                      No products found for "{searchQuery}"
                    </div>
                  )}
                </div>
              </form>

              <Link to="/cart" className="relative hover:text-accent transition-colors">
                <ShoppingCart className="w-6 h-6" />
               {cartCount > 0 && (
  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center text-xs font-bold">
    {cartCount}
  </span>
)}

              </Link>

              {/* Mobile Menu Toggle */}
              <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col gap-3">
                <Link to="/products/gold-idols" className="text-foreground hover:text-accent py-2">
                  Gold Idols
                </Link>
                <Link to="/products/gifting" className="text-foreground hover:text-accent py-2">
                  Gifting
                </Link>
                <Link to="/products/pooja-items" className="text-foreground hover:text-accent py-2">
                  Pooja Items
                </Link>
                <Link to="/products/home-decor" className="text-foreground hover:text-accent py-2">
                  Home Decor
                </Link>
                <Link to="/about" className="text-foreground hover:text-accent py-2">
                  About Us
                </Link>
                <Link to="/contact" className="text-foreground hover:text-accent py-2">
                  Contact Us
                </Link>
              </nav>
              <form onSubmit={handleSearch} className="mt-4">
                <div className="flex items-center bg-muted rounded-lg px-3 py-2 border border-border">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent outline-none text-sm flex-1"
                  />
                  <button type="submit" className="text-muted-foreground hover:text-accent transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}
