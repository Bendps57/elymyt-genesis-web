import { Link } from "react-router-dom";
import { Globe, Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Du site vitrine au projet SaaS sur mesure, nous accompagnons votre croissance digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Site vitrine - Principal */}
          <div className="relative bg-card p-8 rounded-xl border-2 border-primary corporate-shadow-lg">
            <div className="absolute -top-3 left-6">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Populaire
              </span>
            </div>
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Globe className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">Site Vitrine</h3>
            <p className="text-muted-foreground mb-4">
              Présentez votre entreprise avec élégance. Solution idéale pour les PME et les indépendants.
            </p>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-bold text-primary">24,90€</span>
              <span className="text-muted-foreground text-sm">HT/mois</span>
            </div>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Design professionnel sur mesure
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Livré en 7 jours
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Hébergement 1 an inclus
              </li>
            </ul>
            <Button asChild className="w-full btn-primary group">
              <Link to="/contact">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* SaaS - Secondaire */}
          <div className="bg-card p-8 rounded-xl border border-border card-hover">
            <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-muted-foreground mb-6">
              <Layers className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">SaaS Sur Mesure</h3>
            <p className="text-muted-foreground mb-4">
              Transformez vos idées métiers en plateformes web puissantes et évolutives.
            </p>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-2xl font-bold text-foreground">Sur devis</span>
            </div>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                Solution 100% personnalisée
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                Accompagnement complet
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                Architecture évolutive
              </li>
            </ul>
            <Button asChild variant="outline" className="w-full group">
              <Link to="/services">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
