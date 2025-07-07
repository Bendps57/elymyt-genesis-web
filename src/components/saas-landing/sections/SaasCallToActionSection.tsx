
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MessageCircle, Calendar } from "lucide-react";

const SaasCallToActionSection = () => {
  const navigate = useNavigate();
  
  const handleContactClick = (e) => {
    e.preventDefault();
    sessionStorage.setItem('scrollToContactForm', 'true');
    navigate('/contact');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-elimyt-blue via-elimyt-purple to-elimyt-pink text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full border border-white/40"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full border border-white/30"></div>
        <div className="absolute top-40 left-20 w-40 h-40 rounded-full border border-white/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à Transformer Votre Idée en Réalité ?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Discutons de votre projet et découvrons ensemble comment 
            nous pouvons optimiser vos processus métiers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left">
              <MessageCircle className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-3">Échange Initial Gratuit</h3>
              <p className="text-white/80 mb-4">
                30 minutes pour comprendre vos besoins, analyser la faisabilité 
                et vous proposer une première approche.
              </p>
              <Button 
                onClick={handleContactClick}
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 w-full"
              >
                Réserver un créneau
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left">
              <CheckCircle className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-3">Devis Détaillé</h3>
              <p className="text-white/80 mb-4">
                Cahier des charges, planning de développement, budget transparent 
                et accompagnement personnalisé.
              </p>
              <Button 
                onClick={handleContactClick}
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 w-full"
              >
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Pourquoi Choisir eLimyt ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <CheckCircle className="h-5 w-5 mb-2" />
                <p className="font-medium">Expertise technique confirmée</p>
                <p className="text-white/70 text-sm">Plus de 5 ans d'expérience en développement web</p>
              </div>
              <div>
                <CheckCircle className="h-5 w-5 mb-2" />
                <p className="font-medium">Approche business-oriented</p>
                <p className="text-white/70 text-sm">Solutions pensées pour votre ROI et votre croissance</p>
              </div>
              <div>
                <CheckCircle className="h-5 w-5 mb-2" />  
                <p className="font-medium">Accompagnement long terme</p>
                <p className="text-white/70 text-sm">Support et évolutions selon vos besoins</p>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleContactClick}
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-6 text-xl animate-pulse-soft group"
          >
            Commençons votre projet maintenant
            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <p className="mt-6 text-white/70">
            Réponse garantie sous 24h • Premier échange gratuit et sans engagement
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaasCallToActionSection;
