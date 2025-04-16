
import { Rocket, Calendar, ArrowRight, Github, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/50 px-4 py-16">
      {/* Logo et en-tête */}
      <div className="w-full max-w-md mb-10 flex flex-col items-center animate-fade-in">
        <img 
          src="https://i.imgur.com/A6fX34u.png" 
          alt="eLymit Logo" 
          className="h-20 mb-6 animate-pulse-soft"
        />
        <div className="h-0.5 w-36 bg-gradient-to-r from-elimyt-blue via-elimyt-purple to-elimyt-pink mb-8"></div>
      </div>
      
      {/* Titre et message principal */}
      <div className="text-center mb-12 max-w-2xl animate-fade-in" style={{animationDelay: "0.1s"}}>
        <h1 className="text-4xl font-bold mb-4 text-gradient">Site en maintenance</h1>
        <p className="text-lg text-foreground/80 mb-6">
          Nous travaillons actuellement à l'amélioration de notre site pour mieux répondre à vos besoins.
        </p>
        <div className="flex items-center justify-center space-x-2 text-foreground/60">
          <Calendar className="h-5 w-5" />
          <p>Réouverture prévue demain soir</p>
        </div>
      </div>
      
      {/* Carte d'information */}
      <div className="w-full max-w-md bg-card rounded-xl shadow-lg p-6 mb-10 border border-border animate-fade-in" style={{animationDelay: "0.2s"}}>
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Rocket className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Nouveautés à venir</h2>
            <p className="text-foreground/70 mb-4">
              Nous préparons de nouvelles fonctionnalités et un design amélioré pour rendre votre expérience encore plus agréable.
            </p>
            <ul className="space-y-2">
              {["Interface plus intuitive", "Nouvelles offres de services", "Expérience utilisateur optimisée"].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-elimyt-purple" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bouton de contact */}
      <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
        <Button
          className="bg-gradient hover-scale group"
          size="lg"
        >
          <a href="mailto:contact@elymit.com" className="flex items-center">
            Nous contacter
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
      
      {/* Pied de page */}
      <div className="mt-16 text-foreground/50 text-sm animate-fade-in" style={{animationDelay: "0.4s"}}>
        <p>© {new Date().getFullYear()} eLymit. Tous droits réservés.</p>
        <div className="flex items-center justify-center mt-4 space-x-4">
          <a href="https://github.com/eLymit" className="hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      {/* Cercles décoratifs */}
      <div className="fixed top-1/4 left-1/3 w-64 h-64 rounded-full bg-elimyt-blue/5 blur-3xl"></div>
      <div className="fixed bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-elimyt-pink/5 blur-3xl"></div>
      <div className="fixed top-1/2 right-1/4 w-48 h-48 rounded-full bg-elimyt-purple/5 blur-3xl"></div>
    </div>
  );
};

export default MaintenancePage;
