
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search, Monitor, Wrench } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-artisan.png";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => { setLoaded(true); }, []);

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/contact") {
      sessionStorage.setItem('scrollToContactForm', 'true');
      navigate('/contact');
    } else {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badges = [
    { icon: <Globe className="h-4 w-4" />, label: "Site web" },
    { icon: <Search className="h-4 w-4" />, label: "Référencement Google" },
    { icon: <Monitor className="h-4 w-4" />, label: "Maintenance" },
    { icon: <Wrench className="h-4 w-4" />, label: "Dépannage informatique" },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 text-primary opacity-20">✦</div>
      <div className="absolute top-40 right-20 w-3 h-3 text-primary opacity-15">✦</div>
      <div className="absolute bottom-20 left-1/4 w-5 h-5 text-primary opacity-10">◆</div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Pour les commerçants, artisans et indépendants
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight text-navy mb-4">
              Tout votre web & IT gérés de{" "}
              <span className="text-primary">A à Z</span>
            </h1>
            <p className="text-lg md:text-xl font-heading font-semibold text-foreground/80 mb-4">
              pour gagner du temps, et des clients !
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-lg">
              Des solutions numériques sur-mesure pour développer votre activité locale. Site web, maintenance, dépannage — un seul interlocuteur.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button className="btn-primary text-base py-6 px-8 group" onClick={handleContact}>
                Démarrer mon projet
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="btn-outline text-base py-6 px-8" onClick={handleContact}>
                Recevoir nos tarifs
              </Button>
            </div>
          </div>

          {/* Right: Image + floating badges */}
          <div className={`relative transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Artisan travaillant sur un ordinateur" 
                className="w-full max-w-md mx-auto lg:max-w-lg rounded-3xl"
              />
              {/* Floating badges */}
              <div className="absolute top-4 right-0 flex flex-col gap-2">
                {badges.map((badge, i) => (
                  <div 
                    key={i} 
                    className="badge-rounded bg-background shadow-md border border-border text-foreground text-xs md:text-sm"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <span className="text-primary">{badge.icon}</span>
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
