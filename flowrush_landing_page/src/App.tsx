import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import StatsSection from './components/StatsSection';
import ProcessSteps from './components/ProcessSteps';
import Tools from './components/Tools';
import WhyChoose from './components/WhyChoose';
import PartnerExcellence from './components/PartnerExcellence';
import WhyTrust from './components/WhyTrust';
import Recognitions from './components/Recognitions';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import FloatingButtons from './components/FloatingButtons';
import WhatsAppButton from './components/WhatsAppButton';
import ThemeToggle from './components/ThemeToggle';
import Silk from './components/Silk';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to dark theme
      setTheme('dark');
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      theme === 'dark' 
        ? 'text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'text-slate-900 bg-gradient-to-br from-blue-50 via-white to-blue-50'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <Silk
          speed={5}
          scale={1}
          color="#0008FF"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      
      {/* Theme Toggle */}
      <ThemeToggle onThemeChange={handleThemeChange} currentTheme={theme} />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <Header 
          onOpenAbout={() => setIsAboutModalOpen(true)}
          onOpenContact={() => setIsContactModalOpen(true)}
        />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Marquee />
        <WhyChoose onConnect={() => setIsContactModalOpen(true)} />
        <StatsSection />
        <ProcessSteps />
        <PartnerExcellence />
        <WhyTrust />
        <Recognitions />
        <Testimonials />
        <Tools />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer 
        onOpenAbout={() => setIsAboutModalOpen(true)}
        onOpenContact={() => setIsContactModalOpen(true)}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenTerms={() => setIsTermsModalOpen(true)}
      />

      {/* Floating Buttons */}
      <FloatingButtons onOpenContact={() => setIsContactModalOpen(true)} />
      <WhatsAppButton />

      {/* Modals */}
      <Modal 
        open={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        title="Get in Touch"
      >
        <ContactForm onClose={() => setIsContactModalOpen(false)} />
      </Modal>

      <Modal 
        open={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)}
        title="About Flowrush Technologies"
      >
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Flowrush Technologies is the specialized technology arm of Flowrush and Zencore Marketing LLP, created to deliver cutting-edge white-label solutions for agencies and enterprises worldwide. As a dedicated brand under Zencore, we focus on empowering businesses with scalable, future-ready technology services while allowing them to present solutions under their own name.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our expertise spans across web development, app development, SaaS platforms, AI/ML solutions, cloud services, and custom enterprise tech deliverables. We work seamlessly with marketing agencies, digital firms, and corporations, ensuring that their clients experience world-class services backed by the latest technology stacks.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With a foundation of trust, innovation, and over a decade of global delivery excellence, Flowrush Technologies has become the go-to partner for agencies looking for discreet, reliable, and high-quality white-label tech solutions. We don't just deliver projects; we build long-term partnerships that enable our clients to scale faster and stay ahead in a competitive digital ecosystem.
          </p>
        </div>
      </Modal>

      <Modal 
        open={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)}
        title="Privacy Policy"
      >
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            At Flowrush Technologies, we are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy outlines how we collect, use, and protect your data.
          </p>
          <h3 className="text-lg font-semibold text-white">Information We Collect</h3>
          <p className="text-gray-300">
            We collect information you provide directly to us, such as when you contact us, request services, or subscribe to our communications.
          </p>
          <h3 className="text-lg font-semibold text-white">How We Use Your Information</h3>
          <p className="text-gray-300">
            We use your information to provide services, communicate with you, and improve our offerings. We never share your data with third parties without your consent.
          </p>
        </div>
      </Modal>

      <Modal 
        open={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)}
        title="Terms & Conditions"
      >
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            These terms and conditions govern your use of our services and establish the contractual relationship between you and Flowrush Technologies.
          </p>
          <h3 className="text-lg font-semibold text-white">Service Agreement</h3>
          <p className="text-gray-300">
            By engaging our services, you agree to our white-label development terms, including confidentiality agreements and project specifications.
          </p>
          <h3 className="text-lg font-semibold text-white">Intellectual Property</h3>
          <p className="text-gray-300">
            All deliverables remain your property upon completion and payment. We maintain strict confidentiality of all client projects and data.
          </p>
        </div>
      </Modal>
      </div>
    </div>
  );
}

export default App;