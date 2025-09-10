
// Simple SVG icons for deployment compatibility
const CheckIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const TrendingIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
    <div className="box-border content-stretch flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start justify-start px-3 sm:px-4 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-28 relative w-full">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#66B0FF] rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#4A90E2] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000" />
      </div>
      
      <div className="content-stretch flex flex-col gap-4 md:gap-6 items-center justify-start w-full relative z-10">
        <div className="bg-gradient-to-r from-[#66B0FF]/10 to-[#4A90E2]/10 border border-[#66B0FF]/20 box-border inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded-full">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#66B0FF] rounded-full animate-pulse"></div>
            <span className="text-[#66B0FF] text-xs sm:text-sm font-medium uppercase tracking-wide">PROVEN RESULTS</span>
          </div>
        </div>
        <div className="text-center font-['Poppins'] font-bold leading-[1.2] sm:leading-[1.1] tracking-[-0.02em] text-[22px] xs:text-[26px] sm:text-[32px] md:text-[42px] lg:text-[56px] xl:text-[64px] px-2 sm:px-0">
          <p className="text-[#66B0FF] mb-1 sm:mb-2 md:mb-4">White-Label Development</p>
          <p className="text-slate-50">You Can Rely On</p>
        </div>
        <p className="text-white/70 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-['Roboto'] leading-[1.6] text-center max-w-[800px] px-3 sm:px-4">
          Focus on growing your business while we handle the technical execution behind the scenes. Our white-label development services are designed for agencies and consultants who need a dependable partner to deliver high-quality solutions.
        </p>
      </div>
      
      <div className="content-stretch flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-stretch justify-start w-full relative z-10">
        <div className="basis-0 flex flex-col gap-4 sm:gap-6 lg:gap-8 grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* Card 1 */}
            <div className="backdrop-blur rounded-[16px] sm:rounded-[21px] relative grow min-w-[140px] sm:min-w-60 border border-white/5">
              <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-2.5 items-end">
                <div className="relative size-6 sm:size-9">
                  <div className="absolute bottom-1/4 left-[66.67%] right-[8.33%] top-1/4 text-[#2b7fff]">
                    <CheckIcon />
                  </div>
                  <div className="absolute bottom-1/4 left-[8.33%] right-[66.67%] top-1/4 text-[#00b8db]">
                    <StarIcon />
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold bg-clip-text bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" style={{ WebkitTextFillColor: 'transparent' }}>2,000+</div>
                  <div className="h-[2.5px] sm:h-[3.5px] w-full rounded-full bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" />
                </div>
                <div className="w-full">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] text-slate-50 font-['Poppins']">projects delivered</div>
                  <div className="text-[12px] sm:text-[14px] text-zinc-500 font-['Roboto']">Successfully completed</div>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="backdrop-blur rounded-[16px] sm:rounded-[21px] relative grow min-w-[140px] sm:min-w-60 border border-white/5">
              <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-2.5 items-end">
                <div className="relative size-6 sm:size-9">
                  <div className="absolute inset-[8.333%] text-[#2b7fff]">
                    <TrendingIcon />
                  </div>
                  <div className="absolute inset-[8.33%_33.33%] text-[#00b8db]">
                    <UsersIcon />
                  </div>
                  <div className="absolute bottom-1/2 left-[8.33%] right-[8.33%] top-1/2 text-[#146ef6]">
                    <CheckIcon />
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold bg-clip-text bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" style={{ WebkitTextFillColor: 'transparent' }}>150+</div>
                  <div className="h-[2.5px] sm:h-[3.5px] w-full rounded-full bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" />
                </div>
                <div className="w-full">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] text-slate-50 font-['Poppins']">agency partners</div>
                  <div className="text-[12px] sm:text-[14px] text-zinc-500 font-['Roboto']">Active partnerships</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="backdrop-blur rounded-[16px] sm:rounded-[21px] relative grow min-w-[140px] sm:min-w-60 border border-white/5">
              <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-2.5 items-end">
                <div className="relative size-6 sm:size-9">
                  <div className="absolute inset-[25%] text-[#2b7fff]">
                    <ClockIcon />
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold bg-clip-text bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" style={{ WebkitTextFillColor: 'transparent' }}>24/7</div>
                  <div className="h-[2.5px] sm:h-[3.5px] w-full rounded-full bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" />
                </div>
                <div className="w-full">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] text-slate-50 font-['Poppins']">global support</div>
                  <div className="text-[12px] sm:text-[14px] text-zinc-500 font-['Roboto']">Always available</div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="backdrop-blur rounded-[16px] sm:rounded-[21px] relative grow min-w-[140px] sm:min-w-60 border border-white/5">
              <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-2.5 items-end">
                <div className="relative size-6 sm:size-9">
                  <div className="absolute inset-[25%] text-[#00b8db]">
                    <ShieldIcon />
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold bg-clip-text bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" style={{ WebkitTextFillColor: 'transparent' }}>100%</div>
                  <div className="h-[2.5px] sm:h-[3.5px] w-full rounded-full bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" />
                </div>
                <div className="w-full">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] text-slate-50 font-['Poppins']">confidential</div>
                  <div className="text-[12px] sm:text-[14px] text-zinc-500 font-['Roboto']">Secure & private</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-0 flex flex-col gap-4 sm:gap-6 grow">
          <div className="backdrop-blur-md bg-[rgba(30,58,138,0.15)] rounded-[16px] sm:rounded-[21px] border border-white/20 p-4 sm:p-6 shadow-lg shadow-blue-500/10">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <div className="relative size-[14px] sm:size-[18px] text-[#146ef6]">
                <TrendingIcon />
              </div>
              <div className="text-[14px] sm:text-[16px] md:text-[18px] text-slate-50 font-['Poppins']">Performance Metrics</div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="backdrop-blur-sm bg-[rgba(30,58,138,0.2)] rounded-[10px] sm:rounded-[14px] border border-white/10 px-2 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3">
                <div className="size-[24px] sm:size-[35px] grid place-items-center border border-white/5 rounded-[6px] sm:rounded-[10.5px]">
                  <div className="relative size-[12px] sm:size-[18px] text-[#146ef6]">
                    <CheckIcon />
                  </div>
                </div>
                <div>
                  <div className="text-slate-50 text-[12px] sm:text-[14px] md:text-[16px] font-['Roboto']">On-Time</div>
                  <div className="text-zinc-500 text-[10px] sm:text-[12px] md:text-[14px] font-['Roboto']">Delivery</div>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-[rgba(30,58,138,0.2)] rounded-[10px] sm:rounded-[14px] border border-white/10 px-2 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3">
                <div className="size-[24px] sm:size-[35px] grid place-items-center border border-white/5 rounded-[6px] sm:rounded-[10.5px]">
                  <div className="relative size-[12px] sm:size-[18px] text-[#00b8db]">
                    <ShieldIcon />
                  </div>
                </div>
                <div>
                  <div className="text-slate-50 text-[12px] sm:text-[14px] md:text-[16px] font-['Roboto']">Secure</div>
                  <div className="text-zinc-500 text-[10px] sm:text-[12px] md:text-[14px] font-['Roboto']">Protected</div>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-[rgba(30,58,138,0.2)] rounded-[10px] sm:rounded-[14px] border border-white/10 px-2 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3">
                <div className="size-[24px] sm:size-[35px] grid place-items-center border border-white/5 rounded-[6px] sm:rounded-[10.5px]">
                  <div className="relative size-[12px] sm:size-[18px] text-[#2b7fff]">
                    <TrendingIcon />
                  </div>
                </div>
                <div>
                  <div className="text-slate-50 text-[12px] sm:text-[14px] md:text-[16px] font-['Roboto']">Fast</div>
                  <div className="text-zinc-500 text-[10px] sm:text-[12px] md:text-[14px] font-['Roboto']">Optimized</div>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-[rgba(30,58,138,0.2)] rounded-[10px] sm:rounded-[14px] border border-white/10 px-2 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3">
                <div className="size-[24px] sm:size-[35px] grid place-items-center border border-white/5 rounded-[6px] sm:rounded-[10.5px]">
                  <div className="relative size-[12px] sm:size-[18px] text-[#146ef6]">
                    <UsersIcon />
                  </div>
                </div>
                <div>
                  <div className="text-slate-50 text-[12px] sm:text-[14px] md:text-[16px] font-['Roboto']">Expert</div>
                  <div className="text-zinc-500 text-[10px] sm:text-[12px] md:text-[14px] font-['Roboto']">Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}