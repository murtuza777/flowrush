import { useState } from 'react';

const faqs = [
  { 
    q: 'Do you offer white-label development services?', 
    a: 'Yes, absolutely! We specialize in white-label development services and operate under strict NDAs to ensure complete confidentiality. Your clients will only see your brand throughout the entire development process and final deliverables.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  { 
    q: 'Can you work with our existing team and processes?', 
    a: 'Definitely! We seamlessly integrate with your existing design teams, project managers, and development workflows. We adapt to your communication style, tools, and project management systems to ensure a smooth collaboration.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    )
  },
  { 
    q: 'What technologies and platforms do you specialize in?', 
    a: 'We have expertise across the full technology stack including React, Next.js, Vue.js, Node.js, Python/Django, Laravel, mobile development (React Native, Flutter), cloud services (AWS, Azure, GCP), AI/ML solutions, and much more. If you need a specific technology, we can adapt.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    q: 'Do you provide ongoing support and maintenance?', 
    a: 'Yes, we offer comprehensive post-launch support including 24/7 monitoring, regular updates, security patches, performance optimization, and feature enhancements. We provide flexible maintenance packages tailored to your needs.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  { 
    q: 'How do you ensure project quality and timely delivery?', 
    a: 'We follow rigorous quality assurance processes including code reviews, automated testing, and thorough QA testing. Our agile methodology with regular sprint reviews ensures transparency and on-time delivery. We maintain a 95%+ on-time delivery rate.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    q: 'What are your pricing models and how do you handle scaling?', 
    a: 'We offer flexible pricing models including fixed-price projects, dedicated team arrangements, and hourly consulting. Our global team allows us to scale quickly based on your project needs while maintaining cost-effectiveness.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  
  return (
    <section className="bg-[#0a0a0f] py-28 px-6 sm:px-10 lg:px-[180px] relative overflow-hidden">
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

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="font-['Poppins'] font-bold text-[40px] md:text-[64px] leading-[1.2] tracking-[-0.32px]">
            <span className="text-[#146ef6]">Frequently Asked</span>
            <br />
            <span className="text-slate-50">Questions</span>
          </h2>
          
          <p className="text-[16px] md:text-[18px] text-white/70 font-['Roboto'] leading-[1.6] max-w-[700px] mx-auto">
            Get answers to the most common questions about our white-label development services and partnership opportunities
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[rgba(26,26,36,0.6)] border border-white/5 rounded-[14px] backdrop-blur-sm shadow-lg hover:border-[#146ef6]/30 transition-all duration-300 hover:shadow-[0px_0px_40px_0px_rgba(20,110,246,0.15)]"
            >
              <button
                className="w-full text-left px-8 py-8 flex justify-between items-center group"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <div className="flex items-center gap-6 flex-1">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#146ef6] to-[#2b7fff] rounded-[10px] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">
                      {faq.icon}
                    </div>
                  </div>
                  <span className="font-['Poppins'] font-semibold text-[18px] md:text-[20px] text-white group-hover:text-[#146ef6] transition-colors duration-300 pr-4 leading-[1.4]">
                    {faq.q}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full border-2 border-[#146ef6] flex items-center justify-center transition-all duration-300 ${
                    open === index ? 'bg-[#146ef6] rotate-180' : 'hover:bg-[#146ef6]/20'
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-colors duration-300 ${
                        open === index ? 'text-white' : 'text-[#146ef6]'
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
              
              {open === index && (
                <div className="px-8 pb-8 animate-[fadeInDown_0.3s_ease-out]">
                  <div className="pl-20">
                    <p className="font-['Roboto'] text-[16px] md:text-[17px] text-gray-300 leading-[1.7]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-white/60 font-['Roboto'] text-[18px] mb-8">
            Still have questions? We'd love to help!
          </p>
          <button className="group relative bg-[#146ef6] hover:bg-[#1257d3] text-white px-8 py-4 rounded-[8px] font-['Poppins'] font-semibold text-[18px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(20,110,246,0.4)] overflow-hidden">
            <span className="relative z-10">Contact Our Team</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
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


