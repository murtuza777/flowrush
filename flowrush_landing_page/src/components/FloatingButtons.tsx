import { useState, useEffect } from 'react';

type FloatingButtonsProps = {
  onOpenContact: () => void;
};

export default function FloatingButtons({ onOpenContact }: FloatingButtonsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show buttons after page load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Show tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Contact Button - Left Side */}
      <div className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Contact Tooltip */}
        {showTooltip && (
          <div className={`absolute bottom-20 left-0 mb-2 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-[rgba(26,26,36,0.95)] backdrop-blur-sm border border-white/10 rounded-[12px] px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative">
              <div className="text-white font-['Poppins'] font-medium text-[14px] whitespace-nowrap">
                Get in touch with us!
              </div>
              <div className="text-[#146ef6] font-['Roboto'] text-[12px] mt-1">
                Quick contact form
              </div>
              {/* Tooltip arrow */}
              <div className="absolute top-full left-6 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-[rgba(26,26,36,0.95)]"></div>
            </div>
          </div>
        )}

        {/* Contact Button */}
        <button
          onClick={onOpenContact}
          className="group relative block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Button Container */}
          <div className="relative w-16 h-16 md:w-18 md:h-18">
            {/* Main Button */}
            <div className="relative w-full h-full bg-gradient-to-r from-[#146ef6] to-[#2b7fff] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(20,110,246,0.4)] hover:shadow-[0_12px_40px_rgba(20,110,246,0.6)] hover:scale-110 transition-all duration-300 group-hover:rotate-12 overflow-hidden">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Contact Icon */}
              <svg 
                className="w-8 h-8 md:w-9 md:h-9 text-white group-hover:scale-110 transition-transform duration-300 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
