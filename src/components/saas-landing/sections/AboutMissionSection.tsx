
import { Target, Users, Code, Lightbulb } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const AboutMissionSection = () => {
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

  const values = [
    {
      icon: Target,
      title: "Orientés Résultats",
      description: "Chaque solution que nous créons a un impact mesurable sur votre activité"
    },
    {
      icon: Users,
      title: "Approche Humaine",
      description: "Nous prenons le temps de comprendre vos besoins réels et vos contraintes"
    },
    {
      icon: Code,
      title: "Excellence Technique",
      description: "Technologies modernes, code propre et architecture scalable"
    },
    {
      icon: Lightbulb,
      title: "Innovation Pragmatique",
      description: "Des solutions créatives qui résolvent vraiment vos problèmes métiers"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Notre <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Nous croyons que chaque entreprise a des besoins uniques qui méritent des solutions uniques. 
            Notre mission est de transformer vos idées et processus métiers en outils numériques puissants 
            qui vous font gagner du temps, de l'efficacité et de l'argent.
          </p>
          <div className="bg-gradient-to-r from-elimyt-blue/10 via-elimyt-purple/10 to-elimyt-pink/10 rounded-2xl p-8">
            <p className="text-lg font-medium text-foreground/90">
              "De l'automatisation d'une tâche répétitive à la création d'une plateforme complète, 
              nous donnons vie à vos idées avec une approche technique rigoureuse et une vision business claire."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-elimyt-blue to-elimyt-purple rounded-2xl mb-4">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-foreground/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
