// Centralized asset management for deployment compatibility
// This replaces all localhost:3845 URLs with proper asset paths

// Base URL for assets (works both locally and in production)
const BASE_URL = '/assets';

// Hero Section Assets
export const HERO_ASSETS = {
  imgGradient: `${BASE_URL}/hero-gradient.png`,
  heroPreview: `${BASE_URL}/hero-preview.png`,
};

// Header Assets
export const HEADER_ASSETS = {
  logo: `${BASE_URL}/logo.png`,
  caretActive: `${BASE_URL}/caret-active.svg`,
  caret: `${BASE_URL}/caret.svg`,
};

// Stats Section Assets
export const STATS_ASSETS = {
  img: `${BASE_URL}/stats-1.svg`,
  img1: `${BASE_URL}/stats-2.svg`,
  img2: `${BASE_URL}/stats-3.svg`,
  img3: `${BASE_URL}/stats-4.svg`,
  img4: `${BASE_URL}/stats-5.svg`,
  img5: `${BASE_URL}/stats-6.svg`,
  img6: `${BASE_URL}/stats-7.svg`,
  img7: `${BASE_URL}/stats-8.svg`,
  img8: `${BASE_URL}/stats-9.svg`,
  img9: `${BASE_URL}/stats-10.svg`,
  img10: `${BASE_URL}/stats-11.svg`,
  img11: `${BASE_URL}/stats-12.svg`,
  img12: `${BASE_URL}/stats-13.svg`,
  img13: `${BASE_URL}/stats-14.svg`,
  img14: `${BASE_URL}/stats-15.svg`,
  img15: `${BASE_URL}/stats-16.svg`,
  img16: `${BASE_URL}/stats-17.svg`,
  img17: `${BASE_URL}/stats-18.svg`,
  img18: `${BASE_URL}/stats-19.svg`,
  img19: `${BASE_URL}/stats-20.svg`,
  img20: `${BASE_URL}/stats-21.svg`,
  img21: `${BASE_URL}/stats-22.svg`,
  img22: `${BASE_URL}/stats-23.svg`,
  img23: `${BASE_URL}/stats-24.svg`,
  img24: `${BASE_URL}/stats-25.svg`,
  img25: `${BASE_URL}/stats-26.svg`,
};

// Why Choose Section Assets
export const WHY_CHOOSE_ASSETS = {
  img: `${BASE_URL}/why-choose-1.svg`,
  img1: `${BASE_URL}/why-choose-2.svg`,
  img2: `${BASE_URL}/why-choose-3.svg`,
  img3: `${BASE_URL}/why-choose-4.svg`,
  img4: `${BASE_URL}/why-choose-5.svg`,
  img5: `${BASE_URL}/why-choose-6.svg`,
  img6: `${BASE_URL}/why-choose-7.svg`,
  img7: `${BASE_URL}/why-choose-8.svg`,
  img8: `${BASE_URL}/why-choose-9.svg`,
  img9: `${BASE_URL}/why-choose-10.svg`,
  img10: `${BASE_URL}/why-choose-11.svg`,
  img11: `${BASE_URL}/why-choose-12.svg`,
  img12: `${BASE_URL}/why-choose-13.svg`,
  img13: `${BASE_URL}/why-choose-14.svg`,
  img14: `${BASE_URL}/why-choose-15.svg`,
};

// Why Trust Section Assets
export const WHY_TRUST_ASSETS = {
  img: `${BASE_URL}/why-trust-1.svg`,
  img1: `${BASE_URL}/why-trust-2.svg`,
  img2: `${BASE_URL}/why-trust-3.svg`,
  img3: `${BASE_URL}/why-trust-4.svg`,
  img4: `${BASE_URL}/why-trust-5.svg`,
  img5: `${BASE_URL}/why-trust-6.svg`,
  img6: `${BASE_URL}/why-trust-7.svg`,
  img7: `${BASE_URL}/why-trust-8.svg`,
  img8: `${BASE_URL}/why-trust-9.svg`,
  img9: `${BASE_URL}/why-trust-10.svg`,
  img10: `${BASE_URL}/why-trust-11.svg`,
};

// Tools Section Assets
export const TOOLS_ASSETS = {
  // Technology Logos
  reactLogo: `${BASE_URL}/tech-react.png`,
  nextjsLogo: `${BASE_URL}/tech-nextjs.svg`,
  vueLogo: `${BASE_URL}/tech-vue.svg`,
  angularLogo: `${BASE_URL}/tech-angular.svg`,
  nodejsLogo: `${BASE_URL}/tech-nodejs.svg`,
  laravelLogo: `${BASE_URL}/tech-laravel.svg`,
  djangoLogo: `${BASE_URL}/tech-django.svg`,
  typescriptLogo: `${BASE_URL}/tech-typescript.svg`,
  
  // Service Icons
  webDevIcon1: `${BASE_URL}/service-web-1.svg`,
  webDevIcon2: `${BASE_URL}/service-web-2.svg`,
  mobileIcon1: `${BASE_URL}/service-mobile-1.svg`,
  mobileIcon2: `${BASE_URL}/service-mobile-2.svg`,
  cloudIcon: `${BASE_URL}/service-cloud.svg`,
  aiIcon1: `${BASE_URL}/service-ai-1.svg`,
  seoIcon1: `${BASE_URL}/service-seo-1.svg`,
  seoIcon2: `${BASE_URL}/service-seo-2.svg`,
  designIcon1: `${BASE_URL}/service-design-1.svg`,
  designIcon2: `${BASE_URL}/service-design-2.svg`,
};

// Partner Excellence Assets
export const PARTNER_ASSETS = {
  img15Checked: `${BASE_URL}/partner-checked.svg`,
};

// Footer Assets
export const FOOTER_ASSETS = {
  logo: `${BASE_URL}/logo.png`, // Same as header logo
};

// Utility function to get asset URL
export const getAssetUrl = (path: string): string => {
  return `${BASE_URL}/${path}`;
};

// Fallback function for missing assets
export const getAssetWithFallback = (path: string, fallback: string): string => {
  // In production, you might want to implement actual asset checking
  return `${BASE_URL}/${path}`;
};
