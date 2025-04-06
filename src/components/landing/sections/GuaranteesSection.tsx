
import SectionTitle from "../../common/SectionTitle";
import { ShieldCheck, Clock } from "lucide-react";

const GuaranteesSection = () => {
  return (
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
  );
};

export default GuaranteesSection;
