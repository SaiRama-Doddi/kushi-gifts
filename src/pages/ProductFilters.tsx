"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface ProductFiltersProps {
  onFilterChange: (filters: { category?: string; priceRange?: [number, number]; material?: string }) => void
  selectedCategory?: string
}

const materials = ["24K Gold Plated", "Brass", "Crystal", "Silk & Wood", "Sandalwood", "Pure Brass"]
const priceRanges = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹1000", min: 500, max: 1000 },
  { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
  { label: "₹2000 - ₹4000", min: 2000, max: 4000 },
  { label: "Above ₹4000", min: 4000, max: 10000 },
]

export function ProductFilters({ onFilterChange, selectedCategory }: ProductFiltersProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>("price")
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null)
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null)

  const handlePriceChange = (range: { min: number; max: number }) => {
    setSelectedPrice(`${range.min}-${range.max}`)
    onFilterChange({
      category: selectedCategory,
      priceRange: [range.min, range.max],
      material: selectedMaterial || undefined,
    })
  }

  const handleMaterialChange = (material: string) => {
    const newMaterial = selectedMaterial === material ? null : material
    setSelectedMaterial(newMaterial)
    onFilterChange({
      category: selectedCategory,
      priceRange: selectedPrice
        ? [Number.parseInt(selectedPrice.split("-")[0]), Number.parseInt(selectedPrice.split("-")[1])]
        : undefined,
      material: newMaterial || undefined,
    })
  }

  return (
    <div className="space-y-6">
      {/* Price Filter */}
      <div className="border border-border rounded-lg p-4">
        <button
          onClick={() => setExpandedSection(expandedSection === "price" ? null : "price")}
          className="w-full flex items-center justify-between font-bold text-lg"
        >
          Price Range
          <ChevronDown className={`w-5 h-5 transition-transform ${expandedSection === "price" ? "rotate-180" : ""}`} />
        </button>
        {expandedSection === "price" && (
          <div className="mt-4 space-y-3">
            {priceRanges.map((range) => (
              <label key={`${range.min}-${range.max}`} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  checked={selectedPrice === `${range.min}-${range.max}`}
                  onChange={() => handlePriceChange(range)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Material Filter */}
      <div className="border border-border rounded-lg p-4">
        <button
          onClick={() => setExpandedSection(expandedSection === "material" ? null : "material")}
          className="w-full flex items-center justify-between font-bold text-lg"
        >
          Material
          <ChevronDown
            className={`w-5 h-5 transition-transform ${expandedSection === "material" ? "rotate-180" : ""}`}
          />
        </button>
        {expandedSection === "material" && (
          <div className="mt-4 space-y-3">
            {materials.map((material) => (
              <label key={material} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedMaterial === material}
                  onChange={() => handleMaterialChange(material)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{material}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Clear Filters */}
      {(selectedPrice || selectedMaterial) && (
        <button
          onClick={() => {
            setSelectedPrice(null)
            setSelectedMaterial(null)
            onFilterChange({ category: selectedCategory })
          }}
          className="w-full py-2 border border-border rounded-lg text-sm font-bold hover:bg-muted transition-colors"
        >
          Clear Filters
        </button>
      )}
    </div>
  )
}
