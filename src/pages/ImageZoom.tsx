"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageZoomProps {
  images: string[]
  productName: string
}

export function ImageZoom({ images, productName }: ImageZoomProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setZoomLevel(2)
  }

  const handleMouseLeave = () => {
    setZoomLevel(1)
  }

  const selectedImage = images[selectedImageIndex] || "/placeholder.svg"

  return (
    <div className="space-y-4">
      {/* Main Image with Zoom */}
      <div
        ref={imageRef}
        className="relative w-full aspect-square bg-muted rounded-lg overflow-hidden border border-border cursor-zoom-in"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={selectedImage || "/placeholder.svg"}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-200"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
          }}
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImageIndex === index ? "border-accent" : "border-border"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`${productName} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Navigation Arrows for Images */}
      {images.length > 1 && (
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="flex-1 flex items-center justify-center gap-2 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <button
            onClick={() => setSelectedImageIndex((prev) => (prev + 1) % images.length)}
            className="flex-1 flex items-center justify-center gap-2 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
