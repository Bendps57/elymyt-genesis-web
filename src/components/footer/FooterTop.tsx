
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FooterTop = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/contact") {
      sessionStorage.setItem('scrollToContactForm', 'true');
      navigate('/contact');
    } else {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2">
              Prêt à simplifier votre numérique ?
            </h3>
            <p className="text-white/70">
              Contactez-nous pour un échange gratuit et sans engagement.
            </p>
          </div>
          <Button
            className="bg-primary text-primary-foreground hover:brightness-110 rounded-full px-8 py-6 text-lg font-semibold group"
            onClick={handleContactClick}
          >
            Démarrer mon projet
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
