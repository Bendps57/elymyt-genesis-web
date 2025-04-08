
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

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
  
  return (
    <footer className="bg-elimyt-dark text-white pt-16 pb-8 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl mb-4 inline-block">
              <img 
                src="https://i.imgur.com/Dre52Cp.png" 
                alt="Logo eLimyt" 
                className="h-36 object-contain mb-4"
                loading="lazy"
              />
            </Link>
            <p className="text-white/70 mb-6">
              Agence web spécialisée dans la création de sites internet modernes, 
              performants et à prix attractifs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">eLimyt</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Informations</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300 group"
                aria-label="Retour en haut"
              >
                <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 mt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} eLimyt. Tous droits réservés.</p>
          <p className="mt-2">
            Conçu avec passion pour offrir des expériences web exceptionnelles.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
