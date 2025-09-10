

export default function Hero() {
  return (
    <section className="relative bg-[#0a0118] overflow-hidden min-h-[70vh] md:min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a1a24] to-[#0a0118]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#146ef6] rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-[#2b7fff] rounded-full animate-bounce opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-[#00b8db] rounded-full animate-ping opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#146ef6] rounded-full animate-pulse opacity-30" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,110,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,110,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Full width container - no side spacing */}
      <div className="w-full py-12 md:py-24 relative z-10">
        {/* Content and iPhone side by side layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center justify-between px-4 md:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto">
          
          {/* Left side - Content */}
          <div className="flex-1 w-full max-w-[700px]">
            {/* Main heading */}
            <h1 className="font-['Poppins'] font-bold text-[30px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-[1.15] tracking-[-0.8px] text-left mb-4 md:mb-6">
              <span className="text-[#146ef6]">White Label Global Experts in Web,</span>
              <br />
              <span className="text-slate-50 relative">
                Software & App Development
                <span className="inline-block w-1 h-[0.8em] bg-[#146ef6] ml-2 animate-pulse">|</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-[15px] md:text-[18px] text-white/70 font-['Roboto'] leading-[1.7] mb-6 md:mb-8 max-w-[600px]">
              We provide comprehensive global white-label technology solutions, working closely with a curated selection of agencies to serve as their trusted strategic technology partners. Our aim is to enhance their offerings and drive innovation in their projects.
            </p>

            {/* CTA Button */}
            <button className="group relative bg-[#146ef6] hover:bg-[#1257d3] text-white px-6 md:px-8 py-3 rounded-[8px] font-['Poppins'] font-semibold text-[15px] md:text-[18px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(20,110,246,0.4)] overflow-hidden mb-6 md:mb-8">
              <span className="relative z-10">Connect with Team</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            {/* Bottom text */}
            <p className="text-[13px] md:text-[16px] text-white/60 font-['Roboto'] leading-[1.6] max-w-[580px]">
              <span>Your trusted global partner for full-cycle digital development—backed by strict NDAs and complete confidentiality. </span>
              <span className="text-[#146ef6] font-medium">No tech jargon, just clear communication, real results, and on-time delivery</span>
              <span> tailored to your clients' needs.</span>
            </p>
          </div>

          {/* Right side - Enhanced iPhone Animation */}
          <div className="flex-1 w-full flex justify-center lg:justify-end items-center">
            <div className="relative">
              {/* Larger animated dashboard mockup */}
              <div className="relative w-[260px] sm:w-[320px] md:w-[420px] lg:w-[480px]">
                {/* Background dashboard preview - using CSS graphics */}
                <div className="w-full h-auto bg-gradient-to-br from-[#1a1a24] to-[#0a0118] rounded-2xl border border-white/10 drop-shadow-2xl opacity-80 aspect-[4/3] flex items-center justify-center">
                  <div className="w-[80%] h-[80%] bg-gradient-to-br from-[#146ef6]/20 to-[#2b7fff]/10 rounded-lg border border-[#146ef6]/20 flex flex-col p-4 gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="w-full h-2 bg-[#146ef6]/30 rounded"></div>
                      <div className="w-3/4 h-2 bg-[#2b7fff]/20 rounded"></div>
                      <div className="w-1/2 h-2 bg-[#00b8db]/20 rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating iPhone container with enhanced animation */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="relative">
                    {/* iPhone container with floating animation */}
                    <div className="w-40 h-80 md:w-48 md:h-96 bg-gradient-to-br from-gray-800 to-black rounded-[35px] p-3 shadow-2xl animate-[float_6s_ease-in-out_infinite] border border-gray-600">
                      {/* Screen */}
                      <div className="w-full h-full bg-[#0a0118] rounded-[28px] relative overflow-hidden">
                        {/* Status bar */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full" />
                        
                        {/* App interface */}
                        <div className="absolute inset-4 flex flex-col">
                          {/* Header */}
                          <div className="bg-[#146ef6]/20 rounded-lg p-3 mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-[#146ef6] to-[#2b7fff] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">F</span>
                              </div>
                              <div>
                                <div className="w-16 h-2 bg-white/40 rounded mb-1" />
                                <div className="w-12 h-1 bg-white/20 rounded" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Content cards */}
                          <div className="flex-1 space-y-2">
                            <div className="bg-white/5 rounded-lg p-2">
                              <div className="w-full h-1 bg-[#146ef6] rounded mb-1" />
                              <div className="w-3/4 h-1 bg-white/30 rounded" />
                            </div>
                            <div className="bg-white/5 rounded-lg p-2">
                              <div className="w-full h-1 bg-[#00b8db] rounded mb-1" />
                              <div className="w-2/3 h-1 bg-white/30 rounded" />
                            </div>
                            <div className="bg-white/5 rounded-lg p-2">
                              <div className="w-full h-1 bg-[#2b7fff] rounded mb-1" />
                              <div className="w-4/5 h-1 bg-white/30 rounded" />
                            </div>
                          </div>
                          
                          {/* Bottom navigation */}
                          <div className="flex justify-around py-2">
                            <div className="w-6 h-6 bg-[#146ef6] rounded-full animate-pulse" />
                            <div className="w-6 h-6 bg-white/20 rounded-full" />
                            <div className="w-6 h-6 bg-white/20 rounded-full" />
                            <div className="w-6 h-6 bg-white/20 rounded-full" />
                          </div>
                        </div>
                        
                        {/* Animated elements */}
                        <div className="absolute top-6 left-6 w-2 h-2 bg-[#00b8db] rounded-full animate-ping" />
                        <div className="absolute bottom-6 right-6 w-2 h-2 bg-[#146ef6] rounded-full animate-bounce" />
                        <div className="absolute top-1/2 right-4 w-1 h-1 bg-[#2b7fff] rounded-full animate-pulse" />
                      </div>
                      
                      {/* Home indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-white rounded-full opacity-60" />
                    </div>
                    
                    {/* Enhanced floating effect indicators */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#00b8db] rounded-full animate-ping opacity-60" />
                    <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-[#146ef6] rounded-full animate-pulse opacity-40" />
                    <div className="absolute top-1/4 -left-4 w-3 h-3 bg-[#2b7fff] rounded-full animate-bounce opacity-50" />
                    <div className="absolute bottom-1/4 -right-4 w-5 h-5 bg-gradient-to-br from-[#146ef6] to-[#00b8db] rounded-full animate-ping opacity-30" />
                  </div>
                </div>
                
                {/* Additional floating particles around the scene */}
                <div className="absolute top-10 left-10 w-3 h-3 bg-[#146ef6] rounded-full animate-pulse opacity-40" />
                <div className="absolute bottom-16 left-20 w-2 h-2 bg-[#00b8db] rounded-full animate-bounce opacity-60" />
                <div className="absolute top-1/3 left-5 w-4 h-4 bg-[#2b7fff] rounded-full animate-ping opacity-30" />
              </div>
            </div>
          </div>
        </div>

        {/* Background gradient overlay - using CSS gradients */}
        <div className="pointer-events-none select-none absolute inset-0 w-full h-full opacity-30 z-[-1] bg-gradient-to-br from-[#146ef6]/10 via-transparent to-[#2b7fff]/10"></div>
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


