import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react"


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
                    {/* Logo */}
   <Link to="/" className="flex items-center gap-2 flex-shrink-0">
  <img
    src="/kushi-logo.png"
    alt="Divine Store Logo"
    className="h-16 w-auto md:h-20 lg:h-24 object-contain"
  />
</Link>
            <p className="text-sm opacity-90">
              Premium collection of gold idols, gifting items, and luxury home decor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-accent transition-colors block">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-accent transition-colors block">
                Contact Us
              </Link>
              <Link to="/cart" className="hover:text-accent transition-colors block">
                Cart
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@divinestore.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>New York, USA</span>
              </div>
            </div>
          </div>

         
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 Divine Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
