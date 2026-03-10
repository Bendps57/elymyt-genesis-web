
import { Users, Star, Clock, Shield } from "lucide-react";

const ReassuranceBanner = () => {
  const stats = [
    { icon: <Users className="h-5 w-5" />, value: "+50", label: "clients accompagnés" },
    { icon: <Star className="h-5 w-5" />, value: "5/5", label: "note de satisfaction" },
    { icon: <Clock className="h-5 w-5" />, value: "7 jours", label: "délai de livraison" },
    { icon: <Shield className="h-5 w-5" />, value: "100%", label: "garantie satisfait" },
  ];

  return (
    <section className="py-10 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 justify-center">
              <div className="text-primary">{stat.icon}</div>
              <div>
                <p className="font-heading font-bold text-lg text-navy">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReassuranceBanner;
