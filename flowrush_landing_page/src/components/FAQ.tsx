import { useState } from 'react';

const faqs = [
	{
		q: 'Do you offer white-label development services?',
		a: 'Yes, Flowrush specializes in white-label development. We work under strict NDAs and deliver fully branded solutions so your clients never know we’re involved.'
	},
	{
		q: 'What industries do you serve?',
		a: 'We work with clients across fintech, retail, healthcare, manufacturing, SaaS, and more—delivering tailored digital solutions that meet industry-specific needs.'
	},
	{
		q: 'Can you work with our existing design or development team?',
		a: 'Absolutely. We integrate seamlessly with your in-house team, acting as an extension to support and scale your development capacity.'
	},
	{
		q: 'What technologies do you specialize in?',
		a: 'We use modern stacks including React, Next.js, Node.js, Flutter, WordPress, Shopify, AWS, Azure, and more—ensuring performance, scalability, and security.'
	},
	{
		q: 'Do you provide post-launch support and maintenance?',
		a: 'Yes, we offer lifetime support for all projects to ensure stability, performance, and long-term success for your clients.'
	},
	{
		q: 'How do you ensure confidentiality and IP protection?',
		a: 'All projects are covered under strict NDA agreements. You retain full ownership of the code, design, and intellectual property.'
	},
	{
		q: 'What’s your typical project turnaround time?',
		a: 'Turnaround depends on the project scope, but we prioritize fast, efficient delivery with realistic timelines and milestone-based execution.'
	},
	{
		q: 'Can I hire a dedicated developer or a full team?',
		a: 'Yes, we offer flexible engagement models—including dedicated developers, full project teams, or staff augmentation based on your needs.'
	},
	{
		q: 'Is there a minimum project size or budget?',
		a: 'We’re flexible. Whether you\'re working on a small MVP or a full-scale enterprise platform, we tailor our solutions to fit your goals and budget.'
	}
];

export default function FAQ() {
	const [open, setOpen] = useState<number | null>(0);

	const mid = Math.ceil(faqs.length / 2);
	const leftFaqs = faqs.slice(0, mid);
	const rightFaqs = faqs.slice(mid);

	return (
		<section className="flex items-start py-4 md:py-6 px-0 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,110,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,110,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#146ef6] rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-[#2b7fff] rounded-full animate-bounce opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-[#00b8db] rounded-full animate-ping opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#146ef6] rounded-full animate-pulse opacity-30" />
        
        {/* Gradient blobs */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-[#6366f1] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-[#ad46ff] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 w-full max-w-none mx-0 p-0">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="font-['Poppins'] font-bold text-[24px] md:text-[32px] leading-[1.1] tracking-[-0.32px]">
            <span className="text-[#146ef6]">Frequently Asked</span>
            <br />
            <span className="text-slate-50">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 w-full">
          <div className="space-y-2">
            {leftFaqs.map((faq, index) => {
              const globalIndex = index;
              return (
                <div
                  key={globalIndex}
                  className="bg-[rgba(26,26,36,0.6)] border border-white/5 rounded-[8px] hover:border-[#146ef6]/30 transition-all duration-300"
                >
                  <button
                    className="w-full text-left px-4 md:px-5 py-4 md:py-5 flex justify-between items-center gap-3 group"
                    onClick={() => setOpen(open === globalIndex ? null : globalIndex)}
                  >
                    <span className="font-['Poppins'] font-semibold text-[15px] md:text-[17px] text-white group-hover:text-[#146ef6] transition-colors duration-300 leading-[1.35] flex-1">
                      {faq.q}
                    </span>
                    <div className="flex-shrink-0">
                      <div className={`w-7 h-7 rounded-full border-2 border-[#146ef6] flex items-center justify-center transition-all duration-300 ${
                        open === globalIndex ? 'bg-[#146ef6] rotate-180' : 'hover:bg-[#146ef6]/20'
                      }`}>
                        <svg 
                          className={`w-4 h-4 transition-colors duration-300 ${
                            open === globalIndex ? 'text-white' : 'text-[#146ef6]'
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  {open === globalIndex && (
                    <div className="px-4 md:px-5 pb-4 md:pb-5 animate-[fadeInDown_0.2s_ease-out]">
                      <p className="font-['Roboto'] text-[14px] md:text-[15px] text-gray-300 leading-[1.55]">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="space-y-2">
            {rightFaqs.map((faq, index) => {
              const globalIndex = mid + index;
              return (
                <div
                  key={globalIndex}
                  className="bg-[rgba(26,26,36,0.6)] border border-white/5 rounded-[8px] hover:border-[#146ef6]/30 transition-all duration-300"
                >
                  <button
                    className="w-full text-left px-4 md:px-5 py-4 md:py-5 flex justify-between items-center gap-3 group"
                    onClick={() => setOpen(open === globalIndex ? null : globalIndex)}
                  >
                    <span className="font-['Poppins'] font-semibold text-[15px] md:text-[17px] text-white group-hover:text-[#146ef6] transition-colors duration-300 leading-[1.35] flex-1">
                      {faq.q}
                    </span>
                    <div className="flex-shrink-0">
                      <div className={`w-7 h-7 rounded-full border-2 border-[#146ef6] flex items-center justify-center transition-all duration-300 ${
                        open === globalIndex ? 'bg-[#146ef6] rotate-180' : 'hover:bg-[#146ef6]/20'
                      }`}>
                        <svg 
                          className={`w-4 h-4 transition-colors duration-300 ${
                            open === globalIndex ? 'text-white' : 'text-[#146ef6]'
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  {open === globalIndex && (
                    <div className="px-4 md:px-5 pb-4 md:pb-5 animate-[fadeInDown_0.2s_ease-out]">
                      <p className="font-['Roboto'] text-[14px] md:text-[15px] text-gray-300 leading-[1.55]">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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


