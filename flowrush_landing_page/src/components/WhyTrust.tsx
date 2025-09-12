// Simple SVG icons for deployment compatibility
const ShieldIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.818-4.954A9.955 9.955 0 0121 12c0 5.523-4.477 10-10 10S1 17.523 1 12s4.477-10 10-10c2.172 0 4.172.656 5.818 1.846" />
  </svg>
);

// Users icon used in the scalable teams card
const UsersIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

// Additional small icons for variety
const ClockIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m5 8l-4-4H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v5a4 4 0 01-4 4z" />
  </svg>
);

const HeadsetIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1a9 9 0 00-9 9v5a3 3 0 003 3h1a2 2 0 002-2v-5a2 2 0 00-2-2H6a7 7 0 0114 0h-1a2 2 0 00-2 2v5a2 2 0 002 2h1a3 3 0 003-3v-5a9 9 0 00-9-9z" />
  </svg>
);

const PuzzleIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4h2a2 2 0 114 0h2a2 2 0 012 2v2a2 2 0 110 4v2a2 2 0 01-2 2h-2a2 2 0 11-4 0H9a2 2 0 01-2-2v-2a2 2 0 110-4V6a2 2 0 012-2z"/>
  </svg>
);

export default function WhyTrust() {
  return (
    <section className="bg-[#0a0a0f] h-screen flex items-center px-4 sm:px-6 lg:px-12 xl:px-16 py-6 relative overflow-hidden" data-name="Section">
      {/* Subtle decorative shapes */}
      <div className="absolute top-8 left-8 w-16 h-16 border border-[rgba(99,102,241,0.2)] rounded-full" />
      <div className="absolute bottom-8 right-8 w-12 h-12 bg-[rgba(173,70,255,0.1)]" />

      <div className="max-w-[1200px] mx-auto w-full flex flex-col justify-center h-full">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-['Poppins'] font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.1] tracking-[-0.32px]">
            <span className="text-[#146ef6]">Why Agencies Worldwide Trust</span>
            <br />
            <span className="text-white">Flowrush as Their Tech Partner</span>
          </h2>
        </div>

        {/* Compact Grid - All cards visible in viewport */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {/* Card 1 */}
          <div className="relative backdrop-blur-sm bg-[rgba(26,26,36,0.8)] border border-white/10 rounded-[12px] pt-8 pb-4 px-4 shadow-lg hover:bg-[rgba(26,26,36,0.9)] transition-all duration-300">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-[10px] bg-[rgba(21,21,30,0.95)] border border-white/10 grid place-items-center text-[#00D4FF] shadow-md">
              <ShieldIcon />
            </div>
            <h3 className="font-['Poppins'] text-[13px] md:text-[14px] text-white font-semibold mb-2 text-center leading-tight">Strict Confidentiality & White-Label Delivery</h3>
            <p className="text-[11px] md:text-[12px] text-slate-300 text-center leading-relaxed">We operate under NDAs and deliver fully branded solutions—your clients never know we're there.</p>
          </div>

          {/* Card 2 */}
          <div className="relative backdrop-blur-sm bg-[rgba(26,26,36,0.8)] border border-white/10 rounded-[12px] pt-8 pb-4 px-4 shadow-lg hover:bg-[rgba(26,26,36,0.9)] transition-all duration-300">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-[10px] bg-[rgba(21,21,30,0.95)] border border-white/10 grid place-items-center text-[#FF6B35] shadow-md">
              <UsersIcon />
            </div>
            <h3 className="font-['Poppins'] text-[13px] md:text-[14px] text-white font-semibold mb-2 text-center leading-tight">Scalable On-Demand Teams</h3>
            <p className="text-[11px] md:text-[12px] text-slate-300 text-center leading-relaxed">Quickly expand your development capacity with dedicated experts, without the overhead.</p>
          </div>

          {/* Card 3 */}
          <div className="relative backdrop-blur-sm bg-[rgba(26,26,36,0.8)] border border-white/10 rounded-[12px] pt-8 pb-4 px-4 shadow-lg hover:bg-[rgba(26,26,36,0.9)] transition-all duration-300">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-[10px] bg-[rgba(21,21,30,0.95)] border border-white/10 grid place-items-center text-[#10B981] shadow-md">
              <ClockIcon />
            </div>
            <h3 className="font-['Poppins'] text-[13px] md:text-[14px] text-white font-semibold mb-2 text-center leading-tight">Reliable, On-Time Delivery</h3>
            <p className="text-[11px] md:text-[12px] text-slate-300 text-center leading-relaxed">We meet your deadlines—no delays, no excuses—so you can maintain client trust.</p>
          </div>

          {/* Card 4 */}
          <div className="relative backdrop-blur-sm bg-[rgba(26,26,36,0.8)] border border-white/10 rounded-[12px] pt-8 pb-4 px-4 shadow-lg hover:bg-[rgba(26,26,36,0.9)] transition-all duration-300">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-[10px] bg-[rgba(21,21,30,0.95)] border border-white/10 grid place-items-center text-[#F59E0B] shadow-md">
              <PuzzleIcon />
            </div>
            <h3 className="font-['Poppins'] text-[13px] md:text-[14px] text-white font-semibold mb-2 text-center leading-tight">Custom-Built Solutions</h3>
            <p className="text-[11px] md:text-[12px] text-slate-300 text-center leading-relaxed">Every product is tailored to your client's unique goals, tech stack, and business needs.</p>
          </div>

          {/* Card 5 */}
          <div className="relative backdrop-blur-sm bg-[rgba(26,26,36,0.8)] border border-white/10 rounded-[12px] pt-8 pb-4 px-4 shadow-lg hover:bg-[rgba(26,26,36,0.9)] transition-all duration-300">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-[10px] bg-[rgba(21,21,30,0.95)] border border-white/10 grid place-items-center text-[#8B5CF6] shadow-md">
              <ChatIcon />
            </div>
            <h3 className="font-['Poppins'] text-[13px] md:text-[14px] text-white font-semibold mb-2 text-center leading-tight">Transparent Communication</h3>
            <p className="text-[11px] md:text-[12px] text-slate-300 text-center leading-relaxed">No tech jargon—just clear, consistent updates and collaboration at every step.</p>
          </div>

          {/* Card 6 */}
          <div className="relative backdrop-blur-sm bg-[rgba(26,26,36,0.8)] border border-white/10 rounded-[12px] pt-8 pb-4 px-4 shadow-lg hover:bg-[rgba(26,26,36,0.9)] transition-all duration-300">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-[10px] bg-[rgba(21,21,30,0.95)] border border-white/10 grid place-items-center text-[#EF4444] shadow-md">
              <HeadsetIcon />
            </div>
            <h3 className="font-['Poppins'] text-[13px] md:text-[14px] text-white font-semibold mb-2 text-center leading-tight">Post-Launch Support & Maintenance</h3>
            <p className="text-[11px] md:text-[12px] text-slate-300 text-center leading-relaxed">We offer lifetime support, ensuring your client projects remain stable and successful long after delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


