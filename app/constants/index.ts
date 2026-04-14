export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Our Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const BRAND_ARCHIVE = [
  { 
  year: "2026", 
  name: "StayPort Islamabad", 
  category: "Hospitality", 
  type: "Boutique Rental Engine", 
  link: "https://stayport-3j16.vercel.app/" 
},
  { 
    year: "2026", 
    name: "BR 9 Restaurant", 
    category: "Hospitality", 
    type: "Digital Menu & System", 
    link: "https://br9cafe.vercel.app/" 
  },
  { 
    year: "2026", 
    name: "Mashafly PK", 
    category: "Beauty & Retail", 
    type: "Digital Storefront", 
    link: "https://mashafly-pk.vercel.app/" 
  },
  { 
    year: "2026", 
    name: "Numra Beauty", 
    category: "Wellness", 
    type: "Brand Architecture", 
    link: "https://numra-beta.vercel.app" 
  },
  { 
    year: "2025", 
    name: "Brain Buffer", 
    category: "Gaming", 
    type: "Full-Stack Web App", 
    link: "https://www.brainbufferofficial.com" 
  },
  { 
    year: "2025", 
    name: "Zadain's", 
    category: "Fashion", 
    type: "E-Commerce Deployment", 
    link: "https://zadain-clothing.vercel.app" 
  },
  { 
  year: "2026", 
  name: "Yangtze Chinese Cuisine", 
  category: "Hospitality", 
  type: "Gastronomy Showcase", 
  link: "https://yangtze-chinese-cuisine.vercel.app/" 
},
{ 
  year: "2026", 
  name: "Aasiya’s Lounge", 
  category: "Wellness", 
  type: "Premium Service Architecture", 
  link: "https://aasiaslounge.vercel.app/" 
},
  { 
    year: "2025", 
    name: "Nazara Hotel", 
    category: "Hospitality", 
    type: "Boutique Showcase", 
    link: "https://nazara-hotel.vercel.app/" 
  },
  { 
    year: "2025", 
    name: "Warehouse Balance Pro", 
    category: "Logistics", 
    type: "Enterprise ERP", 
    link: "https://warehouse-beige-eight.vercel.app" 
  },
  { 
    year: "2024", 
    name: "Hotel Sarfaranga", 
    category: "Hospitality", 
    type: "Booking Portal", 
    link: "https://sarfarangahotel-git-main-tech-glacia.vercel.app" 
  },
  { 
    year: "2024", 
    name: "Cakes by Kulsoom", 
    category: "Food & Beverage", 
    type: "Artisan Showcase", 
    link: "https://cakebykulsoom.vercel.app" 
  },
  { 
    year: "2024", 
    name: "Circuit Sphere", 
    category: "Electronics", 
    type: "Retail Engine", 
    link: "https://circuit-sphere-ecommerce-7b5k.vercel.app" 
  },
  { 
    year: "2024", 
    name: "Awais Industrial", 
    category: "Industrial", 
    type: "Service Infrastructure", 
    link: "https://awais-trader.vercel.app" 
  },
  { 
  year: "2026", 
  name: "Ummes Handicrafts", 
  category: "Art & Retail", 
  type: "Artisanal E-Commerce", 
  link: "https://ummeshandicrafts.vercel.app/" 
},
{ 
  year: "2026", 
  name: "Makeup Launch", 
  category: "Wellness", 
  type: "Luxury Studio Architecture", 
  link: "https://makeup-launch.vercel.app/" 
},
{ 
  year: "2026", 
  name: "Saria's Cakes n Cupcakes", 
  category: "Food & Beverage", 
  type: "Luxury Patisserie Architecture", 
  link: "https://cake5.vercel.app/" 
},
  { 
    year: "2024", 
    name: "Luxe Decor", 
    category: "Interior Design", 
    type: "E-Commerce", 
    link: "#" 
  }
];

// constants.ts

export const SERVICES_DETAILED = [
  {
    tag: "Architecture I",
    iconName: "Layout", 
    title: "Brand Architecture",
    desc: "High-fidelity digital storefronts engineered for aesthetic dominance and instant load times. We transform your brand into a premium digital experience that converts.",
    bestFor: "Boutique hospitality, luxury retail, and consulting firms.",
    features: [
      "Core Web Vitals 100/100 Optimization",
      "Minimalist, Soft-Luxury UI/UX Design",
      "Headless CMS Integration (Sanity/Contentful)",
      "Technical SEO & Analytics Infrastructure"
    ],
    tech: "Next.js, Tailwind CSS, Vercel",
    startingPrice: "$2,500+" // Sets a premium anchor. Adjust to your actual floor.
  },
  {
    tag: "Architecture II",
    iconName: "AppWindow", 
    title: "Operational Web Apps",
    desc: "Complex operational portals, booking engines, and internal management dashboards. We build the digital engine that drives your business automation and handles heavy logic seamlessly.",
    bestFor: "Transport networks, regional tourism operators, and scale-ups.",
    features: [
      "Secure Authentication & Role-Based Access",
      "Real-time Database Sync & State Management",
      "Payment Gateway Integration (Stripe/Local Providers)",
      "Custom Admin & Inventory Dashboards"
    ],
    tech: "Next.js, FastAPI, MongoDB",
    startingPrice: "$5,500+" 
  },
  {
    tag: "Architecture III",
    iconName: "Bot", 
    title: "AI & Automation",
    desc: "Intelligent, custom-trained chatbots and automated workflows that handle customer acquisition, support triage, and internal operations 24/7 without human intervention.",
    bestFor: "High-volume service businesses, real estate, and digital agencies.",
    features: [
      "Custom LLM Integration (OpenAI/Gemini)",
      "Vector Database Knowledge Retrieval (RAG)",
      "Seamless WhatsApp & Web Portal Integration",
      "Automated Lead Scoring & CRM Sync"
    ],
    tech: "Python, LangChain, Pinecone, FastAPI",
    startingPrice: "$3,500+"
  },
  {
    tag: "Architecture IV",
    iconName: "Server", 
    title: "Enterprise SaaS",
    desc: "Full-stack Software as a Service platforms built for massive scale. From microservices architecture to advanced data pipelines, we engineer your core digital product from the ground up.",
    bestFor: "Funded tech startups, B2B software companies, and enterprise overhauls.",
    features: [
      "Multi-tenant Architecture Design",
      "Advanced Cloud Infrastructure & Hosting",
      "Load Balancing & Auto-scaling Setup",
      "Comprehensive REST/GraphQL API Development"
    ],
    tech: "React/Next.js, FastAPI, AWS/GCP, Docker",
    startingPrice: "By Retainer" // Shifts focus from a one-off project to a long-term partnership
  }
];