
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AdditionalServiceProps } from "./servicesData";

const AdditionalServiceCard = ({ id, icon, title, description }: AdditionalServiceProps) => {
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
      className={`bg-white dark:bg-elimyt-dark/60 rounded-xl p-6 shadow-lg transition-all duration-700 card-hover ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-gradient w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      <Link
        to="/contact#contact-form"
        className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
      >
        En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default AdditionalServiceCard;
