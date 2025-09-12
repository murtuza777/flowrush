import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className={`absolute bottom-20 right-0 mb-2 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-[rgba(26,26,36,0.95)] backdrop-blur-sm border border-white/10 rounded-[12px] px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative">
              <div className="text-white font-['Poppins'] font-medium text-[14px] whitespace-nowrap">
                Need help? Chat with us!
              </div>
              <div className="text-[#146ef6] font-['Roboto'] text-[12px] mt-1">
                Available 24/7 worldwide
              </div>
              {/* Tooltip arrow */}
              <div className="absolute top-full right-6 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-[rgba(26,26,36,0.95)]"></div>
            </div>
          </div>
        )}

        {/* Main Button with Backlight Reflector */}
        <a
          href="https://wa.me/919116098187"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Button Container */}
          <div className="relative w-16 h-16 md:w-18 md:h-18">
            {/* Backlight Reflector - Outer Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/30 to-green-500/30 animate-pulse blur-md scale-110"></div>
            
            {/* Backlight Reflector - Animated Ring */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-conic from-green-400 via-green-500 via-green-600 to-green-400 opacity-60 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-900 to-slate-800"></div>
            </div>
            
            {/* Inner Reflection Ring */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-green-400/20 to-transparent"></div>
            
            {/* Main Button */}
            <div className="relative w-full h-full bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(34,197,94,0.4)] hover:shadow-[0_16px_48px_rgba(34,197,94,0.7)] hover:scale-105 transition-all duration-500 overflow-hidden border border-green-400/20">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Inner Glow */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-400/40 to-transparent"></div>
              
              {/* WhatsApp Icon */}
              <svg 
                className="w-8 h-8 md:w-9 md:h-9 text-white transition-transform duration-300 relative z-10 drop-shadow-lg" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>

            {/* Enhanced Online Status Indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-green-300 to-green-500 rounded-full border-2 border-white shadow-lg">
              <div className="absolute inset-0.5 bg-green-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
