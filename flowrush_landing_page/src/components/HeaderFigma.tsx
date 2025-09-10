import React, { useState } from 'react';

type HeaderFigmaProps = {
  onOpenAbout: () => void;
  onOpenContact: () => void;
};

const logo = "http://localhost:3845/assets/bc279bc77c1bdeb307f551ea573887432a096828.png";
const caretActive = "http://localhost:3845/assets/4eee31e02b8f8a810343ed63ce8f90764cacbafc.svg";
const caret = "http://localhost:3845/assets/e5fc45282e47732391df61a2c6fb461d586bcb3e.svg";

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

export default function HeaderFigma({ onOpenAbout, onOpenContact }: HeaderFigmaProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
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

  const DropdownMenu = ({ category, items }: { category: string; items: Array<{name: string; icon: React.ReactElement}> }) => (
    <div className="absolute top-full left-0 mt-3 w-[320px] bg-[#1a1a24] border border-white/10 rounded-xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.3)] z-50 p-1 backdrop-blur-md">
      <div className="p-3 border-b border-white/10">
        <h3 className="font-['Poppins'] font-medium text-[15px] text-white">
          {category}
        </h3>
      </div>
      <div className="py-2">
        {items.map((item, index) => (
          <div 
            key={index}
            className="flex gap-3 items-center mx-2 px-3 py-2.5 rounded-lg hover:bg-white/5 cursor-pointer transition-all duration-200 group"
          >
            <div className="w-5 h-5 text-[#146ef6] group-hover:text-[#2b7fff] transition-colors duration-200 flex-shrink-0">
              {item.icon}
            </div>
            <div className="flex-1 font-['Roboto'] font-normal text-[14px] text-gray-300 group-hover:text-white transition-colors duration-200">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-[2px] backdrop-filter bg-[rgba(26,26,36,0.8)] border-b border-white/5">
        <div className="w-full max-w-[1440px] mx-auto py-5 md:py-6 flex items-center justify-between px-6 md:px-8 lg:px-12 xl:px-16 relative">
          <div className="h-[51px] w-[180px] bg-no-repeat bg-[length:110%_388.24%] bg-[52.8%_45.92%]" style={{ backgroundImage: `url('${logo}')` }} />

          {/* Navigation - Properly spaced for Figma design */}
          <nav className="hidden lg:flex items-center gap-1 text-[16px] font-['Roboto'] leading-[1.6]">
            {/* Web Development Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('webdev')}
                className={`flex gap-1.5 items-center px-4 py-2.5 rounded-md transition-all duration-300 hover:bg-white/5 ${
                  activeDropdown === 'webdev' ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap text-[15px]">Web Development</span>
                <img src={activeDropdown === 'webdev' ? caretActive : caret} className="w-3.5 h-3.5" alt="" />
              </button>
              {activeDropdown === 'webdev' && (
                <DropdownMenu category="Web Development" items={serviceCategories['Web Development']} />
              )}
            </div>

            {/* Software & App Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('software')}
                className={`flex gap-1.5 items-center px-4 py-2.5 rounded-md transition-all duration-300 hover:bg-white/5 ${
                  activeDropdown === 'software' ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap text-[15px]">Software & App</span>
                <img src={activeDropdown === 'software' ? caretActive : caret} className="w-3.5 h-3.5" alt="" />
              </button>
              {activeDropdown === 'software' && (
                <DropdownMenu category="Software & App" items={serviceCategories['Software & App']} />
              )}
            </div>

            {/* Cloud & Tech Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('cloud')}
                className={`flex gap-1.5 items-center px-4 py-2.5 rounded-md transition-all duration-300 hover:bg-white/5 ${
                  activeDropdown === 'cloud' ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap text-[15px]">Cloud & Tech</span>
                <img src={activeDropdown === 'cloud' ? caretActive : caret} className="w-3.5 h-3.5" alt="" />
              </button>
              {activeDropdown === 'cloud' && (
                <DropdownMenu category="Cloud & Tech" items={serviceCategories['Cloud & Tech']} />
              )}
            </div>

            {/* AI Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('ai')}
                className={`flex gap-1.5 items-center px-4 py-2.5 rounded-md transition-all duration-300 hover:bg-white/5 ${
                  activeDropdown === 'ai' ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap text-[15px]">AI</span>
                <img src={activeDropdown === 'ai' ? caretActive : caret} className="w-3.5 h-3.5" alt="" />
              </button>
              {activeDropdown === 'ai' && (
                <DropdownMenu category="AI" items={serviceCategories['AI']} />
              )}
            </div>

            {/* Staff Augmentation Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('staff')}
                className={`flex gap-1.5 items-center px-4 py-2.5 rounded-md transition-all duration-300 hover:bg-white/5 ${
                  activeDropdown === 'staff' ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap text-[15px]">Staff Augmentation</span>
                <img src={activeDropdown === 'staff' ? caretActive : caret} className="w-3.5 h-3.5" alt="" />
              </button>
              {activeDropdown === 'staff' && (
                <DropdownMenu category="Staff Augmentation" items={serviceCategories['Staff Augmentation']} />
              )}
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
          <button className="lg:hidden p-2 text-gray-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Book a Meeting Button */}
          <a
            href="https://calendly.com/sahaj-baveja"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-gradient-to-r from-[#146ef6] to-[#2b7fff] hover:from-[#1257d3] hover:to-[#1d6aed] text-white px-6 py-2.5 font-['Poppins'] font-medium text-[15px] leading-normal transition-all duration-300 hover:scale-[1.02] hover:shadow-lg whitespace-nowrap shadow-md"
          >
            Book a Meeting
          </a>
        </div>
      </div>
      
      {/* Overlay to close dropdowns when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
}


