import React from 'react';

// Figma-exported icons
const img = "http://localhost:3845/assets/719f29982fb390d8dcf85e9b028acce614baabd7.svg";
const img1 = "http://localhost:3845/assets/f96b399a437a8ed2f498522e12a27f115cf8fee2.svg";
const img2 = "http://localhost:3845/assets/9cf0502f27e1676fc65d5f7cb200e76860f29b93.svg";
const img3 = "http://localhost:3845/assets/860d279c7931ad4d8a1c14bccdef4c37280b65a6.svg";
const img4 = "http://localhost:3845/assets/3aa04447a4e5ceba35a8406a1eb81e1722dcd37e.svg";
const img5 = "http://localhost:3845/assets/78625f4b2d4c45c70c1fbe47fb0861860d357fa8.svg";
const img6 = "http://localhost:3845/assets/fba6fd061d87d8cc4c7df20ce5bc958b739b5c10.svg";
const img7 = "http://localhost:3845/assets/f05a168c9571582ec24fc54022b68b2ea3d9e783.svg";
const img8 = "http://localhost:3845/assets/fd3011aa80409f589299392f1f33b8aa8d005989.svg";
const img9 = "http://localhost:3845/assets/299e9c93f0d154c54dcc9d836075af7b4f79da2b.svg";
const img10 = "http://localhost:3845/assets/310c1a9554c753ad8265fb25bb35d16e1e2608fc.svg";

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
                  <img src={img} alt="confidentiality" className="w-full h-full" />
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
                  <img src={img1} alt="on-demand-1" className="w-full h-full" />
                </div>
                <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]">
                  <img src={img2} alt="on-demand-2" className="w-full h-full" />
                </div>
                <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]">
                  <img src={img3} alt="on-demand-3" className="w-full h-full" />
                </div>
                <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]">
                  <img src={img4} alt="on-demand-4" className="w-full h-full" />
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
                  <img src={img5} alt="on-time-1" className="w-full h-full" />
                </div>
                <div className="absolute inset-[8.33%]">
                  <img src={img6} alt="on-time-2" className="w-full h-full" />
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
                  <img src={img7} alt="custom-1" className="w-full h-full" />
                </div>
                <div className="absolute inset-[37.5%]">
                  <img src={img8} alt="custom-2" className="w-full h-full" />
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
                  <img src={img9} alt="transparent" className="w-full h-full" />
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
                  <img src={img10} alt="support" className="w-full h-full" />
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


