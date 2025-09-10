// Simple SVG icons for deployment compatibility
const ShieldIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.818-4.954A9.955 9.955 0 0121 12c0 5.523-4.477 10-10 10S1 17.523 1 12s4.477-10 10-10c2.172 0 4.172.656 5.818 1.846" />
  </svg>
);

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

const HeartIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

export default function WhyTrust() {
  return (
    <section className="bg-[#0a0a0f] py-[84px] px-4 sm:px-8 lg:px-20 xl:px-[180px] relative overflow-hidden" data-name="Section">
      {/* Subtle decorative shapes */}
      <div className="absolute top-14 left-14 w-28 h-28 border border-[rgba(99,102,241,0.2)] rounded-full" />
      <div className="absolute bottom-16 right-16 w-20 h-20 bg-[rgba(173,70,255,0.1)]" />

      <div className="max-w-[1344px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="font-['Poppins'] font-bold text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.2] tracking-[-0.32px]">
            <span className="text-[#146ef6]">Why Agencies Worldwide Trust</span>
            <br />
            <span className="text-slate-50">Flowrush as Their Tech Partner</span>
          </h2>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="relative backdrop-blur-sm bg-[rgba(26,26,36,0.6)] border border-white/5 rounded-[14px] pt-20 pb-8 px-6">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-20 h-20 rounded-[23.673px] bg-[rgba(21,21,30,0.9)] border border-white/5 flex items-center justify-center">
              <div className="relative w-10 h-10">
                <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]">
                  <div className="w-full h-full text-[#146ef6]"><ShieldIcon /></div>
                </div>
              </div>
            </div>
            <h3 className="font-['Poppins'] text-[18px] text-slate-50 mb-2 text-center">Strict Confidentiality & White- Label Delivery</h3>
            <p className="text-[16px] text-zinc-500 text-center">We operate under NDAs and deliver fully branded solutions—your clients never know we're there.</p>
          </div>

          {/* Card 2 */}
          <div className="relative backdrop-blur-sm bg-[rgba(26,26,36,0.6)] border border-white/5 rounded-[14px] pt-20 pb-8 px-6">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-20 h-20 rounded-[23.673px] bg-[rgba(21,21,30,0.9)] border border-white/5 flex items-center justify-center">
              <div className="relative w-10 h-10">
                <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]">
                  <div className="w-full h-full text-[#146ef6]"><CheckIcon /></div>
                </div>
                <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]">
                  <div className="w-full h-full text-[#2b7fff]"><StarIcon /></div>
                </div>
                <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]">
                  <div className="w-full h-full text-[#00b8db]"><HeartIcon /></div>
                </div>
                <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]">
                  <div className="w-full h-full text-[#146ef6]"><CheckIcon /></div>
                </div>
              </div>
            </div>
            <h3 className="font-['Poppins'] text-[18px] text-slate-50 mb-2 text-center">Scalable On-Demand Teams</h3>
            <p className="text-[16px] text-zinc-500 text-center">Quickly expand your development capacity with dedicated experts, without the overhead.</p>
          </div>

          {/* Card 3 */}
          <div className="relative backdrop-blur-sm bg-[rgba(26,26,36,0.6)] border border-white/5 rounded-[14px] pt-20 pb-8 px-6">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-20 h-20 rounded-[23.673px] bg-[rgba(21,21,30,0.9)] border border-white/5 flex items-center justify-center">
              <div className="relative w-10 h-10">
                <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4">
                  <div className="w-full h-full text-[#146ef6]"><CheckIcon /></div>
                </div>
                <div className="absolute inset-[8.33%]">
                  <div className="w-full h-full text-[#2b7fff]"><StarIcon /></div>
                </div>
              </div>
            </div>
            <h3 className="font-['Poppins'] text-[18px] text-slate-50 mb-2 text-center">Reliable, On-Time Delivery</h3>
            <p className="text-[16px] text-zinc-500 text-center">We meet your deadlines—no delays, no excuses—so you can maintain client trust.</p>
          </div>

          {/* Card 4 */}
          <div className="relative backdrop-blur-sm bg-[rgba(26,26,36,0.6)] border border-white/5 rounded-[14px] pt-20 pb-8 px-6">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-20 h-20 rounded-[23.673px] bg-[rgba(21,21,30,0.9)] border border-white/5 flex items-center justify-center">
              <div className="relative w-10 h-10">
                <div className="absolute inset-[8.41%_12.68%]">
                  <div className="w-full h-full text-[#146ef6]"><ShieldIcon /></div>
                </div>
                <div className="absolute inset-[37.5%]">
                  <div className="w-full h-full text-[#00b8db]"><HeartIcon /></div>
                </div>
              </div>
            </div>
            <h3 className="font-['Poppins'] text-[18px] text-slate-50 mb-2 text-center">Custom-Built Solutions</h3>
            <p className="text-[16px] text-zinc-500 text-center">Every product is tailored to your client's unique goals, tech stack, and business needs.</p>
          </div>

          {/* Card 5 */}
          <div className="relative backdrop-blur-sm bg-[rgba(26,26,36,0.6)] border border-white/5 rounded-[14px] pt-20 pb-8 px-6">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-20 h-20 rounded-[23.673px] bg-[rgba(21,21,30,0.9)] border border-white/5 flex items-center justify-center">
              <div className="relative w-10 h-10">
                <div className="absolute inset-[12.5%_8.33%_8.35%_8.33%]">
                  <div className="w-full h-full text-[#146ef6]"><StarIcon /></div>
                </div>
              </div>
            </div>
            <h3 className="font-['Poppins'] text-[18px] text-slate-50 mb-2 text-center">Transparent Communication</h3>
            <p className="text-[16px] text-zinc-500 text-center">No tech jargon—just clear, consistent updates and collaboration at every step.</p>
          </div>

          {/* Card 6 */}
          <div className="relative backdrop-blur-sm bg-[rgba(26,26,36,0.6)] border border-white/5 rounded-[14px] pt-20 pb-8 px-6">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-20 h-20 rounded-[23.673px] bg-[rgba(21,21,30,0.9)] border border-white/5 flex items-center justify-center">
              <div className="relative w-10 h-10">
                <div className="absolute inset-[12.5%]">
                  <div className="w-full h-full text-[#2b7fff]"><HeartIcon /></div>
                </div>
              </div>
            </div>
            <h3 className="font-['Poppins'] text-[18px] text-slate-50 mb-2 text-center">Post-Launch Support & Maintenance</h3>
            <p className="text-[16px] text-zinc-500 text-center">We offer lifetime support, ensuring your client projects remain stable and successful long after delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


