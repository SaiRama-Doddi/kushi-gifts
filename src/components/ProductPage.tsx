


import { Footer } from "./Footer"
import { ImageZoom } from "../pages/ImageZoom"
import { ProductDetails } from "../pages/ProductDetails"
import { ProductAbout } from "../pages/ProductAbout"
import { products } from "../lib/data"
import { Link, useParams } from "react-router-dom"

import { ChevronRight } from "lucide-react"



export default function ProductPage() {

  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col">
    
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/" className="text-accent hover:underline">
            Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col">
     

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-accent transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link to={`/products/${product.category}`} className="hover:text-accent transition-colors capitalize">
          {product.category.replace("-", " ")}
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-foreground font-medium">{product.name}</span>
      </div>

      {/* Product Section */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Left: Images */}
          <div>
            <ImageZoom images={product.images} productName={product.name} />
          </div>

          {/* Right: Details */}
          <div>
            <ProductDetails product={product} />
          </div>
        </div>

        {/* About Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold mb-8">Product Information</h2>
          <ProductAbout product={product} />
        </div>

        {/* Related Products */}
        <div className="mt-16 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold mb-8">Explore More</h2>
          <Link
            to={`/products/${product.category}`}
            className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-bold hover:opacity-90 transition-opacity"
          >
            View All Products in {product.category.replace("-", " ")}
          </Link>
        </div>
      </div>

  
    </main>
  )
}
