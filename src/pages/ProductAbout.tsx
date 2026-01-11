"use client"

import type { Product } from "../lib/data"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface ProductAboutProps {
  product: Product
}

export function ProductAbout({ product }: ProductAboutProps) {
  const [expandedSection, setExpandedSection] = useState<string>("about")

  const sections = [
    {
      id: "about",
      title: "About This Product",
      content: product.details.aboutProduct || product.description,
    },
    {
      id: "details",
      title: "Product Details",
      content: `Material: ${product.details.material || "Not specified"}\nWeight: ${product.details.weight || "Not specified"}\nSize: ${product.details.size || "Not specified"}`,
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content:
        "Free shipping on orders above ₹500. Easy 30-day returns. All items are securely packaged and insured during transit.",
    },
    {
      id: "guarantee",
      title: "Quality Guarantee",
      content:
        "100% authentic products with quality certification. We ensure premium craftsmanship and attention to detail in every item.",
    },
  ]

  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <div key={section.id} className="border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === section.id ? "" : section.id)}
            className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors"
          >
            <h3 className="font-bold text-lg">{section.title}</h3>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${expandedSection === section.id ? "rotate-180" : ""}`}
            />
          </button>

          {expandedSection === section.id && (
            <div className="p-4 border-t border-border bg-muted/30 whitespace-pre-line text-foreground/90">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
