import { useState } from 'react';
import { HEADER_ASSETS } from '../assets';

type HeaderProps = {
  onOpenAbout: () => void;
  onOpenContact: () => void;
};
// Inline chevron icon to avoid external assets
const ChevronDownIcon = ({ rotated }: { rotated: boolean }) => (
  <svg
    className={`w-3.5 h-3.5 transition-transform duration-200 ${rotated ? 'rotate-180' : ''}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.168l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0l-4.24-3.36a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
  </svg>
);

// Service-specific SVG icons (no emojis)
const WebsiteIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const UIUXIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
  </svg>
);

const EcommerceIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6.001" />
  </svg>
);

const LandingPageIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const WordPressIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const MobileAppIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
  </svg>
);

const SoftwareIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9" />
  </svg>
);

const SecurityIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const AIIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const DeveloperIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DesignerIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
  </svg>
);

const APIIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h10M4 17h16" />
  </svg>
);

const DataIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6c0-1.657 4.03-3 9-3s9 1.343 9 3-4.03 3-9 3-9-1.343-9-3zm0 6c0-1.657 4.03-3 9-3m9 3c0 1.657-4.03 3-9 3s-9-1.343-9-3m0 6c0-1.657 4.03-3 9-3m9 3c0 1.657-4.03 3-9 3s-9-1.343-9-3" />
  </svg>
);

const DevOpsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const SEOIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default function Header({ onOpenAbout, onOpenContact }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  // Individual dropdown data with specific icons
  const serviceCategories = {
    'Web Development': [
      { name: 'Custom Website Development', icon: <WebsiteIcon /> },
      { name: 'Web Design UI / UX', icon: <UIUXIcon /> },
      { name: 'E-commerce Website Development', icon: <EcommerceIcon /> },
      { name: 'Landing Page Development', icon: <LandingPageIcon /> },
      { name: 'Wordpress Website', icon: <WordPressIcon /> },
      { name: 'Shopify Website', icon: <EcommerceIcon /> },
      { name: 'Web flow Website', icon: <WebsiteIcon /> },
      { name: 'Next.js Website', icon: <WebsiteIcon /> },
      { name: 'Framer Website', icon: <UIUXIcon /> },
      { name: 'Square space Website', icon: <WebsiteIcon /> }
    ],
    'Software & App': [
      { name: 'Software development services', icon: <SoftwareIcon /> },
      { name: 'Mobile app development services', icon: <MobileAppIcon /> },
      { name: 'IOS app development services', icon: <MobileAppIcon /> },
      { name: 'Android App Development Services', icon: <MobileAppIcon /> },
      { name: 'Progressive app development services', icon: <MobileAppIcon /> },
      { name: 'Custom crm development services', icon: <SoftwareIcon /> },
      { name: 'Erp software development services', icon: <SoftwareIcon /> },
      { name: 'Custom saas development services', icon: <SoftwareIcon /> }
    ],
    'Cloud & Tech': [
      { name: 'Task Automatic services', icon: <SoftwareIcon /> },
      { name: 'Tech Outsourcing services', icon: <CloudIcon /> },
      { name: 'Cybersecurity services', icon: <SecurityIcon /> },
      { name: 'Cloud consulting services', icon: <CloudIcon /> },
      { name: 'Data analytics services', icon: <DataIcon /> },
      { name: 'Staff augmentation services', icon: <DevOpsIcon /> },
      { name: 'AI intelligent integration services', icon: <AIIcon /> },
      { name: 'API integration services', icon: <APIIcon /> }
    ],
    'AI': [
      { name: 'AI Marketing Automation', icon: <AIIcon /> },
      { name: 'AI-Led Website & App Development', icon: <AIIcon /> },
      { name: 'AI Content & Design Generation', icon: <AIIcon /> },
      { name: 'Custom Business Automations Using AI', icon: <AIIcon /> }
    ],
    'Staff Augmentation': [
      { name: 'SEO Specialist', icon: <SEOIcon /> },
      { name: 'Website Developers', icon: <DeveloperIcon /> },
      { name: 'App Developers', icon: <MobileAppIcon /> },
      { name: 'DevOps Engineers', icon: <DevOpsIcon /> },
      { name: 'AI Automation Engineer', icon: <AIIcon /> },
      { name: 'Data Analytics Engineer', icon: <DataIcon /> },
      { name: 'Graphic Designer', icon: <DesignerIcon /> },
      { name: 'UI/UX Designer', icon: <UIUXIcon /> }
    ]
  };

  // Services Mega Dropdown Component
  const ServicesMegaDropdown = () => (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[1200px] bg-[#1a1a24] border border-white/10 rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.3)] z-50 p-6 backdrop-blur-md">
      <div className="mb-4">
        <h3 className="font-['Poppins'] font-bold text-[20px] text-white mb-1">Our Services</h3>
        <p className="font-['Roboto'] text-[14px] text-gray-400">Comprehensive white-label development solutions</p>
      </div>
      
      <div className="grid grid-cols-5 gap-4">
        {Object.entries(serviceCategories).map(([category, items]) => (
          <div key={category} className="space-y-3">
            <h4 className="font-['Poppins'] font-semibold text-[14px] text-[#146ef6] border-b border-white/10 pb-1">
              {category}
            </h4>
            <div className="space-y-2">
              {items.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-2 items-center px-2 py-1.5 rounded-md hover:bg-white/5 cursor-pointer transition-all duration-200 group"
                >
                  <div className="w-4 h-4 text-[#146ef6] group-hover:text-[#2b7fff] transition-colors duration-200 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 font-['Roboto'] font-normal text-[11px] text-gray-300 group-hover:text-white transition-colors duration-200 leading-tight">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/10 text-center">
        <button className="bg-gradient-to-r from-[#146ef6] to-[#2b7fff] hover:from-[#1257d3] hover:to-[#1d6aed] text-white px-6 py-2 rounded-lg font-['Poppins'] font-medium text-[14px] transition-all duration-300 hover:scale-105 hover:shadow-lg">
          View All Services
        </button>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-[20px] backdrop-filter bg-[rgba(26,26,36,0.7)] border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        <div className="w-full max-w-[1440px] mx-auto py-4 md:py-6 flex items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16 relative">
          <div className="h-[40px] w-[150px] md:h-[51px] md:w-[180px] bg-no-repeat bg-[length:110%_388.24%] bg-[52.8%_45.92%]" style={{ backgroundImage: `url('${HEADER_ASSETS.logo}')` }} />

          {/* Navigation - Updated with Services mega dropdown */}
          <nav className="hidden lg:flex items-center gap-1 text-[16px] font-['Roboto'] leading-[1.6]">
            {/* Services Mega Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleServices}
                className={`flex gap-1.5 items-center px-4 py-2.5 rounded-md transition-all duration-300 hover:bg-white/5 ${
                  servicesOpen ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap text-[15px]">Services</span>
                <span className={`${servicesOpen ? 'text-white' : 'text-gray-400'} flex items-center`}>
                  <ChevronDownIcon rotated={servicesOpen} />
                </span>
              </button>
              {servicesOpen && <ServicesMegaDropdown />}
            </div>
            {/* About */}
            <button 
              onClick={onOpenAbout} 
              className="px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-300 text-[15px] whitespace-nowrap"
            >
              About
            </button>

            {/* Contact */}
            <button 
              onClick={onOpenContact} 
              className="px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-300 text-[15px] whitespace-nowrap"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Book a Meeting Button */}
          <a
            href="https://calendly.com/sahaj-baveja"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#146ef6] via-[#2b7fff] to-[#00b8db] hover:from-[#1257d3] hover:via-[#1d6aed] hover:to-[#0099c7] text-white px-6 py-2.5 font-['Poppins'] font-medium text-[15px] leading-normal transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(20,110,246,0.4)] whitespace-nowrap shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Meeting
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
        </div>
      </div>
      
      {/* Mobile slide-down menu */}
      {mobileOpen && (
        <div className="lg:hidden backdrop-blur-[20px] bg-[rgba(26,26,36,0.95)] border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <div className="max-w-[1440px] mx-auto px-4 py-4 space-y-2">
            {/* Services Mobile Dropdown */}
            <details className="group">
              <summary className="flex items-center justify-between text-gray-200 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer">
                <span>Services</span>
                <ChevronDownIcon rotated={false} />
              </summary>
              <div className="mt-2 pl-4 space-y-3">
                {Object.entries(serviceCategories).map(([category, items]) => (
                  <div key={category} className="space-y-2">
                    <div className="text-[#146ef6] font-semibold text-sm px-3 py-1 border-b border-white/10">{category}</div>
                    {items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300 px-3 py-1.5 rounded hover:bg-white/5 transition-colors duration-200">
                        <span className="text-[#146ef6]">{item.icon}</span>
                        <span className="text-sm">{item.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </details>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button onClick={onOpenAbout} className="w-full px-4 py-2 rounded-md bg-white/5 text-gray-200 hover:bg-white/10 transition-all duration-300">About</button>
              <button onClick={onOpenContact} className="w-full px-4 py-2 rounded-md bg-[#146ef6] text-white hover:bg-[#1257d3] transition-all duration-300">Contact</button>
              <a
                href="https://calendly.com/sahaj-baveja"
                target="_blank"
                rel="noreferrer"
                className="group col-span-2 relative overflow-hidden rounded-md bg-gradient-to-r from-[#146ef6] via-[#2b7fff] to-[#00b8db] hover:from-[#1257d3] hover:via-[#1d6aed] hover:to-[#0099c7] text-white px-4 py-2.5 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Meeting
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close dropdowns when clicking outside */}
      {servicesOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setServicesOpen(false)}
        />
      )}
    </header>
  );
}


