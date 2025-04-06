
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Zap, Target, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
              À Propos <span className="text-gradient">d'eLimyt</span>
            </h1>
            
            <p className="text-lg text-center text-muted-foreground mb-16">
              Une nouvelle vision du web, centrée sur l'impact et la performance
            </p>
            
            <div className="bg-white dark:bg-elimyt-dark/40 rounded-2xl shadow-lg overflow-hidden mb-16">
              <div className="bg-gradient h-3"></div>
              
              <div className="p-8 md:p-10 space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Notre Histoire</h2>
                  
                  <p className="text-lg mb-4">
                    <span className="font-semibold text-primary">Tout a commencé avec une frustration.</span> Des sites lents, mal pensés, qui ressemblent à tous les autres. 
                    Des entreprises avec du potentiel… mais invisibles en ligne.
                  </p>
                  
                  <p className="text-lg mb-4 font-bold">
                    Alors on a décidé de changer les règles.
                  </p>
                  
                  <p className="text-lg mb-8">
                    eLimyt, c'est la réponse à une génération qui veut plus. 
                    Plus de clarté. Plus de vitesse. Plus d'impact. 
                    On n'est pas une agence classique. 
                    On est l'équipe de l'ombre qui conçoit des vitrines digitales puissantes, taillées pour marquer les esprits et déclencher l'action.
                  </p>
                  
                  <p className="text-lg mb-4">
                    Chaque site qu'on crée, c'est une passerelle entre une idée… et une marque qui attire, vend, fidélise.
                    Pas besoin d'un budget à 5 chiffres pour exister en ligne.
                    À 249,90€, on livre une image qui en vaut 2000.
                  </p>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <p className="text-lg m-0">
                    <span className="font-bold">🔥 Basée à Hayange</span>, notre agence propulse des indépendants, des commerçants et des visionnaires vers une présence digitale cohérente, stylée et prête à scaler.
                  </p>
                </div>
                
                <div className="border-t border-border pt-8 text-center">
                  <p className="text-xl font-bold mb-6">
                    Bienvenue chez eLimyt. <br />
                    Ici, vos limites deviennent votre tremplin.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white dark:bg-elimyt-dark/40 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient flex items-center justify-center mb-4 text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Notre Vision</h3>
                <p className="text-foreground/80">
                  Démocratiser l'accès à une présence en ligne professionnelle, percutante et performante.
                </p>
              </div>
              
              <div className="bg-white dark:bg-elimyt-dark/40 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient flex items-center justify-center mb-4 text-white">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Notre Mission</h3>
                <p className="text-foreground/80">
                  Créer des sites web qui combinent esthétique, fonctionnalité et ROI mesurable.
                </p>
              </div>
              
              <div className="bg-white dark:bg-elimyt-dark/40 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient flex items-center justify-center mb-4 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nos Valeurs</h3>
                <p className="text-foreground/80">
                  Excellence, accessibilité, transparence et résultats concrets pour nos clients.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Prêt à transformer votre présence en ligne ?</h2>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">Démarrer un projet</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
