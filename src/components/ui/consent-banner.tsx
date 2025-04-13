
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Définir les options de consentement
enum ConsentType {
  ALL = "all",
  NECESSARY = "necessary",
  NONE = "none"
}

interface ConsentBannerProps {
  onConsent: (type: ConsentType) => void;
}

// Fonction pour définir le consentement GA4
const setGoogleConsent = (type: ConsentType) => {
  if (typeof window !== 'undefined' && window.gtag) {
    switch (type) {
      case ConsentType.ALL:
        window.gtag('consent', 'update', {
          'ad_storage': 'granted',
          'analytics_storage': 'granted',
          'functionality_storage': 'granted',
          'personalization_storage': 'granted',
          'security_storage': 'granted'
        });
        break;
      case ConsentType.NECESSARY:
        window.gtag('consent', 'update', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied',
          'functionality_storage': 'granted',
          'personalization_storage': 'denied',
          'security_storage': 'granted'
        });
        break;
      case ConsentType.NONE:
        window.gtag('consent', 'update', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied',
          'functionality_storage': 'denied',
          'personalization_storage': 'denied',
          'security_storage': 'granted'
        });
        break;
    }
  }
};

// Type pour stocker l'état du consentement
interface ConsentStorageData {
  type: ConsentType;
  timestamp: number;
}

// Composant bannière simple
export const ConsentBanner = ({ onConsent }: ConsentBannerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  
  // Vérifier le consentement au chargement
  useEffect(() => {
    const storedConsent = localStorage.getItem('gdpr_consent');
    
    if (!storedConsent) {
      setIsOpen(true);
    } else {
      try {
        const { type, timestamp } = JSON.parse(storedConsent) as ConsentStorageData;
        
        // Vérifier si le consentement a expiré (6 mois = 15768000000 ms)
        const now = new Date().getTime();
        if (now - timestamp > 15768000000) {
          setIsOpen(true);
        } else {
          // Appliquer le consentement stocké
          setGoogleConsent(type as ConsentType);
          onConsent(type as ConsentType);
        }
      } catch (e) {
        // Si erreur de parsing, demander à nouveau
        setIsOpen(true);
      }
    }
  }, [onConsent]);

  const handleConsent = (type: ConsentType) => {
    // Stocker le consentement
    const consentData: ConsentStorageData = {
      type,
      timestamp: new Date().getTime()
    };
    
    localStorage.setItem('gdpr_consent', JSON.stringify(consentData));
    
    // Mettre à jour Google Analytics
    setGoogleConsent(type);
    
    // Fermer la bannière
    setIsOpen(false);
    
    // Informer le composant parent
    onConsent(type);
    
    // Afficher l'alerte de confirmation
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const openSettings = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Bannière de consentement */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Consentement aux cookies</DialogTitle>
            <DialogDescription>
              Nous utilisons des cookies pour améliorer votre expérience sur notre site, personnaliser le contenu et les publicités, 
              et analyser notre trafic. Vous pouvez choisir d'accepter tous les cookies, uniquement les cookies nécessaires au 
              fonctionnement du site, ou refuser tous les cookies non essentiels.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="secondary" 
              onClick={() => handleConsent(ConsentType.NECESSARY)}
              className="w-full sm:w-auto"
            >
              Cookies essentiels uniquement
            </Button>
            <Button 
              onClick={() => handleConsent(ConsentType.ALL)}
              className="w-full sm:w-auto"
            >
              Accepter tous les cookies
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Alerte de confirmation */}
      {showAlert && (
        <div className="fixed bottom-4 right-4 z-50 max-w-md">
          <Alert variant="default" className="bg-background border-primary">
            <AlertDescription className="flex justify-between items-center">
              <span>Vos préférences ont été sauvegardées.</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-auto p-1" 
                onClick={() => setShowAlert(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Bouton fixe pour rouvrir les paramètres */}
      <button
        onClick={openSettings}
        className="fixed bottom-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all"
        aria-label="Paramètres de confidentialité"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
          <path d="M8.5 8.5v.01" />
          <path d="M16 15.5v.01" />
          <path d="M12 12v.01" />
        </svg>
      </button>
    </>
  );
};

declare global {
  interface Window {
    gtag: (command: string, action: string, params: Record<string, string>) => void;
  }
}

export default ConsentBanner;
