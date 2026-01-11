"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "Timeless Gold Idols",
    subtitle: "Crafted with divine devotion",
    image: "https://cdnjs.angroos.com/wp-content/uploads/2023/05/Corporate-gifts2.jpg",
  },
  {
    id: 2,
    title: "Luxury Gifts",
    subtitle: "Perfect for every occasion",
    image: "https://i.pinimg.com/originals/a5/d0/83/a5d0831a0e66230155558acdb782dff3.jpg",
  },
  {
    id: 3,
    title: "Sacred Pooja Items",
    subtitle: "Enhance your spiritual space",
    image: "https://ds393qgzrxwzn.cloudfront.net/cat1/img/images/0/U2WhG9iq6a.jpg",
  },
  {
    id: 4,
    title: "Home Elegance",
    subtitle: "Transform your living space",
    image: "https://ds393qgzrxwzn.cloudfront.net/cat1/img/images/0/U2WhG9iq6a.jpg",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  return (
    <div className="relative w-full h-96 md:h-screen bg-muted overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{slide.title}</h2>
              <p className="text-lg md:text-2xl text-gray-200">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-accent w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
