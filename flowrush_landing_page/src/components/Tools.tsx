import React, { useState } from 'react';

// Technology images from Figma assets
const reactLogo = "http://localhost:3845/assets/eb38569d77304f55bdd7ce9ce190337c2b9f40ed.png";
const nextjsLogo = "http://localhost:3845/assets/0d53d1cb64392697d4a4a8c31ed86f1bade1e6bf.svg";
const vueLogo = "http://localhost:3845/assets/44af36eeaeb6eaf404b7d46956044f69dd85c5a2.svg";
const angularLogo = "http://localhost:3845/assets/281e3df292b6cddc63c0403c09267ae96bda45ee.svg";
const nodejsLogo = "http://localhost:3845/assets/0b4068c00139acdb918a725667afff35216773d4.svg";
const laravelLogo = "http://localhost:3845/assets/8bb39a09be7da7a4dbc5b24e7a4387fad8f786f1.svg";
const djangoLogo = "http://localhost:3845/assets/3b7307cc3b07d82237ad6497d1d3e3a21462a4b5.svg";
const typescriptLogo = "http://localhost:3845/assets/f4ff5c8f207db343d7154bd4c8855c7ad23f02dd.svg";

// Category icons
const webDevIcon1 = "http://localhost:3845/assets/fa441c9148a858390b6118ce70ff208af23ba1be.svg";
const webDevIcon2 = "http://localhost:3845/assets/e40a8827ab879be681672499f7d4dd1d1f86a3aa.svg";
const mobileIcon1 = "http://localhost:3845/assets/68b3406b8f2daaf099b4ea9c8494a9ca7d7d4d28.svg";
const mobileIcon2 = "http://localhost:3845/assets/80eb2913b96fe574e3230a1bfafcb7e521fb245d.svg";
const cloudIcon = "http://localhost:3845/assets/943e2798a3490ea4dd7172d1d9459f3c894d54ec.svg";
const aiIcon1 = "http://localhost:3845/assets/52e10041b823bb9aae6c6591230bec190aba6e3b.svg";
const seoIcon1 = "http://localhost:3845/assets/e545a3ae0f2c2fe841ddb8b30c02d0e888268650.svg";
const seoIcon2 = "http://localhost:3845/assets/bd53cbd8a89bb77d04650883e4c88192c598ee03.svg";
const designIcon1 = "http://localhost:3845/assets/074af0276db523dc65c316bf2971b3ad0ba553e9.svg";
const designIcon2 = "http://localhost:3845/assets/f47d59a5f807dd8d9717c25ae064be6bc788e2f9.svg";

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState('Web Development');

  const categories = [
    { name: 'Web Development', icon: [webDevIcon1, webDevIcon2] },
    { name: 'Mobile Development', icon: [mobileIcon1, mobileIcon2] },
    { name: 'Cloud & DevOps', icon: [cloudIcon] },
    { name: 'AI & Machine Learning', icon: [aiIcon1] },
    { name: 'SEO & Analytics', icon: [seoIcon1, seoIcon2] },
    { name: 'Design & UX', icon: [designIcon1, designIcon2] }
  ];

  const technologiesByCategory = {
    'Web Development': [
      { name: 'React', logo: reactLogo },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-plain.svg' },
      { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' }
    ],
    'Mobile Development': [
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
      { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
      { name: 'Ionic', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg' },
      { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg' }
    ],
    'Cloud & DevOps': [
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
      { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' }
    ],
    'AI & Machine Learning': [
      { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },
      { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg' },
      { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' }
    ],
    'SEO & Analytics': [
      { name: 'Google Analytics', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg' },
      { name: 'Grafana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg' },
      { name: 'Elasticsearch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg' },
      { name: 'Prometheus', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' }
    ],
    'Design & UX': [
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      { name: 'Adobe XD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg' },
      { name: 'Sketch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg' },
      { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg' },
      { name: 'Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg' },
      { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' }
    ]
  };

  return (
    <section className="bg-[#0a0a0f] py-28 px-4 sm:px-8 lg:px-20 xl:px-[180px] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" />
      <div className="absolute bg-[rgba(99,102,241,0.1)] blur-[32px] filter opacity-[0.323] right-[32.74px] rounded-full size-[116.52px] top-[32.74px]" />
      
      <div className="relative z-10 max-w-[1344px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-5 items-center justify-start mb-[51px]">
          {/* Badge */}
          <div className="bg-[rgba(21,16,255,0.1)] border border-[rgba(21,16,255,0.2)] rounded-full px-[15px] py-2">
            <p className="font-['Roboto'] font-normal text-[14px] leading-[1.6] text-indigo-500 text-center">
              CUTTING-EDGE TECHNOLOGY
            </p>
          </div>
          
          {/* Main Heading */}
          <div className="font-['Poppins'] font-bold text-[64px] leading-[1.2] tracking-[-0.32px] text-center">
            <p className="text-[#146ef6] mb-0">Tools and Stack</p>
            <p className="text-slate-50">We Use</p>
          </div>
          
          {/* Subtitle */}
          <div className="font-['Roboto'] font-normal text-[16px] leading-[1.6] text-zinc-500 text-center max-w-[600px]">
            <p className="mb-0">We leverage the latest technologies and frameworks to build scalable, high-</p>
            <p>performance solutions across all platforms</p>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3.5 items-center justify-center mb-8">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex gap-[10.5px] items-center px-[21px] py-[11.5px] rounded-full transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-[#146ef6] border border-[#146ef6] text-white'
                  : 'bg-[#1a1a24] border border-[rgba(255,255,255,0.1)] hover:border-[#146ef6]/30'
              }`}
            >
              {/* Category Icon */}
              <div className="size-[17.5px] relative">
                {category.icon.map((iconSrc, iconIndex) => (
                  <img key={iconIndex} alt="" className="absolute inset-0 size-full" src={iconSrc} />
                ))}
              </div>
              
              {/* Category Name */}
              <span className="font-['Roboto'] font-normal text-[14px] leading-[1.6] text-slate-50">
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {technologiesByCategory[activeCategory as keyof typeof technologiesByCategory]?.map((tech, index) => (
            <div
              key={tech.name}
              className="backdrop-blur-sm bg-[rgba(26,26,36,0.6)] border border-[rgba(255,255,255,0.05)] rounded-[14px] shadow-[0px_0px_24px_0px_rgba(99,102,241,0.12)] p-8 flex flex-col gap-3 items-center w-full hover:border-[#146ef6]/30 transition-all duration-300 hover:scale-105"
            >
              {/* Technology Logo */}
              <div className="size-12 relative flex items-center justify-center">
                <img 
                  alt={tech.name} 
                  className="size-full object-contain filter drop-shadow-md" 
                  src={tech.logo}
                  onError={(e) => {
                    // Fallback to a generic tech icon if the image fails to load
                    const img = e.target as HTMLImageElement;
                    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzE0NmVmNiIvPgo8cGF0aCBkPSJNMjQgMTJMMzYgMjRMMjQgMzZMMTIgMjRMMjQgMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K';
                    img.style.opacity = '0.8';
                  }}
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.opacity = '1';
                  }}
                  style={{ 
                    opacity: '0',
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                />
              </div>
              
              {/* Technology Name */}
              <h3 className="font-['Poppins'] font-medium text-[18px] leading-[1.5] text-slate-50 text-center">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="flex flex-col gap-[21px] items-center">
          <p className="font-['Roboto'] font-normal text-[16px] leading-[1.6] text-zinc-500 text-center">
            Don't see the technology you need? We adapt to your preferred stack.
          </p>
          
          <button className="bg-[#146ef6] hover:bg-[#1257d3] text-white px-10 py-2.5 rounded-[8px] font-['Poppins'] font-semibold text-[18px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(20,110,246,0.4)]">
            Discuss Your Tech Requirements
          </button>
        </div>
      </div>
    </section>
  );
}


