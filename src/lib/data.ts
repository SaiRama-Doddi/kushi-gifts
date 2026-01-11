export interface Product {
  id: string
  name: string
  category: string
  price: number
  rating: number
  image: string
  images: string[]
  description: string
  details: {
    material?: string
    weight?: string
    size?: string
    aboutProduct?: string
  }
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
}

export const categories: Category[] = [
  { id: "1", name: "Gold Idols", slug: "gold-idols", image: "https://images-na.ssl-images-amazon.com/images/I/61jqdeqUPAL._SL1440_.jpg" },
  { id: "2", name: "Gifting", slug: "gifting", image: "https://images.herzindagi.info/image/2023/Dec/christmas-gifting.jpg" },
  { id: "3", name: "Pooja Items", slug: "pooja-items", image: "https://ds393qgzrxwzn.cloudfront.net/cat1/img/images/0/vMEvGGbMtx.jpg" },
  { id: "4", name: "Home Decor", slug: "home-decor", image: "https://images.herzindagi.info/image/2023/Dec/christmas-gifting.jpg" },
    { id: "5", name: "Festival Decor", slug: "festivals-decor", image: "http://eatanytime.in/cdn/shop/articles/Diwali_Gift_Ideas_-_Eat_Anytime-693861.jpg?v=1704714056" },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Golden Ganesh Idol",
    category: "gold-idols",
    price: 2499,
    rating: 4.8,
    image: "https://cdn.moolwan.com/290301-Best-Online-Dancing-Golden-Ganesh-Idol-for-Diwali.jpg",
    images: ["https://cdn.moolwan.com/290391-Best-Gift-for-Diwali-Shopping-Dancing-Golden-Ganesh-Idol.jpg", "https://cdn.moolwan.com/290393-Best-Golden-Ganesh-Idol-Playing-Bansuri-for-Diwali-Gift-Online.jpg", "https://cdn.moolwan.com/290168-Top-Golden-Ganesh-Idol-Playing-Bansuri-for-Vinayagar-Chaturthi-in-India.jpg"],
    description: "Exquisite golden Ganesh idol for spiritual devotion",
    details: {
      material: "24K Gold Plated Brass",
      weight: "500g",
      size: "4 inches height",
      aboutProduct:
        "This magnificent Ganesh idol is crafted with premium 24K gold plating on high-quality brass. Perfect for prayer rooms and spiritual spaces.",
    },
  },
  {
    id: "2",
    name: "Luxury Gift Hamper",
    category: "gifting",
    price: 1999,
    rating: 4.6,
    image: "https://alexandriagiftbaskets.ca/cdn/shop/products/L3A4592-2.jpg?v=1669319018",
    images: ["https://hips.hearstapps.com/hmg-prod/images/untitled-design-copy-2-65793dc773c12.png?crop=1xw:1xh;center,top&resize=980:*", "https://hips.hearstapps.com/hmg-prod/images/la-madelaine-1-657898614c980.jpeg?crop=0.9970357454228422xw:1xh;center,top&resize=980:*", "https://hips.hearstapps.com/hmg-prod/images/la-madelaine-1-657898614c980.jpeg?crop=0.9970357454228422xw:1xh;center,top&resize=980:*"],
    description: "Premium curated gift collection for special occasions",
    details: {
      material: "Silk & Wood",
      weight: "800g",
      size: "Standard",
      aboutProduct: "Beautifully curated luxury gift hamper containing premium items perfect for all occasions.",
    },
  },
  {
    id: "3",
    name: "Brass Diya Set",
    category: "pooja-items",
    price: 899,
    rating: 4.7,
    image: "/kushi1-1.png",
    images: ["/kushi2-1.png", "/kushi3-1.png", "/kushi4-1.png"],
    description: "Traditional brass diya lamps for Diwali and prayers",
    details: {
      material: "Pure Brass",
      weight: "300g",
      size: "2.5 inches",
      aboutProduct: "Set of 5 traditional brass diyas, perfect for celebrations and daily prayers.",
    },
  },
  {
    id: "4",
    name: "Crystal Wall Sconce",
    category: "home-decor",
    price: 3299,
    rating: 4.9,
    image: "/kushi1-1.png",
    images: ["/kushi2-1.png", "/kushi3-1.png", "/kushi4-1.png"],
    description: "Elegant crystal wall sconce for premium interiors",
    details: {
      material: "Crystal & Brass",
      weight: "400g",
      size: "12 inches",
      aboutProduct: "Premium crystal wall sconce with brass accents, perfect for modern luxury interiors.",
    },
  },
  {
    id: "5",
    name: "Lakshmi Idol Statue",
    category: "gold-idols",
    price: 3999,
    rating: 4.8,
   image: "/kushi1-1.png",
    images: ["/kushi2-1.png", "/kushi3-1.png", "/kushi4-1.png"],
    description: "Divine Lakshmi idol for prosperity and blessings",
    details: {
      material: "24K Gold Plated Brass",
      weight: "750g",
      size: "6 inches",
      aboutProduct: "Beautifully designed Lakshmi idol symbolizing wealth and prosperity.",
    },
  },
  {
    id: "6",
    name: "Sandalwood Gift Set",
    category: "gifting",
    price: 1499,
    rating: 4.5,
   image: "/kushi1-1.png",
    images: ["/kushi2-1.png", "/kushi3-1.png", "/kushi4-1.png"],
    description: "Premium sandalwood incense collection",
    details: {
      material: "Sandalwood",
      weight: "200g",
      size: "Gift Box",
      aboutProduct: "Collection of premium sandalwood incense sticks in elegant packaging.",
    },
  },
]
