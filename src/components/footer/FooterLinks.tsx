
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const services = [
  { name: "Site Vitrine", href: "/services" },
  { name: "E-commerce", href: "/services" },
  { name: "Refonte de Site", href: "/services" },
  { name: "Référencement SEO", href: "/services" },
  { name: "Maintenance Web", href: "/services" }
];

const company = [
  { name: "À propos", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" }
];

const legal = [
  { name: "Mentions légales", href: "/legal" },
  { name: "Politique de confidentialité", href: "/privacy" },
  { name: "CGV", href: "/terms" }
];

const FooterLinks = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="bg-elimyt-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
          </div>
          
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
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="mb-8">
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
                      onClick={() => {
                        if (item.name === "Contact") {
                          setTimeout(() => {
                            const contactForm = document.getElementById('contact-form');
                            if (contactForm) {
                              contactForm.scrollIntoView({ behavior: 'smooth' });
                            } else {
                              window.scrollTo(0, 0);
                            }
                          }, 100);
                        } else {
                          window.scrollTo(0, 0);
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
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
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
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
      </div>
    </div>
  );
};

export default FooterLinks;
