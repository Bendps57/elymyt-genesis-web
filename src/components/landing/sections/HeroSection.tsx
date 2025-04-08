
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mt-12">
          <div className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Transformez Votre <span className="text-gradient">Image Professionnelle</span> Avec un Site Web Premium en 7 Jours
            </h1>
            
            <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="text-xl md:text-2xl font-medium text-yellow-800 dark:text-yellow-300">
                Pour seulement <span className="text-3xl font-bold">249,90€</span>{" "}
                <span className="text-lg line-through text-gray-500">2000€</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Offre limitée - Seulement 5 places disponibles ce mois-ci
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Boostez votre crédibilité et captez plus de clients avec un site web professionnel clé en main, livré en 7 jours maximum.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild className="btn-primary text-lg py-6 animate-pulse-soft group" size="lg">
                <Link to="/contact#contact-form">
                  Je veux mon site maintenant
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-foreground/70">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-primary" />
                <span>Livré en 7 jours</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-primary" />
                <span>Satisfaction garantie</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-primary" />
                <span>Hébergement offert 1 an</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
