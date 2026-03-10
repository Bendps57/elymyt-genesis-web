
import { Phone, FileSearch, FileText, Rocket } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: <Phone className="h-6 w-6" />,
      title: "Appel Découverte",
      description: "Un échange gratuit de 15 minutes pour comprendre vos besoins et vos objectifs.",
    },
    {
      number: "02",
      icon: <FileSearch className="h-6 w-6" />,
      title: "Étude & Diagnostic",
      description: "Nous analysons votre situation et identifions les solutions les plus adaptées.",
    },
    {
      number: "03",
      icon: <FileText className="h-6 w-6" />,
      title: "Proposition Claire",
      description: "Vous recevez un devis détaillé, sans surprise ni engagement caché.",
    },
    {
      number: "04",
      icon: <Rocket className="h-6 w-6" />,
      title: "Lancement",
      description: "On passe à l'action ! Votre projet est lancé et livré dans les délais convenus.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Comment ça marche</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
            4 étapes simples pour{" "}
            <span className="text-primary">travailler avec eLimyt</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
                )}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 relative">
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                  {step.icon}
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
