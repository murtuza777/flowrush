
export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-start pt-4 sm:pt-7">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced floating particles (dark blue theme) */}
        <div className="absolute top-16 left-4 md:top-20 md:left-20 w-2 h-2 bg-[#1e3a8a] rounded-full animate-pulse opacity-60" />
        <div className="absolute top-32 right-8 md:top-40 md:right-32 w-3 h-3 bg-[#1d4ed8] rounded-full animate-bounce opacity-50" />
        <div className="absolute bottom-24 left-1/4 w-1 h-1 bg-[#1e3a8a] rounded-full animate-ping opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#1d4ed8] rounded-full animate-pulse opacity-40" />
        <div className="absolute top-1/2 left-8 md:left-16 w-1 h-1 bg-[#1e3a8a] rounded-full animate-ping opacity-50" />
        <div className="absolute bottom-1/3 right-12 md:right-24 w-2 h-2 bg-[#1d4ed8] rounded-full animate-bounce opacity-40" />
        
        {/* Animated orbs (dark blue theme) */}
        <div className="absolute top-10 right-1/3 w-20 h-20 bg-[#1d4ed8] rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse" />
        <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-[#1e3a8a] rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse animation-delay-2000" />
        
        {/* Grid pattern - darker tint */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,64,175,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,175,0.08)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px]" />
      </div>

       {/* Full width container - optimized for viewport */}
       <div className="w-full relative z-10">
        {/* Content and iPhone side by side layout */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center justify-between px-3 sm:px-4 md:px-8 lg:px-12 xl:px-16 max-w-[1300px] mx-auto py-4 sm:py-0">
          
          {/* Left side - Content */}
          <div className="flex-1 w-full max-w-[700px] text-center lg:text-left">
            {/* Main heading - optimized for viewport */}
            <h1 className="font-['Poppins'] font-bold text-[24px] xs:text-[28px] sm:text-[32px] md:text-[40px] lg:text-[52px] xl:text-[56px] leading-[1.2] sm:leading-[1.1] tracking-[-0.02em] mb-2 sm:mb-3 md:mb-4 text-white">
              White Label Web Development Agency
            </h1>

            {/* Description (Subheadline) */}
            <p className="text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px] text-white font-['Roboto'] leading-[1.6] mb-4 sm:mb-5 md:mb-6 max-w-[560px] mx-auto lg:mx-0 px-2 sm:px-0">
              we are white label web development company based in india, we offer white label website development services , white label app development services , and custom white label tech services worldwide
            </p>

            {/* Pointers */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 max-w-[600px] mx-auto lg:mx-0 px-2 sm:px-0">
              <li className="flex items-center gap-2 text-white text-[13px] sm:text-[14px]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#66B0FF]"></span>
                Strong website development expertise
              </li>
              <li className="flex items-center gap-2 text-white text-[13px] sm:text-[14px]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#66B0FF]"></span>
                Custom tech solutions
              </li>
              <li className="flex items-center gap-2 text-white text-[13px] sm:text-[14px]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#66B0FF]"></span>
                Lifetime support
              </li>
              <li className="flex items-center gap-2 text-white text-[13px] sm:text-[14px]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#66B0FF]"></span>
                Fair transparent pricing
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-center justify-center lg:justify-start mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0">
              <button className="group relative bg-gradient-to-r from-[#3b82f6] to-[#0008FF] hover:from-[#2563eb] hover:to-[#0006cc] text-white px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl font-['Poppins'] font-semibold text-[14px] sm:text-[15px] transition-all duration-300 hover:scale-[1.03] shadow-[0_6px_24px_rgba(0,8,255,0.25)] overflow-hidden w-full sm:w-auto sm:min-w-[180px] max-w-[280px] sm:max-w-none">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  Connect with Team
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </div>

            {/* Bottom text */}
            <p className="text-[10px] sm:text-[12px] md:text-[14px] text-white font-['Roboto'] leading-[1.5] max-w-[500px] mx-auto lg:mx-0 px-2 sm:px-0">
              <span className="text-white font-medium">✓ Strict NDAs</span>
              <span className="mx-1 sm:mx-2">•</span>
              <span className="text-white font-medium">✓ On-time delivery</span>
              <span className="mx-1 sm:mx-2">•</span>
              <span className="text-white font-medium">✓ 24/7 support</span>
            </p>
          </div>

          {/* Right side - Enhanced iPhone Animation */}
          <div className="flex-1 w-full flex justify-center lg:justify-end items-center mt-4 sm:mt-6 lg:mt-0">
            <div className="relative scale-75 sm:scale-90 md:scale-100">
              {/* Larger animated dashboard mockup */}
              <div className="relative w-[200px] sm:w-[240px] md:w-[320px] lg:w-[420px] xl:w-[480px]">
                {/* Background dashboard preview - using CSS graphics */}
                <div className="w-full h-auto bg-gradient-to-br from-[#1a1a24] to-[#0a0118] rounded-xl sm:rounded-2xl border border-white/10 drop-shadow-2xl opacity-80 aspect-[4/3] flex items-center justify-center">
                  <div className="w-[80%] h-[80%] bg-gradient-to-br from-[#146ef6]/20 to-[#2b7fff]/10 rounded-md sm:rounded-lg border border-[#146ef6]/20 flex flex-col p-2 sm:p-3 md:p-4 gap-2 sm:gap-3">
                    <div className="flex gap-1 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 space-y-1 sm:space-y-2">
                      <div className="w-full h-1.5 sm:h-2 bg-[#146ef6]/30 rounded"></div>
                      <div className="w-3/4 h-1.5 sm:h-2 bg-[#2b7fff]/20 rounded"></div>
                      <div className="w-1/2 h-1.5 sm:h-2 bg-[#00b8db]/20 rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating iPhone container with enhanced animation */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="relative">
                    {/* iPhone container with floating animation */}
                    <div className="w-28 h-56 sm:w-32 sm:h-64 md:w-40 md:h-80 lg:w-48 lg:h-96 bg-gradient-to-br from-gray-800 to-black rounded-[20px] sm:rounded-[25px] md:rounded-[35px] p-2 sm:p-2.5 md:p-3 shadow-2xl animate-[float_6s_ease-in-out_infinite] border border-gray-600">
                      {/* Screen */}
                      <div className="w-full h-full bg-[#0a0118] rounded-[16px] sm:rounded-[20px] md:rounded-[28px] relative overflow-hidden">
                        {/* Status bar */}
                        <div className="absolute top-1 sm:top-1.5 md:top-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 md:w-20 h-0.5 sm:h-0.5 md:h-1 bg-gray-600 rounded-full" />
                        
                        {/* App interface */}
                        <div className="absolute inset-2 sm:inset-3 md:inset-4 flex flex-col">
                          {/* Header */}
                          <div className="bg-[#146ef6]/20 rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 mb-1.5 sm:mb-2 md:mb-3">
                            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                              <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#146ef6] to-[#2b7fff] rounded-md sm:rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-[8px] sm:text-[10px] md:text-sm">F</span>
                              </div>
                              <div>
                                <div className="w-8 sm:w-12 md:w-16 h-1 sm:h-1.5 md:h-2 bg-white/40 rounded mb-0.5 sm:mb-1" />
                                <div className="w-6 sm:w-9 md:w-12 h-0.5 sm:h-0.5 md:h-1 bg-white/20 rounded" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Content cards */}
                          <div className="flex-1 space-y-1 sm:space-y-1.5 md:space-y-2">
                            <div className="bg-white/5 rounded-md sm:rounded-lg p-1 sm:p-1.5 md:p-2">
                              <div className="w-full h-0.5 sm:h-0.5 md:h-1 bg-[#146ef6] rounded mb-0.5 sm:mb-0.5 md:mb-1" />
                              <div className="w-3/4 h-0.5 sm:h-0.5 md:h-1 bg-white/30 rounded" />
                            </div>
                            <div className="bg-white/5 rounded-md sm:rounded-lg p-1 sm:p-1.5 md:p-2">
                              <div className="w-full h-0.5 sm:h-0.5 md:h-1 bg-[#00b8db] rounded mb-0.5 sm:mb-0.5 md:mb-1" />
                              <div className="w-2/3 h-0.5 sm:h-0.5 md:h-1 bg-white/30 rounded" />
                            </div>
                            <div className="bg-white/5 rounded-md sm:rounded-lg p-1 sm:p-1.5 md:p-2">
                              <div className="w-full h-0.5 sm:h-0.5 md:h-1 bg-[#2b7fff] rounded mb-0.5 sm:mb-0.5 md:mb-1" />
                              <div className="w-4/5 h-0.5 sm:h-0.5 md:h-1 bg-white/30 rounded" />
                            </div>
                          </div>
                          
                          {/* Bottom navigation */}
                          <div className="flex justify-around py-1 sm:py-1.5 md:py-2">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-[#146ef6] rounded-full animate-pulse" />
                            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-white/20 rounded-full" />
                            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-white/20 rounded-full" />
                            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-white/20 rounded-full" />
                          </div>
                        </div>
                        
                        {/* Animated elements */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#00b8db] rounded-full animate-ping" />
                        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#146ef6] rounded-full animate-bounce" />
                        <div className="absolute top-1/2 right-2 sm:right-3 md:right-4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#2b7fff] rounded-full animate-pulse" />
                      </div>
                      
                      {/* Home indicator */}
                      <div className="absolute bottom-1 sm:bottom-1.5 md:bottom-2 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 md:h-1.5 bg-white rounded-full opacity-60" />
                    </div>
                    
                    {/* Enhanced floating effect indicators */}
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-[#00b8db] rounded-full animate-ping opacity-60" />
                    <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#146ef6] rounded-full animate-pulse opacity-40" />
                    <div className="absolute top-1/4 -left-2 sm:-left-3 md:-left-4 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-[#2b7fff] rounded-full animate-bounce opacity-50" />
                    <div className="absolute bottom-1/4 -right-2 sm:-right-3 md:-right-4 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-br from-[#146ef6] to-[#00b8db] rounded-full animate-ping opacity-30" />
                  </div>
                </div>
                
                {/* Additional floating particles around the scene (dark blue theme) */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-[#1e40af] rounded-full animate-pulse opacity-40" />
                <div className="absolute bottom-8 left-12 sm:bottom-12 sm:left-16 md:bottom-16 md:left-20 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#0ea5e9] rounded-full animate-bounce opacity-50" />
                <div className="absolute top-1/3 left-3 sm:left-4 md:left-5 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#1d4ed8] rounded-full animate-ping opacity-30" />
              </div>
            </div>
          </div>
        </div>

        {/* Background gradient overlay - using CSS gradients */}
      </div>

      {/* CSS for custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}


