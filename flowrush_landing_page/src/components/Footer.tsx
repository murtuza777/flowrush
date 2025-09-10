import React from 'react';
import WhatsAppButton from './WhatsAppButton';

type FooterProps = {
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
};

const logo = "http://localhost:3845/assets/bc279bc77c1bdeb307f551ea573887432a096828.png";

export default function Footer({ onOpenAbout, onOpenContact, onOpenPrivacy, onOpenTerms }: FooterProps) {
  return (
    <footer className="bg-[rgba(26,26,36,0.8)] border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#6366f1] rounded-full mix-blend-multiply filter blur-xl opacity-5" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#ad46ff] rounded-full mix-blend-multiply filter blur-xl opacity-5" />
      </div>

      <div className="relative z-10 max-w-[1344px] mx-auto px-4 sm:px-8 lg:px-20 xl:px-[180px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="h-[51px] w-[180px] bg-no-repeat bg-[length:110%_388.24%] bg-[52.8%_45.92%]" style={{ backgroundImage: `url('${logo}')` }} />
            <p className="text-gray-400 font-['Roboto'] text-[16px] leading-[1.6] max-w-[400px]">
              Your trusted global partner for full-cycle digital development. We deliver white-label solutions with complete confidentiality and exceptional quality.
            </p>
            <div className="flex gap-4">
              {/* Social Media Icons */}
              <a href="#" className="w-12 h-12 bg-[rgba(20,110,246,0.1)] border border-[#146ef6]/20 rounded-lg flex items-center justify-center hover:bg-[#146ef6] hover:scale-110 transition-all duration-300 group">
                <svg className="w-5 h-5 text-[#146ef6] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-[rgba(20,110,246,0.1)] border border-[#146ef6]/20 rounded-lg flex items-center justify-center hover:bg-[#146ef6] hover:scale-110 transition-all duration-300 group">
                <svg className="w-5 h-5 text-[#146ef6] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-[rgba(20,110,246,0.1)] border border-[#146ef6]/20 rounded-lg flex items-center justify-center hover:bg-[#146ef6] hover:scale-110 transition-all duration-300 group">
                <svg className="w-5 h-5 text-[#146ef6] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-['Poppins'] font-semibold text-[18px] text-white">Quick Links</h4>
            <div className="space-y-3">
              <button 
                onClick={onOpenAbout}
                className="block text-gray-400 hover:text-[#146ef6] font-['Roboto'] text-[16px] transition-colors duration-300"
              >
                About Us
              </button>
              <button 
                onClick={onOpenContact}
                className="block text-gray-400 hover:text-[#146ef6] font-['Roboto'] text-[16px] transition-colors duration-300"
              >
                Contact
              </button>
              <a 
                href="https://calendly.com/sahaj-baveja"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-[#146ef6] font-['Roboto'] text-[16px] transition-colors duration-300"
              >
                Book a Meeting
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="font-['Poppins'] font-semibold text-[18px] text-white">Legal</h4>
            <div className="space-y-3">
              <button 
                onClick={onOpenPrivacy}
                className="block text-gray-400 hover:text-[#146ef6] font-['Roboto'] text-[16px] transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button 
                onClick={onOpenTerms}
                className="block text-gray-400 hover:text-[#146ef6] font-['Roboto'] text-[16px] transition-colors duration-300"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <div className="text-gray-400 font-['Roboto'] text-[14px]">
            © 2025 Flowrush Technologies. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-['Roboto'] text-[14px]">Available 24/7 worldwide</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </footer>
  );
}


