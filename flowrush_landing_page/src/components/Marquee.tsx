import React from 'react';

// All individual services from header dropdowns
const services = [
  // Web Development
  'Custom Website Development',
  'Web Design UI / UX',
  'E-commerce Website Development',
  'Landing Page Development',
  'Wordpress Website',
  'Shopify Website',
  'Web flow Website',
  'Next.js Website',
  'Framer Website',
  'Square space Website',
  // Software & App
  'Software development services',
  'Mobile app development services',
  'IOS app development services',
  'Android App Development Services',
  'Progressive app development services',
  'Custom crm development services',
  'Erp software development services',
  'Custom saas development services',
  // Cloud & Tech
  'Task Automatic services',
  'Tech Outsourcing services',
  'Cybersecurity services',
  'Cloud consulting services',
  'Data analytics services',
  'Staff augmentation services',
  'AI intelligent integration services',
  'API integration services',
  // AI
  'AI Marketing Automation',
  'AI-Led Website & App Development',
  'AI Content & Design Generation',
  'Custom Business Automations Using AI',
  // Staff Augmentation
  'SEO Specialist',
  'Website Developers',
  'App Developers',
  'DevOps Engineers',
  'AI Automation Engineer',
  'Data Analytics Engineer',
  'Graphic Designer',
  'UI/UX Designer'
];

export default function Marquee() {
  return (
    <section className="py-12 bg-[#0a0a0f] overflow-hidden">
      {/* Our Listing Services text */}
      <div className="text-center mb-12 px-4 sm:px-8 lg:px-20 xl:px-[180px]">
        <h3 className="font-['Poppins'] font-medium text-[24px] leading-[1.4] text-white">
          Our Listing Services
        </h3>
      </div>

      {/* Continuous marquee animation */}
      <div className="relative overflow-hidden">
        <div className="flex gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {/* Multiple sets for seamless infinite loop */}
          {[...Array(4)].map((_, setIndex) => 
            services.map((service, index) => (
              <div key={`set-${setIndex}-${index}`} className="flex items-center gap-3 flex-shrink-0">
                <span className="text-lg text-white font-['Roboto'] font-medium tracking-wide hover:text-[#146ef6] transition-colors duration-300">
                  {service}
                </span>
                <div className="flex items-center justify-center w-6 h-6">
                  <svg 
                    className="w-5 h-5 text-[#146ef6] animate-pulse" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent pointer-events-none z-10" />
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        /* Pause on hover */
        .animate-\[marquee_20s_linear_infinite\]:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}


