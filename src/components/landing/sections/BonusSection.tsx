
import { Gift } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const BonusSection = () => {
  const bonuses = [
    {
      title: "Audit SEO Personnalisé",
      description: "Analyse complète pour maximiser votre visibilité sur Google (valeur 350€)"
    },
    {
      title: "Guide Premium",
      description: "Stratégies pour convertir les visiteurs en clients (valeur 99€)"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-elimyt-blue/5 via-elimyt-purple/5 to-elimyt-pink/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Bonus <span className="text-gradient">Exclusifs</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Offerts avec votre site web (valeur totale : 449€)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
  );
};

export default BonusSection;
