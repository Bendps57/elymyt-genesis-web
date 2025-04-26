
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div className="bg-gradient-to-br from-elimyt-blue/20 via-elimyt-purple/20 to-elimyt-pink/20 pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-3xl mb-8 transform hover:scale-105 transition-transform duration-500">
          <img 
            src="https://i.imgur.com/EFrii9y.png" 
            alt="eLimyt Signature" 
            className="w-full h-auto"
          />
        </div>
        
        <p className="text-gray-600 text-lg mb-12 text-center max-w-2xl">
          L'expertise numérique qui propulse votre visibilité en ligne
        </p>

        <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-elimyt-blue/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-elimyt-pink/5 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-elimyt-purple/5 blur-3xl"></div>
      </div>
    </div>
  );
};

export default FooterTop;
