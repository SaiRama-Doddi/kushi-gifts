import { Header } from "./Header"
import { Footer } from "./Footer"
import { Award, Heart, Zap, Users } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We believe in offering only the finest products crafted with precision and care.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving our collection to bring you the latest and most sought-after items.",
    },
    {
      icon: Users,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We're here to help at every step of your journey.",
    },
    {
      icon: Award,
      title: "Authenticity",
      description: "100% genuine products with proper certifications and quality guarantees.",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
   
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-balance">About Divine Store</h1>
          <p className="text-xl opacity-90">
            Bringing timeless elegance and spiritual devotion to your home since 2020
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-16">
        {/* Story */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-foreground/90 mb-4">
                Divine Store was founded with a vision to bring premium quality religious idols, gifting items, and
                luxury home decor to every home. We understand the significance of these products in your spiritual and
                personal celebrations.
              </p>
              <p className="text-lg text-foreground/90 mb-4">
                Over the years, we have curated an exquisite collection of handcrafted items, each selected for its
                beauty, craftsmanship, and authenticity. Every product in our store tells a story of tradition and
                excellence.
              </p>
              <p className="text-lg text-foreground/90">
                Our commitment to quality and customer satisfaction has made us a trusted name in the industry.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg p-8 border border-accent/30">
              <h3 className="text-2xl font-bold mb-6 text-center gold-text">By The Numbers</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-4xl font-bold gold-text">50,000+</p>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold gold-text">1,000+</p>
                  <p className="text-muted-foreground">Premium Products</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold gold-text">6+</p>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 border-t border-border">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Team */}
        <section className="py-16 border-t border-border">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-3 gold-text">Premium Quality</h3>
              <p className="text-muted-foreground">
                Every product is carefully selected and verified for authenticity and quality before reaching your
                hands.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-3 gold-text">Competitive Pricing</h3>
              <p className="text-muted-foreground">
                We believe luxury should be accessible. Enjoy premium products at fair prices with no hidden costs.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-3 gold-text">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your orders quickly with our efficient shipping system. Free shipping on orders above ₹500.
              </p>
            </div>
          </div>
        </section>
      </div>


    </main>
  )
}
