import { useState, useEffect } from 'react';

function IconPlan() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white">
      <path d="M8 3h8a2 2 0 0 1 2 2v14l-6-3-6 3V5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8h6M9 11h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconDesign() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white">
      <path d="M3 17l6.5-6.5M14 4l6 6M8 21l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 4l6 6-9 9H8v-3l9-9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function IconExecute() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconQuality() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSupport() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white">
      <path d="M12 3a7 7 0 0 0-7 7v4a3 3 0 0 0 3 3h1v-6H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3a7 7 0 0 1 7 7v4a3 3 0 0 1-3 3h-1v-6h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ProcessSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Plan Together",
      description: "We onboard you as a partner, understand your goals, and plan your first project while discussing your client's exact requirements",
      progress: 20,
      icon: <IconPlan />
    },
    {
      number: "2", 
      title: "Design & Develop",
      description: "Our expert team crafts tailored web, software, and app solutions that align with your client's vision.",
      progress: 40,
      icon: <IconDesign />
    },
    {
      number: "3",
      title: "Seamless Execution", 
      description: "Transparent communication and timely delivery ensure a smooth process from start to finish.",
      progress: 60,
      icon: <IconExecute />
    },
    {
      number: "4",
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing to guarantee performance, security, and reliability.",
      progress: 80,
      icon: <IconQuality />
    },
    {
      number: "5",
      title: "Ongoing Support",
      description: "With 24/7 global availability, we provide continuous updates, maintenance, and assistance to keep your clients happy long-term.",
      progress: 100,
      icon: <IconSupport />
    }
  ];

  // Auto-advance steps every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="bg-[#0a0a0f] py-[60px] md:py-[84px] px-4 sm:px-8 lg:px-20 xl:px-[180px]">
      <div className="max-w-[1552px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-stretch lg:items-center">
        {/* Left side - Content */}
        <div className="flex-1 max-w-[759px]">
          <h2 className="font-['Poppins'] font-bold text-[34px] sm:text-[48px] lg:text-[64px] leading-[1.2] tracking-[-0.32px] mb-4 md:mb-8">
            <span className="text-[#146ef6]">5-Step Process to Keep</span>
            <br />
            <span className="text-slate-50">Your Clients Happy</span>
          </h2>
          
          <p className="text-[15px] md:text-[16px] text-zinc-500 font-['Roboto'] leading-[1.7] max-w-[600px]">
            Our streamlined methodology ensures every project delivers exceptional results that exceed expectations
          </p>
        </div>

        {/* Right side - Process Steps Carousel */}
        <div className="flex-1 max-w-[730px]">
          <div className="relative h-[420px] sm:h-[360px] overflow-hidden rounded-[24px]">
            {/* Steps container */}
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div key={index} className="w-full flex-shrink-0 h-full">
                  <div className="backdrop-blur-sm bg-[rgba(26,26,36,0.6)] border border-[#146ef6] rounded-[24px] p-12 h-full flex flex-col justify-center shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-transform duration-300 hover:scale-[1.02]">
                    {/* Step header */}
                    <div className="flex items-center justify-between min-h-[120px] mb-[18px]">
                      <div className="flex items-center gap-6 pr-5">
                        {/* Animated icon */}
                        <div className="w-[96px] h-[96px] relative overflow-visible">
                          <div className="absolute -left-1 -top-1 w-[96px] h-[96px] bg-gradient-to-br from-[#146ef6] to-[#2b7fff] rounded-full flex items-center justify-center animate-[pop_600ms_ease-out] shadow-[0_0_24px_rgba(20,110,246,0.35)]">
                            {step.icon}
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-start">
                          <div className="inline-flex items-center px-3 py-1 bg-white/10 border border-white/20 rounded-[18px] mb-2">
                            <span className="font-['Inter'] font-semibold text-[14px] text-white leading-[1.6]">
                              STEP {step.number}
                            </span>
                          </div>
                          <h3 className="font-['Poppins'] font-medium text-[22px] text-slate-50 leading-[1.3] text-left">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Progress circle */}
                      <div className="w-20 h-20 relative">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-gray-600"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="transparent"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-[#146ef6]"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="transparent"
                            strokeDasharray={`${step.progress}, 100`}
                            strokeLinecap="round"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-['Poppins'] font-medium text-[18px] text-white">
                            {step.progress}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[16px] text-white/70 font-['Roboto'] leading-[1.7] mb-12">
                      {step.description}
                    </p>

                    {/* Progress bar */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[14px] text-white/50 font-['Inter'] font-medium leading-[17.5px]">
                        <span>Progress</span>
                        <span>{index + 1} of 5 Steps</span>
                      </div>
                      <div className="bg-[rgba(39,39,42,0.6)] h-[10.5px] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#2b7fff] to-[#00b8db] rounded-full transition-all duration-700 relative"
                          style={{ width: `${step.progress}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step indicators */}
          <div className="flex gap-3 justify-center mt-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`h-4 rounded-[10px] transition-all duration-300 ${
                  index === currentStep 
                    ? 'w-[46px] bg-white/60' 
                    : 'w-4 bg-white/30 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pop {
          0% { transform: scale(0.85); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
