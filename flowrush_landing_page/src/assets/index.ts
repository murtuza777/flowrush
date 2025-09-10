// Centralized asset management for deployment compatibility
// Updated to use actual assets provided in the project

// Base URL for assets (works both locally and in production)
const BASE_URL = '/src/assets';

// Company Logos
export const LOGO_ASSETS = {
  // Main brand logos from logos folder
  technologiesBgless: `${BASE_URL}/logos/technologies bgless.webp`,
  technologiesFavicon: `${BASE_URL}/logos/technologies fevicon.webp`,
};


// Tools & Technology Assets
export const TOOLS_ASSETS = {
  // Technology stack logos from tool logos folder
  nextjs: `${BASE_URL}/tool logos/next.js.webp`,
  react: `${BASE_URL}/tool logos/JavaScript.webp`,
  vue: `${BASE_URL}/tool logos/Vue.js.svg.webp`,
  nodejs: `${BASE_URL}/tool logos/JS.webp`,
  laravel: `${BASE_URL}/tool logos/Laravel.webp`,
  python: `${BASE_URL}/tool logos/python.webp`,
  javascript: `${BASE_URL}/tool logos/JavaScript.webp`,
  typescript: `${BASE_URL}/tool logos/JavaScript.webp`,
  php: `${BASE_URL}/tool logos/PHP.webp`,
  java: `${BASE_URL}/tool logos/JAVA.webp`,
  kotlin: `${BASE_URL}/tool logos/KOTLIN.webp`,
  swift: `${BASE_URL}/tool logos/swift.webp`,
  flutter: `${BASE_URL}/tool logos/flutter.webp`,
  objectiveC: `${BASE_URL}/tool logos/objective-c.webp`,
  go: `${BASE_URL}/tool logos/GO.webp`,
  dotnet: `${BASE_URL}/tool logos/Microsoft.NET.webp`,
  spring: `${BASE_URL}/tool logos/Spring_Boot.webp`,
  
  // Databases
  mysql: `${BASE_URL}/tool logos/mysql.webp`,
  mongodb: `${BASE_URL}/tool logos/mongodb-logo-png_seeklogo-481256-removebg-preview.webp`,
  postgresql: `${BASE_URL}/tool logos/postgresql.webp`,
  redis: `${BASE_URL}/tool logos/Redis.webp`,
  sqlserver: `${BASE_URL}/tool logos/SQL SERVER.webp`,
  
  // Cloud & Infrastructure
  aws: `${BASE_URL}/tool logos/Amazon-Web-Services.webp`,
  googleCloud: `${BASE_URL}/tool logos/Google-Cloud.webp`,
  azure: `${BASE_URL}/tool logos/Microsoft_Azure.webp`,
  docker: `${BASE_URL}/tool logos/docker.webp`,
  kubernetes: `${BASE_URL}/tool logos/Kubernetes.webp`,
  firebase: `${BASE_URL}/tool logos/firebase.webp`,
  supabase: `${BASE_URL}/tool logos/supabase.webp`,
  nginx: `${BASE_URL}/tool logos/nginx.webp`,
  apache: `${BASE_URL}/tool logos/apache.webp`,
  openshift: `${BASE_URL}/tool logos/openshift.webp`,
  
  // Design & Development Tools
  figma: `${BASE_URL}/tool logos/figma.webp`,
  adobeXd: `${BASE_URL}/tool logos/Adobe_XD.svg.webp`,
  photoshop: `${BASE_URL}/tool logos/adobe-photoshop.webp`,
  sketch: `${BASE_URL}/tool logos/sketch.webp`,
  marvel: `${BASE_URL}/tool logos/marvel.webp`,
  
  // CMS & E-commerce
  wordpress: `${BASE_URL}/tool logos/wordpress.webp`,
  shopify: `${BASE_URL}/tool logos/Shopify-Certified-PartneR.webp`,
  
  // AI & Machine Learning
  openai: `${BASE_URL}/tool logos/DALL.E.webp`,
  stability: `${BASE_URL}/tool logos/stability.webp`,
  eleutherai: `${BASE_URL}/tool logos/eleutherai.webp`,
  
  // Analytics & Monitoring
  googleAnalytics: `${BASE_URL}/tool logos/Google_Analytics.webp`,
  elastic: `${BASE_URL}/tool logos/Elastic.webp`,
  kibana: `${BASE_URL}/tool logos/KIBANA.webp`,
  
  // Development Libraries
  gsap: `${BASE_URL}/tool logos/GSAP.webp`,
  threejs: `${BASE_URL}/tool logos/THREE.JS.webp`,
  graphql: `${BASE_URL}/tool logos/GRAPHQL.webp`,
  
  // Hosting & Domain
  godaddy: `${BASE_URL}/tool logos/godaddy.webp`,
  hostinger: `${BASE_URL}/tool logos/hostinger.webp`,
  
  // Partnerships & Certifications
  googlePartner: `${BASE_URL}/tool logos/Google-Partner.webp`,
  metBusinessPartner: `${BASE_URL}/tool logos/Met-Business-Partners.webp`,
  clutch: `${BASE_URL}/tool logos/clutch.webp`,
  certifiedCompany: `${BASE_URL}/tool logos/CERTIFIED COMPANY.webp`,
  
  // Mobile Development
  xamarin: `${BASE_URL}/tool logos/xamarin.webp`,
  ai2: `${BASE_URL}/tool logos/Ai2.webp`,
  
  // Additional assets
  avatars: `${BASE_URL}/tool logos/avatars.webp`,
  dj: `${BASE_URL}/tool logos/DJ.webp`,
  w: `${BASE_URL}/tool logos/W.webp`,
  logo: `${BASE_URL}/tool logos/logo.webp`,
  logo1: `${BASE_URL}/tool logos/LOGO1.webp`,
  misc1: `${BASE_URL}/tool logos/1675862257738.webp`,
};

// Header Assets
export const HEADER_ASSETS = {
  logo: `${BASE_URL}/logos/technologies bgless.webp`, // Using the bgless logo for header
};

// Footer Assets
export const FOOTER_ASSETS = {
  logo: `${BASE_URL}/logos/technologies bgless.webp`, // Same as header logo
};

// Utility function to get asset URL
export const getAssetUrl = (path: string): string => {
  return `${BASE_URL}/${path}`;
};

// Fallback function for missing assets
export const getAssetWithFallback = (path: string, _fallback: string): string => {
  // In production, you might want to implement actual asset checking
  return `${BASE_URL}/${path}`;
};
