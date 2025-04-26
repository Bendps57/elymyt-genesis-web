
import { Facebook, Instagram } from "lucide-react";

const FooterBottom = () => {
  return (
    <div className="pt-8 mt-8 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} eLimyt. Tous droits réservés.
        </p>
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-white/50">Conçu avec</span>
            <span className="text-elimyt-pink">❤</span>
            <span className="text-sm text-white/50">par eLimyt</span>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61575732503510" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/elimyt.agency/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
