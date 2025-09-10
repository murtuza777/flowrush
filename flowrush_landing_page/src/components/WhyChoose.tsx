import React, { useState } from 'react';

// Simple SVG icons for deployment compatibility
const GlobeIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.818-4.954A9.955 9.955 0 0121 12c0 5.523-4.477 10-10 10S1 17.523 1 12s4.477-10 10-10c2.172 0 4.172.656 5.818 1.846" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);


const ClockIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

type Props = {
  onConnect: () => void;
};

const features = [
  {
    title: 'Global Expertise',
    description:
      'Delivering cutting-edge web, software, and app solutions trusted by agencies worldwide.',
    icon: GlobeIcon,
  },
  {
    title: 'Seamless White-Label Partnership',
    description:
      'We work as your invisible tech team, ensuring your brand always stays in the spotlight.',
    icon: ShieldIcon,
  },
  {
    title: 'Scalable & Custom Solutions',
    description:
      "Tailored development that grows with your client's needs and business goals.",
    icon: RocketIcon,
  },
  {
    title: '24/7 Global Support',
    description:
      'Round-the-clock availability to ensure smooth project execution and timely assistance.',
    icon: ClockIcon,
  },
  {
    title: 'Strong NDA & Confidentiality',
    description:
      'Strict non-disclosure and data security policies to safeguard your business and client trust.',
    icon: ShieldIcon,
  },
  {
    title: 'Selective Agency Focus',
    description:
      'We partner with chosen agencies, offering dedicated attention and long-term collaboration.',
    icon: StarIcon,
  },
];

export default function WhyChoose({ onConnect }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    city: '',
    country: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConnect();
  };

  const handleInputChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="bg-[#0a0118] py-16 md:py-28 px-4 sm:px-8 lg:px-20 xl:px-[180px] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#146ef6] rounded-full mix-blend-multiply filter blur-xl opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#2b7fff] rounded-full mix-blend-multiply filter blur-xl opacity-10" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-[rgba(99,102,241,0.1)] inline-flex items-center justify-center px-4 py-2 rounded-full mb-6">
            <span className="text-indigo-400 text-sm font-['Roboto'] font-medium">WHY CHOOSE US</span>
          </div>
          <h2 className="font-['Poppins'] font-bold text-[32px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.5px] mb-6">
            <span className="text-[#146ef6]">Trusted by Agencies</span>
          <br />
            <span className="text-slate-50">Worldwide</span>
        </h2>
          <p className="text-zinc-400 text-[16px] md:text-[18px] font-['Roboto'] leading-[1.6] max-w-[700px] mx-auto">
            We're not just another development team—we're your strategic technology partner, dedicated to making your agency more successful.
          </p>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#146ef6]/20 to-[#2b7fff]/20 rounded-lg border border-[#146ef6]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 text-[#146ef6]">
                      <feature.icon />
              </div>
            </div>
                  <div className="flex-1">
                    <h3 className="font-['Poppins'] font-semibold text-[18px] text-white mb-2 group-hover:text-[#146ef6] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 text-[14px] font-['Roboto'] leading-[1.5]">
                      {feature.description}
                    </p>
            </div>
          </div>
              </div>
            ))}
        </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-[rgba(26,26,36,0.6)] rounded-2xl border border-white/10 p-8">
            <div className="mb-6">
              <h3 className="font-['Poppins'] font-bold text-[24px] text-white mb-2">
                Ready to Partner?
              </h3>
              <p className="text-zinc-400 text-[14px] font-['Roboto']">
                Connect with our team to discuss your white-label development needs.
              </p>
          </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                    type="text"
                    placeholder="Your Name"
                value={form.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#146ef6] focus:border-transparent transition-all duration-300"
                    required
                  />
            </div>
            <div>
              <input
                    type="email"
                    placeholder="Email Address"
                value={form.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#146ef6] focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
            </div>
              
            <div>
              <input
                  type="text"
                  placeholder="Company/Agency Name"
                value={form.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#146ef6] focus:border-transparent transition-all duration-300"
                  required
              />
            </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                    type="text"
                    placeholder="City"
                value={form.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#146ef6] focus:border-transparent transition-all duration-300"
              />
            </div>
            <div>
              <input
                    type="text"
                    placeholder="Country"
                value={form.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#146ef6] focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          <button
            type="submit"
                className="w-full bg-gradient-to-r from-[#146ef6] to-[#2b7fff] hover:from-[#1257d3] hover:to-[#1d6aed] text-white px-6 py-3 rounded-lg font-['Poppins'] font-medium text-[16px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
                Connect with Team
          </button>
        </form>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <div className="w-4 h-4 text-[#146ef6]">
                  <ShieldIcon />
                </div>
                <span>Your information is secure and confidential</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
