import { Smartphone, Search, Zap, Palette, Globe, Lock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design Professionnel",
      description: "Un design moderne et élégant qui inspire confiance à vos visiteurs."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "100% Responsive",
      description: "Parfaitement adapté à tous les écrans : mobile, tablette et ordinateur."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Optimisé SEO",
      description: "Votre site est conçu pour être bien référencé sur Google."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Ultra Rapide",
      description: "Temps de chargement optimisé pour une expérience utilisateur fluide."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Sécurisé HTTPS",
      description: "Certificat SSL inclus pour protéger vos visiteurs."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Hébergement Premium",
      description: "Hébergement haute performance offert pendant 1 an."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ce Qui Est <span className="text-primary">Inclus</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un site web complet avec toutes les fonctionnalités essentielles pour réussir en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border card-hover"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
