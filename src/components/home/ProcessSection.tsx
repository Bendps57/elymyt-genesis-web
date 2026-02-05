import { MessageSquare, Pencil, Rocket, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Échange Initial",
      description: "Nous discutons de votre projet, vos besoins et vos objectifs lors d'un appel gratuit."
    },
    {
      number: "02",
      icon: <Pencil className="h-6 w-6" />,
      title: "Création",
      description: "Nous concevons votre site avec un design professionnel adapté à votre activité."
    },
    {
      number: "03",
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Révisions",
      description: "Vous validez le résultat. Nous ajustons selon vos retours jusqu'à satisfaction."
    },
    {
      number: "04",
      icon: <Rocket className="h-6 w-6" />,
      title: "Mise en Ligne",
      description: "Votre site est publié et accessible au monde entier en moins de 7 jours."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Comment Ça <span className="text-primary">Fonctionne</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et transparent pour obtenir votre site web professionnel.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-card p-6 rounded-xl border border-border card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                      <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
