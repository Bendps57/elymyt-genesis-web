import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import GuaranteeSection from "../components/home/GuaranteeSection";
import FeaturesSection from "../components/home/FeaturesSection";
import ProcessSection from "../components/home/ProcessSection";
import ServicesPreview from "../components/home/ServicesPreview";
import FaqSection from "../components/home/FaqSection";
import CtaSection from "../components/home/CtaSection";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Index = () => {
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
    window.addEventListener("hashchange", handleAnchorScroll);
    return () => window.removeEventListener("hashchange", handleAnchorScroll);
  }, []);
  
  return (
    <main>
      <Helmet>
        <title>eLimyt - Création de Sites Web Professionnels | Livré en 7 Jours</title>
        <meta name="description" content="Votre site web professionnel livré en 7 jours pour seulement 249,90€. Garantie satisfait ou remboursé. Design moderne, SEO optimisé, hébergement inclus." />
        <meta name="keywords" content="création site web, site vitrine professionnel, site internet pas cher, agence web" />
        <link rel="canonical" href="https://elimyt.com" />
      </Helmet>
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <GuaranteeSection />
        <FeaturesSection />
        <ProcessSection />
        <ServicesPreview />
        <FaqSection />
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
