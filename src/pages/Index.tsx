
import SaasLandingPage from "../components/saas-landing/SaasLandingPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  // Cette fonction vérifie s'il y a une ancre dans l'URL et fait défiler jusqu'à cette section
  useEffect(() => {
    const handleAnchorScroll = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    handleAnchorScroll();
    // Ajouter un gestionnaire d'événement pour les changements d'URL avec ancres
    window.addEventListener("hashchange", handleAnchorScroll);
    return () => window.removeEventListener("hashchange", handleAnchorScroll);
  }, []);
  
  return (
    <main>
      <Helmet>
        <title>eLimyt - Création de SaaS Sur Mesure | Transformez Vos Idées en Plateformes Web</title>
        <meta name="description" content="Spécialiste en création de SaaS sur mesure. Nous transformons vos idées et processus métiers en plateformes web puissantes. Solutions techniques, agiles et orientées résultats." />
        <meta name="keywords" content="création SaaS sur mesure, développement plateforme web, automatisation processus métier, solution logicielle personnalisée, développement web entreprise" />
        <link rel="canonical" href="https://elimyt.com" />
      </Helmet>
      <Navbar />
      <div className="pt-16">
        <SaasLandingPage />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
