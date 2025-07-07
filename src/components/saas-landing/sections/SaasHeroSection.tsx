
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const SaasHeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-br from-elimyt-blue/10 to-elimyt-purple/10 animate-pulse-soft`}
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.1 + Math.random() * 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-elimyt-blue/10 to-elimyt-purple/10 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-elimyt-blue" />
              <span className="text-sm font-medium">De l'idée au SaaS opérationnel</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transformons Vos <span className="text-gradient">Idées Métiers</span> en Plateformes Web Puissantes
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Nous créons des solutions SaaS sur mesure qui automatisent vos processus, 
              optimisent votre productivité et font grandir votre entreprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button asChild className="btn-primary text-lg py-6 px-8 group" size="lg">
                <Link to="/contact#contact-form">
                  Discutons de votre projet
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-lg py-6 px-8 hover-scale" size="lg">
                <Link to="/portfolio">
                  Voir nos réalisations
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm md:text-base">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                <span>Solution 100% sur mesure</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                <span>Accompagnement complet</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                <span>Évolutif et scalable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasHeroSection;
