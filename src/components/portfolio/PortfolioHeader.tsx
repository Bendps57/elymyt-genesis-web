
import { useRef, useEffect, useState } from "react";

interface PortfolioHeaderProps {
  isVisible: boolean;
}

const PortfolioHeader = ({ isVisible }: PortfolioHeaderProps) => {
  return (
    <div 
      className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Notre <span className="text-gradient">Portfolio</span> de Sites Web Professionnels
      </h1>
      <p className="text-lg text-foreground/70">
        Découvrez nos réalisations de sites internet professionnels pour PME, artisans et commerçants. 
        Notre agence web à Hayange a aidé ces entreprises à améliorer leur visibilité en ligne.
      </p>
    </div>
  );
};

export default PortfolioHeader;
