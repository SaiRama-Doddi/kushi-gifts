import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProductGrid } from "../pages/ProductGrid"
import { ProductFilters } from "../pages/ProductFilters"
import { products } from "../lib/data"
import type { Product } from "../lib/data"
import { SlidersHorizontal } from "lucide-react"

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>()

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const [filters, setFilters] = useState<{
    priceRange?: [number, number]
    material?: string
  }>({})

  useEffect(() => {
    if (!category) return

    let result: Product[] = products.filter(
      (product) => product.category === category
    )

    // ✅ Safe price range filtering
    if (filters.priceRange) {
      const [min, max] = filters.priceRange
      result = result.filter(
        (product) => product.price >= min && product.price <= max
      )
    }

    // ✅ Safe material filtering
    if (filters.material) {
      result = result.filter((product) =>
        product.details.material?.includes(filters.material!)
      )
    }

    setFilteredProducts(result)
  }, [category, filters])

  const categoryName = category
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <main className="min-h-screen flex flex-col">
   
      {/* Category Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            {categoryName}
          </h1>
          <p className="mt-2 text-lg opacity-90">
            {filteredProducts.length} products available
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Filters */}
          <aside className="hidden lg:block">
            <ProductFilters
              onFilterChange={setFilters}
              selectedCategory={category}
            />
          </aside>

          {/* Mobile Filters */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg font-bold w-full justify-center"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {mobileFiltersOpen && (
              <div className="mt-4 bg-card p-4 rounded-lg border border-border">
                <ProductFilters
                  onFilterChange={setFilters}
                  selectedCategory={category}
                />
              </div>
            )}
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <ProductGrid filteredProducts={filteredProducts} />
          </div>
        </div>
      </section>

    </main>
  )
}
