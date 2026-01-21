export interface Product {
  id: string
  name: string
  category: string       // category slug
  childCategory: string  // child slug (MANDATORY)
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

export interface ChildCategory {
  id: string
  name: string
  slug: string
}

export interface Category {
  id: string
  name: string
  slug: string
  children: ChildCategory[]
}
export const personalisedGiftsCategory: Category = {
  id: "5",
  name: "Personalised Gifts",
  slug: "personalised-gifts",
  children: [
    { id: "5-1", name: "Mugs", slug: "mugs" },
    { id: "5-2", name: "Waterbottles & Sippers", slug: "waterbottles-sippers" },
    { id: "5-3", name: "Photoframes", slug: "photoframes" },
    { id: "5-4", name: "Clocks", slug: "clocks" },
    { id: "5-5", name: "LED Photoframes", slug: "led-photoframes" },
    { id: "5-6", name: "LED Rotating Photoframes", slug: "led-rotating-photoframes" },
    { id: "5-7", name: "Key Chains ( Metal / Polymer )", slug: "key-chains" },
    { id: "5-8", name: "Cushions", slug: "cushions" },
    { id: "5-9", name: "Sash Roll", slug: "sash-roll" },
    { id: "5-10", name: "Mouse Pad", slug: "mouse-pad" },
  ],
}
export const wearablesCategory: Category = {
  id: "6",
  name: "Wearables",
  slug: "wearables",
  children: [
    { id: "6-1", name: "T-Shirts", slug: "t-shirts" },
    { id: "6-2", name: "Oversized T Shirts", slug: "oversized-t-shirts" },
    { id: "6-3", name: "Hoodies", slug: "hoodies" },
    { id: "6-4", name: "SweatShirts", slug: "sweatshirts" },
    { id: "6-5", name: "Collar Zipper", slug: "collar-zipper" },
    { id: "6-6", name: "Track Suits", slug: "track-suits" },
    { id: "6-7", name: "Caps", slug: "caps" },
  ],
}
export const magnetsCategory: Category = {
  id: "7",
  name: "Magnets",
  slug: "magnets",
  children: [
    { id: "7-1", name: "Personalized", slug: "personalized-magnets" },
    { id: "7-2", name: "Funky", slug: "funky-magnets" },
  ],
}
export const categories: Category[] = [
  personalisedGiftsCategory,
  wearablesCategory,
  magnetsCategory,
]


export const products: Product[] = [
  {
  id: "101",
  name: "Pi Pi Ka Hisaab Lunga",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 199,
  rating: 4.6,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959161/ka_hisaab_lunga_1_zq3xsw.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959161/ka_hisaab_lunga_1_zq3xsw.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959088/ka_hisaab_lunga_2_xmljhg.jpg",
  ],
  description: "Pi Pi Ka Hisaab Lunga Wooden Fridge Magnet with Funny Caricature Design,Door Decoration, Wardrop Magnets with Eligant Design.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "This fridge magnet features a playful design with the phrase 'Pi Pi Ka Hisaab Lunga' printed in a vibrant colour scheme.",
  },
}, {
  id: "102",
  name: "Aap Baad me Khud Jaoge",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 199,
  rating: 4.7,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959159/Aap_baad_me_khud_jaoge_1_xcplzx.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959159/Aap_baad_me_khud_jaoge_1_xcplzx.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959088/ka_hisaab_lunga_2_xmljhg.jpg",
  ],
  description: "Aap bhaad Mein khud jaoge ya Drop karke aaye HD Quality Stylish Fridge Magnet for Kitchen Deocorative Refrigerator Magnet.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "These Magnets will look very attractive on any metal surface like Fridge, Washing machine, Metal Cupboard,etc.",
  },
},{
  id: "103",
  name: "Always Late but worth the wait",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 249,
  rating: 4.9,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959175/Always_late_but_worth_the_wait_1_ljeoi9.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959175/Always_late_but_worth_the_wait_1_ljeoi9.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959096/Always_late_but_worth_the_wait_2_nruqki.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959173/Hotter_than_the_summer__1_lon4r6.jpg",
  ],
  description: "Fridge Magnet  Always Late But Worth The Wait good Finish Pack of 1.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "A great gift for your friends and relatives .The Magnets are Laser Cut as per Shape/design of the Magnet with smooth edges which provides it with Beautiful and Eye-Catching look.",
  },
},{
  id: "104",
  name: "Apne hati toh sab ki phati",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 299,
  rating: 4.3,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959162/Apnj_hati_toh_sab_ki_phati_1_aotjye.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959162/Apnj_hati_toh_sab_ki_phati_1_aotjye.jpg",
  ],
  description: "Funny Quote,Gift and Decoration fridge Magnet.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "The Fridge Magnets are perfect for display on Fridge , Almirah, shelf, microwave oven, washing machine, storage cabinet, office cabinet , desk at home and office. It is also a wonderful gift for your family, friends and your loved one.",
  },
},{
  id: "105",
  name: "Arre o samba",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 129,
  rating: 5,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959165/Arre_o_sambha_1_uwwvfh.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959165/Arre_o_sambha_1_uwwvfh.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959095/Arre_o_sambha_3_sppub6.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959096/Arre_o_sambha_2_rrmdif.jpg",
  ],
  description: "Gabbar- Arrey O Sambha Fridge Magnet- Pack of 1 Bollywood Theme Fridge Magnets.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Gabbar- Arrey O Sambha Fridge Magnet- Pack of 1 Bollywood Theme Fridge Magnets.A great gift for all generations.",
  },
},{
  id: "106",
  name: "Aukat mein reh kar baat kar",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 299,
  rating: 4.8,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959088/Aukat_Mein_reh_Kar_baat_kar_1_tyhpqh.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959088/Aukat_Mein_reh_Kar_baat_kar_1_tyhpqh.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959095/Aukat_Mein_reh_Kar_baat_kar__2_n15xtk.jpg",
  ],
  description: "Apni Hati Toh Sabki Phati - Fridge Magnets for Bollywood Lovers.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "These Fridge magnets are designed for current generation who Love Bollywood from heart.",
  },
},{
  id: "107",
  name: "Bache ki jaan loge kya",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 299,
  rating: 5,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959152/Bache_ki_jaan_loge_kya_1_zfrptq.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959152/Bache_ki_jaan_loge_kya_1_zfrptq.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959105/Bache_ki_jaan_loge_kya__2_gkgora.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959104/Bache_ki_jaan_loge_kya__3_pg59ck.jpg",
  ],
  description: "Bache ki Jaan Loge Kya Fridge Magnet for Kitchen Deocorative Refrigerator Magnet.",
  details: {
    material: "Magnetic",
    size: "Square Shape",
    aboutProduct:
      "High Definition Digital Print. Glossy Bright Colours, Ultra Sharp finish and Super sticky Magnets, Wipe clean with dry or wet cloth. These Magnets will look very attractive on any metal surface like Fridge, Washing machine, Metal Cupboard,etc. The Magnet on the back of the product is smooth and does not lead to any scratches of the Surface.",
  },
},{
  id: "108",
  name: "Bade harami ho beta",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 159,
  rating: 4.2,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959158/Bade_harami_ho_beta_1_fsa2xv.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959158/Bade_harami_ho_beta_1_fsa2xv.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959090/Bade_harami_ho_beta_2_fnwxoz.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959090/Bade_harami_ho_beta_3_gmkehg.jpg",
  ],
  description: "Bade Harami ho Beta Stylish Fridge Magnet for Kitchen Deocorative Refrigerator Magnet.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Multi-purpose magnets Funny, Quirky, Quotes, Fruits and vegetables on fridge / metal cupboards for your home, kitchen or office. These Magnets will look very attractive on any metal surface like Fridge, Washing machine, Metal Cupboard,etc. The Magnet on the back of the product is smooth and does not lead to any scratches of the Surface.",
  },
},{
  id: "109",
  name: "Baiya aur Spicy Banao",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 149,
  rating: 4.2,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959157/Baiya_aur_spicy_banao_1_zwwzci.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959157/Baiya_aur_spicy_banao_1_zwwzci.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959087/Baiya_aur_spicy_banao_2_jbbpwa.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959083/Baiya_aur_spicy_banao_3_jes46a.jpg",
  ],
  description: "Baiya aur Spicy Banao Stylish Fridge Magnet for Kitchen Deocorative Refrigerator Magnet.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Multi-purpose magnets Funny, Quirky, Quotes, Fruits and vegetables on fridge / metal cupboards for your home, kitchen or office. These Magnets will look very attractive on any metal surface like Fridge, Washing machine, Metal Cupboard,etc. The Magnet on the back of the product is smooth and does not lead to any scratches of the Surface.",
  },
},
{
  id: "110",
  name: "Be afraid and do it anyway",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 149,
  rating: 4.2,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959174/Be_afraid_and_do_it_anyway_1_if8kri.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959174/Be_afraid_and_do_it_anyway_1_if8kri.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959095/Be_afraid_and_do_it_anyway__2_drzpqt.jpg",

  ],
  description: "Fridge Magnet Quotes Be afraid and Do It anyway Glossy Finish Design Pack of 1.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "These Magnets will look very attractive on any metal surface like Fridge, Washing machine, Metal Cupboard,etc. The Magnet on the back of the product is smooth and does not lead to any scratches of the Surface.",
  },
},{
  id: "111",
  name: "Beta tumse na ho payega",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 159,
  rating: 4.6,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959133/Beta_tumse_na_ho_payega_1_ayy4nn.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959133/Beta_tumse_na_ho_payega_1_ayy4nn.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959140/Beta_tumse_na_ho_payega_2_ryqazp.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959136/Beta_tumse_na_ho_payega_3_j3yfry.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959127/Beta_tumse_na_ho_payega_4_uxir5d.jpg",

  ],
  description: "Fridge Magnet Funny Quote Perfect for Decoration & Gifting (tumse-na-ho-payega).",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "It can also be a unique gift for friends, family, or colleagues who appreciate humor and enjoy quirky items. This magnet is the perfect choice for adding a touch of humor to your refrigerator while also serving as a delightful gift for your loved ones.",
  },
},{
  id: "112",
  name: "Bhabhi hogi Teri aur shadi hogi meri",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 299,
  rating: 5,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959095/Bhabhi_hogi_Teri_aur_shadi_hogi_meri_2_f4670o.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959095/Bhabhi_hogi_Teri_aur_shadi_hogi_meri_2_f4670o.jpg",

  ],
  description: "Funny Quote,Gift and Decoration fridge Magnet.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "These Magnets will look very attractive on any metal surface like Fridge, Washing machine, Metal Cupboard,etc. The Magnet on the back of the product is smooth and does not lead to any scratches of the Surface.",
  },
},{
  id: "113",
  name: "Bhehja mat kha",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 159,
  rating: 4,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959081/Bheja_mat_kha_1_fqke8t.png",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959081/Bheja_mat_kha_1_fqke8t.png",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959081/Bheja_mat_kha_2_t1naf6.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959081/Bheja_mat_kha_3_da3wcd.jpg",

  ],
  description: "Gift Me Bazar Bheja Mat KHA Funny Fridge Magnet | Home & Kitchen Decoration | Refrigerator Stylish Decor Magnets.",
  details: {
    material: "Magnetic",
    size: "Square Shape",
    aboutProduct:
      "Features the playful phrase 'Bheja Mat Kha', guaranteed to bring a smile and laughter. Made from durable materials for lasting use and vibrant aesthetics.",
  },
},{
  id: "114",
  name: "Burger",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 199,
  rating: 4.3,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959168/Burger_1_lvilvd.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959168/Burger_1_lvilvd.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959128/Burger_2_aygw2x.jpg",

  ],
  description: "Burger Fridge Magnet (Pack of 1 pc)  | Food, Vegetable, Desserts, Kitchen and Drink Magnet Gift and Decor.",
  details: {
    material: "Magnetic",
    size: "Square Shape",
    aboutProduct:
      "Eco-Friendly Material.The Fridge Magnets are perfect for display on Fridge , Almirah, shelf, microwave oven, washing machine, storage cabinet, office cabinet , desk at home and office. It is also a wonderful gift for your family, friends and your loved one.",
  },
},{
  id: "115",
  name: "Captain America V1",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 159,
  rating: 5,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959121/Captain_America_v1_1_goau9s.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959121/Captain_America_v1_1_goau9s.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959121/Captain_America_v1_2_fkkwgh.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959121/Captain_America_v1_3_tcl1gw.jpg",

  ],
  description: "CaptainAmerica268 Fridge Magnet The Avengers Magnet for Marvel Lover.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "The magnet is made from durable materials, ensuring its long-lasting quality.Magnets for fridge doesn't create damages or scratches on the fridge door. Stick it on your fridge to liven up your kitchen and add some personality to your decor.",
  },
},{
  id: "116",
  name: "Captain America V2",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 159,
  rating: 4.8,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959121/Captain_America_v2_1_nxzmjr.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959121/Captain_America_v2_1_nxzmjr.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959118/Captain_America_v2_2_oaw6v5.jpg",

  ],
  description: "CaptainAmerica268 Fridge Magnet The Avengers Magnet for Marvel Lover.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "The magnet is made from durable materials, ensuring its long-lasting quality.Magnets for fridge doesn't create damages or scratches on the fridge door. Stick it on your fridge to liven up your kitchen and add some personality to your decor.",
  },
},{
  id: "117",
  name: "Christmas Tree_1",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 159,
  rating: 4.5,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959141/Christmas_tree_2_zptflb.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959141/Christmas_tree_2_zptflb.jpg",
  
  ],
  description: "Christmas Tree Fridge Magnet (Pack of 1) | Festive Wooden Magnet for Fridge, Office, Hampers & Secret Santa Gifting | Premium Christmas Gift & Holiday Decoration.",
  details: {
    material: "Magnetic",
    size: "3 inch",
    aboutProduct:
      "Each Laser Cut Fridge Magnet is contoured perfectly to the design's shape, featuring polished, smooth edges for a visually stunning and eye-catching holiday décor look.",
  },
},{
  id: "118",
  name: "Ek hi tho dil hai",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 159,
  rating: 4.6,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959158/Ek_hi_tho_dil_hai_1_lybt0l.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959158/Ek_hi_tho_dil_hai_1_lybt0l.jpg",
  
  ],
  description: "Beautiful Fridge Magnet for Kitchen Decor | Fridge Magnet| Gifts Items| Printed Wooden Fridge Magnets (Ek Hi Tho Dil Hai).",
  details: {
    material: "Magnetic",
    size: "3 inch",
    aboutProduct:
      "High-Quality Material: Made from durable materials, ensuring long-lasting use. Unique Design: Features the playful quote 'Ek Hi Tho Dil Hai' adding personality and humor to your space.",
  },
},{
  id: "119",
  name: "Follow your Heart",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 139,
  rating: 4.6,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959171/Follow_your_heart_1_opeekk.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959171/Follow_your_heart_1_opeekk.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959088/Follow_your_heart_2_ohjlyb.jpg",
  
  ],
  description: "Follow Your Heart – Go with Heart Fridge Magnet.",
  details: {
    material: "Magnetic",
    size: "3 inch",
    aboutProduct:
      "Clear Print using Gel based Ink. Do not fade away. Glossy Finish and Vibrant Look. Stick it on your fridge to liven up your kitchen and add some personality to your decor.",
  },
},{
  id: "120",
  name: "French Fries",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 259,
  rating: 4.8,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959127/French_fries_2_onh54a.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959127/French_fries_2_onh54a.jpg",

  
  ],
  description: "French Fries HD Quality Fridge Magnet for Home, Kitchen and Office Decoration.",
  details: {
    material: "Magnetic",
    size: "3 inch",
    aboutProduct:
      "Multi-purpose magnets Funny, Quirky, Quotes, Fruits and vegetables on fridge / metal cupboards for your home, kitchen or office. These Magnets will look very attractive on any metal surface like Fridge, Washing machine, Metal Cupboard,etc.",
  },
},{
  id: "121",
  name: "Ginger Bread",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 149,
  rating: 4.6,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959141/Ginger_bread__1_sr3m4k.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959141/Ginger_bread__1_sr3m4k.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959097/Ginger_bread_2_vzgjxk.jpg",

  
  ],
  description: "Christmas Gifts, Cute Gingerbread Fridge Magnets.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "A nice gift choice for Kids, Family,Girlfriend, Boyfriend,Friends,Office Colleagues on occasion of Christmas, Christmas Gift , Secret Santa gift etc.",
  },
},{
  id: "122",
  name: "Good Vibes",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 159,
  rating: 4.2,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959169/Good_vibes_1_dsu17v.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959169/Good_vibes_1_dsu17v.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959105/Good_vibes_2_wyqelt.jpg",

  
  ],
  description: "Collectible Good Vibes Only Fridge Magnet,Perfect for Gifting and Decoration.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "A great gift for your friends and relatives with positive vibes :)",
  },
},{
  id: "123",
  name: "Harry potter V1",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 229,
  rating: 4.5,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959133/Harry_Potter_v1_2_h6sk5z.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959133/Harry_Potter_v1_2_h6sk5z.jpg",

  ],
  description: "Harry-Potters Theme Fridge Magnet for Kids Kitchen Home Refrigerator Gift Decor Multicolored Fridge Magnets.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Perfect for use on refrigerators, lockers, or other metal surfaces. Measuring approximately 2-3 inches , this magnet is compact yet eye-catching, making them ideal for small spaces. Makes a thoughtful and practical gift for Kids, friends, family, or coworkers.",
  },
},{
  id: "124",
  name: "Harry potter V2",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 229,
  rating: 4.5,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959175/Harry_Potter_v2_1_av7xr0.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959175/Harry_Potter_v2_1_av7xr0.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959132/Harry_Potter_v2_2_yq0rja.jpg",

  ],
  description: "Harry-Potters Theme Fridge Magnet for Kids Kitchen Home Refrigerator Gift Decor Multicolored Fridge Magnets.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Perfect for use on refrigerators, lockers, or other metal surfaces. Measuring approximately 2-3 inches , this magnet is compact yet eye-catching, making them ideal for small spaces. Makes a thoughtful and practical gift for Kids, friends, family, or coworkers.",
  },
},{
  id: "125",
  name: "Harry potter V3",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 229,
  rating: 4.5,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959142/Harry_Potter_v3_1_rlqdpz.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959142/Harry_Potter_v3_1_rlqdpz.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959128/Harry_Potter_v3_2_ocbf62.jpg",

  ],
  description: "Harry-Potters Theme Fridge Magnet for Kids Kitchen Home Refrigerator Gift Decor Multicolored Fridge Magnets.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Perfect for use on refrigerators, lockers, or other metal surfaces. Measuring approximately 2-3 inches , this magnet is compact yet eye-catching, making them ideal for small spaces. Makes a thoughtful and practical gift for Kids, friends, family, or coworkers.",
  },
},{
  id: "126",
  name: "Horn Nahi Gaane Baja",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 189,
  rating: 4.2,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959157/Horn_nahi_gaane_baja_1_plb8zw.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959157/Horn_nahi_gaane_baja_1_plb8zw.jpg",

  ],
  description: "Fridge Magnet with Funny Quotes Horn Nhi Gaane Baja Magnet Stickers for Home Decoration.",
  details: {
    material: "Magnetic",
    size: "8.89cm x 7.63cm",
    aboutProduct:
      "This multicolor magnet is not only functional but also serves as a decorative accent that brings warmth and style to any setting. Makes for a thoughtful gift for any occasion.Makes a thoughtful and practical gift for Kids, friends, family, or coworkers.",
  },
},{
  id: "127",
  name: "Hotter than the summer",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 149,
  rating: 4.2,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959173/Hotter_than_the_summer__1_lon4r6.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959173/Hotter_than_the_summer__1_lon4r6.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959096/Always_late_but_worth_the_wait_2_nruqki.jpg",

  ],
  description: "Hotter than the summer Fridge Magnet (Pack of 1 pc) Size: 3 inches- Funny, Motivational, Inspirational Quotes Gift and Decoration.",
  details: {
    material: "Magnetic",
    weight: "15 Grams",
    aboutProduct:
      "High Quality Printing which ensures they are durable and can be cleaned with dry cloth.A nice gift choice for Family, Friends, Grandparents, Office Colleagues on any occasion.",
  },
},{
  id: "128",
  name: "Hulk",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 159,
  rating: 4,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959166/Hulk_1_oe6vde.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959166/Hulk_1_oe6vde.jpg",

  ],
  description: "Avengers Wooden Fridge Magnet | Refrigerator Magnets | Marvel Characters Fridge Magnets | Gift for Marvels Lovers | Gift for Kids | Home Decor Magnet | Hulk Character.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Features iconic Avengers characters like Hulk, Iron Man, Captain America, Thor, and more. Ideal for Marvel lovers, kids, and fans of all ages. Adds superhero charm and personality to your fridge or any magnetic surface. Makes a thoughtful and unique return gift for birthdays, holidays, or special occasions.",
  },
},{
  id: "129",
  name: "Kal Se pakka Padhunga",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 159,
  rating: 4.8,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959110/Kal_se_pakka_padhunga_1_e2ag46.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959110/Kal_se_pakka_padhunga_1_e2ag46.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959108/Kalse_pakka_padhunga_2_owud0b.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959105/Kal_se_pakka_padunga_3_iimazn.jpg",

  ],
  description: "Kal Se pakka Padhunga Fridge Magnet.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Multipurpose Fridge magnet that can also be used in kids room, study room, classrooms.",
  },
},{
  id: "130",
  name: "Labubu",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 249,
  rating: 4.9,
  image: "",
  images: [
    "",

  ],
  description: "Labubu Fridge Magnet Pack Of 1.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "High Quality Printing which ensures they are durable and can be cleaned with dry cloth.A perfect gift choice for Labubu lovers.",
  },
},{
  id: "131",
  name: "Manali",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 159,
  rating: 4,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959143/Manali_wroptp.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959143/Manali_wroptp.jpg",

  ],
  description: "Souvenir Manali Fridge Magnet (Multicolour).",
  details: {
    material: "Magnetic",
    size: "Round",
    aboutProduct:
      "A great gift for your friends and relatives who would cherish a fine indian souvenier Suitable for Gifts, Souvenir , return gifts and Other Occasions.",
  },
},{
  id: "132",
  name: "Meery Christmas Round",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 149,
  rating: 4.9,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959126/Merry_Christmas_round_1_qh9qvj.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959126/Merry_Christmas_round_1_qh9qvj.jpg",

  ],
  description: "Christmas Fridge Magnet  | Refrigerator Decor Magnets | Gifts, Kitchen & Office. ",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Unique Magnet with Merry Christmas text.Sticks securely to refrigerators, metal doors, filing cabinets, classroom boards, and other magnetic surfaces. Instantly adds warm Christmas spirit to your kitchen/offices or party space.",
  },
},{
  id: "133",
  name: "Meery Christmas V1",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 149,
  rating: 4.9,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959127/Merry_Christmas_v1_1_w9kvop.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959127/Merry_Christmas_v1_1_w9kvop.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959122/Merry_Christmas_v1_2_rynpbc.jpg",

  ],
  description: "Christmas Fridge Magnet  | Refrigerator Decor Magnets | Gifts, Kitchen & Office. ",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Unique Magnet with Merry Christmas text.Sticks securely to refrigerators, metal doors, filing cabinets, classroom boards, and other magnetic surfaces. Instantly adds warm Christmas spirit to your kitchen/offices or party space.",
  },
},{
  id: "134",
  name: "Merry Christmas with Reindeer",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 149,
  rating: 4.9,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959079/Merry_Christmas_with_Reindeer_1_p5bvqj.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959079/Merry_Christmas_with_Reindeer_1_p5bvqj.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959080/Merry_Christmas_with_Reindeer_2_mzxy2o.jpg",

  ],
  description: "Christmas Fridge Magnet  | Refrigerator Decor Magnets | Gifts, Kitchen & Office. ",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Unique Magnet with Merry Christmas text.Sticks securely to refrigerators, metal doors, filing cabinets, classroom boards, and other magnetic surfaces. Instantly adds warm Christmas spirit to your kitchen/offices or party space.",
  },
},{
  id: "135",
  name: "New year same shit",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 149,
  rating: 4.9,
  image: "",
  images: [
    "",

  ],
  description: "Sarcastic New Year Fridge Magnet.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Ring in the New Year with a humorous twist, acknowledging the unchanged chaos with a cheeky nod.",
  },
},{
  id: "136",
  name: "Only a Titan can finish this fridge",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 129,
  rating: 4,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959141/Only_a_titan_can_finish_this_fridge_1_i3n1ly.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959141/Only_a_titan_can_finish_this_fridge_1_i3n1ly.jpg",

  ],
  description: "Fridge Magnet | Attack on Titan.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Attack on Titan theme Fridge magnet.High Quality Printing which ensures they are durable and can be cleaned with dry cloth.",
  },
},{
  id: "137",
  name: "Paka mat",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 199,
  rating: 4.9,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959152/Paka_mat_1_juoe31.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959152/Paka_mat_1_juoe31.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959120/Paka_mat_2_jszggx.jpg",

  ],
  description: "Paka mat re HD Quality Stylish Fridge Magnet for Kitchen - Deocorative Refrigerator Magnets - Gift for Kids.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Multi-purpose magnets Funny, Quirky, Quotes on fridge / metal cupboards for your home, kitchen or office. These Magnets will look very attractive on any metal surface like Fridge, Washing machine, Metal Cupboard,etc. The Magnet on the back of the product is smooth and does not lead to any scratches of the Surface.",
  },
},{
  id: "138",
  name: "Doremon",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 199,
  rating: 3.9,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959080/Doremon_1_quhhwc.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959080/Doremon_1_quhhwc.jpg",

  ],
  description: "Doremon Fridge Magnet | Refrigerator Door Magnet | Cartoon Fridge Magnet | Home & Kitchen Decor | Gift for Kids.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Features the iconic and lovable Doraemon character from the popular cartoon. A thoughtful and exciting gift for young Doraemon fans. Great for decorating refrigerators, lockers, or any magnetic surface.",
  },
},{
  id: "139",
  name: "Ronaldo V1",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 259,
  rating: 4.9,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959167/Ronaldo_v1_1_mwoawv.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959167/Ronaldo_v1_1_mwoawv.jpg",

  ],
  description: "Cristiano Ronaldo Fridge Magnet | Premium Quality Magnet | Office & Home Use.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Relive Messi's moment of triumph in all its glory, as the fade-proof print maintains its vibrancy over time.An ideal gift for any Messi's or Foodball enthusiast, suitable for birthdays, holidays, or special occasions.",
  },
},{
  id: "140",
  name: "Ronaldo V2",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 259,
  rating: 4.9,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959104/Ronaldo_v2_1_ey6swx.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959104/Ronaldo_v2_1_ey6swx.jpg",

  ],
  description: "Cristiano Ronaldo Fridge Magnet | Premium Quality Magnet | Office & Home Use.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Relive Messi's moment of triumph in all its glory, as the fade-proof print maintains its vibrancy over time.An ideal gift for any Messi's or Foodball enthusiast, suitable for birthdays, holidays, or special occasions.",
  },
},{
  id: "141",
  name: "Sab Dhaaru Ki galti hai",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 159,
  rating: 4.2,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959151/Sab_dhaaru_ki_galti_hai_1_jjmzdg.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959151/Sab_dhaaru_ki_galti_hai_1_jjmzdg.jpg",

  ],
  description: "Sab Daaru Ki Galti Hai Funny Humor Fridge Magnet For Club, Hostel Rooms.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "Multi-purpose magnets Funny, Quirky, Quotes on fridge / metal cupboards for your home, kitchen or office. These Magnets will look very attractive on any metal surface like Fridge, Washing machine, Metal Cupboard,etc.",
  },
},{
  id: "142",
  name: "Sab moh maya hai",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 179,
  rating: 4.1,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959149/Sab_moh_maya_hai_1_w5ejvt.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959149/Sab_moh_maya_hai_1_w5ejvt.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959135/Sab_moh_maya_hai_2_pe0luj.jpg",

  ],
  description: "Vibrant and Humorous Fridge Magnet - Sab Moh Maya Hai.",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "A great gift for your friends and relatives who would cherish a fine indian souvenier Care Instructions: Wipe with dry cloth Suitable for Gifts, Souvenir and Other Occasion.",
  },
},{
  id: "143",
  name: "Sahi Khel gaya Bancho",
  category: "magnets",   // main category slug
  childCategory: "funky-magnets",             // child slug
  price: 179,
  rating: 4.1,
  image: "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959103/Sahi_khel_gaya_bancho_1_s09f1z.jpg",
  images: [
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959103/Sahi_khel_gaya_bancho_1_s09f1z.jpg",
    "https://res.cloudinary.com/dq7hun84m/image/upload/v1768959103/Sahi_khel_gaya_bancho_2_z72nva.jpg",

  ],
  description: "",
  details: {
    material: "Magnetic",
    size: "Medium",
    aboutProduct:
      "",
  },
},

]