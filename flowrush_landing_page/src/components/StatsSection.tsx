
// Simple SVG icons for deployment compatibility
const CheckIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function StatsSection() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center justify-center px-3 sm:px-4 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-28 relative w-full min-h-screen flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#66B0FF] rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#4A90E2] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000" />
      </div>
      
      <div className="content-stretch flex flex-col gap-4 md:gap-6 items-center justify-start w-full relative z-10 lg:hidden">
        <div className="bg-black/60 border border-white/20 box-border inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded-full">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white text-xs sm:text-sm font-medium uppercase tracking-wide">PROVEN RESULTS</span>
          </div>
        </div>
        <div className="text-center font-['Poppins'] font-bold leading-[1.2] sm:leading-[1.1] tracking-[-0.02em] text-[22px] xs:text-[26px] sm:text-[32px] md:text-[42px] px-2 sm:px-0">
          <p className="text-white">White-Label Development You Can Rely On</p>
        </div>
        <p className="text-white text-[14px] sm:text-[16px] md:text-[17px] font-['Roboto'] leading-[1.6] text-center max-w-[900px] px-3 sm:px-4">
          Focus on growing your business while we handle the technical execution behind the scenes. Our white-label development services are designed for agencies and consultants who need a dependable partner to deliver high-quality web, software, and app solutions—on time, on brand, and under strict confidentiality.
        </p>
        <div className="mt-4 sm:mt-6">
          <button className="group relative bg-black hover:bg-zinc-900 text-white px-6 sm:px-8 py-3 rounded-xl font-['Poppins'] font-semibold text-[14px] sm:text-[16px] transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_26px_rgba(0,0,0,0.35)] overflow-hidden border border-white/10">
            <span className="relative z-10">Connect Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>

      {/* Two-column layout on large screens */}
      <div className="w-full relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left column (lg and up) */}
        <div className="hidden lg:block">
          <div className="bg-black/60 border border-white/20 inline-flex items-center justify-center px-6 py-3 rounded-full mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium uppercase tracking-wide">PROVEN RESULTS</span>
            </div>
          </div>
          <h2 className="font-['Poppins'] font-bold text-white text-[34px] md:text-[42px] leading-[1.2] mb-4">White-Label Development You Can Rely On</h2>
          <p className="text-white text-[16px] md:text-[18px] font-['Roboto'] leading-[1.7] max-w-[640px]">
            Focus on growing your business while we handle the technical execution behind the scenes. Our white-label development services are designed for agencies and consultants who need a dependable partner to deliver high-quality web, software, and app solutions—on time, on brand, and under strict confidentiality.
          </p>
          <div className="mt-6">
            <button className="group relative bg-black hover:bg-zinc-900 text-white px-8 py-3 rounded-xl font-['Poppins'] font-semibold transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_26px_rgba(0,0,0,0.35)] overflow-hidden border border-white/10">
              <span className="relative z-10">Connect Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>

        {/* Right column: stats grid */}
        <div className="basis-0 flex flex-col gap-4 sm:gap-6 lg:gap-8 grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* Card 1 */}
            <div className="backdrop-blur rounded-[16px] sm:rounded-[21px] relative grow min-w-[140px] sm:min-w-60 border border-white/10 bg-black/60">
              <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-2.5">
                <div className="self-end w-6 h-6 text-white/60">
                  <CheckIcon />
                </div>
                <div className="w-full">
                  <div className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold text-white">2,000+</div>
                  <div className="h-[2.5px] sm:h-[3.5px] w-full rounded-full bg-white/20" />
                </div>
                <div className="w-full">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] text-white font-['Poppins']">projects delivered</div>
                  <div className="text-[12px] sm:text-[14px] text-white/60 font-['Roboto']">Successfully completed</div>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="backdrop-blur rounded-[16px] sm:rounded-[21px] relative grow min-w-[140px] sm:min-w-60 border border-white/10 bg-black/60">
              <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-2.5">
                <div className="self-end w-6 h-6 text-white/60">
                  <UsersIcon />
                </div>
                <div className="w-full">
                  <div className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold text-white">150+</div>
                  <div className="h-[2.5px] sm:h-[3.5px] w-full rounded-full bg-white/20" />
                </div>
                <div className="w-full">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] text-white font-['Poppins']">agency partners</div>
                  <div className="text-[12px] sm:text-[14px] text-white/60 font-['Roboto']">Active partnerships</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="backdrop-blur rounded-[16px] sm:rounded-[21px] relative grow min-w-[140px] sm:min-w-60 border border-white/10 bg-black/60">
              <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-2.5">
                <div className="self-end w-6 h-6 text-white/60"><ClockIcon /></div>
                <div className="w-full">
                  <div className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold text-white">9+</div>
                  <div className="h-[2.5px] sm:h-[3.5px] w-full rounded-full bg-white/20" />
                </div>
                <div className="w-full">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] text-white font-['Poppins']">years of expertise</div>
                  <div className="text-[12px] sm:text-[14px] text-white/60 font-['Roboto']">Industry experience</div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="backdrop-blur rounded-[16px] sm:rounded-[21px] relative grow min-w-[140px] sm:min-w-60 border border-white/10 bg-black/60">
              <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-2.5">
                <div className="self-end w-6 h-6 text-white/60"><ShieldIcon /></div>
                <div className="w-full">
                  <div className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold text-white">5+</div>
                  <div className="h-[2.5px] sm:h-[3.5px] w-full rounded-full bg-white/20" />
                </div>
                <div className="w-full">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] text-white font-['Poppins']">countries</div>
                  <div className="text-[12px] sm:text-[14px] text-white/60 font-['Roboto']">Global presence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}