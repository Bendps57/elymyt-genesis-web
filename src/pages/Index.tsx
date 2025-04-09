
import LandingPage from "../components/landing/LandingPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

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
      <Navbar />
      <div className="pt-16">
        <LandingPage />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
