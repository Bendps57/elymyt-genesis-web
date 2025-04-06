
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Globe, 
  Smartphone, 
  Search, 
  Zap, 
  ShieldCheck, 
  Gift 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "../common/SectionTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const LandingPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setLoaded(true);
    
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
      title: "Site Web Premium",
      description: "Design élégant et professionnel qui reflète parfaitement votre identité de marque"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "100% Responsive",
      description: "Site parfaitement adapté à tous les appareils : ordinateurs, tablettes et smartphones"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Livré en 7 jours",
      description: "Ne perdez plus de temps ni d'opportunités d'affaires avec une mise en ligne ultra-rapide"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Optimisé",
      description: "Optimisation pour les moteurs de recherche pour une meilleure visibilité en ligne"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Maximale",
      description: "Temps de chargement optimisé pour une expérience utilisateur fluide"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Domaine + Hébergement",
      description: "Nom de domaine professionnel et hébergement premium offerts la 1ère année"
    }
  ];
  
  const bonuses = [
    {
      title: "Audit SEO Personnalisé",
      description: "Analyse complète pour maximiser votre visibilité sur Google (valeur 350€)"
    },
    {
      title: "Kit Réseaux Sociaux",
      description: "Bannières et visuels coordonnés pour vos profils sociaux (valeur 199€)"
    },
    {
      title: "Guide Premium",
      description: "Stratégies pour convertir les visiteurs en clients (valeur 99€)"
    }
  ];
  
  const faqItems = [
    {
      question: "Pourquoi votre site web est si abordable par rapport à d'autres agences ?",
      answer: "Grâce à notre processus optimisé et à nos modèles premium personnalisables, nous pouvons vous offrir un site web de qualité professionnelle à une fraction du prix du marché. Notre objectif est de rendre les sites web haut de gamme accessibles à tous les entrepreneurs."
    },
    {
      question: "Comment se déroule le processus de création ?",
      answer: "Après votre commande, nous vous envoyons un questionnaire pour comprendre vos besoins. Nous créons ensuite une maquette dans les 48h. Après vos retours, nous finalisons le site en 5 jours maximum et le mettons en ligne. Vous recevez une formation rapide pour gérer votre contenu."
    },
    {
      question: "Est-ce que je peux modifier mon site moi-même ?",
      answer: "Absolument ! Nous mettons en place un système simple qui vous permet de mettre à jour votre contenu facilement, sans connaissances techniques. Une formation rapide est incluse dans l'offre."
    },
    {
      question: "Que se passe-t-il après la première année ?",
      answer: "L'hébergement et le nom de domaine sont offerts la première année. Ensuite, vous ne payez que 9,90€/mois pour l'hébergement premium, les mises à jour de sécurité et l'assistance. Vous restez propriétaire de votre nom de domaine."
    },
    {
      question: "Et si je ne suis pas satisfait du résultat ?",
      answer: "Nous offrons une garantie 'Satisfait ou Remboursé' de 14 jours après la livraison finale. Si vous n'êtes pas entièrement satisfait, nous vous remboursons intégralement. De plus, nous garantissons une livraison en 7 jours ou le service est offert."
    }
  ];
  
  return (
    <div className="mt-16">
      {/* Hero Section avec offre principale */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
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
                  <Link to="/contact">
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
      
      {/* Avantages clés avec icônes */}
      <section ref={sectionRef} className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Une Solution" 
            highlightedText="Complète" 
            subtitle="Tout ce dont vous avez besoin pour une présence en ligne professionnelle et efficace" 
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
      
      {/* Avant / Après */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Transformez Votre" 
            highlightedText="Présence En Ligne" 
            subtitle="Voyez la différence qu'un site web professionnel peut faire pour votre entreprise" 
            className="mb-12" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border border-red-200 dark:border-red-800 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-red-500 mr-2">✗</span> AVANT
                </CardTitle>
                <CardDescription>Sans site web professionnel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-center">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Crédibilité limitée auprès des prospects</span>
                </p>
                <p className="flex items-center">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Perte de clients potentiels au profit de concurrents</span>
                </p>
                <p className="flex items-center">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Image non professionnelle</span>
                </p>
                <p className="flex items-center">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Difficulté à être trouvé sur internet</span>
                </p>
                <p className="flex items-center">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Opportunités d'affaires manquées</span>
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-green-200 dark:border-green-800 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> APRÈS
                </CardTitle>
                <CardDescription>Avec votre site eLimyt</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Image professionnelle qui inspire confiance</span>
                </p>
                <p className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Multiplication des prises de contact qualifiées</span>
                </p>
                <p className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Présence en ligne 24h/24 et 7j/7</span>
                </p>
                <p className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Visibilité accrue sur les moteurs de recherche</span>
                </p>
                <p className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Retour sur investissement rapide et mesurable</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Garanties */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Notre" 
            highlightedText="Promesse" 
            subtitle="Nous nous engageons à vous offrir un service exceptionnel" 
            className="mb-12" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-elimyt-dark/60 p-6 rounded-xl shadow-lg text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient flex items-center justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Satisfait ou Remboursé</h3>
              <p className="text-foreground/70">
                Si vous n'êtes pas 100% satisfait de votre site web dans les 14 jours suivant la livraison, nous vous remboursons intégralement. Sans question.
              </p>
            </div>
            
            <div className="bg-white dark:bg-elimyt-dark/60 p-6 rounded-xl shadow-lg text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Livré en 7 jours ou Offert</h3>
              <p className="text-foreground/70">
                Nous nous engageons à livrer votre site web en 7 jours maximum. Si nous dépassons ce délai, votre site est offert. C'est notre garantie.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bonus inclus */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-elimyt-blue/5 via-elimyt-purple/5 to-elimyt-pink/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Bonus <span className="text-gradient">Exclusifs</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Offerts avec votre site web (valeur totale : 648€)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="border-dashed border-2 border-primary/30">
                <CardHeader>
                  <div className="rounded-full w-10 h-10 bg-gradient flex items-center justify-center mb-2">
                    <Gift className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-xl">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{bonus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Questions" 
            highlightedText="Fréquentes" 
            subtitle="Tout ce que vous devez savoir avant de commander" 
            className="mb-12" 
          />
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="bg-white dark:bg-elimyt-dark/60 rounded-xl shadow-lg p-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left px-2 py-4 text-lg font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pb-4 pt-2 text-foreground/80">
                    {item.answer}
                  </AccordionContent>
                  {index < faqItems.length - 1 && <Separator className="my-0" />}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Call to action final */}
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
              <Button asChild className="btn-primary text-lg py-6 w-full animate-pulse-soft group" size="lg">
                <Link to="/contact">
                  Je veux mon site maintenant
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <div className="flex justify-center mt-4 gap-2 text-sm text-foreground/70">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Satisfait ou remboursé pendant 14 jours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
