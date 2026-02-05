import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock } from "lucide-react";

const CtaSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/contact") {
      sessionStorage.setItem('scrollToContactForm', 'true');
      navigate('/contact');
    } else {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Avoir Votre Site Web Professionnel ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ne laissez plus passer d'opportunités. Obtenez un site qui convertit, livré en 7 jours maximum.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
              <div className="text-center">
                <p className="text-sm opacity-80 mb-1">Site Web Professionnel</p>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold">249,90€</span>
                  <span className="text-lg line-through opacity-60">2000€</span>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-white text-primary hover:bg-white/90 text-lg py-6 px-8 font-semibold group" 
              size="lg"
              onClick={handleContactClick}
            >
              Obtenir mon site maintenant
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Satisfait ou remboursé 14 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Livraison garantie en 7 jours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
