import React, { useMemo, useState } from 'react';

// Figma-exported icon assets for exact visual match
const img = "http://localhost:3845/assets/d75fe52e8a5ce8e21f2f9576828b19c0524b2154.svg";
const img1 = "http://localhost:3845/assets/66648b45b9a151235b44883be3a33387c0bae287.svg";
const img2 = "http://localhost:3845/assets/16dbd09935b87f3038b13ce0fd3cbdf1bb1cb350.svg";
const img3 = "http://localhost:3845/assets/2cf57f5dc74f6054517f8d6be61d77d0f3ebfd40.svg";
const img4 = "http://localhost:3845/assets/cc56ee60aaf7ba95a72e5f5e6ef7f92459eba52d.svg";
const img5 = "http://localhost:3845/assets/6dd466118deb161aa6449753bce143cd0e3d8467.svg";
const img6 = "http://localhost:3845/assets/9434584e44ae9d88078210181970f30392722a8b.svg";
const img7 = "http://localhost:3845/assets/1875798469fd04d7c516b00ec69c314217940859.svg";
const img8 = "http://localhost:3845/assets/7cf79cf97a4e16d5df74da5c566d1ef17b79fb1f.svg";
const img9 = "http://localhost:3845/assets/36a3124c0d47efa08841fb46223be89781b79571.svg";
const img10 = "http://localhost:3845/assets/16760175e772091048b2156aad7d8467c1c3d508.svg";
const img11 = "http://localhost:3845/assets/61e5e7f5e87ab63e0353e778f0ea25db65c164fc.svg";
const img12 = "http://localhost:3845/assets/ee534fed894d112e6b83cb1baf9e8a2e53a57611.svg";
const img13 = "http://localhost:3845/assets/a862449135405deeb637ed9e6d987a3df03ccfc5.svg";
const img14 = "http://localhost:3845/assets/ef56c4d8e8f21ab3ca71c4f72077a4f6c1535a4d.svg";
// Note: dropdown chevrons from Figma are not used in functional form inputs

type Props = {
  onConnect: () => void;
};

const features = [
  {
    title: 'Global Expertise',
    description:
      'Delivering cutting-edge web, software, and app solutions trusted by agencies worldwide.',
  },
  {
    title: 'Seamless White-Label Partnership',
    description:
      'We work as your invisible tech team, ensuring your brand always stays in the spotlight.',
  },
  {
    title: 'Scalable & Custom Solutions',
    description:
      "Tailored development that grows with your client's needs and business goals.",
  },
  {
    title: '24/7 Global Support',
    description:
      'Round-the-clock availability to ensure smooth project execution and timely assistance.',
  },
  {
    title: 'Strong NDA & Confidentiality',
    description:
      'Strict non-disclosure and data security policies to safeguard your business and client trust.',
  },
  {
    title: 'Selective Agency Focus',
    description:
      'We partner with chosen agencies, offering dedicated attention and long-term collaboration.',
  },
];

