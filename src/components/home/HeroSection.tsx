import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Clock, Star } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLoaded(true);
  }, []);

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
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            
            {/* Trust badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-success/10 text-success rounded-full px-4 py-2 text-sm font-medium">
                <Shield className="h-4 w-4" />
                <span>Garantie Satisfait ou Remboursé 14 jours</span>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight text-foreground">
              Votre Site Web Professionnel
              <span className="block text-primary mt-2">Livré en 7 Jours</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-8">
              Boostez votre crédibilité et attirez plus de clients avec un site web clé en main, moderne et optimisé pour les conversions.
            </p>

            {/* Price box */}
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-card rounded-xl p-6 corporate-shadow-lg border border-border">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Site Web Professionnel Complet</p>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-primary">249,90€</span>
                    <span className="text-xl line-through text-muted-foreground">2000€</span>
                  </div>
                  <p className="text-sm text-success font-medium mb-4">Économisez 87%</p>
                  
                  <Button 
                    className="w-full btn-primary text-lg py-6 group" 
                    size="lg"
                    onClick={handleContactClick}
                  >
                    Demander mon site maintenant
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Livré en 7 jours</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Satisfait ou remboursé</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-primary" />
                <span>Hébergement 1 an offert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
