
import { Link } from "react-router-dom";
import { ArrowUp, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const services = [
    { name: "Site Vitrine", href: "/services#vitrine" },
    { name: "E-commerce", href: "/services#ecommerce" },
    { name: "Refonte de Site", href: "/services#refonte" },
    { name: "Référencement SEO", href: "/services#seo" },
    { name: "Maintenance Web", href: "/services#maintenance" }
  ];
  
  const company = [
    { name: "À propos", href: "/about#top" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Témoignages", href: "/#testimonials" },
    { name: "Contact", href: "/contact" }
  ];
  
  const legal = [
    { name: "Mentions légales", href: "/legal" },
    { name: "Politique de confidentialité", href: "/privacy" },
    { name: "CGV", href: "/terms" }
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:contact@elimyt.com", label: "Email" },
    { icon: <Phone size={20} />, href: "tel:+33612345678", label: "Téléphone" }
  ];
  
  return (
    <footer className="relative">
      {/* Section signature avec le logo */}
      <div className="bg-gradient-to-br from-elimyt-blue/20 via-elimyt-purple/20 to-elimyt-pink/20 pt-16 pb-8 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          {/* Logo en grand format */}
          <div className="w-full max-w-3xl mb-8 transform hover:scale-105 transition-transform duration-500">
            <img 
              src="https://i.imgur.com/EFrii9y.png" 
              alt="eLimyt Signature" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Tagline */}
          <p className="text-gray-600 text-lg mb-12 text-center max-w-2xl">
            L'expertise numérique qui propulse votre visibilité en ligne
          </p>

          {/* Cercles décoratifs */}
          <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-elimyt-blue/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-elimyt-pink/5 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-elimyt-purple/5 blur-3xl"></div>
        </div>
      </div>
      
      {/* Séparateur stylisé */}
      <div className="h-4 bg-gradient-to-r from-elimyt-blue via-elimyt-purple to-elimyt-pink"></div>
      
      {/* Main footer content */}
      <div className="bg-elimyt-dark text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          {/* Footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand section */}
            <div>
              <div className="mb-4 relative inline-block">
                <Link to="/" className="text-2xl font-bold inline-block text-gradient">
                  eLimyt
                </Link>
                <div className="absolute -bottom-2 left-0 h-0.5 w-16 bg-gradient-to-r from-elimyt-blue via-elimyt-purple to-elimyt-pink"></div>
              </div>
              <p className="text-white/70 mb-6">
                Agence web spécialisée dans la création de sites internet modernes, 
                performants et à prix attractifs.
              </p>
              
              {/* Social media links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    className="p-2 rounded-full bg-white/10 hover:bg-gradient-to-r from-elimyt-blue to-elimyt-pink transition-all duration-300 hover-scale" 
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Services section */}
            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Nos Services
                <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-elimyt-blue to-elimyt-purple"></div>
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center before:w-0 before:h-0.5 hover:before:w-1 before:bg-elimyt-pink before:mr-0 hover:before:mr-1 before:transition-all"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company section */}
            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                eLimyt
                <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-elimyt-purple to-elimyt-pink"></div>
              </h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center before:w-0 before:h-0.5 hover:before:w-1 before:bg-elimyt-purple before:mr-0 hover:before:mr-1 before:transition-all"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Information section */}
            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Informations
                <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-elimyt-blue to-elimyt-pink"></div>
              </h3>
              <ul className="space-y-3">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center before:w-0 before:h-0.5 hover:before:w-1 before:bg-elimyt-blue before:mr-0 hover:before:mr-1 before:transition-all"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={scrollToTop}
                  className="bg-gradient-to-r from-elimyt-blue to-elimyt-purple p-3 rounded-full transition-all duration-300 group hover:shadow-lg hover:shadow-elimyt-purple/20"
                  aria-label="Retour en haut"
                >
                  <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Footer bottom */}
          <div className="pt-8 mt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/50 text-sm">
                © {new Date().getFullYear()} eLimyt. Tous droits réservés.
              </p>
              <div className="mt-4 md:mt-0">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-sm text-white/50">Conçu avec</span>
                  <span className="text-elimyt-pink">❤</span>
                  <span className="text-sm text-white/50">par eLimyt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="h-6 bg-elimyt-dark">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" className="w-full h-6 transform translate-y-1">
          <path 
            fill="#1A1F2C" 
            fillOpacity="1" 
            d="M0,32L80,26.7C160,21,320,11,480,16C640,21,800,43,960,42.7C1120,43,1280,21,1360,10.7L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
