
import { Calendar, FileText, BarChart3, Users, Zap, Settings } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const UseCasesSection = () => {
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

  const useCases = [
    {
      icon: Calendar,
      title: "Plateforme de Réservation",
      problem: "Gestion manuelle des rendez-vous chronophage",
      solution: "Système de réservation en ligne avec notifications automatiques",
      result: "Gain de 15h/semaine + satisfaction client améliorée"
    },
    {
      icon: FileText,
      title: "Outil de Gestion Documentaire",
      problem: "Documents éparpillés, versions multiples, recherche difficile",
      solution: "Plateforme centralisée avec versioning et recherche intelligente",
      result: "90% de temps gagné sur la recherche de documents"
    },
    {
      icon: BarChart3,
      title: "Dashboard de Pilotage",
      problem: "Données dispersées dans plusieurs outils",
      solution: "Tableau de bord unifié avec KPIs en temps réel",
      result: "Prise de décision 3x plus rapide"
    },
    {
      icon: Users,
      title: "Plateforme Collaborative",
      problem: "Équipes qui perdent du temps en coordination",
      solution: "Espace de travail partagé avec workflows automatisés",
      result: "Productivité équipe +40%"
    },
    {
      icon: Zap,
      title: "Automatisation de Processus",
      problem: "Tâches répétitives qui mobilisent vos équipes",
      solution: "Workflows automatisés avec intégrations tierces",
      result: "Économie de 20h/semaine par collaborateur"
    },
    {
      icon: Settings,
      title: "CRM Sur Mesure",
      problem: "CRM générique qui ne colle pas à vos besoins",
      solution: "Solution adaptée à vos processus commerciaux exacts",
      result: "Taux de conversion commercial +25%"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cas d'Usage <span className="text-gradient">Concrets</span>
          </h2>
          <p className="text-xl text-foreground/80">
            Découvrez comment nous transformons les défis quotidiens 
            en opportunités d'efficacité et de croissance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-elimyt-dark/40 rounded-2xl p-6 shadow-lg card-hover transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-elimyt-blue to-elimyt-purple rounded-xl mb-4">
                <useCase.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
              
              <div className="space-y-3">
                <div className="border-l-4 border-red-200 pl-3">
                  <p className="text-red-600 dark:text-red-400 text-sm font-medium">Problème</p>
                  <p className="text-foreground/70 text-sm">{useCase.problem}</p>
                </div>
                
                <div className="border-l-4 border-blue-200 pl-3">
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Solution</p>
                  <p className="text-foreground/70 text-sm">{useCase.solution}</p>
                </div>
                
                <div className="border-l-4 border-green-200 pl-3">
                  <p className="text-green-600 dark:text-green-400 text-sm font-medium">Résultat</p>
                  <p className="text-foreground/70 text-sm font-medium">{useCase.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-gradient-to-r from-elimyt-blue/10 via-elimyt-purple/10 to-elimyt-pink/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg font-medium text-foreground/90 mb-4">
              💡 <strong>Votre idée n'est pas dans cette liste ?</strong>
            </p>
            <p className="text-foreground/70">
              Aucun problème ! Nous créons des solutions sur mesure pour tous types de besoins métiers. 
              L'important, c'est que votre outil vous ressemble et réponde parfaitement à vos enjeux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
