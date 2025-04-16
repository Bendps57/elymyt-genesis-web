
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import ChatWidget from "./components/chat/ChatWidget";
import ConsentBanner from "./components/ui/consent-banner";
import MaintenancePage from "./components/maintenance/MaintenancePage";

// Flag pour contrôler l'affichage de la page de maintenance
// Mettre à false pour revenir à la landing page normale
const MAINTENANCE_MODE = true;

const queryClient = new QueryClient();

// Composant pour afficher le ChatWidget sur toutes les pages sauf /contact
const ChatWidgetWrapper = () => {
  const location = useLocation();
  // Ne pas afficher le widget sur la page Contact car il y est déjà
  const showChat = !location.pathname.includes('/contact');
  
  return showChat ? <ChatWidget /> : null;
};

// Composant pour inclure les Google Analytics sur toutes les pages avec mode Consentement
const GoogleAnalytics = () => {
  return (
    <Helmet>
      {/* Google tag (gtag.js) avec configuration du mode Consentement */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-2JEBHDGKR6"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Configuration par défaut : attendre le consentement
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted'
          });
          
          // Configuration de GA4 avec paramètres de région
          gtag('config', 'G-2JEBHDGKR6', {
            'anonymize_ip': true,
            'region': 'europe'
          });
        `}
      </script>
    </Helmet>
  );
};

// Composant d'application principale modifié pour gérer le mode maintenance
const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GoogleAnalytics />
          {MAINTENANCE_MODE ? (
            <Routes>
              <Route path="*" element={<MaintenancePage />} />
            </Routes>
          ) : (
            <>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/about" element={<About />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ChatWidgetWrapper />
              <ConsentBanner onConsent={() => {}} />
            </>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
