import { useEffect, useState } from 'react';

type Review = {
  quote: string;
  author: string;
  role: string;
  country: string;
};

const reviews: Review[] = [
  {
    quote:
      'Flowrush are excellent white-label website developers for our agency. They consistently deliver fast, accurate, and well-structured development for our clients. Their team works with a wide range of tools and stacks, and communication with them has always been clear and professional.',
    author: 'Jessica Miller',
    role: 'Marketing Director',
    country: 'USA',
  },
  {
    quote:
      "The app development team at Flowrush are true experts in their field. They have built incredible applications for our clients, and we couldn’t be more grateful for their work. On top of that, their pricing is outstanding.",
    author: 'Daniel Carter',
    role: 'Founder',
    country: 'UK',
  },
  {
    quote:
      'Flowrush provided outstanding website development services for our digital marketing agency. Their capabilities gave us a fresh edge — from high-performing landing pages to modern e-commerce stores and extraordinary business websites, all built on the latest frameworks.',
    author: 'Emily Johnson',
    role: 'Co-Founder',
    country: 'Canada',
  },
  {
    quote:
      'Flowrush has become our go-to tech partner, handling all our development and deployment needs. Their 24/7 communication ensures there are no global time zone issues, and working with them has been nothing short of amazing.',
    author: 'Ahmed Al-Farouqi',
    role: 'CEO',
    country: 'UAE',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => setIndex(i);

  const current = reviews[index];

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-8 lg:px-20 xl:px-[180px] py-12 md:py-16 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#146ef6]/10 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#2b7fff]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-['Poppins'] font-bold text-[28px] sm:text-[40px] lg:text-[48px] leading-[1.2]">
            <span className="text-[#146ef6]">Reviews</span> & Testimonials
          </h2>
        </div>

        {/* Slider container */}
        <div className="relative">
          {/* Slide */}
          <div
            className="backdrop-blur-md bg-[rgba(26,26,36,0.6)] border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.35)] p-6 sm:p-8 md:p-10"
            key={index}
            style={{ willChange: 'opacity, transform', animation: 'fadeInSlide 800ms cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <p className="text-white text-[16px] md:text-[18px] leading-[1.8] mb-6">
              “{current.quote}”
            </p>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="text-white">
                <div className="font-['Poppins'] font-semibold text-[16px] md:text-[18px]">
                  {current.author}
                </div>
                <div className="text-white/70 text-[13px] md:text-[14px]">
                  {current.role} · {current.country}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 ml-auto">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`h-2.5 rounded-full transition-[width,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(10px) scale(0.995); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}


