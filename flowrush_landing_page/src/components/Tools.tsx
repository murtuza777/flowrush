import { useMemo, useState } from 'react';
import { TOOLS_ASSETS } from '../assets';

// Simple SVG icons for category representation
const WebIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const MobileIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9" />
  </svg>
);

const AIIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const SEOIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const DesignIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
  </svg>
);

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState('Web Development');

  // Categories shown as tabs
  const categories = [
    { name: 'Web Development', icon: [WebIcon] },
    { name: 'Mobile Development', icon: [MobileIcon] },
    { name: 'Cloud & DevOps', icon: [CloudIcon] },
    { name: 'AI & Machine Learning', icon: [AIIcon] },
    { name: 'SEO & Analytics', icon: [SEOIcon] },
    { name: 'Design & UX', icon: [DesignIcon] }
  ];

  // Online logo helper using Simple Icons CDN
  const si = (slug: string, color?: string) => `https://cdn.simpleicons.org/${slug}/${color ?? 'ffffff'}`;

  const technologiesByCategory = useMemo(() => ({
    'Web Development': [
      { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { name: 'Next.js', logo: si('nextdotjs') },
      { name: 'Vue.js', logo: si('vuedotjs', '42b883') },
      { name: 'Node.js', logo: si('nodedotjs', '68A063') },
      { name: 'Laravel', logo: si('laravel', 'FF2D20') },
      { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
      { name: 'GraphQL', logo: si('graphql', 'E10098') },
      { name: 'GSAP', logo: si('greensock', '88CE02') }
    ],
    'Mobile Development': [
      { name: 'Flutter', logo: si('flutter', '02569B') },
      { name: 'Swift', logo: si('swift', 'F05138') },
      { name: 'Kotlin', logo: si('kotlin', '7F52FF') },
      { name: 'Xamarin', logo: TOOLS_ASSETS.xamarin }
    ],
    'Cloud & DevOps': [
      { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
      { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
      { name: 'Google Cloud', logo: si('googlecloud', '4285F4') },
      { name: 'Docker', logo: si('docker', '2496ED') },
      { name: 'Kubernetes', logo: si('kubernetes', '326CE5') },
      { name: 'Nginx', logo: si('nginx', '269539') }
    ],
    'AI & Machine Learning': [
      { name: 'OpenAI / DALL·E', logo: si('openai') },
      { name: 'Stability', logo: TOOLS_ASSETS.stability },
      { name: 'EleutherAI', logo: 'https://avatars.githubusercontent.com/u/76425555?s=200&v=4' }
    ],
    'SEO & Analytics': [
      { name: 'Google Analytics', logo: si('googleanalytics', 'E37400') },
      { name: 'Elastic', logo: si('elastic', '005571') },
      { name: 'Kibana', logo: si('kibana', 'E8478B') }
    ],
    'Design & UX': [
      { name: 'Figma', logo: TOOLS_ASSETS.figma },
      { name: 'Adobe XD', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' },
      { name: 'Photoshop', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
      { name: 'Sketch', logo: si('sketch', 'F7B500') }
    ]
  }) as const, []);

  return (
    <section className="bg-[#0a0a0f] h-screen w-full relative overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_20%_20%,#146ef6_0,transparent_40%),radial-gradient(circle_at_80%_20%,#2b7fff_0,transparent_35%)]" />

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col">
        {/* Title area */}
        <div className="pt-10 sm:pt-12 pb-4 sm:pb-6">
          <div className="mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="text-indigo-400 text-xs tracking-wide">WHAT WE USE</span>
            </div>
            <h2 className="mt-4 font-['Poppins'] font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              <span className="text-white">Tools, Stack and </span>
              <span className="text-[#146ef6]">Frameworks We Use</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/60 max-w-xl mx-auto">One consolidated view. Pick a category to see the relevant stack.</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-1 sm:px-2">
          <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center">
            {categories.map((c) => (
              <button
                key={c.name}
                onClick={() => setActiveCategory(c.name)}
                className={`group relative flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === c.name
                    ? 'bg-[#146ef6] border-[#146ef6] text-white'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/80'
                }`}
              >
                <span className="w-4 h-4 text-current">
                  {c.icon.map((I, i) => (
                    <span key={i} className="block w-4 h-4"><I /></span>
                  ))}
                </span>
                <span className="text-xs sm:text-sm font-medium">{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid area - grows to fill viewport, scrolls internally if needed */}
        <div className="flex-1 min-h-0">
          <div className="h-full overflow-auto pt-6 pb-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 px-1 sm:px-2">
              {technologiesByCategory[activeCategory as keyof typeof technologiesByCategory]?.map((tool) => (
                <div
                  key={tool.name}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-all duration-200 p-4 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl bg-black/20 border border-white/10">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <div className="mt-3 text-white text-sm font-medium">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


