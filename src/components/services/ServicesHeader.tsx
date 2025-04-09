
import { useEffect, useRef, useState } from "react";

const ServicesHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  
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
    
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={headerRef}
      className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Nos <span className="text-gradient">Services</span>
      </h1>
      <p className="text-lg text-foreground/70">
        Des solutions web sur mesure pour répondre à tous vos besoins digitaux. 
        Nous vous accompagnons de la conception à la mise en ligne de votre projet.
      </p>
    </div>
  );
};

export default ServicesHeader;
