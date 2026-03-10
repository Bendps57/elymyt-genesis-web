
import { PiggyBank, UserCheck, Layers } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <PiggyBank className="h-10 w-10" />,
      title: "Un budget maîtrisé",
      points: [
        "Des solutions adaptées et transparentes",
        "Un service pro sans se ruiner",
        "Des offres flexibles selon vos besoins",
      ],
    },
    {
      icon: <UserCheck className="h-10 w-10" />,
      title: "Un expert dédié à votre réussite",
      points: [
        "Un interlocuteur unique de A à Z",
        "Des conseils adaptés à votre activité",
        "Un suivi régulier et personnalisé",
      ],
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Un seul partenaire pour tout gérer",
      points: [
        "Site web, maintenance, dépannage… tout en un !",
        "Moins de prestataires, plus de cohérence",
        "Un suivi clair et sans prise de tête",
      ],
    },
  ];

  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Pourquoi eLimyt ?</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
            Le numérique enfin{" "}
            <span className="text-primary">accessible</span> aux petites entreprises
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {advantages.map((adv, i) => (
            <div key={i} className="card-soft p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-cyan-light text-primary mb-6">
                {adv.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-navy mb-4">{adv.title}</h3>
              <ul className="space-y-2 text-left">
                {adv.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
