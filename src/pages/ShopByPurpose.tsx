import { Link } from "react-router-dom"
import { categories } from "../lib/data"
import { Eye } from "lucide-react"

export function ShopByPurpose() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Shop by Purpose
        </h2>
        <div className="h-1 w-20 bg-accent mx-auto"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products/${category.slug}`}
            className="group"
          >
            {/* Card */}
            <div className="relative w-[220px] h-[260px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              
              {/* Image */}
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/55 transition-colors"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  {category.name}
                </h3>

                <span className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  <Eye className="w-4 h-4" />
                  Explore
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
