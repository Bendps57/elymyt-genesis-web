
import { useRef, useState, useEffect } from "react";
import { Globe, Smartphone, Clock, Search, Zap } from "lucide-react";
import SectionTitle from "../../common/SectionTitle";

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Site Web PME Premium",
      description: "Design élégant et professionnel qui reflète parfaitement l'identité de votre entreprise"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "100% Responsive",
      description: "Site parfaitement adapté à tous les appareils: ordinateurs, tablettes et smartphones"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Livré en 7 jours",
      description: "Ne perdez plus de temps ni d'opportunités d'affaires avec une mise en ligne ultra-rapide"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Optimisé",
      description: "Optimisation pour les moteurs de recherche pour une meilleure visibilité en ligne pour votre entreprise"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Maximale",
      description: "Temps de chargement optimisé pour un site web professionnel et une expérience utilisateur fluide"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Domaine + Hébergement",
      description: "Nom de domaine professionnel et hébergement premium offerts la 1ère année"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Une Solution" 
          highlightedText="Complète" 
          subtitle="Tout ce dont votre PME, commerce ou activité artisanale a besoin pour une visibilité en ligne optimale" 
          className="mb-12" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-elimyt-dark/60 rounded-xl p-6 shadow-lg card-hover transition-all duration-700 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-white">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-foreground/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