export default function WhyChoose({ onConnect }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    city: '',
    country: '',
    whatsapp: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isEmailValid = useMemo(() => {
    if (!form.email) return false;
    return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(form.email);
  }, [form.email]);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Required';
    if (!form.email.trim()) next.email = 'Required';
    else if (!isEmailValid) next.email = 'Invalid email';
    if (!form.message.trim()) next.message = 'Required';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    onConnect();
  }

  return (
    <section className="bg-[#0a0a0f] px-6 sm:px-10 lg:px-[180px] py-28">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-[64px] leading-tight font-bold">
          <span className="text-[#146ef6]">Why Choose Flowrush Technologies</span>
          <br />
          <span className="text-white">as Your White Label Partner</span>
        </h2>
      </div>

      <div className="mt-14 content-stretch flex gap-[42px] items-center justify-start">
        {/* Left: exact Figma cards container */}
        <div className="basis-0 content-start flex flex-wrap gap-[21px] grow items-start justify-start min-h-px min-w-px relative">
          {/* Card 1 */}
          <div className="box-border content-stretch flex gap-[18px] h-[129px] items-start justify-start min-w-[300px] p-[14px] relative rounded-[14.5px] w-[365px]">
            <div className="content-stretch flex items-center justify-center relative rounded-[10.5px] shrink-0 size-[42px]">
              <div className="relative shrink-0 size-[21px]">
                <div className="absolute inset-[8.333%]"><img alt="" className="block max-w-none size-full" src={img} /></div>
                <div className="absolute inset-[8.33%_33.33%]"><img alt="" className="block max-w-none size-full" src={img1} /></div>
                <div className="absolute bottom-1/2 left-[8.33%] right-[8.33%] top-1/2"><img alt="" className="block max-w-none size-full" src={img2} /></div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[5.875px] grow items-start justify-start leading-[0] min-h-px min-w-px">
              <div className="flex flex-col font-['Poppins:Medium',_sans-serif] not-italic text-[16px] text-slate-50 tracking-[-0.16px] w-full"><p className="leading-[1.5]">Global Expertise</p></div>
              <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal text-[14px] text-zinc-500 w-full"><p className="leading-[1.6]">{features[0].description}</p></div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="box-border content-stretch flex gap-[18px] items-start justify-start min-w-[300px] p-[14px] relative rounded-[14.5px] w-[365px]">
            <div className="content-stretch flex items-center justify-center relative rounded-[10.5px] shrink-0 size-[42px]">
              <div className="relative shrink-0 size-[21px]">
                <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]"><img alt="" className="block max-w-none size-full" src={img3} /></div>
                <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]"><img alt="" className="block max-w-none size-full" src={img4} /></div>
                <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]"><img alt="" className="block max-w-none size-full" src={img5} /></div>
                <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]"><img alt="" className="block max-w-none size-full" src={img6} /></div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[5.875px] grow items-start justify-start leading-[0] min-h-px min-w-px">
              <div className="flex flex-col font-['Poppins:Medium',_sans-serif] not-italic text-[16px] text-slate-50 tracking-[-0.16px] w-full"><p className="leading-[1.5]">Seamless White-Label Partnership</p></div>
              <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal text-[14px] text-zinc-500 w-full"><p className="leading-[1.6]">{features[1].description}</p></div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="box-border content-stretch flex gap-[18px] h-[129px] items-start justify-start min-w-[300px] p-[14px] relative rounded-[14.5px] w-[365px]">
            <div className="content-stretch flex items-center justify-center relative rounded-[10.5px] shrink-0 size-[42px]">
              <div className="relative shrink-0 size-[21px]"><div className="absolute inset-[8.32%_12.49%]"><img alt="" className="block max-w-none size-full" src={img7} /></div></div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[5.875px] grow items-start justify-start leading-[0] min-h-px min-w-px text-[0px]">
              <div className="flex flex-col font-['Poppins:Medium',_sans-serif] text-slate-50 tracking-[-0.16px] w-full"><p className="font-['Poppins:Bold',_sans-serif] leading-[1.5] text-[18px]">Scalable & Custom Solutions</p></div>
              <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal text-zinc-500 w-full"><p className="font-['Inter:Bold',_sans-serif] font-bold leading-[1.6] not-italic text-[14px]">{features[2].description}</p></div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="box-border content-stretch flex gap-[18px] h-[129px] items-start justify-start min-w-[300px] p-[14px] relative rounded-[14.5px] w-[365px]">
            <div className="content-stretch flex items-center justify-center relative rounded-[10.5px] shrink-0 size-[42px]"><div className="relative shrink-0 size-[21px]"><div className="absolute inset-[12.5%]"><img alt="" className="block max-w-none size-full" src={img8} /></div></div></div>
            <div className="basis-0 content-stretch flex flex-col gap-[5.875px] grow items-start justify-start leading-[0] min-h-px min-w-px">
              <div className="flex flex-col font-['Poppins:Medium',_sans-serif] not-italic text-[16px] text-slate-50 tracking-[-0.16px] w-full"><p className="leading-[1.5]">24/7 Global Support</p></div>
              <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal text-[14px] text-zinc-500 w-full"><p className="leading-[1.6]">{features[3].description}</p></div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="box-border content-stretch flex gap-[18px] h-[129px] items-start justify-start min-w-[300px] p-[14px] relative rounded-[14.5px] w-[365px]">
            <div className="content-stretch flex items-center justify-center relative rounded-[10.5px] shrink-0 size-[42px]">
              <div className="relative shrink-0 size-[21px]">
                <div className="absolute inset-[45.83%_12.5%_8.33%_12.5%]"><img alt="" className="block max-w-none size-full" src={img9} /></div>
                <div className="absolute inset-[8.33%_29.17%_54.17%_29.17%]"><img alt="" className="block max-w-none size-full" src={img10} /></div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[5.875px] grow items-start justify-start leading-[0] min-h-px min-w-px">
              <div className="flex flex-col font-['Poppins:Medium',_sans-serif] not-italic text-[16px] text-slate-50 tracking-[-0.16px] w-full"><p className="leading-[1.5]">Strong NDA & Confidentiality</p></div>
              <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal text-[14px] text-zinc-500 w-full"><p className="leading-[1.6]">{features[4].description}</p></div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="box-border content-stretch flex gap-[18px] h-[129px] items-start justify-start min-w-[300px] p-[14px] relative rounded-[14.5px] w-[365px]">
            <div className="content-stretch flex items-center justify-center relative rounded-[10.5px] shrink-0 size-[42px]">
              <div className="relative shrink-0 size-[21px]">
                <div className="absolute inset-[8.333%]"><img alt="" className="block max-w-none size-full" src={img} /></div>
                <div className="absolute inset-1/4"><img alt="" className="block max-w-none size-full" src={img11} /></div>
                <div className="absolute inset-[41.667%]"><img alt="" className="block max-w-none size-full" src={img12} /></div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[5.875px] grow items-start justify-start leading-[0] min-h-px min-w-px">
              <div className="flex flex-col font-['Poppins:Medium',_sans-serif] not-italic text-[16px] text-slate-50 tracking-[-0.16px] w-full"><p className="leading-[1.5]">Selective Agency Focus</p></div>
              <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal text-[14px] text-zinc-500 w-full"><p className="leading-[1.6]">{features[5].description}</p></div>
            </div>
          </div>
          {/* Card 7 */}
          <div className="box-border content-stretch flex gap-[18px] h-[129px] items-start justify-start min-w-[300px] p-[14px] relative rounded-[14.5px] w-[365px]">
            <div className="content-stretch flex items-center justify-center relative rounded-[10.5px] shrink-0 size-[42px]">
              <div className="relative shrink-0 size-[21px]">
                <div className="absolute inset-[8.32%_8.32%_8.35%_8.34%]"><img alt="" className="block max-w-none size-full" src={img13} /></div>
                <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%]"><img alt="" className="block max-w-none size-full" src={img14} /></div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[5.875px] grow items-start justify-start leading-[0] min-h-px min-w-px">
              <div className="flex flex-col font-['Poppins:Medium',_sans-serif] not-italic text-[16px] text-slate-50 tracking-[-0.16px] w-full"><p className="leading-[1.5]">Global Trust</p></div>
              <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal text-[14px] text-zinc-500 w-full"><p className="leading-[1.6]">Chosen by leading digital vendors and agencies worldwide for reliable delivery.</p></div>
            </div>
          </div>
        </div>

        {/* Right: Figma-styled form container */}
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-sm backdrop-filter bg-[rgba(26,26,36,0.6)] box-border content-stretch flex flex-col gap-7 items-start justify-start p-[48px] relative rounded-[14px] w-[720px] max-w-full border border-[rgba(255,255,255,0.1)] shadow-[0px_0px_40px_0px_rgba(99,102,241,0.15)]"
        >
          <div className="text-center">
            <div className="text-indigo-500 text-xl font-medium">Request a Call Back</div>
            <div className="text-zinc-300">Available 24/7, Worldwide</div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Full Name</label>
              <input
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className="w-full rounded-md px-3 py-2 bg-[rgba(30,30,46,0.3)] border border-[#1e1e2e] text-gray-200 outline-none"
                placeholder="Enter name"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className="w-full rounded-md px-3 py-2 bg-[rgba(30,30,46,0.3)] border border-[#1e1e2e] text-gray-200 outline-none"
                placeholder="Enter Email address"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Company</label>
              <input
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
                className="w-full rounded-md px-3 py-2 bg-[rgba(30,30,46,0.3)] border border-[#1e1e2e] text-gray-200 outline-none"
                placeholder="Enter company name"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">City</label>
              <input
                value={form.city}
                onChange={(e) => update('city', e.target.value)}
                className="w-full rounded-md px-3 py-2 bg-[rgba(30,30,46,0.3)] border border-[#1e1e2e] text-gray-200 outline-none"
                placeholder="Enter City"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Country</label>
              <input
                value={form.country}
                onChange={(e) => update('country', e.target.value)}
                className="w-full rounded-md px-3 py-2 bg-[rgba(30,30,46,0.3)] border border-[#1e1e2e] text-gray-200 outline-none"
                placeholder="Select Country"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">WhatsApp</label>
              <input
                value={form.whatsapp}
                onChange={(e) => update('whatsapp', e.target.value)}
                className="w-full rounded-md px-3 py-2 bg-[rgba(30,30,46,0.3)] border border-[#1e1e2e] text-gray-200 outline-none"
                placeholder="Enter Whatsapp Number"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-gray-400 text-sm mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                className="w-full h-20 rounded-md px-3 py-2 bg-[rgba(30,30,46,0.3)] border border-[#1e1e2e] text-gray-200 outline-none"
                placeholder="Message"
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-[8px] bg-[#146ef6] hover:bg-[#2a7bfa] transition-colors text-white py-2.5 text-lg font-semibold"
          >
            Connect Now
          </button>
        </form>
      </div>
    </section>
  );
}


