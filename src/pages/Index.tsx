
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import ReassuranceBanner from "../components/home/ReassuranceBanner";
import PainPointsSection from "../components/home/PainPointsSection";
import SolutionsSection from "../components/home/SolutionsSection";
import AdvantagesSection from "../components/home/AdvantagesSection";
import ProcessSection from "../components/home/ProcessSection";
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
        <title>eLimyt - Solutions Web & IT Pour Artisans, Commerçants et TPE</title>
        <meta name="description" content="Site web professionnel à partir de 24,90€ HT/mois sans engagement. Dépannage informatique, maintenance, sécurité réseau. Un seul interlocuteur pour tous vos besoins numériques." />
        <meta name="keywords" content="création site web, site vitrine professionnel, dépannage informatique, maintenance web, TPE, artisan" />
        <link rel="canonical" href="https://elimyt.com" />
      </Helmet>
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <ReassuranceBanner />
        <PainPointsSection />
        <SolutionsSection />
        <AdvantagesSection />
        <ProcessSection />
        <FaqSection />
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
