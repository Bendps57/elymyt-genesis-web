
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import FooterServiceLinks from "./FooterServiceLinks";
import FooterCompanyLinks from "./FooterCompanyLinks";
import FooterLegalLinks from "./FooterLegalLinks";

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
          
          <FooterServiceLinks />
          
          <div>
            <FooterCompanyLinks />
            <FooterLegalLinks />
            
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
