
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock } from "lucide-react";

const CtaSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/contact") {
      sessionStorage.setItem('scrollToContactForm', 'true');
      navigate('/contact');
    } else {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-navy text-primary-foreground relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-10 w-6 h-6 opacity-10">✦</div>
      <div className="absolute bottom-10 left-10 w-4 h-4 opacity-10">◆</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Prêt à simplifier votre numérique ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez les commerçants et artisans qui nous font confiance. Votre site web professionnel à partir de 24,90€ HT/mois, sans engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              className="bg-primary-foreground text-navy hover:bg-primary-foreground/90 text-lg py-6 px-8 rounded-full font-semibold group"
              size="lg"
              onClick={handleContact}
            >
              Démarrer mon projet
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Livraison en 7 jours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
