
import { MessageSquare, Wrench, Rocket, HeadphonesIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ApproachSection = () => {
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

  const steps = [
    {
      icon: MessageSquare,
      title: "1. Écoute & Analyse",
      description: "Nous analysons vos processus actuels, identifions les points de friction et définissons ensemble les objectifs de votre solution.",
      color: "from-elimyt-blue to-elimyt-blue/80"
    },
    {
      icon: Wrench,
      title: "2. Conception & Développement",
      description: "Nous concevons et développons votre solution avec des itérations régulières pour s'assurer qu'elle répond parfaitement à vos besoins.",
      color: "from-elimyt-purple to-elimyt-purple/80"
    },
    {
      icon: Rocket,
      title: "3. Déploiement & Formation",
      description: "Nous mettons en ligne votre solution et formons votre équipe pour une adoption réussie et une utilisation optimale.",
      color: "from-elimyt-pink to-elimyt-pink/80"
    },
    {
      icon: HeadphonesIcon,
      title: "4. Support & Évolution",
      description: "Nous restons à vos côtés pour le support technique et l'évolution de votre plateforme selon vos nouveaux besoins.",
      color: "from-elimyt-blue to-elimyt-purple"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Notre <span className="text-gradient">Approche</span>
          </h2>
          <p className="text-xl text-foreground/80">
            Une méthode éprouvée qui garantit le succès de votre projet, 
            de l'idée initiale à la solution opérationnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl bg-white dark:bg-elimyt-dark/40 shadow-lg card-hover transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl mb-6`}>
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-foreground/70 text-lg leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-gradient-to-r from-elimyt-blue/10 via-elimyt-purple/10 to-elimyt-pink/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-lg font-medium text-foreground/90 mb-4">
              🚀 <strong>Résultat :</strong> Une solution qui s'intègre parfaitement dans votre quotidien 
              et transforme réellement votre façon de travailler.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
