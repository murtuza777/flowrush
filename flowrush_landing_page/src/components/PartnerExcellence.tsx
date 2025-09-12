// Simple check icon for deployment compatibility
const CheckIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function PartnerExcellence() {
  return (
    <section className="bg-[#0a0a0f] min-h-screen flex items-center px-6 sm:px-10 lg:px-[180px] py-16 relative overflow-hidden" data-name="Section">
      {/* Background gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-gradient-to-r from-[#6366f133] to-[#2b7fff33] blur-[32px] opacity-60 rounded-full left-[33%] right-[51.7%] top-[18.3%] bottom-[44.7%]" />
        <div className="absolute bg-gradient-to-l from-[#ad46ff33] to-[#f6339a33] blur-[32px] opacity-80 rounded-full left-[49.9%] right-[35.4%] top-[41%] bottom-[23.2%]" />
      </div>

      {/* Card container */}
      <div className="relative max-w-[1344px] mx-auto rounded-[21px] backdrop-blur-md bg-[rgba(26,26,36,0.6)] border border-white/5 shadow-[0_0_40px_rgba(99,102,241,0.15)]">
        <div className="px-6 sm:px-10 lg:px-14 py-14 flex flex-col items-center">
          {/* Pill */}
          <div className="backdrop-blur-sm bg-[rgba(21,16,255,0.10)] border border-[rgba(21,16,255,0.30)] text-indigo-500 rounded-full px-[22px] py-3.5 text-[14px]">Partnership Excellence</div>

          {/* Heading */}
          <h2 className="text-center mt-7 font-['Poppins'] font-bold text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.2] tracking-[-0.32px]">
            <span className="text-slate-50">Think of us as an </span>
            <span className="text-[#146ef6]">extension of your team</span>
          </h2>

          {/* Description */}
          <div className="mt-5 text-center text-[18px] leading-[1.5]">
            <p className="text-zinc-400">Let's kick things off with a no-pressure consultation and explore how we can grow</p>
            <p className="mt-1">
              <span className="text-zinc-400">together—because </span>
              <span className="font-['Poppins'] text-slate-50">when you succeed, we all succeed.</span>
            </p>
          </div>

          {/* CTA */}
          <button className="group relative mt-7 bg-[#146ef6] hover:bg-[#1257d3] text-white px-10 py-2.5 rounded-[8px] font-['Poppins'] font-semibold text-[18px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(20,110,246,0.4)] overflow-hidden">
            <span className="relative z-10">Let's Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>

          {/* Bottom divider + bullets */}
          <div className="w-full pt-11 mt-10 border-t border-white/5 flex flex-wrap gap-7 items-center justify-center">
            <div className="flex items-center gap-2 text-[14px] text-zinc-400">
              <div className="w-6 h-6 text-[#146ef6]"><CheckIcon /></div>
              <span>150+ Agencies Trust Us</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] text-zinc-400">
              <div className="w-6 h-6 text-[#146ef6]"><CheckIcon /></div>
              <span>24/7 Global Support</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] text-zinc-400">
              <div className="w-6 h-6 text-[#146ef6]"><CheckIcon /></div>
              <span>NDA Protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


