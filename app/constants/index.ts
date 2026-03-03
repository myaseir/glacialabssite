export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Our Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const PROJECTS = [
    {
    name: "Brain Buffer Game",
    tag: "Gaming / Web App",
    tech: "FastAPI • MongoDB • Android APK",
    iconName: "Gamepad2",
    link: "https://www.brainbufferofficial.com",
    size: "large"
  },
  {
    name: "Glacia Electronic Store",
    tag: "E-Commerce",
    tech: "Next.js • FastAPI • MongoDB",
    iconName: "Smartphone",
    link: "https://circuit-sphere-ecommerce-7b5k.vercel.app", 
    size: "small"
  },

  {
    name: "Hotel Sarfaranga Skardu",
    tag: "Hospitality",
    tech: "Next.js • Framer Motion",
    iconName: "Hotel", // We will map these to Lucide icons
    link: "https://sarfarangahotel-git-main-tech-glacia.vercel.app",
    size: "small"
  },
  {
    name: "Warehouse Balance Pro",
    tag: "Enterprise ERP",
    tech: "Next.js • MongoDB • FastAPI",
    iconName: "PackageCheck",
    link: "https://warehouse-beige-eight.vercel.app",
    size: "large"
  },
  {
    name: "ZADAIN'S Clothing",
    tag: "Fashion",
    tech: "Next.js • React • FastAPI",
    iconName: "Shirt",
    link: "https://zadain-clothing.vercel.app",
    size: "small"
  },
  {
    name: "Luxe Decor WP",
    tag: "WordPress",
    tech: "WooCommerce • MySQL",
    iconName: "LayoutTemplate",
    link: "#",
    size: "small"
  }
];

export const SERVICES_DETAILED = [
  {
    title: "Basic Website",
    tag: "Tier 1",
    bestFor: "Small businesses, portfolios, landing pages",
    desc: "Clean and responsive websites designed to establish your online presence.",
    features: [
      "4–6 Pages",
      "Responsive Design",
      "Contact Form",
      "Basic SEO Setup"
    ],
    tech: "WordPress / Next.js Static / HTML-CSS",
    iconName: "Globe",
    startingPrice: "PKR 16,000"
  },
  {
    title: "Business Website",
    tag: "Tier 2",
    bestFor: "Businesses needing product or content management",
    desc: "Dynamic websites with admin control and database integration.",
    features: [
      "Admin Dashboard",
      "Product Management",
      "Authentication",
      "Hosting Setup"
    ],
    tech: "WordPress + WooCommerce / Shopify / Next.js + Backend",
    iconName: "ShoppingCart",
    startingPrice: "PKR 55,000"
  },
  {
    title: "Custom Web Application",
    tag: "Tier 3",
    bestFor: "Startups and scalable digital platforms",
    desc: "Fully custom full-stack applications built around your business logic.",
    features: [
      "Custom Frontend (Next.js)",
      "Backend APIs (FastAPI / Node)",
      "Database Architecture",
      "Admin Dashboard"
    ],
    tech: "Next.js + FastAPI / PostgreSQL",
    iconName: "Server",
    startingPrice: "PKR 96,000"
  }
];