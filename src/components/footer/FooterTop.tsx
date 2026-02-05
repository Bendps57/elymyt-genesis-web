
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div className="bg-muted/50 pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-3xl mb-8 transform hover:scale-[1.02] transition-transform duration-500">
          <img 
            src="https://i.imgur.com/EFrii9y.png" 
            alt="eLimyt Signature" 
            className="w-full h-auto"
          />
        </div>
        
        <p className="text-muted-foreground text-lg mb-12 text-center max-w-2xl">
          L'expertise numérique qui propulse votre visibilité en ligne
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
