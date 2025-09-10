import React from 'react';

// Using simple SVG icons instead of external assets for deployment compatibility
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

export default function StatsSectionFigma() {
  return (
    <div className="bg-[#0a0a0f] box-border content-stretch flex flex-col gap-[40px] md:gap-[60px] items-start justify-start px-4 sm:px-8 lg:px-20 xl:px-[180px] py-16 md:py-28 relative w-full [&_img]:block [&_img]:w-full [&_img]:h-full [&_img]:object-contain">
      <div className="content-stretch flex flex-col gap-3 items-center justify-start w-full">
        <div className="bg-[rgba(99,102,241,0.1)] box-border inline-flex items-start justify-center px-[15px] py-2 rounded-[99999999px]"><span className="text-indigo-500 text-[14px] leading-[1.6] font-['Roboto']">PROVEN RESULTS</span></div>
        <div className="text-center font-['Poppins'] font-bold leading-[1.2] tracking-[-0.32px] text-[32px] sm:text-[48px] lg:text-[64px]"><p className="text-[#146ef6] mb-0">White-Label Development</p><p className="text-slate-50">You Can Rely On</p></div>
        <p className="text-zinc-500 text-[15px] md:text-[16px] font-['Roboto'] leading-[1.7] text-center max-w-[980px] px-2">Focus on growing your business while we handle the technical execution behind the scenes. Our white-label development services are designed for agencies and consultants who need a dependable partner to deliver high- quality web, software, and app solutions—on time, on brand, and under strict confidentiality.</p>
      </div>
      <div className="content-stretch flex flex-col lg:flex-row gap-10 lg:gap-20 items-stretch justify-start w-full">
        <div className="basis-0 flex flex-col gap-7 grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="backdrop-blur rounded-[21px] relative grow min-w-60">
              <div className="p-6 flex flex-col gap-2.5 items-end">
                <div className="relative size-9"><div className="absolute bottom-1/4 left-[66.67%] right-[8.33%] top-1/4 text-[#2b7fff]"><CheckIcon /></div><div className="absolute bottom-1/4 left-[8.33%] right-[66.67%] top-1/4 text-[#00b8db]"><StarIcon /></div></div>
                <div className="w-full">
                  <div className="text-[40px] sm:text-[56px] lg:text-[64px] font-bold bg-clip-text bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" style={{ WebkitTextFillColor: 'transparent' } as React.CSSProperties}>2,000+</div>
                  <div className="h-[3.5px] w-full rounded-full bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" />
                </div>
                <div className="w-full"><div className="text-[18px] text-slate-50 font-['Poppins']">projects delivered</div><div className="text-[14px] text-zinc-500 font-['Roboto']">Successfully completed</div></div>
              </div>
              <div className="absolute inset-0 rounded-[21px] border border-white/5" aria-hidden />
            </div>
            {/* Card 2 */}
            <div className="backdrop-blur rounded-[21px] relative grow min-w-60">
              <div className="p-6 flex flex-col gap-2.5 items-end">
                <div className="relative size-9">
                  <div className="absolute inset-[8.333%] bg-blue-500 rounded"></div>
                  <div className="absolute inset-[8.33%_33.33%] bg-blue-400 rounded"></div>
                  <div className="absolute bottom-1/2 left-[8.33%] right-[8.33%] top-1/2 bg-blue-300 rounded"></div>
                </div>
                <div className="w-full">
                  <div className="text-[40px] sm:text-[56px] lg:text-[64px] font-bold bg-clip-text bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" style={{ WebkitTextFillColor: 'transparent' } as React.CSSProperties}>25+</div>
                  <div className="h-[3.5px] w-full rounded-full bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" />
                </div>
                <div className="w-full"><div className="text-[18px] text-slate-50 font-['Poppins']">countries served</div><div className="text-[14px] text-zinc-500 font-['Roboto']">Global presence</div></div>
              </div>
              <div className="absolute inset-0 rounded-[21px] border border-white/5" aria-hidden />
            </div>
            {/* Card 3 */}
            <div className="backdrop-blur rounded-[21px] relative grow min-w-60">
              <div className="p-6 flex flex-col gap-2.5 items-end">
                <div className="relative size-9"><div className="absolute inset-[53.71%_29.17%_8.34%_29.18%] bg-blue-500 rounded"></div><div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[8.33%] bg-blue-400 rounded"></div></div>
                <div className="w-full">
                  <div className="text-[40px] sm:text-[56px] lg:text-[64px] font-bold bg-clip-text bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" style={{ WebkitTextFillColor: 'transparent' } as React.CSSProperties}>8+</div>
                  <div className="h-[3.5px] w-full rounded-full bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" />
                </div>
                <div className="w-full"><div className="text-[18px] text-slate-50 font-['Poppins']">years of expertise</div><div className="text-[14px] text-zinc-500 font-['Roboto']">Industry experience</div></div>
              </div>
              <div className="absolute inset-0 rounded-[21px] border border-white/5" aria-hidden />
            </div>
            {/* Card 4 */}
            <div className="backdrop-blur rounded-[21px] relative grow min-w-60">
              <div className="p-6 flex flex-col gap-2.5 items-end">
                <div className="relative size-9">
                  <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%] bg-blue-500 rounded"></div>
                  <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%] bg-blue-400 rounded"></div>
                  <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%] bg-blue-300 rounded"></div>
                  <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%] bg-blue-200 rounded"></div>
                </div>
                <div className="w-full">
                  <div className="text-[40px] sm:text-[56px] lg:text-[64px] font-bold bg-clip-text bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" style={{ WebkitTextFillColor: 'transparent' } as React.CSSProperties}>150+</div>
                  <div className="h-[3.5px] w-full rounded-full bg-gradient-to-r from-[#2b7fff] to-[#00b8db]" />
                </div>
                <div className="w-full"><div className="text-[18px] text-slate-50 font-['Poppins']">agency partnerships</div><div className="text-[14px] text-zinc-500 font-['Roboto']">Trusted relationships</div></div>
              </div>
              <div className="absolute inset-0 rounded-[21px] border border-white/5" aria-hidden />
            </div>
          </div>
          <div className="mt-2 sm:mt-4 w-full sm:w-[200px] h-[40px] rounded-[8px] inline-flex items-center justify-center bg-[#146ef6] hover:bg-[#125adb] transition-colors"><div className="text-white text-[14px] font-['Poppins'] font-semibold leading-none">Connect Now</div></div>
        </div>

        <div className="basis-0 flex-1 flex flex-col mt-8 lg:mt-0">
          <div className="flex flex-col gap-[18px] isolate">
            <div className="backdrop-blur-md relative rounded-[21px] w-full z-[2] border border-white/5 shadow-[0_0_40px_rgba(99,102,241,0.15)]">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-[49px] rounded-[14.5px] grid place-items-center">
                      <div className="relative size-[24.5px]"><div className="absolute inset-[8.333%] bg-blue-500 rounded"></div><div className="absolute inset-1/4 bg-blue-400 rounded"></div><div className="absolute inset-[41.667%] bg-blue-300 rounded"></div></div>
                    </div>
                    <div>
                      <div className="text-[18px] text-slate-50 font-['Poppins']">Development Dashboard</div>
                      <div className="text-[14px] text-zinc-500 font-['Roboto']">Real-time project insights</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2"><div className="size-[10.5px] rounded-full bg-[#00c950]" /><div className="text-[14px] text-zinc-500 font-['Roboto']">Live</div></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div className="backdrop-blur rounded-[21px] border border-white/5 p-6 text-center">
                    <div className="h-12 grid place-items-center">
                      <div className="relative size-12"><div className="absolute bottom-1/4 left-[66.67%] right-[8.33%] top-1/4 bg-blue-500 rounded"></div><div className="absolute bottom-1/4 left-[8.33%] right-[66.67%] top-1/4 bg-blue-400 rounded"></div></div>
                    </div>
                    <div className="text-white text-[14px] font-['Roboto']">Web Dev</div>
                  </div>
                  <div className="backdrop-blur rounded-[21px] border border-white/5 p-6 text-center">
                    <div className="h-12 grid place-items-center">
                      <div className="relative size-12"><div className="absolute inset-[8.33%_20.83%] bg-blue-500 rounded"></div><div className="absolute bottom-1/4 left-1/2 right-[49.96%] top-3/4 bg-blue-400 rounded"></div></div>
                    </div>
                    <div className="text-white text-[14px] font-['Roboto']">Mobile</div>
                  </div>
                  <div className="backdrop-blur rounded-[21px] border border-white/5 p-6 text-center">
                    <div className="h-12 grid place-items-center">
                      <div className="relative size-12"><div className="absolute inset-[8.33%_12.5%_66.67%_12.5%] bg-blue-500 rounded"></div><div className="absolute inset-[20.83%_12.5%_8.33%_12.5%] bg-blue-400 rounded"></div><div className="absolute bottom-[37.5%] left-[12.5%] right-[12.5%] top-1/2 bg-blue-300 rounded"></div></div>
                    </div>
                    <div className="text-white text-[14px] font-['Roboto']">Backend</div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-3"><div className="relative size-[17.5px]"><div className="absolute inset-[29.17%_8.33%_45.83%_66.67%] bg-blue-500 rounded"></div><div className="absolute inset-[29.17%_8.33%] bg-blue-400 rounded"></div></div><div className="text-[18px] text-slate-50 font-['Poppins']">Performance Metrics</div></div>
                  {[
                    { label: 'Client Satisfaction', width: '98%' },
                    { label: 'On-Time Delivery', width: '95%' },
                    { label: 'Quality Score', width: '97%' },
                  ].map((m) => (
                    <div key={m.label} className="mb-3">
                      <div className="flex items-center justify-between text-[14px]"><span className="text-slate-50 font-['Roboto']">{m.label}</span><span className="text-indigo-500 font-semibold">{m.width}</span></div>
                      <div className="h-[10.5px] rounded-full overflow-hidden bg-[rgba(39,39,42,0.3)]"><div className="h-full rounded-full bg-gradient-to-r from-[#2b7fff] to-[#00b8db] relative" style={{ width: m.width }}><div className="absolute inset-0 bg-white/20" /></div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="backdrop-blur-sm bg-[rgba(26,26,36,0.6)] rounded-[14px] border border-white/5 px-6 py-3 flex items-center gap-3"><div className="size-[35px] grid place-items-center border border-white/5 rounded-[10.5px]"><div className="relative size-[17.5px]"><div className="absolute inset-[8.33%_16.67%_8.32%_16.67%] bg-blue-500 rounded"></div></div></div><div><div className="text-slate-50 text-[16px] font-['Roboto']">Secure</div><div className="text-zinc-500 text-[14px] font-['Roboto']">Protected</div></div></div>
              <div className="backdrop-blur-sm bg-[rgba(26,26,36,0.6)] rounded-[14px] border border-white/5 px-6 py-3 flex items-center gap-3"><div className="size-[35px] grid place-items-center border border-white/5 rounded-[10.5px]"><div className="relative size-[17.5px]"><div className="absolute inset-[8.32%_12.49%] bg-blue-400 rounded"></div></div></div><div><div className="text-slate-50 text-[16px] font-['Roboto']">Fast</div><div className="text-zinc-500 text-[14px] font-['Roboto']">Optimized</div></div></div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 rotate-[4.383deg]"><div className="backdrop-blur-sm bg-[rgba(26,26,36,0.5)] rounded-[14px] size-[58.66px] grid place-items-center border-2 border-[rgba(99,102,241,0.4)]"><div className="relative size-[29.064px]"><div className="absolute inset-[8.33%_8.33%_12.2%_8.33%] bg-blue-500 rounded"></div></div></div></div>
        </div>
      </div>
    </div>
  );
}


