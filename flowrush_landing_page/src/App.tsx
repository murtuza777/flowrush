import { useState } from 'react';
import HeaderFigma from './components/HeaderFigma';
import HeroFigma from './components/HeroFigma';
import Marquee from './components/Marquee';
import StatsSection from './components/StatsSectionFigma';
import ProcessSteps from './components/ProcessSteps';
import Tools from './components/Tools';
import WhyChoose from './components/WhyChoose';
import PartnerExcellence from './components/PartnerExcellence';
import WhyTrust from './components/WhyTrust';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
      <HeaderFigma 
        onOpenAbout={() => setIsAboutModalOpen(true)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />
      
      {/* Main Content */}
      <main>
        <HeroFigma />
        <Marquee />
        <WhyChoose onConnect={() => setIsContactModalOpen(true)} />
        <StatsSection />
        <ProcessSteps />
        <PartnerExcellence />
        <WhyTrust />
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
            Flowrush Technologies is a leading white-label development partner specializing in web, software, and app development solutions. We work seamlessly with agencies worldwide to deliver exceptional results while keeping your brand front and center.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With over 8 years of experience and 150+ agency partnerships, we provide comprehensive technology solutions backed by strict NDAs and complete confidentiality.
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
  );
}

export default App;