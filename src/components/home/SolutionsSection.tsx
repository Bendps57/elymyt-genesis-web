
import { Link } from "react-router-dom";
import { Globe, Wrench, Shield, Cloud, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Site Web & Maintenance",
      price: "24,90€",
      priceUnit: "HT/mois",
      badge: "OFFRE STAR",
      noBadge: "SANS ENGAGEMENT",
      description: "Votre site web professionnel clé en main avec maintenance et mises à jour incluses.",
      features: [
        "Design professionnel sur mesure",
        "100% responsive mobile",
        "Hébergement & nom de domaine inclus",
        "Maintenance & mises à jour",
        "Optimisé SEO",
        "Support prioritaire",
      ],
      popular: true,
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Dépannage Informatique",
      price: "Sur devis",
      priceUnit: "",
      description: "Intervention rapide pour résoudre vos problèmes informatiques, sur site ou à distance.",
      features: [
        "Diagnostic rapide",
        "Intervention sur site ou à distance",
        "Réparation PC & périphériques",
        "Installation & configuration",
        "Récupération de données",
      ],
      popular: false,
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sécurité Réseau",
      price: "Sur devis",
      priceUnit: "",
      description: "Protégez vos données et votre réseau avec des solutions de sécurité adaptées aux TPE.",
      features: [
        "Audit de sécurité",
        "Configuration pare-feu",
        "Protection antivirus",
        "Sauvegarde automatisée",
        "Monitoring 24/7",
      ],
      popular: false,
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Sauvegarde Cloud",
      price: "Sur devis",
      priceUnit: "",
      description: "Sauvegardez vos données en toute sécurité dans le cloud. Zéro risque de perte.",
      features: [
        "Sauvegarde automatique",
        "Stockage sécurisé",
        "Restauration rapide",
        "Chiffrement des données",
        "Accès multi-appareils",
      ],
      popular: false,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Des solutions{" "}
            <span className="text-primary">clés en main</span>, adaptées à vos besoins
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un interlocuteur unique pour tous vos besoins numériques et informatiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {solutions.map((sol, i) => (
            <div 
              key={i} 
              className={`relative card-soft p-6 flex flex-col ${
                sol.popular ? "border-2 border-primary ring-1 ring-primary/20" : ""
              }`}
            >
              {/* Badges */}
              {sol.badge && (
                <div className="absolute -top-3 left-4">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    <Star className="h-3 w-3" />
                    {sol.badge}
                  </span>
                </div>
              )}
              {sol.noBadge && (
                <div className="absolute -top-3 right-4">
                  <span className="inline-flex items-center bg-success text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {sol.noBadge}
                  </span>
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                sol.popular ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
              }`}>
                {sol.icon}
              </div>

              <h3 className="font-heading font-bold text-lg text-navy mb-1">{sol.title}</h3>
              
              <div className="mb-3">
                {sol.priceUnit ? (
                  <p className="font-heading">
                    <span className="text-2xl font-extrabold text-primary">{sol.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">{sol.priceUnit}</span>
                  </p>
                ) : (
                  <p className="text-lg font-bold text-navy">{sol.price}</p>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-4 flex-grow">{sol.description}</p>

              <ul className="space-y-2 mb-6">
                {sol.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                className={`w-full rounded-full ${sol.popular ? "btn-primary" : ""}`} 
                variant={sol.popular ? "default" : "outline"}
              >
                <Link to="/contact#contact-form">
                  {sol.popular ? "Choisir cette offre" : "Demander un devis"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
