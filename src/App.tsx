import "./App.css"
import { Routes, Route } from "react-router-dom"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { HeroCarousel } from "./components/HeroCarousel"
import { FeaturedProducts } from "./pages/FeaturedProducts"
import { ShopByPurpose } from "./pages/ShopByPurpose"

import ProductPage from "./components/ProductPage"
import CategoryPage from "./components/CategoryPage"
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"
import CartPage from "./components/CartPage"
import ScrollToTop from "./pages/ScrollToTop"

function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <ScrollToTop/>
      <Header />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <HeroCarousel />
              <ShopByPurpose />
              <FeaturedProducts />
            </>
          }
        />

        {/* Product Details */}
        <Route path="/product/:id" element={<ProductPage  />} />

        {/* Category Page */}
        <Route path="/products/:category" element={<CategoryPage  />} />

        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>

      <Footer />
    </main>
  )
}

export default App
