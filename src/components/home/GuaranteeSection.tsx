import { Shield, RefreshCcw, CheckCircle, Clock } from "lucide-react";

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Garantie Satisfait ou Remboursé",
      description: "14 jours pour tester votre site. Si vous n'êtes pas 100% satisfait, nous vous remboursons intégralement."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Livraison en 7 Jours",
      description: "Votre site web professionnel livré en une semaine maximum. Sinon, la deuxième semaine d'hébergement offerte."
    },
    {
      icon: <RefreshCcw className="h-8 w-8" />,
      title: "Révisions Illimitées",
      description: "Nous retravaillons votre site jusqu'à ce qu'il corresponde parfaitement à vos attentes."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Qualité Garantie",
      description: "Un site professionnel, moderne, responsive et optimisé pour le référencement."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nos <span className="text-primary">Garanties</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous nous engageons à votre satisfaction totale. Pas de risque pour vous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border card-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
