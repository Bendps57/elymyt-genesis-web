
import { AlertTriangle, Clock, Users } from "lucide-react";

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: <AlertTriangle className="h-7 w-7" />,
      title: "Les agences classiques, pas pour vous !",
      description: "Entre les prix élevés et le manque de réactivité, vous n'avez pas le temps ni le budget pour courir après des prestataires qui ne comprennent pas votre marché local.",
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: "La gestion web & IT, c'est un métier",
      description: "Vous savez qu'il faut être visible en ligne et que votre informatique doit fonctionner, mais comment gérer tout cela quand votre cœur de métier vous prend déjà tout votre temps ?",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Plusieurs prestataires, c'est ingérable !",
      description: "Un prestataire pour le site, un autre pour la maintenance, un autre pour le dépannage ? Trop compliqué. Vous perdez du temps et de l'argent à tout coordonner.",
    },
  ];

  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Gérer son web & IT,{" "}
            <span className="text-primary">un vrai casse-tête</span>{" "}
            quand on est une TPE.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, i) => (
            <div key={i} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-danger/10 text-danger mb-5">
                {point.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-navy mb-3">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
