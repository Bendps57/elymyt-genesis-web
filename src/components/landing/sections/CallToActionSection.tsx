
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CallToActionSection = () => {
  const navigate = useNavigate();
  
  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/contact");
    
    // Adding a small delay to ensure the DOM has loaded before scrolling
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-elimyt-blue/10 via-elimyt-purple/10 to-elimyt-pink/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à <span className="text-gradient">Transformer</span> Votre Présence En Ligne ?
          </h2>
          <p className="text-xl mb-8 text-foreground/80">
            Ne laissez plus passer d'opportunités. Obtenez un site web professionnel qui convertit, livré en 7 jours.
          </p>
          
          <div className="mb-8 p-4 bg-white dark:bg-elimyt-dark/40 rounded-lg border border-primary/20 shadow-lg">
            <p className="text-xl font-medium mb-2">
              Site Web Professionnel Complet
            </p>
            <div className="flex justify-center items-center gap-4 mb-4">
              <p className="text-3xl md:text-4xl font-bold">
                249,90€
              </p>
              <p className="text-xl line-through text-gray-500">
                2000€
              </p>
            </div>
            <p className="text-sm text-foreground/70 mb-4">
              Economisez 87% - Offre limitée dans le temps
            </p>
            <Button 
              asChild 
              className="btn-primary text-lg py-6 w-full animate-pulse-soft group" 
              size="lg"
            >
              <a href="/contact#contact-form" onClick={handleContactClick}>
                Je veux mon site maintenant
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <div className="flex justify-center mt-4 gap-2 text-sm text-foreground/70">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Satisfait ou remboursé pendant 14 jours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
