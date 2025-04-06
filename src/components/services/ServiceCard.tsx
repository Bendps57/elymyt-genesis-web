
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ServiceProps } from "./servicesData";

const ServiceCard = ({ id, icon, title, description, benefits, price, features, popular }: ServiceProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div
      id={id}
      ref={cardRef}
      className={`relative bg-white dark:bg-elimyt-dark/60 rounded-xl shadow-lg overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${popular ? "border-2 border-primary" : ""}`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
          Le plus demandé
        </div>
      )}
      <div className="p-6">
        <div className="mb-4">
          <div className="bg-gradient w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-white">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-foreground/70 mb-4">{description}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-medium mb-2">Ce que vous obtenez :</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-foreground/80">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-muted p-6">
        <div className="text-2xl font-bold mb-4">{price}</div>
        <div className="mb-6">
          <h4 className="font-medium mb-2">Caractéristiques :</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-foreground/80">• {feature}</li>
            ))}
          </ul>
        </div>
        <Button asChild className={`w-full ${popular ? "bg-gradient" : ""}`}>
          <Link to="/contact#contact-form">
            Demander un devis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
